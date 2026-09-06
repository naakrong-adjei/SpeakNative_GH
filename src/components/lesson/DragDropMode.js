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
import * as Haptics from "expo-haptics";

import { useTheme } from "../../context/ThemeContext";

const BLANK_PATTERN = /\[_____\]/g;

export default function DragDropMode({
  question,
  showResult = false,
  onAnswerChange,
}) {
  const { theme } = useTheme();

  const items = useMemo(() => {
    return Array.isArray(question?.items)
      ? question.items.filter((item) => item?.id)
      : [];
  }, [question?.items]);

  const blanks = useMemo(() => {
    const sentence = question?.sentence || "";
    const matches = sentence.match(BLANK_PATTERN) || [];

    return matches.map((_, index) => ({
      id: `blank${index + 1}`,
      index,
    }));
  }, [question?.sentence]);

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

      const blankId =
        drop.blankId || `blank${index + 1}`;

      map[blankId] = drop.itemId;
    });

    return map;
  }, [
    question?.correctDrops,
    question?.correctDrop,
  ]);

  const [answers, setAnswers] = useState({});

  const scaleAnim = useRef(
    new Animated.Value(1)
  ).current;

  const onAnswerChangeRef = useRef(
    onAnswerChange
  );

  useEffect(() => {
    onAnswerChangeRef.current =
      onAnswerChange;
  }, [onAnswerChange]);

  useEffect(() => {
    setAnswers({});
    scaleAnim.setValue(1);
    onAnswerChangeRef.current?.({});
  }, [
    question?.id,
    question?.sentence,
    scaleAnim,
  ]);

  const getItemById = useCallback(
    (itemId) => {
      if (!itemId) {
        return null;
      }

      return (
        items.find(
          (item) => item.id === itemId
        ) || null
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

  const triggerSelectionHaptic = useCallback(() => {
    Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );
  }, []);

  const triggerRemovalHaptic = useCallback(() => {
    Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );
  }, []);

  const updateAnswers = useCallback(
    (updatedAnswers) => {
      setAnswers(updatedAnswers);
      onAnswerChange?.(updatedAnswers);
    },
    [onAnswerChange]
  );

  const handleItemPress = useCallback(
    (item) => {
      if (
        showResult ||
        !item?.id ||
        blanks.length === 0
      ) {
        return;
      }

      const alreadyUsed = Object.values(
        answers
      ).includes(item.id);

      if (alreadyUsed) {
        return;
      }

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

      updateAnswers(updatedAnswers);

      triggerBounce();
      triggerSelectionHaptic();
    },
    [
      showResult,
      blanks,
      answers,
      updateAnswers,
      triggerBounce,
      triggerSelectionHaptic,
    ]
  );

  const handleSlotPress = useCallback(
    (blankId) => {
      if (
        showResult ||
        !answers[blankId]
      ) {
        return;
      }

      const updatedAnswers = {
        ...answers,
      };

      delete updatedAnswers[blankId];

      updateAnswers(updatedAnswers);
      triggerRemovalHaptic();
    },
    [
      showResult,
      answers,
      updateAnswers,
      triggerRemovalHaptic,
    ]
  );

  const usedItemIds = useMemo(() => {
    return new Set(
      Object.values(answers)
    );
  }, [answers]);

  const renderSentence = useCallback(() => {
    const sentence =
      question?.sentence || "";

    const parts =
      sentence.split(BLANK_PATTERN);

    if (parts.length === 1) {
      return (
        <Text
          style={[
            styles.sentenceText,
            {
              color: theme.text,
            },
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

          const selectedItem =
            getItemById(selectedItemId);

          const correctItemId = blank
            ? correctMap[blank.id]
            : null;

          const slotHasAnswer =
            Boolean(selectedItemId);

          const slotIsCorrect =
            showResult &&
            slotHasAnswer &&
            selectedItemId ===
              correctItemId;

          const slotIsIncorrect =
            showResult &&
            slotHasAnswer &&
            selectedItemId !==
              correctItemId;

          let backgroundColor =
            `${theme.primary}12`;

          let borderColor =
            theme.primary;

          let bottomBorderColor =
            theme.primaryDark ||
            theme.primary;

          let textColor =
            theme.primary;

          if (slotIsCorrect) {
            backgroundColor =
              theme.success;
            borderColor =
              theme.success;
            bottomBorderColor =
              theme.success;
            textColor = "#FFFFFF";
          } else if (slotIsIncorrect) {
            backgroundColor =
              theme.error;
            borderColor =
              theme.error;
            bottomBorderColor =
              theme.errorDark ||
              theme.error;
            textColor = "#FFFFFF";
          }

          return (
            <React.Fragment
              key={`part-${index}`}
            >
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
                    handleSlotPress(
                      blank.id
                    )
                  }
                  disabled={
                    showResult ||
                    !slotHasAnswer
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
                      showResult ||
                      !slotHasAnswer,
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
                      style={[
                        styles.animatedSlot,
                        {
                          transform: [
                            {
                              scale:
                                scaleAnim,
                            },
                          ],
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.selectedTile,
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
                              color:
                                textColor,
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
                            `${theme.primary}06`,
                          borderColor:
                            theme.border,
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
    showResult,
    correctMap,
    theme,
    getItemById,
    handleSlotPress,
    scaleAnim,
  ]);

  const renderAnswerBank = useMemo(() => {
    return items.map((item) => {
      const isUsed =
        usedItemIds.has(item.id);

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
                  backgroundColor:
                    `${theme.primary}06`,
                  borderColor:
                    theme.border,
                },
              ]}
            />
          ) : (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() =>
                handleItemPress(item)
              }
              disabled={showResult}
              accessibilityRole="button"
              accessibilityLabel={`Select ${item.text}`}
              accessibilityState={{
                disabled: showResult,
              }}
            >
              <View
                style={[
                  styles.answerTile,
                  {
                    backgroundColor:
                      theme.surface,
                    borderColor:
                      theme.border,
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
    showResult,
    handleItemPress,
  ]);

  if (!question) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.sentenceArea}
        accessibilityRole="text"
      >
        {renderSentence()}
      </View>

      <View style={styles.answerBank}>
        {renderAnswerBank}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  sentenceArea: {
    minHeight: 150,
    marginBottom: 28,
    justifyContent: "center",
  },

  sentenceWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  sentenceText: {
    fontSize: 21,
    fontWeight: "700",
    lineHeight: 38,
    letterSpacing: 0.1,
  },

  slotContainer: {
    minWidth: 82,
    height: 48,
    marginHorizontal: 4,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
  },

  slotPlaceholder: {
    width: "100%",
    height: 44,
    borderRadius: 10,
    borderWidth: 1.5,
    borderStyle: "dashed",
  },

  animatedSlot: {
    alignItems: "center",
    justifyContent: "center",
  },

  selectedTile: {
    minWidth: 82,
    minHeight: 46,
    paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 2,
    borderBottomWidth: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  answerBank: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  tileWrapper: {
    marginVertical: 3,
  },

  answerTile: {
    minWidth: 82,
    minHeight: 48,
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 12,
    borderWidth: 1.5,
    borderBottomWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  tileText: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  tileMeaning: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
  },

  tilePlaceholder: {
    minWidth: 82,
    minHeight: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderStyle: "dashed",
    opacity: 0.45,
  },
});