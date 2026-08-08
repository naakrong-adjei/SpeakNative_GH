// components/lesson/VocabularyIntroScreen.js
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
  View
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitConfirmVisible, setExitConfirmVisible] = useState(false);
  const [direction, setDirection] = useState("en-native");
  const [completed, setCompleted] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const totalCards = vocabulary?.length || 0;

  const handleCardComplete = (grade) => {
    // Animate out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // Update state
      if (grade === "good" || grade === "again") {
        setCompleted((prev) => Math.min(prev + 1, totalCards));
      }

      if (currentIndex < totalCards - 1) {
        setCurrentIndex((prev) => prev + 1);
        setIsFlipped(false);
        // Animate in
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        // All cards reviewed - show the reusable completion screen
        setShowComplete(true);
      }
    });
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      // Animate out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsFlipped(false);
        // Decrease completed count if this card was previously marked as completed
        if (completed > 0) {
          setCompleted((prev) => Math.max(0, prev - 1));
        }
        // Animate in
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const handleSkip = () => {
    // Navigate directly to the lesson content (quiz)
    if (onSkip) {
      onSkip();
    } else if (onStartLesson) {
      onStartLesson();
    }
  };

  const handleBack = () => {
    setExitConfirmVisible(true);
  };

  const handleFlipDirection = () => {
    setDirection(direction === "en-native" ? "native-en" : "en-native");
  };

  const currentWord = vocabulary?.[currentIndex];

  // Helper to dynamically derive the target language name from vocabulary metadata
  const getNativeLanguageName = () => {
    if (!vocabulary || vocabulary.length === 0) return "Twi";
    const sample = currentWord || vocabulary[0];
    return (
      sample?.nativeLanguage ||
      sample?.language ||
      sample?.nativeLanguageName ||
      "Twi"
    );
  };

  const nativeLanguageName = getNativeLanguageName();
  const progressPercent = totalCards === 0 ? 0 : (completed / totalCards) * 100;

  if (totalCards === 0) {
    if (onStartLesson) {
      onStartLesson();
    }
    return null;
  }

  // Show the reusable completion screen when all vocabulary cards are done
  if (showComplete) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <LessonCompleteScreen
          lessonStats={{
            accuracy: 100,
            correctAnswers: totalCards,
            totalQuestions: totalCards,
            wrongQuestions: [],
          }}
          onContinue={onStartLesson || (() => navigation.goBack())}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ConfirmDialog
        visible={exitConfirmVisible}
        title="Exit Practice"
        description="Are you sure you want to exit? Your progress will be lost."
        cancelLabel="Cancel"
        confirmLabel="Exit"
        destructive
        onCancel={() => setExitConfirmVisible(false)}
        onConfirm={() => {
          setExitConfirmVisible(false);
          navigation.goBack();
        }}
      />

      <ProgressHeader
        progress={progressPercent}
        currentCount={Math.min(currentIndex + 1, totalCards)}
        totalCount={totalCards}
        onClose={handleBack}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.instructionContainer}>
          <Text style={[styles.instructionTitle, { color: theme.text }]}>
            Lesson Vocabulary
          </Text>
          <Text style={[styles.instructionText, { color: theme.secondaryText }]}>
            Tap the card to flip it. Learn the words before starting the lesson.
          </Text>

          {/* Flip Direction Button */}
          <TouchableOpacity
            onPress={handleFlipDirection}
            style={[styles.flipDirectionButton, { borderColor: theme.border }]}
          >
            <Ionicons name="swap-horizontal" size={18} color={theme.primary} />
            <Text style={[styles.flipDirectionText, { color: theme.primary }]}>
              {direction === "en-native"
                ? `${nativeLanguageName} → English`
                : `English → ${nativeLanguageName}`}
            </Text>
          </TouchableOpacity>
        </View>

        {currentWord && (
          <Animated.View style={[styles.flashcardContainer, { opacity: fadeAnim }]}>
            <Flashcard
              key={currentWord.id || currentIndex}
              word={currentWord}
              direction={direction}
            />
          </Animated.View>
        )}

        <View style={styles.bottomActions}>
          {/* Navigation Buttons */}
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              onPress={handlePrevious}
              disabled={currentIndex === 0}
              style={[
                styles.navButton,
                styles.previousButton,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                  opacity: currentIndex === 0 ? 0.5 : 1,
                },
              ]}
            >
              <Text
                style={[
                  styles.navButtonText,
                  {
                    color: currentIndex === 0 ? theme.secondaryText : theme.text,
                  },
                ]}
              >
                Previous
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleCardComplete("good")}
              style={[
                styles.navButton,
                styles.nextButton,
                { backgroundColor: theme.primary },
              ]}
            >
              <Text style={[styles.navButtonText, { color: "#FFF" }]}>
                {currentIndex < totalCards - 1 ? "Next" : "Done"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Skip to Lesson Button */}
          <TouchableOpacity
            onPress={handleSkip}
            style={({ pressed }) => [
              styles.skipButton,
              pressed && styles.skipButtonPressed,
            ]}
          >
            <Text style={[styles.skipButtonText, { color: theme.secondaryText }]}>
              Skip to Lesson
            </Text>
          </TouchableOpacity>
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
  skipButton: {
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  skipButtonPressed: {
    opacity: 0.6,
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
