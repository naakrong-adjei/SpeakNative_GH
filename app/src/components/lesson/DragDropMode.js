import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "../../context/ThemeContext";

const BLANK_PATTERN = /\[_____\]/g;

export default function DragDropMode({
  question,
  onSubmit,
  showResult = false,
  isCorrect,
}) {
  const { theme } = useTheme();

  /*
   * ---------------------------------------------------------
   * QUESTION DATA
   * ---------------------------------------------------------
   */

  const items = useMemo(() => {
    return Array.isArray(question?.items)
      ? question.items.filter((item) => item?.id)
      : [];
  }, [question?.items]);

  /*
   * Build blank IDs.
   *
   * IMPORTANT:
   * The blank IDs must use the same format as correctDrops.
   *
   * If correctDrops contains:
   *
   *   { blankId: "blank1", itemId: "hello" }
   *
   * then the first blank must also be "blank1".
   */

  const blanks = useMemo(() => {
    const sentence = question?.sentence || "";
    const matches = sentence.match(BLANK_PATTERN) || [];

    return matches.map((_, index) => ({
      id: `blank${index + 1}`,
      index,
    }));
  }, [question?.sentence]);

  /*
   * Build the correct answer map.
   *
   * Supports:
   *
   * correctDrops: [
   *   { blankId: "blank1", itemId: "item1" },
   *   { blankId: "blank2", itemId: "item2" }
   * ]
   *
   * and the older:
   *
   * correctDrop: {
   *   itemId: "item1"
   * }
   */

  const correctMap = useMemo(() => {
    const map = {};

    const drops = Array.isArray(question?.correctDrops)
      ? question.correctDrops
      : question?.correctDrop
      ? [question.correctDrop]
      : [];

    drops.forEach((drop, index) => {
      if (!drop?.itemId) {
        return;
      }

      /*
       * Prefer the explicit blankId.
       * Otherwise fall back to blank1, blank2, etc.
       */
      const blankId = drop.blankId || `blank${index + 1}`;

      map[blankId] = drop.itemId;
    });

    return map;
  }, [question?.correctDrops, question?.correctDrop]);

  /*
   * ---------------------------------------------------------
   * STATE
   * ---------------------------------------------------------
   */

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  /*
   * Reset whenever a new question is loaded.
   */

  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
    scaleAnim.setValue(1);
  }, [question?.id, question?.sentence, scaleAnim]);

  /*
   * ---------------------------------------------------------
   * HELPERS
   * ---------------------------------------------------------
   */

  const getItemById = useCallback(
    (itemId) => {
      if (!itemId) {
        return null;
      }

      return (
        items.find((item) => item.id === itemId) || null
      );
    },
    [items]
  );

  const triggerBounce = useCallback(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim]);

  /*
   * ---------------------------------------------------------
   * ANSWER EVALUATION
   * ---------------------------------------------------------
   */

  const evaluateAnswers = useCallback(
    (finalAnswers) => {
      /*
       * Prevent duplicate submissions.
       */
      if (submitted || showResult) {
        return;
      }

      /*
       * Make sure every blank has an answer.
       */
      const allBlanksFilled =
        blanks.length > 0 &&
        blanks.every((blank) => {
          return Boolean(finalAnswers[blank.id]);
        });

      if (!allBlanksFilled) {
        return;
      }

      /*
       * Check every blank against correctMap.
       */
      const allCorrect = blanks.every((blank) => {
        const selectedItemId =
          finalAnswers[blank.id];

        const correctItemId =
          correctMap[blank.id];

        return (
          Boolean(selectedItemId) &&
          Boolean(correctItemId) &&
          selectedItemId === correctItemId
        );
      });

      console.log("DragDrop evaluation:", {
        answers: finalAnswers,
        correctMap,
        allCorrect,
      });

      setSubmitted(true);

      onSubmit?.(allCorrect);
    },
    [
      submitted,
      showResult,
      blanks,
      correctMap,
      onSubmit,
    ]
  );

  /*
   * ---------------------------------------------------------
   * SELECT ANSWER
   * ---------------------------------------------------------
   */

  const handleItemPress = useCallback(
    (item) => {
      if (
        submitted ||
        showResult ||
        !item?.id ||
        blanks.length === 0
      ) {
        return;
      }

      /*
       * Don't allow the same item to be selected twice.
       */
      const alreadyUsed = Object.values(answers).includes(
        item.id
      );

      if (alreadyUsed) {
        return;
      }

      /*
       * Find the first empty blank.
       */
      const emptyBlank = blanks.find(
        (blank) => !answers[blank.id]
      );

      if (!emptyBlank) {
        return;
      }

      const updatedAnswers = {
        ...answers,
        [emptyBlank.id]: item.id,
      };

      setAnswers(updatedAnswers);
      triggerBounce();

      /*
       * Evaluate only after every blank has been filled.
       */
      const allFilled = blanks.every(
        (blank) => Boolean(updatedAnswers[blank.id])
      );

      if (allFilled) {
        evaluateAnswers(updatedAnswers);
      }
    },
    [
      submitted,
      showResult,
      blanks,
      answers,
      triggerBounce,
      evaluateAnswers,
    ]
  );

  /*
   * ---------------------------------------------------------
   * REMOVE ANSWER
   * ---------------------------------------------------------
   */

  const handleSlotPress = useCallback(
    (blankId) => {
      if (
        submitted ||
        showResult ||
        !answers[blankId]
      ) {
        return;
      }

      setAnswers((currentAnswers) => {
        const updatedAnswers = {
          ...currentAnswers,
        };

        delete updatedAnswers[blankId];

        return updatedAnswers;
      });
    },
    [submitted, showResult, answers]
  );

  /*
   * ---------------------------------------------------------
   * USED ITEMS
   * ---------------------------------------------------------
   */

  const usedItemIds = useMemo(() => {
    return new Set(Object.values(answers));
  }, [answers]);

  /*
   * ---------------------------------------------------------
   * RENDER SENTENCE
   * ---------------------------------------------------------
   */

  const renderSentence = useCallback(() => {
    const sentence = question?.sentence || "";

    const parts = sentence.split(BLANK_PATTERN);

    /*
     * If the sentence doesn't contain a blank,
     * don't try to manufacture one.
     */
    if (parts.length === 1) {
      return (
        <Text
          style={[
            styles.sentenceText,
            { color: theme.text },
          ]}
        >
          {sentence}
        </Text>
      );
    }

    return (
      <View style={styles.sentenceWrapper}>
        {parts.map((part, index) => {
          const blank = blanks[index];

          const selectedItemId = blank
            ? answers[blank.id]
            : null;

          const selectedItem = getItemById(
            selectedItemId
          );

          const correctItemId = blank
            ? correctMap[blank.id]
            : null;

          const isFinished =
            submitted || showResult;

          const slotHasAnswer =
            Boolean(selectedItemId);

          const slotIsCorrect =
            isFinished &&
            slotHasAnswer &&
            selectedItemId === correctItemId;

          const slotIsIncorrect =
            isFinished &&
            slotHasAnswer &&
            selectedItemId !== correctItemId;

          let backgroundColor = `${theme.primary}1A`;
          let borderColor = theme.primary;
          let bottomBorderColor =
            theme.primaryDark || theme.primary;
          let textColor = theme.primary;

          if (slotIsCorrect) {
            backgroundColor = theme.success;
            borderColor = theme.success;
            bottomBorderColor = theme.success;
            textColor = "#FFFFFF";
          } else if (slotIsIncorrect) {
            backgroundColor = theme.error;
            borderColor = theme.error;
            bottomBorderColor =
              theme.errorDark || theme.error;
            textColor = "#FFFFFF";
          }

          return (
            <React.Fragment key={`part-${index}`}>
              {part !== "" && (
                <Text
                  style={[
                    styles.sentenceText,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {part}
                </Text>
              )}

              {blank && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    handleSlotPress(blank.id)
                  }
                  disabled={
                    isFinished || !slotHasAnswer
                  }
                  accessibilityRole="button"
                  accessibilityLabel={
                    selectedItem
                      ? `Answer: ${selectedItem.text}`
                      : "Empty answer slot"
                  }
                  accessibilityHint={
                    selectedItem
                      ? "Tap to remove this answer"
                      : undefined
                  }
                  accessibilityState={{
                    disabled:
                      isFinished || !slotHasAnswer,
                  }}
                  style={[
                    styles.slotContainer,
                    {
                      borderBottomColor:
                        slotHasAnswer
                          ? bottomBorderColor
                          : theme.border,
                    },
                  ]}
                >
                  {selectedItem ? (
                    <Animated.View
                      style={{
                        transform: [
                          {
                            scale: scaleAnim,
                          },
                        ],
                      }}
                    >
                      <View
                        style={[
                          styles.duoTile,
                          styles.slotTile,
                          {
                            backgroundColor,
                            borderColor,
                            borderBottomColor:
                              bottomBorderColor,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.tileText,
                            {
                              color: textColor,
                            },
                          ]}
                        >
                          {selectedItem.text}
                        </Text>
                      </View>
                    </Animated.View>
                  ) : (
                    <View
                      style={[
                        styles.slotPlaceholder,
                        {
                          backgroundColor:
                            `${theme.primary}08`,
                        },
                      ]}
                    />
                  )}
                </TouchableOpacity>
              )}
            </React.Fragment>
          );
        })}
      </View>
    );
  }, [
    question?.sentence,
    blanks,
    answers,
    submitted,
    showResult,
    correctMap,
    theme,
    getItemById,
    handleSlotPress,
    scaleAnim,
  ]);

  /*
   * ---------------------------------------------------------
   * RENDER ANSWER BANK
   * ---------------------------------------------------------
   */

  const renderAnswerBank = useMemo(() => {
    return items.map((item) => {
      const isUsed = usedItemIds.has(item.id);

      return (
        <View
          key={item.id}
          style={styles.tileWrapper}
        >
          {isUsed ? (
            <View
              style={[
                styles.tilePlaceholder,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                },
              ]}
            />
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                handleItemPress(item)
              }
              disabled={
                submitted || showResult
              }
              accessibilityRole="button"
              accessibilityLabel={`Select ${item.text}`}
              accessibilityState={{
                disabled:
                  submitted || showResult,
              }}
            >
              <View
                style={[
                  styles.duoTile,
                  styles.bankTile,
                  {
                    backgroundColor:
                      theme.surface,
                    borderColor: theme.border,
                    borderBottomColor:
                      theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.tileText,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {item.text}
                </Text>

                {item.meaning ? (
                  <Text
                    style={[
                      styles.tileMeaning,
                      {
                        color:
                          theme.secondaryText,
                      },
                    ]}
                  >
                    {item.meaning}
                  </Text>
                ) : null}
              </View>
            </TouchableOpacity>
          )}
        </View>
      );
    });
  }, [
    items,
    usedItemIds,
    theme,
    submitted,
    showResult,
    handleItemPress,
  ]);

  /*
   * ---------------------------------------------------------
   * INVALID QUESTION
   * ---------------------------------------------------------
   */

  if (!question) {
    return null;
  }

  /*
   * ---------------------------------------------------------
   * UI
   * ---------------------------------------------------------
   */

  return (
    <View style={styles.container}>
      <View
        style={styles.sentenceCard}
        accessibilityRole="text"
      >
        {renderSentence()}
      </View>

      <View style={styles.bankContainer}>
        {renderAnswerBank}
      </View>
    </View>
  );
}

/*
 * ---------------------------------------------------------
 * STYLES
 * ---------------------------------------------------------
 */

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  sentenceCard: {
    minHeight: 120,
    marginBottom: 36,
    justifyContent: "center",
  },

  sentenceWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },

  sentenceText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 38,
  },

  slotContainer: {
    minWidth: 80,
    height: 48,
    marginHorizontal: 4,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
  },

  slotPlaceholder: {
    width: "100%",
    height: "100%",
  },

  duoTile: {
    borderRadius: 14,
    borderWidth: 2,
    borderBottomWidth: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  slotTile: {
    minWidth: 80,
    height: 48,
    paddingVertical: 0,
  },

  bankTile: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },

  tileText: {
    fontSize: 17,
    fontWeight: "700",
  },

  tileMeaning: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: "600",
  },

  bankContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },

  tileWrapper: {
    marginVertical: 4,
  },

  tilePlaceholder: {
    minWidth: 80,
    height: 48,
    borderRadius: 14,
    borderWidth: 2,
    borderStyle: "dashed",
    opacity: 0.4,
  },
});