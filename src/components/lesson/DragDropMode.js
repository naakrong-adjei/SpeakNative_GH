import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import * as Haptics from "expo-haptics";

import { useTheme } from "../../context/ThemeContext";

const SPRING_CONFIG = {
  damping: 15,
  stiffness: 150,
  mass: 0.6,
};

const BLANK_PATTERN = /\[_____\]/g;

function WordTile({
  item,
  isUsed,
  onSelect,
  theme,
  disabled,
}) {
  const scale = useSharedValue(1);

  const gesture = Gesture.Tap()
    .enabled(!disabled && !isUsed)
    .onBegin(() => {
      scale.value = withTiming(0.92, {
        duration: 50,
      });
    })
    .onFinalize(() => {
      scale.value = withSpring(
        1,
        SPRING_CONFIG
      );
    })
    .onEnd(() => {
      runOnJS(onSelect)(item);
    });

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: scale.value,
        },
      ],
      opacity: isUsed ? 0 : 1,
    }),
    [isUsed]
  );

  return (
    <View style={styles.tileWrapper}>
      {!isUsed && (
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              styles.answerTile,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
              animatedStyle,
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

            {item.meaning && (
              <Text
                style={[
                  styles.tileMeaning,
                  {
                    color: theme.secondaryText,
                  },
                ]}
              >
                {item.meaning}
              </Text>
            )}
          </Animated.View>
        </GestureDetector>
      )}
    </View>
  );
}

