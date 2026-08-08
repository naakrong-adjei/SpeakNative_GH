// components/lesson/MatchingMode.js
import React, { useState, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

export default function MatchingMode({
  question,
  onSubmit,
  showResult,
  isCorrect,
}) {
  const { theme } = useTheme();
  const pairs = question?.pairs || [];

  const leftItems = useMemo(() => pairs.map((p) => ({ id: p.id, text: p.left })), [pairs]);

  const rightItems = useMemo(() => {
    const shuffled = [...pairs].sort(() => Math.random() - 0.5);
    return shuffled.map((p) => ({ id: p.id, text: p.right }));
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({}); // leftId -> rightId
  const [submitted, setSubmitted] = useState(false);

  const handleSelectRight = (right) => {
    if (submitted || showResult) return;
    if (selectedLeft === null) return;

    const newMatches = { ...matches, [selectedLeft]: right.id };
    setMatches(newMatches);
    setSelectedLeft(null);

    // If all pairs matched, evaluate
    if (Object.keys(newMatches).length === pairs.length) {
      setSubmitted(true);
      const allCorrect = pairs.every(
        (p) => newMatches[p.id] && newMatches[p.id] === p.id
      );
      onSubmit(allCorrect);
    }
  };

  const isMatched = (leftId) => submitted && matches[leftId] !== undefined;

  const renderLeft = (item) => {
    const matchedRight = matches[item.id];
    const isMatchedCorrect = submitted && matchedRight === item.id;
    const isMatchedWrong = submitted && matchedRight !== undefined && matchedRight !== item.id;

    let style = [
      styles.leftItem,
      { backgroundColor: theme.surface, borderColor: theme.border },
    ];
    if (isMatchedCorrect) {
      style = [styles.leftItem, { backgroundColor: theme.success + "20", borderColor: theme.success }];
    } else if (isMatchedWrong) {
      style = [styles.leftItem, { backgroundColor: theme.error + "20", borderColor: theme.error }];
    } else if (selectedLeft === item.id) {
      style = [styles.leftItem, { backgroundColor: theme.primary + "20", borderColor: theme.primary }];
    }

    return (
      <TouchableOpacity
        key={item.id}
        style={style}
        onPress={() => !submitted && !showResult && setSelectedLeft(item.id)}
        disabled={submitted || showResult}
        activeOpacity={0.7}
      >
        <Text style={[styles.itemText, { color: theme.text }]}>{item.text}</Text>
        {isMatchedCorrect && <Ionicons name="checkmark-circle" size={22} color={theme.success} />}
        {isMatchedWrong && <Ionicons name="close-circle" size={22} color={theme.error} />}
      </TouchableOpacity>
    );
  };

  const renderRight = (item) => {
    const usedBy = Object.keys(matches).find((k) => matches[k] === item.id);
    const isUsed = usedBy !== undefined;
    const isCorrectMatch = submitted && usedBy === item.id;

    let style = [
      styles.rightItem,
      { backgroundColor: theme.surface, borderColor: theme.border },
    ];
    if (isCorrectMatch) {
      style = [styles.rightItem, { backgroundColor: theme.success + "20", borderColor: theme.success }];
    } else if (isUsed && submitted) {
      style = [styles.rightItem, { backgroundColor: theme.error + "20", borderColor: theme.error }];
    } else if (isUsed) {
      style = [styles.rightItem, { backgroundColor: theme.primary + "20", borderColor: theme.primary }];
    }

    return (
      <TouchableOpacity
        key={item.id}
        style={style}
        onPress={() => handleSelectRight(item)}
        disabled={showResult || isUsed}
        activeOpacity={0.7}
      >
        <Text style={[styles.itemText, { color: theme.text }]}>{item.text}</Text>
        {isCorrectMatch && <Ionicons name="checkmark-circle" size={22} color={theme.success} />}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.instructions}>
        <Text style={[styles.instructionText, { color: theme.secondaryText }]}>
          Tap a term on the left, then tap its match on the right.
        </Text>
      </View>
      <View style={styles.columns}>
        <View style={styles.column}>
          {leftItems.map(renderLeft)}
        </View>
        <View style={styles.column}>
          {rightItems.map(renderRight)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  instructions: {
    marginBottom: 16,
  },
  instructionText: {
    fontSize: 14,
    textAlign: "center",
  },
  columns: {
    flexDirection: "row",
    gap: 12,
  },
  column: {
    flex: 1,
    gap: 12,
  },
  leftItem: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 52,
  },
  rightItem: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 52,
  },
  itemText: {
    fontSize: 13,
    fontWeight: "600",
    flex: 1,
  },
});
