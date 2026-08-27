import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";

import Button from "../ui/Button";
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
  onComplete,
  isReview = false,
}) {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [
    currentQuestionIndex,
    setCurrentQuestionIndex,
  ] = useState(0);

  const [
    exitConfirmVisible,
    setExitConfirmVisible,
  ] = useState(false);

  const [showResult, setShowResult] =
    useState(false);

  const [isCorrect, setIsCorrect] =
    useState(null);

  const [correctAnswers, setCorrectAnswers] =
    useState(0);

  const [wrongQuestions, setWrongQuestions] =
    useState([]);

  const [showComplete, setShowComplete] =
    useState(false);

  const [retryCount, setRetryCount] =
    useState(0);

  const currentQuestion =
    questions?.[currentQuestionIndex];

  const totalQuestions =
    questions?.length || 0;

  const isLastQuestion =
    currentQuestionIndex ===
    totalQuestions - 1;

  const progress =
    totalQuestions > 0
      ? ((currentQuestionIndex + 1) /
          totalQuestions) *
        100
      : 0;

  useEffect(() => {
    setShowResult(false);
    setIsCorrect(null);
  }, [currentQuestionIndex]);

  const handleAnswer = (correct) => {
    if (showResult) {
      return;
    }

    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers(
        (prev) => prev + 1
      );
    } else {
      const question = currentQuestion;

      setWrongQuestions((prev) => {
        const existingIndex =
          prev.findIndex(
            (item) =>
              item.id === question?.id ||
              (item.question &&
                question?.question &&
                item.question ===
                  question.question)
          );

        if (existingIndex !== -1) {
          return prev.map(
            (item, index) =>
              index === existingIndex
                ? {
                    ...item,
                    attempts:
                      (item.attempts || 0) +
                      1,
                  }
                : item
          );
        }

        return [
          ...prev,
          {
            id: question?.id,
            question:
              question?.question,

            english:
              question?.options?.find(
                (option) =>
                  option.id ===
                  question.correctOptionId
              )?.text,

            native:
              question?.question,

            pronunciation:
              question?.hints?.[0] ||
              null,

            attempts: 1,
          },
        ];
      });
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowComplete(true);
      return;
    }

    setCurrentQuestionIndex(
      (prev) => prev + 1
    );
  };

  const handleRetry = () => {
    setShowResult(false);
    setIsCorrect(null);

    setRetryCount(
      (prev) => prev + 1
    );
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

  const handleReview = () => {
    setCorrectAnswers(0);
    setWrongQuestions([]);

    setRetryCount(
      (prev) => prev + 1
    );

    setCurrentQuestionIndex(0);

    setShowResult(false);
    setIsCorrect(null);
    setShowComplete(false);
  };

  const renderMode = () => {
    const type =
      currentQuestion?.type ||
      "multiple_choice";

    const key = `q-${currentQuestion?.id}-r${retryCount}`;

    const props = {
      key,
      question: currentQuestion,
      onSubmit: handleAnswer,
      showResult,
      isCorrect,
    };

    switch (type) {
      case "listening_multiple_choice":
        return (
          <ListeningMultipleChoiceMode
            {...props}
          />
        );

      case "matching":
        return <MatchingMode {...props} />;

      case "listening_matching":
        return (
          <ListeningMatchingMode
            {...props}
          />
        );

      case "drag_drop":
      case "dragdrop":
        return (
          <DragDropMode {...props} />
        );

      case "multiple_choice":
      default:
        return (
          <MultipleChoiceMode
            {...props}
          />
        );
    }
  };

  if (
    !currentQuestion &&
    !showComplete
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
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            color={theme.primary}
          />

          <Text
            style={[
              styles.loadingText,
              {
                color: theme.text,
              },
            ]}
          >
            Loading question...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (showComplete) {
    const accuracy =
      totalQuestions > 0
        ? Math.round(
            (correctAnswers /
              totalQuestions) *
              100
          )
        : 100;

    const lessonStats = {
      accuracy,
      correctAnswers,
      totalQuestions,

      wrongQuestions:
        wrongQuestions.map(
          (item) => ({
            id: item.id,

            english:
              item.english ||
              item.question,

            native: item.native,

            pronunciation:
              item.pronunciation,

            attempts:
              item.attempts || 1,
          })
        ),
    };

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
        <LessonCompleteScreen
          lessonStats={lessonStats}
          onContinue={handleComplete}
          onReview={handleReview}
        />
      </SafeAreaView>
    );
  }

  const feedbackBackground =
    showResult
      ? isCorrect
        ? "#E8F7EE"
        : "#FDECEC"
      : theme.surface;

  const feedbackBorder =
    showResult
      ? isCorrect
        ? "#B7E4C7"
        : "#F5B5B5"
      : theme.border;

  const feedbackColor =
    showResult
      ? isCorrect
        ? "#16803C"
        : "#C62828"
      : theme.text;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}
    >
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
        onCancel={() =>
          setExitConfirmVisible(false)
        }
      />

      <SafeAreaView style={styles.topArea}>
        <ProgressHeader
          progress={progress}
          currentCount={
            currentQuestionIndex + 1
          }
          totalCount={totalQuestions}
          onClose={handleBack}
        />

        <ScrollView
          contentContainerStyle={[
            styles.contentContainer,
            {
              paddingBottom:
                160 + insets.bottom,
            },
          ]}
          showsVerticalScrollIndicator={
            false
          }
        >
          <View
            style={styles.questionHeader}
          >
            {isReview && (
              <View
                style={[
                  styles.reviewBadge,
                  {
                    backgroundColor:
                      theme.primary +
                      "18",

                    borderColor:
                      theme.primary +
                      "30",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.reviewBadgeText,
                    {
                      color:
                        theme.primary,
                    },
                  ]}
                >
                  REVIEW
                </Text>
              </View>
            )}

            <Text
              style={[
                styles.questionLabel,
                {
                  color:
                    theme.secondaryText,
                },
              ]}
            >
              {isReview
                ? "Let's review this one"
                : "Translate or answer"}
            </Text>

            <Text
              style={[
                styles.questionText,
                {
                  color: theme.text,
                },
              ]}
            >
              {currentQuestion.question}
            </Text>

            {currentQuestion.instruction && (
              <Text
                style={[
                  styles.instructionText,
                  {
                    color:
                      theme.secondaryText,
                  },
                ]}
              >
                {currentQuestion.instruction}
              </Text>
            )}
          </View>

          {renderMode()}
        </ScrollView>
      </SafeAreaView>

      <View
        style={[
          styles.bottomSheet,
          {
            backgroundColor:
              feedbackBackground,

            borderTopColor:
              feedbackBorder,

            paddingBottom: Math.max(
              insets.bottom,
              16
            ),
          },
        ]}
      >
        {showResult && (
          <View
            style={styles.feedbackBanner}
          >
            <Text
              style={[
                styles.feedbackTitle,
                {
                  color:
                    feedbackColor,
                },
              ]}
            >
              {isCorrect
                ? "Awesome!"
                : "Solution:"}
            </Text>

            {currentQuestion.explanation && (
              <Text
                style={[
                  styles.explanationText,
                  {
                    color:
                      feedbackColor,
                  },
                ]}
              >
                {currentQuestion.explanation}
              </Text>
            )}
          </View>
        )}

        <View
          style={styles.buttonWrapper}
        >
          {!showResult ? (
            <Button
              title="CONTINUE"
              disabled
              variant="primary"
            />
          ) : isCorrect ? (
            <Button
              title={
                isLastQuestion
                  ? "FINISH"
                  : "CONTINUE"
              }
              onPress={handleNext}
              variant="primary"
              status="success"
            />
          ) : (
            <Button
              title="TRY AGAIN"
              onPress={handleRetry}
              variant="primary"
              status="error"
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topArea: {
    flex: 1,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  questionHeader: {
    marginBottom: 20,
  },

  reviewBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
  },

  reviewBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
  },

  questionLabel: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  questionText: {
    marginBottom: 6,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "800",
  },

  instructionText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
  },

  bottomSheet: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    paddingHorizontal: 20,
    paddingTop: 16,
    borderTopWidth: 2,
  },

  feedbackBanner: {
    marginBottom: 14,
  },

  feedbackTitle: {
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 0.3,
  },

  explanationText: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "600",
  },

  buttonWrapper: {
    width: "100%",
  },
});