function BlankSlot({
  blankId,
  selectedItem,
  correctItemId,
  showResult,
  onRemove,
  theme,
}) {
  const isFilled = Boolean(selectedItem);

  const isCorrect =
    showResult &&
    isFilled &&
    selectedItem.id === correctItemId;

  const isIncorrect =
    showResult &&
    isFilled &&
    selectedItem.id !== correctItemId;

  const scale = useSharedValue(
    isFilled ? 0.8 : 1
  );

  useEffect(() => {
    if (isFilled) {
      scale.value = withSpring(
        1,
        SPRING_CONFIG
      );
    }
  }, [isFilled, scale]);

  const gesture = Gesture.Tap()
    .enabled(!showResult && isFilled)
    .onEnd(() => {
      runOnJS(onRemove)(blankId);
    });

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: scale.value,
        },
      ],
    })
  );

  let backgroundColor = theme.surface;
  let borderColor = theme.border;
  let textColor = theme.text;

  if (isCorrect) {
    backgroundColor = theme.success;
    borderColor = theme.success;
    textColor = theme.surface;
  } else if (isIncorrect) {
    backgroundColor = theme.error;
    borderColor = theme.error;
    textColor = theme.surface;
  }

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.slotContainer,
          isFilled && styles.filledSlot,
          {
            borderColor,
          },
        ]}
      >
        {selectedItem ? (
          <Animated.View
            style={[
              styles.selectedTile,
              {
                backgroundColor,
                borderColor,
              },
              animatedStyle,
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
          </Animated.View>
        ) : (
          <View
            style={[
              styles.slotPlaceholder,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          />
        )}
      </Animated.View>
    </GestureDetector>
  );
}

export default function DragDropMode({
  question,
  showResult = false,
  onAnswerChange,
  theme: themeProp,
}) {
  const { theme: contextTheme } = useTheme();

  const theme = themeProp || contextTheme;

  const [answers, setAnswers] = useState({});

  const previousQuestionKey = useRef(null);

  const items = useMemo(() => {
    return Array.isArray(question?.items)
      ? question.items.filter(
          (item) => item?.id
        )
      : [];
  }, [question?.items]);

  const blanks = useMemo(() => {
    const sentence =
      question?.sentence || "";

    const matches =
      sentence.match(BLANK_PATTERN) || [];

    return matches.map((_, index) => ({
      id: `blank${index + 1}`,
      index,
    }));
  }, [question?.sentence]);

  const correctMap = useMemo(() => {
    const map = {};

    const drops = Array.isArray(
      question?.correctDrops
    )
      ? question.correctDrops
      : question?.correctDrop
      ? [question.correctDrop]
      : [];

    drops.forEach((drop, index) => {
      if (!drop?.itemId) {
        return;
      }

      const blankId =
        drop.blankId ||
        `blank${index + 1}`;

      map[blankId] = drop.itemId;
    });

    return map;
  }, [
    question?.correctDrops,
    question?.correctDrop,
  ]);

  const questionKey = useMemo(
    () =>
      question?.id ??
      question?.sentence ??
      null,
    [question?.id, question?.sentence]
  );

  useEffect(() => {
    if (
      previousQuestionKey.current === null
    ) {
      previousQuestionKey.current =
        questionKey;
      return;
    }

    if (
      previousQuestionKey.current !==
      questionKey
    ) {
      previousQuestionKey.current =
        questionKey;

      setAnswers({});
      onAnswerChange?.({});
    }
  }, [questionKey, onAnswerChange]);

  const triggerHaptic = useCallback(() => {
    Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );
  }, []);

  const handleSelectWord = useCallback(
    (item) => {
      if (
        showResult ||
        !item?.id ||
        blanks.length === 0
      ) {
        return;
      }

      const alreadyUsed =
        Object.values(answers).includes(
          item.id
        );

      if (alreadyUsed) {
        return;
      }

      const firstEmptyBlank = blanks.find(
        (blank) => !answers[blank.id]
      );

      if (!firstEmptyBlank) {
        return;
      }

      const updated = {
        ...answers,
        [firstEmptyBlank.id]: item.id,
      };

      setAnswers(updated);
      onAnswerChange?.(updated);
      triggerHaptic();
    },
    [
      showResult,
      blanks,
      answers,
      onAnswerChange,
      triggerHaptic,
    ]
  );

  const handleRemoveWord = useCallback(
    (blankId) => {
      if (
        showResult ||
        !answers[blankId]
      ) {
        return;
      }

      const updated = {
        ...answers,
      };

      delete updated[blankId];

      setAnswers(updated);
      onAnswerChange?.(updated);
      triggerHaptic();
    },
    [
      showResult,
      answers,
      onAnswerChange,
      triggerHaptic,
    ]
  );

  const usedItemIds = useMemo(
    () =>
      new Set(Object.values(answers)),
    [answers]
  );

  const sentenceParts = useMemo(() => {
    return (
      question?.sentence || ""
    ).split(BLANK_PATTERN);
  }, [question?.sentence]);

  if (!question) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.sentenceArea}>
        <View style={styles.sentenceWrapper}>
          {sentenceParts.map(
            (part, index) => {
              const blank = blanks[index];

              const selectedItemId = blank
                ? answers[blank.id]
                : null;

              const selectedItem =
                items.find(
                  (item) =>
                    item.id ===
                    selectedItemId
                );

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
                    <BlankSlot
                      blankId={blank.id}
                      selectedItem={
                        selectedItem
                      }
                      correctItemId={
                        correctMap[
                          blank.id
                        ]
                      }
                      showResult={
                        showResult
                      }
                      onRemove={
                        handleRemoveWord
                      }
                      theme={theme}
                    />
                  )}
                </React.Fragment>
              );
            }
          )}
        </View>
      </View>

      <View style={styles.answerBank}>
        {items.map((item) => (
          <WordTile
            key={item.id}
            item={item}
            isUsed={usedItemIds.has(
              item.id
            )}
            onSelect={handleSelectWord}
            theme={theme}
            disabled={showResult}
          />
        ))}
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
    minHeight: 140,
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
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 36,
  },

  slotContainer: {
    minWidth: 78,
    minHeight: 46,
    marginHorizontal: 4,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 10,
    flexShrink: 0,
  },

  filledSlot: {
    minWidth: 0,
    minHeight: 0,
    borderWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 10,
  },

  slotPlaceholder: {
    width: 100,
    height: 40,
    borderRadius: 10,
    borderWidth: 1.5,
    borderStyle: "dashed",
  },

  selectedTile: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 44,
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  answerBank: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  tileWrapper: {
    minWidth: 78,
    minHeight: 46,
    marginVertical: 4,
    alignSelf: "flex-start",
    flexShrink: 0,
  },

  answerTile: {
    minWidth: 78,
    minHeight: 46,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderBottomWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    flexShrink: 0,
  },

  tileText: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    flexShrink: 0,
  },

  tileMeaning: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    flexShrink: 0,
  },
});