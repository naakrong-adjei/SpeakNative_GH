import { Ionicons } from "@expo/vector-icons";
import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useEffect, useState } from "react";

import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import LessonContent from "../../../components/lesson/LessonContent";
import VocabularyIntroScreen from "../../../components/lesson/VocabularyIntroScreen";
import { useTheme } from "../../../context/ThemeContext";

import {
  incrementLessonCompletion,
  markQuizComplete,
  markReviewComplete,
  markVocabularyComplete,
} from "../../../lib/lessonProgress";

import { getLanguageData } from "../../../utils/lessonData";

export default function PracticeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { theme } = useTheme();

  const {
    sectionId,
    sectionData,
    language = "as-tw",
    level = "beginner",
    mode,
    isReview = false,
  } = route.params || {};

  const [loading, setLoading] = useState(true);
  const [vocabulary, setVocabulary] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [lessonData, setLessonData] = useState(null);
  const [showVocabulary, setShowVocabulary] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadLesson = () => {
      try {
        setLoading(true);

        let foundSection = null;

        if (sectionData) {
          foundSection = sectionData;
        }

        if (!foundSection && sectionId) {
          const languageData = getLanguageData(
            language,
            level
          );

          for (const chapter of Object.values(
            languageData || {}
          )) {
            if (
              Array.isArray(chapter?.sections)
            ) {
              const section =
                chapter.sections.find(
                  (item) =>
                    item?.id === sectionId
                );

              if (section) {
                foundSection = section;
                break;
              }
            }

            if (
              chapter?.review &&
              chapter.review.id === sectionId
            ) {
              foundSection = chapter.review;
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


        const shouldShowVocabulary =
          mode !== "quiz" &&
          mode !== "review" &&
          !isReview &&
          safeVocabulary.length > 0;

        setShowVocabulary(
          shouldShowVocabulary
        );
      } catch (error) {
        console.error(
          "Error loading practice lesson:",
          error
        );

        if (mounted) {
          setLessonData(null);
          setVocabulary([]);
          setQuestions([]);
          setShowVocabulary(false);
        }
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
    sectionData,
    sectionId,
    language,
    level,
    mode,
    isReview,
  ]);

  const handleStartLesson = async () => {
    try {

      if (
        sectionId &&
        mode !== "quiz" &&
        mode !== "review" &&
        !isReview &&
        vocabulary.length > 0
      ) {
        await markVocabularyComplete(
          sectionId,
          language,
          level
        );
      }
    } catch (error) {
      console.error(
        "Error saving vocabulary progress:",
        error
      );
    }


    if (questions.length === 0) {
      await handleVocabularyOnlyComplete();
      return;
    }

    setShowVocabulary(false);
  };

  const handleVocabularyOnlyComplete =
    async () => {
      try {
        if (!sectionId) {
          navigation.goBack();
          return;
        }

        if (mode === "review" || isReview) {
          await markReviewComplete(
            sectionId,
            language,
            level
          );
        }
      } catch (error) {
        console.error(
          "Error completing activity:",
          error
        );
      } finally {
        navigation.goBack();
      }
    };

  const handleSkipVocabulary = () => {
    if (questions.length === 0) {
      navigation.goBack();
      return;
    }

    setShowVocabulary(false);
  };

  const handleComplete = async () => {
    if (!sectionId) {
      navigation.goBack();
      return;
    }

    try {

      if (mode === "review" || isReview) {
        await markReviewComplete(
          sectionId,
          language,
          level
        );

        navigation.goBack();
        return;
      }


      if (
        mode === "quiz" &&
        questions.length > 0
      ) {
        await markQuizComplete(
          sectionId,
          language,
          level
        );

        navigation.goBack();
        return;
      }


      await incrementLessonCompletion(
        sectionId,
        language,
        level
      );

      navigation.goBack();
    } catch (error) {
      console.error(
        "Error completing lesson:",
        error
      );

      navigation.goBack();
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  if (loading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor:
              theme.background,
          },
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
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            Loading lesson...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!lessonData) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor:
              theme.background,
          },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleBack}
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
              {
                color: theme.text,
              },
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
              {
                color: theme.text,
              },
            ]}
          >
            Lesson not found
          </Text>

          <Text
            style={[
              styles.noContentText,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            We couldn't load this lesson.
          </Text>

          <TouchableOpacity
            style={[
              styles.backButtonLarge,
              {
                backgroundColor:
                  theme.primary,
              },
            ]}
            onPress={handleBack}
            activeOpacity={0.8}
          >
            <Text
              style={styles.backButtonText}
            >
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }


  if (
    showVocabulary &&
    vocabulary.length > 0
  ) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor:
              theme.background,
          },
        ]}
      >
        <VocabularyIntroScreen
          vocabulary={vocabulary}
          onStartLesson={
            handleStartLesson
          }
          onSkip={
            handleSkipVocabulary
          }
        />
      </SafeAreaView>
    );
  }


  if (questions.length > 0) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor:
              theme.background,
          },
        ]}
      >
        <LessonContent
          questions={questions}
          lessonId={sectionId}
          vocabulary={vocabulary}
          onComplete={handleComplete}
          isReview={isReview}
        />
      </SafeAreaView>
    );
  }

  /*
   * Vocabulary-only lesson.
   */
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
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
            {
              color: theme.text,
            },
          ]}
        >
          Lesson Complete
        </Text>

        <Text
          style={[
            styles.completedSubtitle,
            {
              color:
                theme.secondaryText,
            },
          ]}
        >
          You have completed this
          lesson.
        </Text>

        <TouchableOpacity
          style={[
            styles.backButtonLarge,
            {
              backgroundColor:
                theme.primary,
            },
          ]}
          onPress={handleBack}
          activeOpacity={0.8}
        >
          <Text
            style={styles.backButtonText}
          >
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