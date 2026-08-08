// components/lesson/DragDropMode.js
import React, { useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

/**
 * DragDropMode renders a sentence with blank placeholders ([_____]) and a
 * set of draggable (tap-to-select) items. The user taps an item then taps a
 * blank to fill it. Supports both single-blank (correctDrop) and multi-blank
 * (correctDrops array) configurations.
 */
export default function DragDropMode({
  question,
  onSubmit,
  showResult,
  isCorrect,
}) {
  const { theme } = useTheme();
  const items = question?.items || [];
  const blanks = useMemo(() => {
    const matches = (question?.sentence || "").match(/\[_____\]/g) || [];
    return matches.map((_, index) => ({
      id: question?.blankId || `blank${index + 1}`,
      index,
    }));
  }, [question]);

  // Normalize correct answers into a map of blankId -> itemId
  const correctMap = useMemo(() => {
    const map = {};
    const drops = question?.correctDrops || (question?.correctDrop ? [question.correctDrop] : []);
    drops.forEach((d) => {
      if (d && d.blankId && d.itemId) {
        map[d.blankId] = d.itemId;
      }
    });
    return map;
  }, [question]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [answers, setAnswers] = useState({}); // blankId -> itemId
  const [submitted, setSubmitted] = useState(false);

  const handleBlankPress = (blankId) => {
    if (submitted || showResult) return;
    if (selectedItem === null) return;

    const newAnswers = { ...answers, [blankId]: selectedItem.id };
    setAnswers(newAnswers);
    setSelectedItem(null);

    // If all blanks filled, evaluate
    if (Object.keys(newAnswers).length === blanks.length) {
      setSubmitted(true);
      const allCorrect = blanks.every(
        (b) => newAnswers[b.id] && newAnswers[b.id] === correctMap[b.id]
      );
      onSubmit(allCorrect);
    }
  };

  const handleItemPress = (item) => {
    if (submitted || showResult) return;
    setSelectedItem(item.id === selectedItem ? null : item.id);
  };

  const renderSentence = () => {
    const parts = (question?.sentence || "").split(/\[_____\]/);
    const allBlanks = blanks.length > 0 ? blanks : [{ id: question?.blankId || "blank1", index: 0 }];

    return (
      <View style={styles.sentenceContainer}>
        {parts.map((part, idx) => {
          const blank = allBlanks[idx];
          const filledItemId = answers[blank?.id];
          const filledItem = items.find((i) => i.id === filledItemId);
          const isCorrectFill = submitted && filledItemId === correctMap[blank?.id];

          return (
            <React.Fragment key={idx}>
              {part !== "" && (
                <Text style={[styles.sentenceText, { color: theme.text }]}>{part}</Text>
              )}
              {blank && (
                <TouchableOpacity
                  style={[
                    styles.blankButton,
                    {
                      backgroundColor: theme.surface,
                      borderColor: isCorrectFill ? theme.success : theme.primary,
                    },
                  ]}
                  onPress={() => handleBlankPress(blank.id)}
                  disabled={submitted || showResult}
                  activeOpacity={0.7}
                >
                  {filledItem ? (
                    <Text style={[styles.blankFilledText, { color: theme.text }]}>
                      {filledItem.text}
                    </Text>
                  ) : (
                    <Text style={[styles.blankEmptyText, { color: theme.secondaryText }]}>
                      Tap to fill
                    </Text>
                  )}
                </TouchableOpacity>
              )}
            </React.Fragment>
          );
        })}
      </View>
    );
  };

  const renderItem = (item) => {
    const isSelected = selectedItem === item.id;
    const isUsed = Object.values(answers).includes(item.id);

    let style = [
      styles.itemChip,
      { backgroundColor: isSelected ? theme.primary + "20" : theme.surface, borderColor: isSelected ? theme.primary : theme.border },
    ];
    if (isUsed) {
      style = [styles.itemChip, { backgroundColor: theme.surface, borderColor: theme.border, opacity: 0.4 }];
    }

    return (
      <TouchableOpacity
        key={item.id}
        style={style}
        onPress={() => handleItemPress(item)}
        disabled={showResult || isUsed}
        activeOpacity={0.7}
      >
        <Text style={[styles.itemText, { color: isUsed ? theme.secondaryText : theme.text }]}>
          {item.text}
        </Text>
        {item.meaning && (
          <Text style={[styles.itemMeaning, { color: theme.secondaryText }]}>
            {item.meaning}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {renderSentence()}
      <View style={styles.itemsContainer}>
        {items.map(renderItem)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sentenceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 24,
  },
  sentenceText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 32,
  },
  blankButton: {
    minWidth: 90,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 4,
    alignItems: "center",
  },
  blankFilledText: {
    fontSize: 16,
    fontWeight: "700",
  },
  blankEmptyText: {
    fontSize: 13,
    fontWeight: "500",
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  itemChip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: "center",
  },
  itemText: {
    fontSize: 15,
    fontWeight: "600",
  },
  itemMeaning: {
    fontSize: 11,
    marginTop: 2,
    textAlign: "center",
  },
});
