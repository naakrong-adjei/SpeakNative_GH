import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "expo-router/react-navigation";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import ConfirmDialog from "../ui/ConfirmDialog";
import DragDropMode from "./DragDropMode";
import LessonCompleteScreen from "./LessonCompleteScreen";
import ListeningMultipleChoiceMode from "./ListeningMultipleChoiceMode";
import MultipleChoiceMode from "./MultipleChoiceMode";
import ProgressHeader from "./ProgressHeader";

export default function LessonContent({
  questions,
  onComplete,
  isReview = false,
  type = "lesson",
}) {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);
  const [exitConfirmVisible, setExitConfirmVisible] =
    useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [showComplete, setShowComplete] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dragDropAnswers, setDragDropAnswers] = useState({});
  const [bottomSheetHeight, setBottomSheetHeight] = useState(0);

  const totalQuestions = questions?.length || 0;

  const currentQuestion =
    questions?.[currentQuestionIndex] || null;

  const currentQuestionType =
    currentQuestion?.type || "multiple_choice";

  const questionKey =
    currentQuestion?.id ??
    `${currentQuestionIndex}-${currentQuestionType}`;

  const isLastQuestion =
    totalQuestions > 0 &&
    currentQuestionIndex === totalQuestions - 1;

  const progress =
    totalQuestions > 0
      ? ((currentQuestionIndex + 1) / totalQuestions) * 100
      : 0;

  const isDragDrop =
    currentQuestionType === "drag_drop" ||
    currentQuestionType === "dragdrop";

  const isMultipleChoice =
    currentQuestionType === "multiple_choice" ||
    currentQuestionType === "listening_multiple_choice";

  const resetQuestionState = useCallback(() => {
    setShowResult(false);
    setIsCorrect(null);
    setSelectedOption(null);
    setDragDropAnswers({});
  }, []);

  const handleMultipleChoiceSelect = useCallback(
    (optionId) => {
      if (showResult) {
        return;
      }

      setSelectedOption(optionId);
    },
    [showResult]
  );

  const handleDragDropAnswersChange = useCallback(
    (answers) => {
      if (showResult) {
        return;
      }

      setDragDropAnswers(
        answers && typeof answers === "object"
          ? answers
          : {}
      );
    },
    [showResult]
  );

  const getCorrectAnswerText = useCallback(() => {
    if (!currentQuestion) {
      return null;
    }

    if (isMultipleChoice) {
      return currentQuestion.options?.find(
        (option) =>
          option.id === currentQuestion.correctOptionId
      )?.text;
    }

    return (
      currentQuestion.correctAnswer ||
      currentQuestion.answer ||
      null
    );
  }, [currentQuestion, isMultipleChoice]);

  const handleAnswer = useCallback(
    (correct) => {
      if (showResult || !currentQuestion) {
        return;
      }

      const wasCorrect = Boolean(correct);

      setIsCorrect(wasCorrect);

      if (wasCorrect) {
        setCorrectAnswers(
          (previous) => previous + 1
        );
      } else {
        setWrongQuestions((previous) => {
          const questionId = currentQuestion.id;
          const questionText =
            currentQuestion.question;

          const existingIndex =
            previous.findIndex(
              (item) =>
                (questionId !== undefined &&
                  item.id === questionId) ||
                (questionText &&
                  item.question === questionText)
            );

          if (existingIndex !== -1) {
            return previous.map((item, index) =>
              index === existingIndex
                ? {
                    ...item,
                    attempts:
                      (item.attempts || 0) + 1,
                  }
                : item
            );
          }

          return [
            ...previous,
            {
              id: currentQuestion.id,
              question:
                currentQuestion.question || "",
              english:
                getCorrectAnswerText() ||
                currentQuestion.question ||
                "",
              native:
                currentQuestion.native ||
                currentQuestion.question ||
                "",
              pronunciation:
                currentQuestion.pronunciation ||
                currentQuestion.hints?.[0] ||
                null,
              attempts: 1,
            },
          ];
        });
      }

      setShowResult(true);
    },
    [
      showResult,
      currentQuestion,
      getCorrectAnswerText,
    ]
  );

  const evaluateMultipleChoice = useCallback(() => {
    if (
      showResult ||
      !currentQuestion ||
      !isMultipleChoice ||
      selectedOption === null
    ) {
      return;
    }

    const correct =
      selectedOption ===
      currentQuestion.correctOptionId;

    handleAnswer(correct);
  }, [
    showResult,
    currentQuestion,
    isMultipleChoice,
    selectedOption,
    handleAnswer,
  ]);

  const evaluateDragDrop = useCallback(() => {
    if (
      showResult ||
      !currentQuestion ||
      !isDragDrop
    ) {
      return;
    }

    const sentence =
      currentQuestion.sentence || "";

    const blankMatches =
      sentence.match(/\[_____\]/g) || [];

    if (blankMatches.length === 0) {
      return;
    }

    const allBlanksFilled =
      blankMatches.every(
        (_, index) =>
          Boolean(
            dragDropAnswers[
              `blank${index + 1}`
            ]
          )
      );

    if (!allBlanksFilled) {
      return;
    }

    const drops = Array.isArray(
      currentQuestion.correctDrops
    )
      ? currentQuestion.correctDrops
      : currentQuestion.correctDrop
      ? [currentQuestion.correctDrop]
      : [];

    const correctMap = {};

    drops.forEach((drop, index) => {
      if (!drop?.itemId) {
        return;
      }

      const blankId =
        drop.blankId ||
        `blank${index + 1}`;

      correctMap[blankId] = drop.itemId;
    });

    const allCorrect =
      blankMatches.every((_, index) => {
        const blankId =
          `blank${index + 1}`;

        const selectedItem =
          dragDropAnswers[blankId];

        const correctItem =
          correctMap[blankId];

        return (
          Boolean(selectedItem) &&
          Boolean(correctItem) &&
          selectedItem === correctItem
        );
      });

    handleAnswer(allCorrect);
  }, [
    showResult,
    currentQuestion,
    isDragDrop,
    dragDropAnswers,
    handleAnswer,
  ]);

  const handleNext = useCallback(() => {
    if (!currentQuestion) {
      return;
    }

    if (isLastQuestion) {
      setShowComplete(true);
      return;
    }

    resetQuestionState();

    setRetryCount(
      (previous) => previous + 1
    );

    setCurrentQuestionIndex(
      (previous) => previous + 1
    );
  }, [
    currentQuestion,
    isLastQuestion,
    resetQuestionState,
  ]);

  const handleRetry = useCallback(() => {
    resetQuestionState();

    setRetryCount(
      (previous) => previous + 1
    );
  }, [resetQuestionState]);

  const handleComplete = useCallback(() => {
    if (onComplete) {
      onComplete();
      return;
    }

    navigation.goBack();
  }, [onComplete, navigation]);

  const handleBack = useCallback(() => {
    if (showComplete) {
      handleComplete();
      return;
    }

    setExitConfirmVisible(true);
  }, [showComplete, handleComplete]);

  const handleExitConfirm = useCallback(() => {
    setExitConfirmVisible(false);
    navigation.goBack();
  }, [navigation]);

  const handleExitCancel = useCallback(() => {
    setExitConfirmVisible(false);
  }, []);

  const handleReview = useCallback(() => {
    setCorrectAnswers(0);
    setWrongQuestions([]);

    resetQuestionState();

    setRetryCount(
      (previous) => previous + 1
    );

    setCurrentQuestionIndex(0);
    setShowComplete(false);
  }, [resetQuestionState]);

  const renderMode = useCallback(() => {
    if (!currentQuestion) {
      return null;
    }

    const modeKey =
      `q-${questionKey}-reset-${retryCount}`;

    switch (currentQuestionType) {
      case "listening_multiple_choice":
        return (
          <ListeningMultipleChoiceMode
            key={modeKey}
            question={currentQuestion}
            showResult={showResult}
            onOptionSelect={
              handleMultipleChoiceSelect
            }
          />
        );

      case "drag_drop":
      case "dragdrop":
        return (
          <DragDropMode
            key={modeKey}
            question={currentQuestion}
            showResult={showResult}
            isCorrect={isCorrect}
            onAnswerChange={
              handleDragDropAnswersChange
            }
            theme={theme}
          />
        );

      case "multiple_choice":
      default:
        return (
          <MultipleChoiceMode
            key={modeKey}
            question={currentQuestion}
            showResult={showResult}
            onOptionSelect={
              handleMultipleChoiceSelect
            }
          />
        );
    }
  }, [
    currentQuestion,
    questionKey,
    retryCount,
    currentQuestionType,
    showResult,
    handleMultipleChoiceSelect,
    isCorrect,
    handleDragDropAnswersChange,
    theme,
  ]);

  if (!currentQuestion && !showComplete) {
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
              item.question ||
              "",
            native:
              item.native ||
              item.question ||
              "",
            pronunciation:
              item.pronunciation ||
              null,
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
          type={type}
          lessonStats={lessonStats}
          onContinue={handleComplete}
          onReview={handleReview}
        />
      </SafeAreaView>
    );
  }

  const feedbackBackground =
    theme.surface;

  const feedbackBorder =
    showResult
      ? isCorrect
        ? theme.success
        : theme.error
      : theme.border;

  const feedbackColor =
    showResult
      ? isCorrect
        ? theme.success
        : theme.error
      : theme.text;

  const canCheckDragDrop =
    isDragDrop &&
    Boolean(currentQuestion?.sentence) &&
    (
      currentQuestion.sentence.match(
        /\[_____\]/g
      ) || []
    ).every(
      (_, index) =>
        Boolean(
          dragDropAnswers[
            `blank${index + 1}`
          ]
        )
    );

  const canCheckMultipleChoice =
    isMultipleChoice &&
    selectedOption !== null;

  const handleCheck = () => {
    if (isDragDrop) {
      evaluateDragDrop();
      return;
    }

    if (isMultipleChoice) {
      evaluateMultipleChoice();
    }
  };

  const canCheck =
    canCheckDragDrop ||
    canCheckMultipleChoice;

  const contentBottomPadding =
    bottomSheetHeight + 24;

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
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />

      <View style={styles.headerArea}>
        <ProgressHeader
          progress={progress}
          currentCount={
            currentQuestionIndex + 1
          }
          totalCount={totalQuestions}
          onClose={handleBack}
        />
      </View>

      <ScrollView
        style={styles.questionScroll}
        contentContainerStyle={[
          styles.contentContainer,
          {
            paddingBottom:
              contentBottomPadding,
          },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.questionHeader}>
          {isReview && (
            <View
              style={[
                styles.reviewBadge,
                {
                  backgroundColor:
                    theme.primary + "18",
                  borderColor:
                    theme.primary + "30",
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

      <View
        onLayout={(event) => {
          const height =
            event.nativeEvent.layout.height;

          if (
            Math.abs(
              height - bottomSheetHeight
            ) > 1
          ) {
            setBottomSheetHeight(height);
          }
        }}
        style={[
          styles.bottomSheet,
          {
            backgroundColor:
              feedbackBackground,
            borderTopColor:
              feedbackBorder,
            paddingBottom:
              Math.max(
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

        <View style={styles.buttonWrapper}>
          {!showResult ? (
            <Button
              title="CHECK"
              onPress={handleCheck}
              disabled={!canCheck}
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

  headerArea: {
    width: "100%",
  },

  questionScroll: {
    flex: 1,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  questionHeader: {
    marginBottom: 24,
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
    marginBottom: 7,
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  questionText: {
    marginBottom: 7,
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
    lineHeight: 22,
    fontWeight: "600",
  },

  buttonWrapper: {
    width: "100%",
  },
});
