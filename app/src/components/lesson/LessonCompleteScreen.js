import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import { ThemedText } from "../themed-text";
import ConfettiCelebration from "./ConfettiCelebration";

export default function LessonCompleteScreen({
  lessonStats = {},
  onContinue,
  onReview,
}) {
  const { theme } = useTheme();

  const [showConfetti, setShowConfetti] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  const wrongQuestions = Array.isArray(
    lessonStats.wrongQuestions
  )
    ? lessonStats.wrongQuestions
    : [];

  const correctAnswers = Number(
    lessonStats.correctAnswers || 0
  );

  const totalQuestions = Number(
    lessonStats.totalQuestions ||
      lessonStats.questions?.length ||
      0
  );

  const hasScore = totalQuestions > 0;

  const scorePercentage = hasScore
    ? Math.round(
        (correctAnswers / totalQuestions) * 100
      )
    : 100;

  const wordsLearned =
    lessonStats.wordsLearned ||
    lessonStats.correctAnswers ||
    lessonStats.totalQuestions ||
    0;

  const hasWrongQuestions =
    wrongQuestions.length > 0;

  const performanceLabel =
    scorePercentage >= 90
      ? "Excellent work!"
      : scorePercentage >= 70
      ? "Great job!"
      : scorePercentage >= 50
      ? "Good effort!"
      : "Keep practicing!";

  const performanceIcon =
    scorePercentage >= 90
      ? "trophy-outline"
      : scorePercentage >= 70
      ? "sparkles-outline"
      : "school-outline";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 350);

    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 55,
        friction: 7,
        useNativeDriver: true,
      }),

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    return () => clearTimeout(timer);
  }, [scaleAnim, fadeAnim, slideAnim]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Celebration */}
        <Animated.View
          style={[
            styles.celebration,
            {
              opacity: fadeAnim,
              transform: [
                { scale: scaleAnim },
                { translateY: slideAnim },
              ],
            },
          ]}
        >
          <View
            style={[
              styles.celebrationIcon,
              {
                backgroundColor: theme.primary,
              },
            ]}
          >
            <Ionicons
              name="checkmark"
              size={42}
              color="#FFFFFF"
            />
          </View>

          <View
            style={[
              styles.completePill,
              {
                backgroundColor:
                  theme.primary + "15",
              },
            ]}
          >
            <Ionicons
              name="sparkles"
              size={14}
              color={theme.primary}
            />

            <ThemedText
              style={[
                styles.completePillText,
                {
                  color: theme.primary,
                },
              ]}
            >
              LESSON COMPLETE
            </ThemedText>
          </View>

          <ThemedText style={styles.completeTitle}>
            You did it!
          </ThemedText>

          <ThemedText
            style={[
              styles.completeSubtitle,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            {performanceLabel} Keep building your
            language skills.
          </ThemedText>
        </Animated.View>

        {/* Score */}
        {hasScore && (
          <Animated.View
            style={[
              styles.scoreCard,
              {
                opacity: fadeAnim,
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            <View style={styles.scoreMain}>
              <ThemedText
                style={[
                  styles.scoreNumber,
                  {
                    color: theme.primary,
                  },
                ]}
              >
                {scorePercentage}%
              </ThemedText>

              <ThemedText
                style={[
                  styles.scoreLabel,
                  {
                    color: theme.secondaryText,
                  },
                ]}
              >
                QUIZ SCORE
              </ThemedText>
            </View>

            <View
              style={[
                styles.scoreDivider,
                {
                  backgroundColor: theme.border,
                },
              ]}
            />

            <View style={styles.scoreStats}>
              <View style={styles.miniStat}>
                <View
                  style={[
                    styles.miniStatIcon,
                    {
                      backgroundColor:
                        theme.primary + "15",
                    },
                  ]}
                >
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={20}
                    color={theme.primary}
                  />
                </View>

                <View>
                  <ThemedText
                    style={styles.miniStatValue}
                  >
                    {correctAnswers}
                  </ThemedText>

                  <ThemedText
                    style={[
                      styles.miniStatLabel,
                      {
                        color:
                          theme.secondaryText,
                      },
                    ]}
                  >
                    Correct
                  </ThemedText>
                </View>
              </View>

              <View style={styles.miniStat}>
                <View
                  style={[
                    styles.miniStatIcon,
                    {
                      backgroundColor:
                        theme.primary + "15",
                    },
                  ]}
                >
                  <Ionicons
                    name="book-outline"
                    size={20}
                    color={theme.primary}
                  />
                </View>

                <View>
                  <ThemedText
                    style={styles.miniStatValue}
                  >
                    {wordsLearned}
                  </ThemedText>

                  <ThemedText
                    style={[
                      styles.miniStatLabel,
                      {
                        color:
                          theme.secondaryText,
                      },
                    ]}
                  >
                    Learned
                  </ThemedText>
                </View>
              </View>
            </View>
          </Animated.View>
        )}

        {/* Simple completion summary when there is no quiz */}
        {!hasScore && (
          <Animated.View
            style={[
              styles.learningCard,
              {
                opacity: fadeAnim,
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            <View
              style={[
                styles.learningIcon,
                {
                  backgroundColor:
                    theme.primary + "15",
                },
              ]}
            >
              <Ionicons
                name="book-outline"
                size={26}
                color={theme.primary}
              />
            </View>

            <View style={styles.learningContent}>
              <ThemedText style={styles.learningValue}>
                {wordsLearned}
              </ThemedText>

              <ThemedText
                style={[
                  styles.learningLabel,
                  {
                    color: theme.secondaryText,
                  },
                ]}
              >
                {wordsLearned === 1
                  ? "word learned"
                  : "words learned"}
              </ThemedText>
            </View>

            <Ionicons
              name="checkmark-circle"
              size={26}
              color={theme.primary}
            />
          </Animated.View>
        )}

        {/* Performance */}
        <Animated.View
          style={[
            styles.performanceCard,
            {
              opacity: fadeAnim,
              backgroundColor:
                theme.primary + "0D",
              borderColor:
                theme.primary + "20",
            },
          ]}
        >
          <View
            style={[
              styles.performanceIcon,
              {
                backgroundColor:
                  theme.primary + "18",
              },
            ]}
          >
            <Ionicons
              name={performanceIcon}
              size={23}
              color={theme.primary}
            />
          </View>

          <View style={styles.performanceContent}>
            <ThemedText
              style={styles.performanceTitle}
            >
              {performanceLabel}
            </ThemedText>

            <ThemedText
              style={[
                styles.performanceText,
                {
                  color: theme.secondaryText,
                },
              ]}
            >
              Consistent practice is the best way
              to remember what you learn.
            </ThemedText>
          </View>
        </Animated.View>

        {/* Keep Practicing */}
        {hasWrongQuestions && (
          <Animated.View
            style={[
              styles.practiceSection,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <View style={styles.sectionHeader}>
              <View style={styles.sectionHeaderText}>
                <ThemedText
                  style={styles.sectionTitle}
                >
                  Keep practicing
                </ThemedText>

                <ThemedText
                  style={[
                    styles.sectionSubtitle,
                    {
                      color:
                        theme.secondaryText,
                    },
                  ]}
                >
                  Review these words to strengthen
                  your memory.
                </ThemedText>
              </View>

              <View
                style={[
                  styles.practiceCount,
                  {
                    backgroundColor:
                      theme.error + "12",
                  },
                ]}
              >
                <ThemedText
                  style={[
                    styles.practiceCountText,
                    {
                      color: theme.error,
                    },
                  ]}
                >
                  {wrongQuestions.length}
                </ThemedText>
              </View>
            </View>

            <View
              style={[
                styles.wordsList,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                },
              ]}
            >
              {wrongQuestions.map(
                (question, index) => (
                  <View
                    key={
                      question.id ||
                      `${
                        question.english ||
                        question.question ||
                        "word"
                      }-${index}`
                    }
                    style={[
                      styles.wordRow,
                      index <
                        wrongQuestions.length - 1 && {
                        borderBottomColor:
                          theme.border,
                        borderBottomWidth: 1,
                      },
                    ]}
                  >
                    {/* Retry Icon */}
                    <View
                      style={[
                        styles.wordIcon,
                        {
                          backgroundColor:
                            theme.error + "12",
                        },
                      ]}
                    >
                      <Ionicons
                        name="refresh-outline"
                        size={18}
                        color={theme.error}
                      />
                    </View>

                    {/* Word Content */}
                    <View style={styles.wordContent}>
                      {/* English Question */}
                      <ThemedText
                        style={styles.wordEnglish}
                      >
                        {question.english ||
                          question.question ||
                          "Word"}
                      </ThemedText>

                      {/* Native Answer */}
                      <ThemedText
                        style={styles.wordNative}
                      >
                        {question.native || "—"}
                      </ThemedText>

                      {/* Pronunciation */}
                      {question.pronunciation ? (
                        <ThemedText
                          style={[
                            styles.wordPronunciation,
                            {
                              color:
                                theme.secondaryText,
                            },
                          ]}
                        >
                          {question.pronunciation}
                        </ThemedText>
                      ) : null}
                    </View>

                    {/* Attempts */}
                    {question.attempts > 0 && (
                      <View
                        style={[
                          styles.attemptBadge,
                          {
                            backgroundColor:
                              theme.error + "12",
                          },
                        ]}
                      >
                        <ThemedText
                          style={[
                            styles.attemptText,
                            {
                              color: theme.error,
                            },
                          ]}
                        >
                          {question.attempts}x
                        </ThemedText>
                      </View>
                    )}
                  </View>
                )
              )}
            </View>
          </Animated.View>
        )}

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Bottom Actions */}
      <Animated.View
        style={[
          styles.actionContainer,
          {
            opacity: fadeAnim,
            backgroundColor: theme.background,
            borderTopColor: theme.border,
          },
        ]}
      >
        {hasWrongQuestions && (
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={onReview}
            style={styles.reviewButton}
          >
            <Ionicons
              name="refresh-outline"
              size={19}
              color={theme.primary}
            />

            <ThemedText
              style={[
                styles.reviewButtonText,
                {
                  color: theme.primary,
                },
              ]}
            >
              Practice Again
            </ThemedText>
          </TouchableOpacity>
        )}

        <Button
          title="CONTINUE"
          variant="primary"
          onPress={onContinue}
        />
      </Animated.View>

      <ConfettiCelebration
        active={showConfetti}
        count={100}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 180,
  },

  /* Celebration */

  celebration: {
    alignItems: "center",
    marginBottom: 28,
  },

  celebrationIcon: {
    width: 82,
    height: 82,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  completePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },

  completePillText: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },

  completeTitle: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "900",
    textAlign: "center",
  },

  completeSubtitle: {
    maxWidth: 320,
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    textAlign: "center",
  },

  /* Score */

  scoreCard: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 132,
    padding: 18,
    borderWidth: 1,
    borderRadius: 22,
    marginBottom: 14,
  },

  scoreMain: {
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreNumber: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "900",
  },

  scoreLabel: {
    marginTop: 3,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.8,
  },

  scoreDivider: {
    width: 1,
    height: 70,
    marginHorizontal: 18,
  },

  scoreStats: {
    flex: 1,
    gap: 14,
  },

  miniStat: {
    flexDirection: "row",
    alignItems: "center",
  },

  miniStatIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  miniStatValue: {
    fontSize: 16,
    fontWeight: "800",
  },

  miniStatLabel: {
    marginTop: 1,
    fontSize: 11,
    fontWeight: "600",
  },

  /* Vocabulary completion */

  learningCard: {
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 14,
  },

  learningIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  learningContent: {
    flex: 1,
  },

  learningValue: {
    fontSize: 20,
    fontWeight: "900",
  },

  learningLabel: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "600",
  },

  /* Performance */

  performanceCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 28,
  },

  performanceIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  performanceContent: {
    flex: 1,
    minWidth: 0,
  },

  performanceTitle: {
    fontSize: 14,
    fontWeight: "800",
  },

  performanceText: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
  },

  /* Keep Practicing */

  practiceSection: {
    marginBottom: 20,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  sectionHeaderText: {
    flex: 1,
    minWidth: 0,
    paddingRight: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "900",
  },

  sectionSubtitle: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    maxWidth: 290,
  },

  practiceCount: {
    minWidth: 34,
    height: 34,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  practiceCountText: {
    fontSize: 13,
    fontWeight: "900",
  },

  wordsList: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },

  wordRow: {
    width: "100%",
    minHeight: 76,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  wordIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    flexShrink: 0,
  },

  wordContent: {
    flex: 1,
    minWidth: 0,
    paddingRight: 8,
  },

  wordEnglish: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "800",
    flexShrink: 1,
  },

  wordNative: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    flexShrink: 1,
  },

  wordPronunciation: {
    marginTop: 2,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    flexShrink: 1,
  },

  attemptBadge: {
    minWidth: 34,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginLeft: 4,
  },

  attemptText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "800",
  },

  bottomSpace: {
    height: 20,
  },

  /* Bottom Actions */

  actionContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
    borderTopWidth: 1,
    gap: 10,
  },

  reviewButton: {
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  reviewButtonText: {
    fontSize: 14,
    fontWeight: "800",
  },
});