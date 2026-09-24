import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth, useUser } from "@clerk/expo";

import LessonContent from "../../../components/lesson/LessonContent";
import VocabularyIntroScreen from "../../../components/lesson/VocabularyIntroScreen";
import ChapterCompleteScreen from "../../../components/lesson/ChapterCompleteScreen";
import LevelCompleteScreen from "../../../components/lesson/LevelCompleteScreen";
import { useTheme } from "../../../context/ThemeContext";

import {
  incrementLessonCompletion,
  markQuizComplete,
  markReviewComplete,
  markVocabularyComplete,
  completeLessonActivity,
  checkAndAwardChapterXP,
  areAllChapterLessonsComplete,
} from "../../../lib/lessonProgress";

import { getLanguageData } from "../../../utils/lessonData";
import { createSupabaseClient } from "../../../utils/supabase";

export default function PracticeScreen({
  sectionId,
  sectionData: sectionDataProp,
  language = "as-tw",
  level = "beginner",
  mode,
  isReview = false,
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const { getToken } = useAuth();
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [vocabulary, setVocabulary] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [lessonData, setLessonData] = useState(null);
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [showChapterComplete, setShowChapterComplete] =
    useState(false);
  const [showLevelComplete, setShowLevelComplete] =
    useState(false);
  const [chapterXP, setChapterXP] = useState(0);

  const supabase = useMemo(() => {
    if (typeof getToken !== "function") {
      return null;
    }

    return createSupabaseClient(getToken);
  }, [getToken]);

  const completionType =
    mode === "quiz" ? "quiz" : "lesson";

  const levelTitle = useMemo(() => {
    if (!level) {
      return "Level completed";
    }

    return String(level)
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (character) =>
        character.toUpperCase()
      );
  }, [level]);

  const chapter = useMemo(() => {
    if (!sectionId) {
      return null;
    }

    try {
      const languageData = getLanguageData(
        language,
        level
      );

      for (const [chapterId, currentChapter] of Object.entries(
        languageData || {}
      )) {
        if (
          currentChapter?.sections?.some(
            (section) => section?.id === sectionId
          )
        ) {
          return {
            ...currentChapter,
            id: currentChapter?.id || chapterId,
          };
        }
      }
    } catch {
      return null;
    }

    return null;
  }, [sectionId, language, level]);

  useEffect(() => {
    let mounted = true;

    const loadLesson = () => {
      setLoading(true);

      try {
        let foundSection = sectionDataProp || null;

        if (!foundSection && sectionId) {
          const languageData = getLanguageData(
            language,
            level
          );

          for (const currentChapter of Object.values(
            languageData || {}
          )) {
            const section = currentChapter?.sections?.find(
              (item) => item?.id === sectionId
            );

            if (section) {
              foundSection = section;
              break;
            }

            if (
              currentChapter?.review?.id === sectionId
            ) {
              foundSection = currentChapter.review;
              break;
            }
          }
        }

        if (!mounted) {
          return;
        }

        if (!foundSection) {
          setLessonData(null);
          setVocabulary([]);
          setQuestions([]);
          setShowVocabulary(false);
          return;
        }

        const safeVocabulary = Array.isArray(
          foundSection.vocabulary
        )
          ? foundSection.vocabulary
          : Array.isArray(foundSection.words)
          ? foundSection.words
          : [];

        const safeQuestions = Array.isArray(
          foundSection.questions
        )
          ? foundSection.questions
          : [];

        setLessonData(foundSection);
        setVocabulary(safeVocabulary);
        setQuestions(safeQuestions);
        setShowVocabulary(
          mode !== "quiz" &&
            mode !== "review" &&
            !isReview &&
            safeVocabulary.length > 0
        );
      } catch {
        if (!mounted) {
          return;
        }

        setLessonData(null);
        setVocabulary([]);
        setQuestions([]);
        setShowVocabulary(false);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadLesson();

    return () => {
      mounted = false;
    };
  }, [
    sectionDataProp,
    sectionId,
    language,
    level,
    mode,
    isReview,
  ]);

  const recordActivity = async () => {
    if (!supabase || !user?.id || !sectionId) {
      return;
    }

    try {
      await completeLessonActivity(
        supabase,
        user.id,
        sectionId,
        language,
        level
      );
    } catch {}
  };

  const handleVocabularyOnlyComplete = async () => {
    if (!sectionId) {
      router.back();
      return;
    }

    try {
      if (mode === "review" || isReview) {
        await markReviewComplete(
          sectionId,
          language,
          level,
          supabase,
          user?.id
        );
      } else {
        await incrementLessonCompletion(
          sectionId,
          language,
          level,
          supabase,
          user?.id
        );
      }

      await recordActivity();
    } catch {}

    router.back();
  };

  const handleStartLesson = async () => {
    if (
      sectionId &&
      mode !== "quiz" &&
      mode !== "review" &&
      !isReview &&
      vocabulary.length > 0
    ) {
      try {
        await markVocabularyComplete(
          sectionId,
          language,
          level,
          supabase,
          user?.id
        );
      } catch {}
    }

    if (questions.length === 0) {
      await handleVocabularyOnlyComplete();
      return;
    }

    setShowVocabulary(false);
  };

  const handleSkipVocabulary = () => {
    if (questions.length === 0) {
      router.back();
      return;
    }

    setShowVocabulary(false);
  };

  const handleComplete = async () => {
    if (!sectionId) {
      router.back();
      return;
    }

    try {
      /*
       * REVIEW
       */
      if (mode === "review" || isReview) {
        await markReviewComplete(
          sectionId,
          language,
          level,
          supabase,
          user?.id
        );

        await recordActivity();

        router.back();
        return;
      }

      /*
       * QUIZ COMPLETION
       */
      if (mode === "quiz" && questions.length > 0) {
        await markQuizComplete(
          sectionId,
          language,
          level,
          supabase,
          user?.id
        );

        await recordActivity();

        /*
         * The quiz has now been completed.
         *
         * Check whether this was the final lesson
         * in the chapter.
         */
        if (chapter && supabase && user?.id) {
          const result = await checkAndAwardChapterXP(
            chapter,
            supabase,
            user.id,
            language,
            level
          );

          /*
           * Chapter is complete.
           *
           * checkAndAwardChapterXP awards the XP only once.
           * The ChapterCompleteScreen is still shown when
           * the chapter is complete.
           */
          if (result?.completed) {
            setChapterXP(Number(result?.xp) || 0);
            setShowChapterComplete(true);
            return;
          }
        }

        /*
         * This was not the final lesson in the chapter.
         */
        router.back();
        return;
      }

      /*
       * NORMAL LESSON COMPLETION
       */
      await incrementLessonCompletion(
        sectionId,
        language,
        level,
        supabase,
        user?.id
      );

      await recordActivity();
    } catch {}

    router.back();
  };

  const handleChapterContinue = async () => {
    try {
      const languageData = getLanguageData(
        language,
        level
      );

      const chapters = Object.entries(
        languageData || {}
      ).map(
        ([chapterId, currentChapter]) => ({
          ...currentChapter,
          id:
            currentChapter?.id ||
            chapterId,
        })
      );

      if (!chapters.length) {
        router.back();
        return;
      }

      /*
       * Check every chapter in the current level.
       *
       * If every chapter is complete, show the
       * LevelCompleteScreen.
       */
      const chapterResults = await Promise.all(
        chapters.map((currentChapter) =>
          areAllChapterLessonsComplete(
            currentChapter,
            language,
            level,
            supabase,
            user?.id
          )
        )
      );

      const levelCompleted =
        chapterResults.length > 0 &&
        chapterResults.every(Boolean);

      setShowChapterComplete(false);
      setChapterXP(0);

      if (levelCompleted) {
        setShowLevelComplete(true);
        return;
      }
    } catch {}

    /*
     * Chapter is complete but the entire level is not.
     * Return to the chapter/lesson screen.
     */
    router.back();
  };

  const handleLevelContinue = () => {
    setShowLevelComplete(false);
    router.back();
  };

  /*
   * LEVEL COMPLETE
   */
  if (showLevelComplete) {
    return (
      <LevelCompleteScreen
        levelTitle={levelTitle}
        onContinue={handleLevelContinue}
      />
    );
  }

  /*
   * CHAPTER COMPLETE
   */
  if (showChapterComplete) {
    return (
      <ChapterCompleteScreen
        chapterTitle={
          chapter?.title || "Chapter completed"
        }
        xp={chapterXP}
        onContinue={handleChapterContinue}
      />
    );
  }

  /*
   * LOADING
   */
  if (loading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: theme.background },
        ]}
      >
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            color={theme.primary}
          />

          <Text
            style={[
              styles.loadingText,
              { color: theme.secondaryText },
            ]}
          >
            Loading lesson...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  /*
   * LESSON NOT FOUND
   */
  if (!lessonData) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: theme.background },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={router.back}
            activeOpacity={0.7}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={theme.text}
            />
          </TouchableOpacity>

          <Text
            style={[
              styles.headerTitle,
              { color: theme.text },
            ]}
          >
            Practice
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.center}>
          <View
            style={[
              styles.errorIcon,
              {
                backgroundColor:
                  `${theme.primary}15`,
              },
            ]}
          >
            <Ionicons
              name="alert-circle-outline"
              size={42}
              color={theme.primary}
            />
          </View>

          <Text
            style={[
              styles.noContentTitle,
              { color: theme.text },
            ]}
          >
            Lesson not found
          </Text>

          <Text
            style={[
              styles.noContentText,
              { color: theme.secondaryText },
            ]}
          >
            We couldn't load this lesson.
          </Text>

          <TouchableOpacity
            style={[
              styles.backButtonLarge,
              { backgroundColor: theme.primary },
            ]}
            onPress={router.back}
            activeOpacity={0.8}
          >
            <Text style={styles.backButtonText}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  /*
   * VOCABULARY INTRO
   */
  if (showVocabulary && vocabulary.length > 0) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: theme.background },
        ]}
      >
        <VocabularyIntroScreen
          vocabulary={vocabulary}
          onStartLesson={handleStartLesson}
          onSkip={handleSkipVocabulary}
        />
      </SafeAreaView>
    );
  }

  /*
   * LESSON / QUIZ
   */
  if (questions.length > 0) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: theme.background },
        ]}
      >
        <LessonContent
          questions={questions}
          lessonId={sectionId}
          vocabulary={vocabulary}
          onComplete={handleComplete}
          isReview={isReview}
          type={completionType}
        />
      </SafeAreaView>
    );
  }

  /*
   * LESSON WITH NO QUESTIONS
   */
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.center}>
        <View
          style={[
            styles.completeIcon,
            {
              backgroundColor:
                `${theme.primary}15`,
            },
          ]}
        >
          <Ionicons
            name="checkmark-circle"
            size={56}
            color={theme.primary}
          />
        </View>

        <Text
          style={[
            styles.completedTitle,
            { color: theme.text },
          ]}
        >
          Lesson Complete
        </Text>

        <Text
          style={[
            styles.completedSubtitle,
            { color: theme.secondaryText },
          ]}
        >
          You have completed this lesson.
        </Text>

        <TouchableOpacity
          style={[
            styles.backButtonLarge,
            { backgroundColor: theme.primary },
          ]}
          onPress={router.back}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  loadingText: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: "600",
  },

  header: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  backButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
  },

  headerSpacer: {
    width: 42,
  },

  errorIcon: {
    width: 76,
    height: 76,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  noContentTitle: {
    marginTop: 18,
    fontSize: 22,
    fontWeight: "800",
  },

  noContentText: {
    marginTop: 6,
    fontSize: 15,
    textAlign: "center",
  },

  backButtonLarge: {
    minHeight: 48,
    paddingHorizontal: 28,
    borderRadius: 14,
    marginTop: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  backButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  completeIcon: {
    width: 84,
    height: 84,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  completedTitle: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
  },

  completedSubtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
});