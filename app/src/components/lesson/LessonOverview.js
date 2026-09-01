import { Ionicons } from "@expo/vector-icons";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  useAuth,
  useUser,
} from "@clerk/expo";
import { useTheme } from "../../context/ThemeContext";
import {
  createSupabaseClient,
} from "../../utils/supabase";
import {
  getLanguageData,
} from "../../utils/lessonData";
import {
  getLessonProgress,
  getQuizCompletion,
  getReviewCompletion,
  getVocabularyProgress,
  checkAndAwardChapterXP,
} from "../../lib/lessonProgress";

const MAX_STARS = 3;

export default function LessonOverview() {
  const navigation = useNavigation();
  const route = useRoute();
  const { theme, isDark } = useTheme();
  const { user } = useUser();
  const { getToken } = useAuth();
  const {
    lessonData,
    lessonId,
    lessonTitle = "Lesson",
    isReview: isReviewParam = false,
    language = "as-tw",
    level = "beginner",
    chapterId,
  } = route.params || {};

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [vocabulary, setVocabulary] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isReview, setIsReview] = useState(false);
  const [vocabularyCompleted, setVocabularyCompleted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [reviewCompleted, setReviewCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [chapterXPAwarded, setChapterXPAwarded] = useState(false);
  const [chapterXPAmount, setChapterXPAmount] = useState(0);
  const [awardingChapterXP, setAwardingChapterXP] = useState(false);

  const normalizeProgress = useCallback((value) => {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue)) {
      return 0;
    }
    return Math.max(0, Math.min(MAX_STARS, numericValue));
  }, []);

  const isVocabularyProgressComplete = useCallback((value) => {
    if (typeof value === "boolean") {
      return value;
    }
    const numericValue = Number(value);
    if (Number.isFinite(numericValue)) {
      return numericValue > 0;
    }
    return Boolean(value);
  }, []);

  const resolveLesson = useCallback(() => {
    if (!lessonData) {
      return null;
    }
    if (
      lessonData.vocabulary ||
      lessonData.questions ||
      lessonData.words
    ) {
      return lessonData;
    }
    if (
      Array.isArray(lessonData.sections) &&
      lessonData.sections.length > 0
    ) {
      return (
        lessonData.sections.find(
          (section) => section?.id === lessonId
        ) ||
        lessonData.sections[0]
      );
    }
    return lessonData;
  }, [lessonData, lessonId]);

  const resolveChapter = useCallback(() => {
    if (
      lessonData &&
      Array.isArray(lessonData.sections)
    ) {
      return {
        ...lessonData,
        id: lessonData.id || chapterId,
      };
    }
    if (!chapterId) {
      return null;
    }
    try {
      const languageData = getLanguageData(language, level);
      const chapter = languageData?.[chapterId];
      if (!chapter) {
        return null;
      }
      return {
        ...chapter,
        id: chapter.id || chapterId,
      };
    } catch (error) {
      console.error("Error resolving chapter:", error);
      return null;
    }
  }, [lessonData, chapterId, language, level]);

  const checkProgress = useCallback(
    async (id, vocab = []) => {
      if (!id) {
        setProgress(0);
        setVocabularyCompleted(vocab.length === 0);
        setQuizCompleted(false);
        setReviewCompleted(false);
        return;
      }
      try {
        const [
          lessonProgress,
          vocabularyProgress,
          quizDone,
          reviewDone,
        ] = await Promise.all([
          getLessonProgress(id, language, level),
          getVocabularyProgress(id, language, level),
          getQuizCompletion(id, language, level),
          getReviewCompletion(id, language, level),
        ]);
        const lessonStars = normalizeProgress(lessonProgress);
        const vocabularyDone = vocab.length === 0
          ? true
          : isVocabularyProgressComplete(vocabularyProgress);
        const finalProgress = quizDone ? MAX_STARS : lessonStars;
        setProgress(finalProgress);
        setVocabularyCompleted(vocabularyDone);
        setQuizCompleted(quizDone);
        setReviewCompleted(reviewDone);
      } catch (error) {
        console.error("Error loading lesson progress:", error);
        setProgress(0);
        setVocabularyCompleted(vocab.length === 0);
        setQuizCompleted(false);
        setReviewCompleted(false);
      }
    },
    [language, level, normalizeProgress, isVocabularyProgressComplete]
  );

  const awardChapterXP = useCallback(async () => {
    if (!user?.id) {
      return;
    }
    if (isReview) {
      return;
    }
    const chapter = resolveChapter();
    if (
      !chapter?.id ||
      !Array.isArray(chapter.sections) ||
      chapter.sections.length === 0
    ) {
      return;
    }
    if (awardingChapterXP) {
      return;
    }
    try {
      setAwardingChapterXP(true);
      const token = await getToken();
      if (!token) {
        console.warn("Unable to award chapter XP: no auth token.");
        return;
      }
      const supabase = createSupabaseClient(token);
      const result = await checkAndAwardChapterXP(
        chapter,
        supabase,
        user.id,
        language,
        level
      );
      console.log("Chapter XP result:", result);
      if (
        result?.xpAwarded &&
        Number(result.xp) > 0
      ) {
        setChapterXPAwarded(true);
        setChapterXPAmount(Number(result.xp));
        return;
      }
      if (
        result?.completed &&
        !result?.xpAwarded
      ) {
        return;
      }
    } catch (error) {
      console.error("Error awarding chapter XP:", error);
    } finally {
      setAwardingChapterXP(false);
    }
  }, [
    user?.id,
    isReview,
    resolveChapter,
    awardingChapterXP,
    getToken,
    language,
    level,
  ]);

  useEffect(() => {
    let mounted = true;
    const loadLesson = async () => {
      setLoading(true);
      try {
        const actualLesson = resolveLesson();
        if (!mounted) {
          return;
        }
        if (!actualLesson) {
          setLesson(null);
          setVocabulary([]);
          setQuestions([]);
          setIsReview(false);
          setProgress(0);
          setVocabularyCompleted(false);
          setQuizCompleted(false);
          setReviewCompleted(false);
          return;
        }
        const lessonVocabulary = Array.isArray(actualLesson.vocabulary)
          ? actualLesson.vocabulary
          : Array.isArray(actualLesson.words)
          ? actualLesson.words
          : [];
        const lessonQuestions = Array.isArray(actualLesson.questions)
          ? actualLesson.questions
          : [];
        const resolvedLessonId = actualLesson.id || lessonId;
        const normalizedLesson = {
          ...actualLesson,
          id: resolvedLessonId,
        };
        setLesson(normalizedLesson);
        setVocabulary(lessonVocabulary);
        setQuestions(lessonQuestions);
        setIsReview(Boolean(isReviewParam));
        await checkProgress(resolvedLessonId, lessonVocabulary);
      } catch (error) {
        console.error("Error loading lesson:", error);
        if (!mounted) {
          return;
        }
        setLesson(null);
        setVocabulary([]);
        setQuestions([]);
        setVocabularyCompleted(false);
        setQuizCompleted(false);
        setReviewCompleted(false);
        setProgress(0);
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
    resolveLesson,
    lessonId,
    isReviewParam,
    checkProgress,
  ]);

  useFocusEffect(
    useCallback(() => {
      if (!lesson?.id) {
        return undefined;
      }
      let cancelled = false;
      const refresh = async () => {
        await new Promise((resolve) => setTimeout(resolve, 150));
        if (cancelled) {
          return;
        }
        await checkProgress(lesson.id, vocabulary);
        if (cancelled) {
          return;
        }
        await awardChapterXP();
      };
      refresh();
      return () => {
        cancelled = true;
      };
    }, [
      lesson?.id,
      vocabulary,
      checkProgress,
      awardChapterXP,
    ])
  );

  const progressPercentage = useMemo(() => {
    if (isReview) {
      return 0;
    }
    const hasVocabulary = vocabulary.length > 0;
    const hasQuiz = questions.length > 0;
    if (!hasVocabulary && !hasQuiz) {
      return 0;
    }
    if (hasQuiz && quizCompleted) {
      return 100;
    }
    if (hasVocabulary && hasQuiz) {
      return vocabularyCompleted ? 50 : 0;
    }
    if (hasVocabulary) {
      return vocabularyCompleted ? 100 : 0;
    }
    if (hasQuiz) {
      return quizCompleted ? 100 : 0;
    }
    return 0;
  }, [
    vocabulary.length,
    questions.length,
    vocabularyCompleted,
    quizCompleted,
    isReview,
  ]);

  const vocabChunks = useMemo(() => {
    if (vocabulary.length === 0) {
      return [];
    }
    if (vocabulary.length <= 7) {
      return [
        {
          id: "vocabulary",
          title: "Vocabulary",
          data: vocabulary,
        },
      ];
    }
    const midpoint = Math.ceil(vocabulary.length / 2);
    return [
      {
        id: "vocabulary-1",
        title: "Vocabulary",
        data: vocabulary.slice(0, midpoint),
      },
      {
        id: "vocabulary-2",
        title: "Vocabulary II",
        data: vocabulary.slice(midpoint),
      },
    ];
  }, [vocabulary]);

  const handleStartVocabulary = useCallback(
    (vocabSubset, title = "Vocabulary") => {
      if (!Array.isArray(vocabSubset) || vocabSubset.length === 0) {
        return;
      }
      navigation.navigate("Practice", {
        sectionId: lesson?.id,
        sectionTitle: `${lesson?.title || lessonTitle} - ${title}`,
        sectionData: {
          ...lesson,
          vocabulary: vocabSubset,
          questions: [],
        },
        language,
        level,
        mode: "vocabulary",
        isReview: false,
      });
    },
    [navigation, lesson, lessonTitle, language, level]
  );

  const handleStartQuiz = useCallback(() => {
    if (questions.length === 0) {
      return;
    }
    navigation.navigate("Practice", {
      sectionId: lesson?.id,
      sectionTitle: `${lesson?.title || lessonTitle} - Quiz`,
      sectionData: {
        ...lesson,
        vocabulary: [],
        questions,
      },
      language,
      level,
      mode: "quiz",
      quizAlreadyCompleted: quizCompleted,
      isReview: false,
    });
  }, [
    navigation,
    lesson,
    lessonTitle,
    questions,
    language,
    level,
    quizCompleted,
  ]);

  const handleStartReview = useCallback(() => {
    if (vocabulary.length === 0 && questions.length === 0) {
      return;
    }
    navigation.navigate("Practice", {
      sectionId: lesson?.id,
      sectionTitle: `${lesson?.title || lessonTitle} - Review`,
      sectionData: {
        ...lesson,
        vocabulary,
        questions,
      },
      language,
      level,
      mode: "review",
      isReview: true,
    });
  }, [
    navigation,
    lesson,
    lessonTitle,
    vocabulary,
    questions,
    language,
    level,
  ]);

  const getSectionIcon = useCallback((type) => {
    const icons = {
      vocabulary: "book-outline",
      words: "book-outline",
      phrases: "chatbox-ellipses-outline",
      simple_sentences: "document-text-outline",
      basic_conversations: "chatbubbles-outline",
      useful_phrases: "chatbox-ellipses-outline",
      complete_sentences: "document-text-outline",
      conversations: "chatbubbles-outline",
      listening: "headset-outline",
      advanced_vocabulary: "book-outline",
      expressions_idioms: "chatbox-ellipses-outline",
      complex_sentences: "document-text-outline",
      natural_conversations: "chatbubbles-outline",
      proverbs_cultural: "library-outline",
    };
    return icons[type] || "book-outline";
  }, []);

  if (loading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
          },
        ]}
      >
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={theme.background}
        />
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            color={theme.primary}
          />
          <Text
            style={[
              styles.loadingText,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            Loading lesson...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!lesson) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
          },
        ]}
      >
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={theme.background}
        />
        <View style={styles.center}>
          <View
            style={[
              styles.emptyIcon,
              {
                backgroundColor: `${theme.primary}15`,
              },
            ]}
          >
            <Ionicons
              name="book-outline"
              size={38}
              color={theme.primary}
            />
          </View>
          <Text
            style={[
              styles.emptyTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Lesson unavailable
          </Text>
          <Text
            style={[
              styles.emptyText,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            We couldn't load this lesson.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={[
              styles.backAction,
              {
                backgroundColor: theme.primary,
              },
            ]}
          >
            <Text style={styles.backActionText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const quizIsCompleted = !isReview && quizCompleted;
  const quizLocked =
    questions.length === 0 ||
    (!isReview && vocabulary.length > 0 && !vocabularyCompleted);
  const lessonIcon = getSectionIcon(lesson.type);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
            style={[
              styles.headerButton,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="arrow-back"
              size={22}
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
            {isReview ? "Review" : "Lesson"}
          </Text>
          <View style={styles.headerSpacer} />
        </View>
        <View style={styles.hero}>
          <View
            style={[
              styles.heroIcon,
              {
                backgroundColor: theme.primary,
              },
            ]}
          >
            <Ionicons
              name={lessonIcon}
              size={32}
              color={theme.background}
            />
          </View>
          <Text
            style={[
              styles.lessonTitle,
              {
                color: theme.text,
              },
            ]}
          >
            {lesson.title || lessonTitle}
          </Text>
          {lesson.description ? (
            <Text
              style={[
                styles.lessonDescription,
                {
                  color: theme.secondaryText,
                },
              ]}
            >
              {lesson.description}
            </Text>
          ) : null}
        </View>
        <View style={styles.pathHeader}>
          <View style={styles.pathTitleRow}>
            <Text
              style={[
                styles.pathTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Your learning path
            </Text>
            {!isReview && (
              <View
                style={[
                  styles.progressBadge,
                  {
                    backgroundColor: `${theme.primary}20`,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.progressBadgeText,
                    {
                      color: theme.primary,
                    },
                  ]}
                >
                  {progressPercentage}%
                </Text>
              </View>
            )}
          </View>
          <Text
            style={[
              styles.pathSubtitle,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            Complete each step to move forward
          </Text>
        </View>
        <View style={styles.path}>
          {!isReview &&
            vocabChunks.map((chunk, index) => {
              const completed = vocabularyCompleted;
              const available = index === 0 || vocabularyCompleted;
              return (
                <View key={chunk.id} style={styles.pathItem}>
                  <TouchableOpacity
                    activeOpacity={available ? 0.8 : 1}
                    disabled={!available}
                    onPress={() =>
                      handleStartVocabulary(chunk.data, chunk.title)
                    }
                    style={[
                      styles.activityCard,
                      {
                        backgroundColor: theme.surface,
                        borderColor: completed
                          ? theme.primary
                          : available
                          ? theme.primary
                          : theme.border,
                        opacity: available ? 1 : 0.55,
                      },
                    ]}
                  >
                    <View style={styles.activityContent}>
                      <Text
                        style={[
                          styles.activityEyebrow,
                          {
                            color: completed
                              ? theme.primary
                              : available
                              ? theme.primary
                              : theme.secondaryText,
                          },
                        ]}
                      >
                        {completed
                          ? "COMPLETED"
                          : index === 0
                          ? "STEP 1"
                          : "STEP 2"}
                      </Text>
                      <Text
                        style={[
                          styles.activityTitle,
                          {
                            color: theme.text,
                          },
                        ]}
                      >
                        {chunk.title}
                      </Text>
                      <Text
                        style={[
                          styles.activityDescription,
                          {
                            color: theme.secondaryText,
                          },
                        ]}
                      >
                        {chunk.data.length}{" "}
                        {chunk.data.length === 1 ? "word" : "words"} to learn
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.activityAction,
                        {
                          backgroundColor: completed
                            ? `${theme.primary}15`
                            : available
                            ? theme.primary
                            : `${theme.border}80`,
                        },
                      ]}
                    >
                      <Ionicons
                        name={
                          completed
                            ? "checkmark"
                            : available
                            ? "arrow-forward"
                            : "lock-closed"
                        }
                        size={21}
                        color={
                          completed
                            ? theme.primary
                            : available
                            ? theme.background
                            : theme.secondaryText
                        }
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          {!isReview && (
            <View style={styles.pathItem}>
              <TouchableOpacity
                activeOpacity={quizLocked ? 1 : 0.8}
                disabled={quizLocked}
                onPress={handleStartQuiz}
                style={[
                  styles.activityCard,
                  {
                    backgroundColor: theme.surface,
                    borderColor: quizIsCompleted
                      ? theme.primary
                      : quizLocked
                      ? theme.border
                      : theme.accent,
                    opacity: quizLocked ? 0.55 : 1,
                  },
                ]}
              >
                <View style={styles.activityContent}>
                  <Text
                    style={[
                      styles.activityEyebrow,
                      {
                        color: quizIsCompleted
                          ? theme.primary
                          : quizLocked
                          ? theme.secondaryText
                          : theme.accent,
                      },
                    ]}
                  >
                    {quizIsCompleted
                      ? "COMPLETED"
                      : quizLocked
                      ? "LOCKED"
                      : "FINAL STEP"}
                  </Text>
                  <Text
                    style={[
                      styles.activityTitle,
                      {
                        color: theme.text,
                      },
                    ]}
                  >
                    Practice Quiz
                  </Text>
                  <Text
                    style={[
                      styles.activityDescription,
                      {
                        color: theme.secondaryText,
                      },
                    ]}
                  >
                    {questions.length > 0
                      ? `${questions.length} ${
                          questions.length === 1 ? "question" : "questions"
                        }`
                      : "Coming soon"}
                  </Text>
                  {quizLocked &&
                    vocabulary.length > 0 &&
                    !vocabularyCompleted && (
                      <Text
                        style={[
                          styles.lockHint,
                          {
                            color: theme.warning,
                          },
                        ]}
                      >
                        Complete vocabulary first
                      </Text>
                    )}
                  {quizIsCompleted && (
                    <Text
                      style={[
                        styles.retakeHint,
                        {
                          color: theme.secondaryText,
                        },
                      ]}
                    >
                      Tap to take the quiz again
                    </Text>
                  )}
                </View>
                <View
                  style={[
                    styles.activityAction,
                    {
                      backgroundColor: quizIsCompleted
                        ? `${theme.primary}15`
                        : quizLocked
                        ? `${theme.border}80`
                        : theme.accent,
                    },
                  ]}
                >
                  <Ionicons
                    name={
                      quizIsCompleted
                        ? "checkmark"
                        : quizLocked
                        ? "lock-closed"
                        : "arrow-forward"
                    }
                    size={21}
                    color={
                      quizIsCompleted
                        ? theme.primary
                        : quizLocked
                        ? theme.secondaryText
                        : theme.background
                    }
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {isReview && (
            <View style={styles.pathItem}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleStartReview}
                style={[
                  styles.activityCard,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.primary,
                  },
                ]}
              >
                <View style={styles.activityContent}>
                  <Text
                    style={[
                      styles.activityEyebrow,
                      {
                        color: theme.primary,
                      },
                    ]}
                  >
                    {reviewCompleted ? "COMPLETED" : "REVIEW"}
                  </Text>
                  <Text
                    style={[
                      styles.activityTitle,
                      {
                        color: theme.text,
                      },
                    ]}
                  >
                    Review Lesson
                  </Text>
                  <Text
                    style={[
                      styles.activityDescription,
                      {
                        color: theme.secondaryText,
                      },
                    ]}
                  >
                    {reviewCompleted
                      ? "Lesson completed. Review anytime."
                      : "Practice everything again"}
                  </Text>
                </View>
                <View
                  style={[
                    styles.activityAction,
                    {
                      backgroundColor: reviewCompleted
                        ? `${theme.primary}15`
                        : theme.primary,
                    },
                  ]}
                >
                  <Ionicons
                    name={reviewCompleted ? "checkmark" : "arrow-forward"}
                    size={21}
                    color={
                      reviewCompleted ? theme.primary : theme.background
                    }
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {chapterXPAwarded && chapterXPAmount > 0 && (
          <View
            style={[
              styles.xpReward,
              {
                backgroundColor: `${theme.primary}12`,
                borderColor: `${theme.primary}35`,
              },
            ]}
          >
            <View
              style={[
                styles.xpIcon,
                {
                  backgroundColor: `${theme.primary}20`,
                },
              ]}
            >
              <Ionicons
                name="sparkles"
                size={22}
                color={theme.primary}
              />
            </View>
            <View style={styles.xpRewardText}>
              <Text
                style={[
                  styles.xpRewardTitle,
                  {
                    color: theme.text,
                  },
                ]}
              >
                Chapter Complete!
              </Text>
              <Text
                style={[
                  styles.xpRewardSubtitle,
                  {
                    color: theme.secondaryText,
                  },
                ]}
              >
                +{chapterXPAmount} XP added to your total
              </Text>
            </View>
          </View>
        )}
        <View
          style={[
            styles.encouragement,
            {
              backgroundColor: `${theme.primary}10`,
            },
          ]}
        >
          <Ionicons
            name="sparkles-outline"
            size={24}
            color={theme.primary}
          />
          <View style={styles.encouragementText}>
            <Text
              style={[
                styles.encouragementTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Keep your streak going!
            </Text>
            <Text
              style={[
                styles.encouragementSubtitle,
                {
                  color: theme.secondaryText,
                },
              ]}
            >
              A little practice every day makes a big difference.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  loadingText: {
    marginTop: 14,
    fontSize: 15,
    fontWeight: "600",
  },
  emptyIcon: {
    width: 76,
    height: 76,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    marginTop: 18,
    fontSize: 22,
    fontWeight: "800",
  },
  emptyText: {
    marginTop: 6,
    fontSize: 15,
    textAlign: "center",
  },
  backAction: {
    minHeight: 48,
    marginTop: 22,
    paddingHorizontal: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  backActionText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  header: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "800",
  },
  headerSpacer: {
    width: 42,
  },
  hero: {
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 28,
  },
  heroIcon: {
    width: 72,
    height: 72,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  lessonTitle: {
    marginTop: 5,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "900",
    textAlign: "center",
  },
  lessonDescription: {
    maxWidth: 320,
    marginTop: 8,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "500",
    textAlign: "center",
  },
  pathHeader: {
    marginBottom: 20,
  },
  pathTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pathTitle: {
    flex: 1,
    fontSize: 21,
    fontWeight: "900",
  },
  pathSubtitle: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
  progressBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 12,
  },
  progressBadgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
  path: {
    paddingBottom: 4,
  },
  pathItem: {
    marginBottom: 20,
  },
  activityCard: {
    width: "100%",
    minHeight: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  activityContent: {
    flex: 1,
    paddingRight: 14,
  },
  activityEyebrow: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 5,
  },
  activityTitle: {
    fontSize: 19,
    lineHeight: 24,
    fontWeight: "800",
  },
  activityDescription: {
    marginTop: 5,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
  lockHint: {
    marginTop: 6,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "700",
  },
  retakeHint: {
    marginTop: 6,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
  },
  activityAction: {
    width: 46,
    height: 46,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  xpReward: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginTop: 4,
    marginBottom: 12,
    borderRadius: 18,
    borderWidth: 1,
  },
  xpIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  xpRewardText: {
    flex: 1,
    marginLeft: 12,
  },
  xpRewardTitle: {
    fontSize: 15,
    fontWeight: "900",
  },
  xpRewardSubtitle: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "600",
  },
  encouragement: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 8,
    borderRadius: 18,
  },
  encouragementText: {
    flex: 1,
    marginLeft: 12,
  },
  encouragementTitle: {
    fontSize: 14,
    fontWeight: "800",
  },
  encouragementSubtitle: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
  },
});