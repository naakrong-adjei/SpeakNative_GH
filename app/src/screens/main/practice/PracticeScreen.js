// screens/main/practice/PracticeScreen.js
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import LessonContent from "../../../components/lesson/LessonContent";
import VocabularyIntroScreen from "../../../components/lesson/VocabularyIntroScreen";
import { useTheme } from "../../../context/ThemeContext";
import { incrementLessonCompletion, markVocabularyComplete } from "../../../lib/lessonProgress";
import { getLanguageData } from "../../../utils/lessonData";

export default function PracticeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { theme } = useTheme();

  const params = route.params || {};
  const {
    sectionId,
    sectionTitle,
    sectionData,
    language,
    level,
    mode,
    isReview,
  } = params;

  const [loading, setLoading] = useState(true);
  const [vocabulary, setVocabulary] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [lessonData, setLessonData] = useState(null);
  const [showVocabulary, setShowVocabulary] = useState(true);
  const [exitConfirmVisible, setExitConfirmVisible] = useState(false);

  useEffect(() => {
    if (sectionData) {
      setLessonData(sectionData);
      setVocabulary(sectionData.vocabulary || []);
      setQuestions(sectionData.questions || []);
      
      // If mode is quiz, skip vocabulary
      if (mode === "quiz" || mode === "review") {
        setShowVocabulary(false);
      } else {
        setShowVocabulary(true);
      }
      setLoading(false);
    } else if (sectionId) {
      // Fetch data if only ID is provided
      const languageData = getLanguageData(language || "as-tw", level || "beginner");
      let foundSection = null;

      for (const [key, chapter] of Object.entries(languageData)) {
        if (chapter.sections) {
          const section = chapter.sections.find((s) => s.id === sectionId);
          if (section) {
            foundSection = section;
            break;
          }
        }
        if (chapter.review && chapter.review.id === sectionId) {
          foundSection = chapter.review;
          break;
        }
      }

      if (foundSection) {
        setLessonData(foundSection);
        setVocabulary(foundSection.vocabulary || []);
        setQuestions(foundSection.questions || []);
        setShowVocabulary(mode !== "quiz" && mode !== "review");
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [sectionData, sectionId, language, level, mode]);

const handleStartLesson = () => {
    // Mark vocabulary as complete so quiz can be unlocked
    if (sectionId) {
      markVocabularyComplete(sectionId);
    }
    setShowVocabulary(false);
  };

  const handleSkipVocabulary = () => {
    setShowVocabulary(false);
  };

  const handleComplete = async () => {
    if (sectionId) {
      await incrementLessonCompletion(sectionId);
    }
    navigation.goBack();
  };

  const handleBack = () => {
    if (showVocabulary) {
      setExitConfirmVisible(true);
    } else {
      navigation.goBack();
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={theme.primary} />
          <Text style={[styles.loadingText, { color: theme.text }]}>
            Loading...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // If no content
  if (!lessonData || (vocabulary.length === 0 && questions.length === 0)) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Practice</Text>
          <View style={{ width: 40 }} />
        </View>
        <View style={styles.center}>
          <Ionicons name="alert-circle-outline" size={48} color={theme.secondaryText} />
          <Text style={[styles.noContentText, { color: theme.text }]}>
            No content available
          </Text>
          <TouchableOpacity
            style={[styles.backButtonLarge, { backgroundColor: theme.primary }]}
            onPress={handleBack}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Show vocabulary intro screen
  if (showVocabulary && vocabulary.length > 0) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <VocabularyIntroScreen
          vocabulary={vocabulary}
          onStartLesson={handleStartLesson}
          onSkip={handleSkipVocabulary}
        />
      </SafeAreaView>
    );
  }

  // Show quiz content
  if (questions.length > 0) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
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

  // Fallback - no questions but vocabulary done
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Practice</Text>
        <View style={{ width: 40 }} />
      </View>
      <View style={styles.center}>
        <Ionicons name="checkmark-circle" size={48} color={theme.success} />
        <Text style={[styles.noContentText, { color: theme.text }]}>
          Vocabulary Complete!
        </Text>
        <Text style={[styles.noContentSubText, { color: theme.secondaryText }]}>
          No quiz questions available for this lesson.
        </Text>
        <TouchableOpacity
          style={[styles.backButtonLarge, { backgroundColor: theme.primary }]}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>Done</Text>
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
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  backButton: {
    padding: 4,
    width: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
  },
  loadingText: {
    fontSize: 16,
    marginTop: 12,
  },
  noContentText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
    textAlign: "center",
  },
  noContentSubText: {
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
  },
  backButtonLarge: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 16,
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});