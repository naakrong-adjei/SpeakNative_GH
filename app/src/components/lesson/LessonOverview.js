import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getLessonProgress, getVocabularyProgress } from '../../lib/lessonProgress';

export default function LessonOverview() {
  const navigation = useNavigation();
  const route = useRoute();
  const { theme, isDark } = useTheme();

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [vocabulary, setVocabulary] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isReview, setIsReview] = useState(false);
  const [vocabularyCompleted, setVocabularyCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const params = route.params || {};
  const lessonData = params.lessonData;
  const lessonId = params.lessonId;
  const lessonTitle = params.lessonTitle || 'Lesson';
  const isReviewParam = params.isReview || false;
  const language = params.language;
  const level = params.level;

  useEffect(() => {
    if (lessonData) {
      let actualLesson = lessonData;

      if (actualLesson.vocabulary || actualLesson.questions || actualLesson.words) {
        setLesson(actualLesson);
        setVocabulary(actualLesson.vocabulary || actualLesson.words || []);
        setQuestions(actualLesson.questions || []);
        setIsReview(isReviewParam);
        checkVocabularyProgress(actualLesson.id, actualLesson.vocabulary || []);
      } else if (actualLesson.sections && Array.isArray(actualLesson.sections)) {
        const foundSection = actualLesson.sections.find((s) => s.id === lessonId);

      if (foundSection) {
          setLesson(foundSection);
          setVocabulary(foundSection.vocabulary || foundSection.words || []);
          setQuestions(foundSection.questions || []);
          setIsReview(isReviewParam);
          checkVocabularyProgress(foundSection.id, foundSection.vocabulary || foundSection.words || []);
      } else {
          const firstSection = actualLesson.sections[0];
          if (firstSection) {
            setLesson(firstSection);
            setVocabulary(firstSection.vocabulary || firstSection.words || []);
            setQuestions(firstSection.questions || []);
            setIsReview(isReviewParam);
            checkVocabularyProgress(firstSection.id, firstSection.vocabulary || []);
          }
      }
      } else {
        setLesson(actualLesson);
        setVocabulary(actualLesson.vocabulary || actualLesson.words || []);
        setQuestions(actualLesson.questions || []);
        setIsReview(isReviewParam);
      }
    }
    setLoading(false);
    }, [lessonData, lessonId, isReviewParam]);

  useFocusEffect(
    useCallback(() => {
      if (lesson?.id) {
        checkVocabularyProgress(lesson.id, vocabulary);
      }
    }, [lesson?.id, vocabulary])
  );

  const checkVocabularyProgress = async (id, vocab) => {
    if (!id) return;
    try {
      const progressCount = await getLessonProgress(id);
      const vocabCount = await getVocabularyProgress(id);
      setProgress(progressCount);

      if (vocab.length === 0) {
        setVocabularyCompleted(true);
      } else {
        setVocabularyCompleted(vocabCount > 0);
      }
    } catch (error) {
      console.error('Error checking vocabulary progress:', error);
      setVocabularyCompleted(false);
    }
  };

  const handleBack = () => navigation.goBack();

  const handleStartVocabulary = (vocabSubset, subtitle) => {
    if (!vocabSubset || vocabSubset.length === 0) {
      Alert.alert('No Vocabulary', 'This lesson has no vocabulary to learn.');
      return;
    }

    navigation.navigate('Practice', {
      sectionId: lesson?.id,
      sectionTitle: `${lesson?.title || 'Lesson'} - ${subtitle || 'Vocabulary'}`,
      sectionData: {
        ...lesson,
        vocabulary: vocabSubset,
        questions: [],
      },
      language: language,
      level: level,
      mode: 'vocabulary',
    });
  };

  const handleStartQuiz = () => {
    if (questions.length === 0) {
      Alert.alert('No Questions', 'This lesson has no quiz questions yet.');
      return;
    }

    if (isReview) {
      navigateToQuiz();
      return;
    }

    if (!vocabularyCompleted) {
      const firstChunk = getVocabChunks()[0];
      const vocabToStart = firstChunk ? firstChunk.data : vocabulary;
      Alert.alert(
        'Vocabulary Not Completed',
        'You have not completed the vocabulary for this lesson. Complete vocabulary to start quiz?',
        [
          { text: 'Go to Vocabulary', onPress: () => handleStartVocabulary(vocabToStart, 'Vocabulary') },
          { text: 'Cancel', style: 'cancel' },
        ]
      );
      return;
    } else {
      navigateToQuiz();
    }
  };

  const navigateToQuiz = () => {
    navigation.navigate('Practice', {
      sectionId: lesson?.id,
      sectionTitle: `${lesson?.title || 'Lesson'} - Quiz`,
      sectionData: {
        ...lesson,
        vocabulary: [],
        questions: questions,
      },
      language: language,
      level: level,
      mode: 'quiz',
    });
  };


  const handleStartReview = () => {
    if (vocabulary.length === 0 && questions.length ===0) {
      Alert.alert ('No Content', 'This lesson has no content to review.');
      return;
    }
      navigation.navigate('Practice', {
      sectionId: lesson?.id,
      sectionTitle: `${lesson?.title || 'Lesson'} - Review`,
      sectionData: {
        ...lesson,
        vocabulary: vocabulary,
        questions: questions,
      },
      language: language,
      level: level,
      mode: 'review',
    });
  };

  const getVocabularyStatus = () => {
    if (vocabulary.length === 0) return 'none';
    if (vocabularyCompleted) return 'completed';
    return 'incomplete';
  }



const getLessonIconName = (type) => {
    switch (type) {
      case 'vocabulary':
      case 'words':
      case 'advanced_vocabulary':
        return 'book-outline';
      case 'phrases':
      case 'useful_phrases':
      case 'expressions_idioms':
        return 'chatbox-ellipses-outline';
      case 'simple_sentences':
      case 'complete_sentences':
      case 'complex_sentences':
        return 'document-text-outline';
      case 'basic_conversations':
      case 'conversations':
      case 'natural_conversations':
        return 'chatbubbles-outline';
      case 'listening':
        return 'headset-outline';
      case 'proverbs_cultural':
        return 'library-outline';
      case 'quiz':
        return 'extension-puzzle-outline';
      default:
        return 'journal-outline';
    }
  };

  const getSectionTypeLabel = (type) => {
    const labels = {
      vocabulary: 'Vocabulary',
      words: 'Words',
      phrases: 'Phrases',
      simple_sentences: 'Simple Sentences',
      basic_conversations: 'Basic Conversations',
      useful_phrases: 'Useful Phrases',
      complete_sentences: 'Complete Sentences',
      conversations: 'Conversations',
      listening: 'Listening',
      advanced_vocabulary: 'Advanced Vocabulary',
      expressions_idioms: 'Expressions & Idioms',
      complex_sentences: 'Complex Sentences',
      natural_conversations: 'Natural Conversations',
      proverbs_cultural: 'Proverbs & Cultural Expressions',
    };
    return labels[type] || null;
  };

  const getVocabChunks = () => {
    if (vocabulary.length <= 7) {
      return [{ title: 'Vocabulary', data: vocabulary }];
    }

    const midpoint = Math.ceil(vocabulary.length / 2);
    return [
      { title: 'Vocabulary (Part 1)', data: vocabulary.slice(0, midpoint) },
      { title: 'Vocabulary (Part 2)', data: vocabulary.slice(midpoint) },
    ];
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={theme.primary} />
          <Text style={[styles.loadingText, { color: theme.secondaryText }]}>
            Loading lesson...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!lesson) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.center}>
          <Ionicons name="alert-circle-outline" size={56} color={theme.secondaryText} />
          <Text style={[styles.notFoundText, { color: theme.text }]}>
            Lesson not found
          </Text>
          <TouchableOpacity
            style={[styles.retryButton, { backgroundColor: theme.primary }]}
            onPress={handleBack}
          >
            <Text style={styles.retryButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const iconName = getLessonIconName(lesson.type);
  const vocabChunks = getVocabChunks();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
<StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* TOP BAR WITH BACK BUTTON */}
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: theme.surface }]}
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* MAIN LESSON HEADER BUBBLE */}
        <View
          style={[
            styles.lessonBubbleCard,
            {
              backgroundColor: theme.surface,
              borderColor: theme.primary || '#007AFF',
            },
          ]}
        >
          <View style={styles.lessonHeaderRow}>
            <View style={[styles.lessonIconBadge, { backgroundColor: theme.primary ? `${theme.primary}15` : '#007AFF15' }]}>
              <Ionicons name={iconName} size={28} color={theme.primary || '#007AFF'} />
            </View>
            <View style={styles.lessonTextContainer}>
              <Text style={[styles.chapterNumberText, { color: theme.primary || '#007AFF' }]}>
                {isReview ? 'REVIEW SESSION' : 'LESSON OVERVIEW'}
              </Text>
              <Text style={[styles.chapterTitleText, { color: theme.text }]}>
                {lesson.title}
              </Text>
              {lesson.description && (
                <Text style={[styles.chapterDescription, { color: theme.secondaryText }]}>
                  {lesson.description}
                </Text>
              )}
            </View>
          </View>

          {/* QUICK STATS CHIPS */}
          <View style={styles.statsRow}>
            {!isReview && (
              <View style={[styles.chapterProgressBadge, { backgroundColor: theme.primary ? `${theme.primary}20` : '#007AFF20' }]}>
                <Ionicons name="book-outline" size={12} color={theme.primary || '#007AFF'} style={{ marginRight: 4 }} />
                <Text style={[styles.chapterProgressText, { color: theme.primary || '#007AFF' }]}>
                  {vocabulary.length} words
                </Text>
              </View>
            )}

            <View style={[styles.chapterProgressBadge, { backgroundColor: theme.warning ? `${theme.warning}20` : '#FF950020' }]}>
              <Ionicons name="help-circle-outline" size={12} color={theme.warning || '#FF9500'} style={{ marginRight: 4 }} />
              <Text style={[styles.chapterProgressText, { color: theme.warning || '#FF9500' }]}>
                {questions.length} questions
              </Text>
            </View>
          </View>
        </View>

        {/* SECTION LABEL */}
        <Text style={[styles.sectionHeading, { color: theme.secondaryText }]}>
          MODULES
        </Text>

        <View style={styles.lessonsWrapper}>
          {/* VOCABULARY CARD(S) */}
          {!isReview &&
            vocabChunks.map((chunk, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => handleStartVocabulary(chunk.data, chunk.title)}
                style={[
                  styles.moduleBubble,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.primary || '#007AFF',
                  },
                ]}
              >
                <View style={[styles.moduleIcon, { backgroundColor: theme.primary || '#007AFF' }]}>
                  <Ionicons name="book-outline" size={22} color="#FFFFFF" />
                </View>

<View style={styles.lessonTextContainer}>
                  <Text style={[styles.lessonTitle, { color: theme.text }]}>
                    {getSectionTypeLabel(lesson.type) 
                      ? `${getSectionTypeLabel(lesson.type)} - ${chunk.title}`
                      : chunk.title}
                  </Text>
                  <Text style={[styles.chapterDescription, { color: theme.secondaryText }]}>
                    {chunk.data.length > 0
                      ? `${chunk.data.length} terms to learn & practice`
                      : 'No vocabulary available'}
                  </Text>

                  {chunk.data.length > 0 && (
                    <View style={styles.wordPreview}>
                      {chunk.data.map((word, idx) => {
                        const label =
                          typeof word === 'string'
                            ? word
                            : word.native || word.english || word.word || '';

                        return (
                          <View
                            key={idx}
                            style={[
                              styles.wordChip,
                              { backgroundColor: theme.background, borderColor: theme.border },
                            ]}
                          >
                            <Text
                              style={[styles.wordChipText, { color: theme.text }]}
                              numberOfLines={1}
                            >
                              {label}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  )}
                </View>

                <Ionicons name="chevron-forward" size={20} color={theme.secondaryText} />
              </TouchableOpacity>
            ))}

          {/* QUIZ CARD */}
          <TouchableOpacity
            activeOpacity={questions.length > 0 ? 0.8 : 1}
            onPress={handleStartQuiz}
            style={[
              styles.moduleBubble,
              {
                backgroundColor: theme.surface,
                borderColor: questions.length > 0 ? (theme.accent || '#34C759') : theme.border,
                opacity: questions.length > 0 ? 1 : 0.6,
              },
            ]}
          >
            <View
              style={[
                styles.moduleIcon,
                { backgroundColor: questions.length > 0 ? (theme.accent || '#34C759') : theme.border },
              ]}
            >
              <Ionicons
                name="create-outline"
                size={22}
                color={questions.length > 0 ? '#FFFFFF' : theme.secondaryText}
              />
            </View>

            <View style={styles.lessonTextContainer}>
              <Text style={[styles.lessonTitle, { color: theme.text }]}>
                Practice Quiz
              </Text>
              <Text style={[styles.chapterDescription, { color: theme.secondaryText }]}>
                {questions.length > 0
                  ? `${questions.length} questions to test knowledge`
                  : 'No quiz available'}
              </Text>
            </View>

            {questions.length > 0 ? (
              <Ionicons name="chevron-forward" size={20} color={theme.secondaryText} />
            ) : (
              <Ionicons name="lock-closed" size={18} color={theme.secondaryText} />
            )}
          </TouchableOpacity>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  loadingText: {
    fontSize: 16,
    marginTop: 12,
  },

  notFoundText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },

  retryButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },

  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  /* Header Bar */
  headerBar: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  /* Scroll Content */
  scroll: {
    flex: 1,
  },

  scrollContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  /* Lesson Card Bubble */
  lessonBubbleCard: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  lessonHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  lessonIconBadge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  lessonTextContainer: {
    flex: 1,
  },

  chapterNumberText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  chapterTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 2,
  },

  chapterDescription: {
    fontSize: 14,
    marginTop: 4,
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  chapterProgressBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  chapterProgressText: {
    fontSize: 12,
    fontWeight: '600',
  },

  sectionHeading: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginBottom: 12,
    marginLeft: 4,
    textTransform: 'uppercase',
  },

  lessonsWrapper: {
    gap: 16,
  },

  /* Module Bubbles */
  moduleBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    width: '100%',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  moduleIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  wordPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },

  wordChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
  },

  wordChipText: {
    fontSize: 11,
    fontWeight: '600',
  },
});