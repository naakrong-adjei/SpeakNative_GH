// components/lesson/LessonContent.js
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import ConfirmDialog from "../ui/ConfirmDialog";
import DragDropMode from "./DragDropMode";
import LessonCompleteScreen from "./LessonCompleteScreen";
import ListeningMatchingMode from "./ListeningMatchingMode";
import ListeningMultipleChoiceMode from "./ListeningMultipleChoiceMode";
import MatchingMode from "./MatchingMode";
import MultipleChoiceMode from "./MultipleChoiceMode";
import ProgressHeader from "./ProgressHeader";

export default function LessonContent({
  questions,
  lessonId,
  vocabulary,
  onComplete,
  isReview = false,
}) {
const { theme } = useTheme();
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [exitConfirmVisible, setExitConfirmVisible] = useState(false);
const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [showComplete, setShowComplete] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 
    ? ((currentQuestionIndex + 1) / questions.length) * 100 
    : 0;

  const handleAnswer = (correct) => {
    if (showResult) return;
    setIsCorrect(correct);
    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
      // If this question was previously wrong, remove it from wrong list
      // (only when it's a different question than the current attempt)
    } else {
      // Record the incorrectly answered question
      const q = currentQuestion;
      setWrongQuestions((prev) => {
        const existing = prev.find(
          (w) =>
            w.id === q.id ||
            (w.question &&
              q.question &&
              w.question === q.question)
        );
        if (existing) {
          return prev.map((w) =>
            (w.id === q.id ||
              (w.question &&
                q.question &&
                w.question === q.question))
              ? { ...w, attempts: w.attempts + 1 }
              : w
          );
        }
        return [
          ...prev,
          {
            id: q?.id,
            question: q?.question,
            english: q?.options?.find(
              (o) => o.id === q.correctOptionId
            )?.text,
            native: q?.question,
            pronunciation: q?.hints?.[0] || null,
            attempts: 1,
          },
        ];
      });
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setIsCorrect(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Lesson complete
      setShowComplete(true);
    }
  };

const handleRetry = () => {
    setShowResult(false);
    setIsCorrect(null);
    // Bump the retry count so the mode component remounts and resets
    // its internal state (clears the previously selected wrong answer).
    setRetryCount((prev) => prev + 1);
  };

const handleComplete = () => {
    if (onComplete) {
      onComplete();
    } else {
      navigation.goBack();
    }
  };

  const handleBack = () => {
    if (showComplete) {
      handleComplete();
      return;
    }
    setExitConfirmVisible(true);
  };

  const renderMode = () => {
    const type = currentQuestion?.type || "multiple_choice";
    const commonProps = {
// key forces a remount when the question changes OR when the user
      // retries, so internal state (selected option, drag answers) is reset.
      key: `q-${currentQuestion?.id}-r${retryCount}`,
      question: currentQuestion,
      onSubmit: handleAnswer,
      showResult,
      isCorrect,
    };

    switch (type) {
      case "listening_multiple_choice":
        return <ListeningMultipleChoiceMode {...commonProps} />;
      case "matching":
        return <MatchingMode {...commonProps} />;
      case "listening_matching":
        return <ListeningMatchingMode {...commonProps} />;
      case "drag_drop":
      case "dragdrop":
        return <DragDropMode {...commonProps} />;
      case "multiple_choice":
      default:
        return <MultipleChoiceMode {...commonProps} />;
    }
  };

  if (!currentQuestion && !showComplete) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={theme.primary} />
          <Text style={[styles.loadingText, { color: theme.text }]}>
            Loading question...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (showComplete) {
    const accuracy = questions.length > 0 
      ? Math.round((correctAnswers / questions.length) * 100) 
      : 100;

    const handleReview = () => {
      // Restart the lesson from the beginning for additional practice
      setCorrectAnswers(0);
      setWrongQuestions([]);
      setRetryCount((prev) => prev + 1);
      setShowResult(false);
      setIsCorrect(null);
      setCurrentQuestionIndex(0);
      setShowComplete(false);
    };

    const lessonStats = {
      accuracy,
      correctAnswers,
      totalQuestions: questions.length,
      wrongQuestions: wrongQuestions.map((w) => ({
        id: w.id,
        english: w.english || w.question,
        native: w.native,
        pronunciation: w.pronunciation,
        attempts: w.attempts,
      })),
    };

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <LessonCompleteScreen
          lessonStats={lessonStats}
          onContinue={handleComplete}
          onReview={handleReview}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ConfirmDialog
        visible={exitConfirmVisible}
        title="Exit Practice"
        description="Are you sure you want to quit? Your progress will be lost."
        cancelLabel="Cancel"
        confirmLabel="Exit"
        destructive
onConfirm={() => {
          setExitConfirmVisible(false);
          navigation.goBack();
        }}
        onCancel={() => setExitConfirmVisible(false)}
      />

      <ProgressHeader
        progress={progress}
        currentCount={currentQuestionIndex + 1}
        totalCount={questions.length}
        onClose={handleBack}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.questionContainer}>
          {isReview && (
            <View style={[styles.reviewBadge, { backgroundColor: theme.primary + "20" }]}>
              <Ionicons name="refresh-outline" size={16} color={theme.primary} />
              <Text style={[styles.reviewBadgeText, { color: theme.primary }]}>
                Review Session
              </Text>
            </View>
          )}
          
          <Text style={[styles.questionText, { color: theme.text }]}>
            {currentQuestion.question}
          </Text>
          {currentQuestion.instruction && (
            <Text style={[styles.instructionText, { color: theme.secondaryText }]}>
              {currentQuestion.instruction}
            </Text>
          )}
        </View>

        {renderMode()}

        {showResult && (
          <View style={[styles.feedbackContainer, { backgroundColor: theme.surface }]}>
            <Text style={[styles.feedbackText, { color: isCorrect ? "#34C759" : "#FF3B30" }]}>
              {isCorrect ? "✅ Correct!" : "❌ Not quite right"}
            </Text>
            {currentQuestion.explanation && (
              <Text style={[styles.explanationText, { color: theme.secondaryText }]}>
                {currentQuestion.explanation}
              </Text>
            )}
            {!isCorrect && (
              <TouchableOpacity
                style={[styles.retryButton, { backgroundColor: theme.primary }]}
                onPress={handleRetry}
              >
                <Text style={styles.retryButtonText}>Try Again</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {showResult && isCorrect && (
          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: theme.primary }]}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Complete Lesson"}
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
        )}
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 30,
  },
  loadingText: {
    fontSize: 16,
    marginTop: 12,
  },
  questionContainer: {
    marginBottom: 24,
  },
  reviewBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 6,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  reviewBadgeText: {
    fontSize: 13,
    fontWeight: "600",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 15,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  optionCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  optionSelected: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  feedbackContainer: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  explanationText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
  },
  retryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 12,
    alignSelf: "center",
  },
  retryButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 14,
    gap: 8,
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
  },
  completeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  completeIcon: {
    marginBottom: 20,
  },
  completeTitle: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
  },
  completeSubtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
  completeButton: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
  },
  completeButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
