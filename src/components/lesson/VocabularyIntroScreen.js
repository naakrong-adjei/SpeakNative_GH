import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router/react-navigation";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitConfirmVisible, setExitConfirmVisible] =
    useState(false);
  const [direction, setDirection] =
    useState("en-native");
  const [completed, setCompleted] = useState(0);
  const [showComplete, setShowComplete] = useState(false);

  const totalCards = vocabulary?.length || 0;

  const handleCardComplete = (grade) => {
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

    if (
      currentIndex <
      totalCards - 1
    ) {
      setCurrentIndex(
        (prev) => prev + 1
      );
    } else {
      setShowComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex <= 0) {
      return;
    }

    setCurrentIndex(
      (prev) => prev - 1
    );

    setCompleted((prev) =>
      Math.max(0, prev - 1)
    );
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
      return;
    }

    if (onStartLesson) {
      onStartLesson();
    }
  };

  const handleBack = () => {
    setExitConfirmVisible(true);
  };

  const handleFlipDirection = () => {
    setDirection((prev) =>
      prev === "en-native"
        ? "native-en"
        : "en-native"
    );
  };

  const handleContinueToLesson = () => {
    if (onStartLesson) {
      onStartLesson();
    }
  };

  const currentWord =
    vocabulary?.[currentIndex];

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

  if (totalCards === 0) {
    if (onStartLesson) {
      onStartLesson();
    }

    return null;
  }

  if (showComplete) {
    return (
      <LessonCompleteScreen
        onContinue={
          handleContinueToLesson
        }
        type="lesson"
      />
    );
  }

  return (
    <SafeAreaView
      edges={["left", "right", "bottom"]}
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

      <View style={styles.headerContainer}>
        <ProgressHeader
          progress={progressPercent}
          currentCount={Math.min(
            currentIndex + 1,
            totalCards
          )}
          totalCount={totalCards}
          onClose={handleBack}
        />
      </View>

      <View style={styles.mainContent}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={
            styles.scrollContent
          }
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View
            style={
              styles.instructionContainer
            }
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
            <View
              style={
                styles.flashcardContainer
              }
            >
              <Flashcard
                key={
                  currentWord.id ||
                  `word-${currentIndex}`
                }
                word={currentWord}
                direction={direction}
              />
            </View>
          )}
        </ScrollView>

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
                      currentIndex === 0
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    width: "100%",
  },

  mainContent: {
    flex: 1,
    minHeight: 0,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },

  instructionContainer: {
    marginBottom: 16,
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 300,
  },

  bottomActions: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
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
