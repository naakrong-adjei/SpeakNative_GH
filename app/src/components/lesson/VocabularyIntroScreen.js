import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "../../context/ThemeContext";

import ConfirmDialog from "../ui/ConfirmDialog";
import Flashcard from "./Flashcard";
import LessonCompleteScreen from "./LessonCompleteScreen";
import ProgressHeader from "./ProgressHeader";

export default function VocabularyIntroScreen({
  vocabulary,
  onStartLesson,
  onSkip,
}) {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [exitConfirmVisible, setExitConfirmVisible] =
    useState(false);

  const [direction, setDirection] =
    useState("en-native");

  const [completed, setCompleted] =
    useState(0);

  const [showComplete, setShowComplete] =
    useState(false);

  const fadeAnim = useRef(
    new Animated.Value(1)
  ).current;

  const totalCards =
    vocabulary?.length || 0;

  /**
   * Complete the current vocabulary card.
   */
  const handleCardComplete = (grade) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      /**
       * Count cards that have been reviewed.
       */
      if (
        grade === "good" ||
        grade === "again"
      ) {
        setCompleted((prev) =>
          Math.min(
            prev + 1,
            totalCards
          )
        );
      }

      /**
       * Move to the next card.
       */
      if (
        currentIndex <
        totalCards - 1
      ) {
        setCurrentIndex(
          (prev) => prev + 1
        );

        /**
         * Always reset the card animation
         * for the next word.
         */
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        /**
         * Vocabulary section is finished.
         *
         * This does NOT complete the actual
         * lesson. It only shows the vocabulary
         * completion screen.
         */
        setShowComplete(true);
      }
    });
  };

  /**
   * Go back to the previous vocabulary card.
   */
  const handlePrevious = () => {
    if (currentIndex <= 0) {
      return;
    }

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex(
        (prev) => prev - 1
      );

      /**
       * We are returning to a previously
       * completed card, so reduce the
       * completed counter.
       */
      setCompleted((prev) =>
        Math.max(0, prev - 1)
      );

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  /**
   * Skip vocabulary.
   */
  const handleSkip = () => {
    if (onSkip) {
      onSkip();
      return;
    }

    if (onStartLesson) {
      onStartLesson();
    }
  };

  /**
   * Exit vocabulary.
   */
  const handleBack = () => {
    setExitConfirmVisible(true);
  };

  /**
   * Change translation direction.
   */
  const handleFlipDirection = () => {
    setDirection((prev) =>
      prev === "en-native"
        ? "native-en"
        : "en-native"
    );
  };

  const currentWord =
    vocabulary?.[currentIndex];

  /**
   * Determine the native language name
   * from the vocabulary data.
   */
  const getNativeLanguageName = () => {
    if (
      !vocabulary ||
      vocabulary.length === 0
    ) {
      return "Twi";
    }

    const sample =
      currentWord ||
      vocabulary[0];

    return (
      sample?.nativeLanguage ||
      sample?.language ||
      sample?.nativeLanguageName ||
      "Twi"
    );
  };

  const nativeLanguageName =
    getNativeLanguageName();

  const progressPercent =
    totalCards === 0
      ? 0
      : (completed / totalCards) * 100;

  /**
   * No vocabulary.
   *
   * Immediately move to the lesson.
   */
  if (totalCards === 0) {
    if (onStartLesson) {
      onStartLesson();
    }

    return null;
  }

  /**
   * Vocabulary completion screen.
   *
   * Continue moves into LessonContent.
   */
  if (showComplete) {
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
          lessonStats={{
            accuracy: 100,
            correctAnswers:
              totalCards,
            totalQuestions:
              totalCards,
            wrongQuestions: [],
          }}
          onContinue={
            onStartLesson ||
            (() => navigation.goBack())
          }
        />
      </SafeAreaView>
    );
  }

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
      <ConfirmDialog
        visible={exitConfirmVisible}
        title="Exit Practice"
        description="Are you sure you want to exit? Your progress will be lost."
        cancelLabel="Cancel"
        confirmLabel="Exit"
        destructive
        onCancel={() =>
          setExitConfirmVisible(false)
        }
        onConfirm={() => {
          setExitConfirmVisible(false);
          navigation.goBack();
        }}
      />

      <ProgressHeader
        progress={progressPercent}
        currentCount={Math.min(
          currentIndex + 1,
          totalCards
        )}
        totalCount={totalCards}
        onClose={handleBack}
      />

      <ScrollView
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={
          false
        }
      >
        <View
          style={styles.instructionContainer}
        >
          <Text
            style={[
              styles.instructionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Lesson Vocabulary
          </Text>

          <Text
            style={[
              styles.instructionText,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            Tap the card to flip it. Learn
            the words before starting the
            lesson.
          </Text>

          <TouchableOpacity
            onPress={
              handleFlipDirection
            }
            style={[
              styles.flipDirectionButton,
              {
                borderColor:
                  theme.border,
              },
            ]}
            activeOpacity={0.7}
          >
            <Ionicons
              name="swap-horizontal"
              size={18}
              color={theme.primary}
            />

            <Text
              style={[
                styles.flipDirectionText,
                {
                  color:
                    theme.primary,
                },
              ]}
            >
              {direction === "en-native"
                ? `${nativeLanguageName} → English`
                : `English → ${nativeLanguageName}`}
            </Text>
          </TouchableOpacity>
        </View>

        {currentWord && (
          <Animated.View
            style={[
              styles.flashcardContainer,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <Flashcard
              key={
                currentWord.id ||
                currentIndex
              }
              word={currentWord}
              direction={direction}
            />
          </Animated.View>
        )}

        <View
          style={styles.bottomActions}
        >
          <View
            style={styles.navigationButtons}
          >
            <TouchableOpacity
              onPress={
                handlePrevious
              }
              disabled={
                currentIndex === 0
              }
              activeOpacity={0.8}
              style={[
                styles.navButton,
                styles.previousButton,
                {
                  backgroundColor:
                    theme.surface,

                  borderColor:
                    theme.border,

                  opacity:
                    currentIndex === 0
                      ? 0.5
                      : 1,
                },
              ]}
            >
              <Text
                style={[
                  styles.navButtonText,
                  {
                    color:
                      currentIndex ===
                      0
                        ? theme.secondaryText
                        : theme.text,
                  },
                ]}
              >
                Previous
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleCardComplete(
                  "good"
                )
              }
              activeOpacity={0.8}
              style={[
                styles.navButton,
                styles.nextButton,
                {
                  backgroundColor:
                    theme.primary,
                },
              ]}
            >
              <Text
                style={[
                  styles.navButtonText,
                  {
                    color: "#FFFFFF",
                  },
                ]}
              >
                {currentIndex <
                totalCards - 1
                  ? "Next"
                  : "Done"}
              </Text>
            </TouchableOpacity>
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

  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 30,
  },

  instructionContainer: {
    marginBottom: 20,
    paddingHorizontal: 8,
    alignItems: "center",
  },

  instructionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
    textAlign: "center",
  },

  instructionText: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 12,
  },

  flipDirectionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,

    paddingHorizontal: 14,
    paddingVertical: 6,

    borderRadius: 16,
    borderWidth: 1,
  },

  flipDirectionText: {
    fontSize: 12,
    fontWeight: "600",
  },

  flashcardContainer: {
    flex: 1,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 12,
    minHeight: 300,
  },

  bottomActions: {
    marginTop: "auto",
    paddingTop: 16,
    gap: 12,
  },

  navigationButtons: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },

  navButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 2,
  },

  previousButton: {
    borderColor: "#d1d5db",
  },

  nextButton: {
    borderColor: "transparent",
  },

  navButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});