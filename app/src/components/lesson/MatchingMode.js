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

  // 1. Create unique structural representations for Left and Right items
  const leftItems = useMemo(
    () => pairs.map((p) => ({ pairId: p.id, text: p.left })),
    [pairs]
  );

  const rightItems = useMemo(() => {
    const shuffled = [...pairs].sort(() => Math.random() - 0.5);
    return shuffled.map((p) => ({ pairId: p.id, text: p.right, rightKey: `right-${p.id}` }));
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({}); // pairId (left) -> pairId (right matched)
  const [submitted, setSubmitted] = useState(false);

  const handleSelectLeft = (pairId) => {
    if (submitted || showResult) return;
    
    // Toggle off if clicking the already selected left item
    if (selectedLeft === pairId) {
      setSelectedLeft(null);
      return;
    }

    // If item was already matched, clear its match
    if (matches[pairId]) {
      const updated = { ...matches };
      delete updated[pairId];
      setMatches(updated);
    }

    setSelectedLeft(pairId);
  };

  const handleSelectRight = (rightItem) => {
    if (submitted || showResult) return;
    if (selectedLeft === null) return;

    // Remove any previous left item that was matched to this right item
    const updatedMatches = {};
    Object.keys(matches).forEach((leftKey) => {
      if (matches[leftKey] !== rightItem.pairId) {
        updatedMatches[leftKey] = matches[leftKey];
      }
    });

    // Assign match
    updatedMatches[selectedLeft] = rightItem.pairId;
    setMatches(updatedMatches);
    setSelectedLeft(null);

    // Evaluate when all pairs are matched
    if (Object.keys(updatedMatches).length === pairs.length) {
      setSubmitted(true);
      const allCorrect = pairs.every(
        (p) => updatedMatches[p.id] === p.id
      );
      onSubmit(allCorrect);
    }
  };

  const renderLeft = (item) => {
    const matchedRightId = matches[item.pairId];
    const isMatched = matchedRightId !== undefined;
    const isMatchedCorrect = submitted && matchedRightId === item.pairId;
    const isMatchedWrong = submitted && isMatched && matchedRightId !== item.pairId;
    const isSelected = selectedLeft === item.pairId;

    let backgroundColor = theme.surface;
    let borderColor = theme.border;

    if (isMatchedCorrect) {
      backgroundColor = theme.success + "20";
      borderColor = theme.success;
    } else if (isMatchedWrong) {
      backgroundColor = theme.error + "20";
      borderColor = theme.error;
    } else if (isSelected) {
      backgroundColor = theme.primary + "20";
      borderColor = theme.primary;
    } else if (isMatched) {
      backgroundColor = theme.surface;
      borderColor = theme.primary;
    }

    return (
      <TouchableOpacity
        key={`left-${item.pairId}`}
        style={[styles.itemCard, { backgroundColor, borderColor }]}
        onPress={() => handleSelectLeft(item.pairId)}
        disabled={submitted || showResult}
        activeOpacity={0.7}
      >
        <Text style={[styles.itemText, { color: theme.text }]}>{item.text}</Text>
        {isMatchedCorrect && <Ionicons name="checkmark-circle" size={20} color={theme.success} />}
        {isMatchedWrong && <Ionicons name="close-circle" size={20} color={theme.error} />}
      </TouchableOpacity>
    );
  };

  const renderRight = (item) => {
    // Find which left pair matched this right item
    const matchedLeftId = Object.keys(matches).find(
      (leftId) => matches[leftId] === item.pairId
    );
    const isMatched = matchedLeftId !== undefined;
    const isMatchedCorrect = submitted && matchedLeftId === item.pairId;
    const isMatchedWrong = submitted && isMatched && matchedLeftId !== item.pairId;

    let backgroundColor = theme.surface;
    let borderColor = theme.border;

    if (isMatchedCorrect) {
      backgroundColor = theme.success + "20";
      borderColor = theme.success;
    } else if (isMatchedWrong) {
      backgroundColor = theme.error + "20";
      borderColor = theme.error;
    } else if (isMatched) {
      backgroundColor = theme.primary + "15";
      borderColor = theme.primary;
    }

    return (
      <TouchableOpacity
        key={item.rightKey}
        style={[styles.itemCard, { backgroundColor, borderColor }]}
        onPress={() => handleSelectRight(item)}
        disabled={submitted || showResult || (!selectedLeft && !isMatched)}
        activeOpacity={0.7}
      >
        <Text style={[styles.itemText, { color: theme.text }]}>{item.text}</Text>
        {isMatchedCorrect && <Ionicons name="checkmark-circle" size={20} color={theme.success} />}
        {isMatchedWrong && <Ionicons name="close-circle" size={20} color={theme.error} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={[styles.instructionText, { color: theme.secondaryText }]}>
          Tap a term on the left, then tap its match on the right.
        </Text>
      </View>
      <View style={styles.columns}>
        <View style={styles.column}>{leftItems.map(renderLeft)}</View>
        <View style={styles.column}>{rightItems.map(renderRight)}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
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
  itemCard: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 56,
  },
  itemText: {
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
  },
});