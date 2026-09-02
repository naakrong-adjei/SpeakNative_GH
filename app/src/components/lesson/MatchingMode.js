import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useEffect, useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function MatchingMode({
  question,
  showResult,
  onMatchesChange,
  resetKey = 0,
}) {
  const { theme } = useTheme();

  const pairs = question?.pairs || [];

  const leftItems = useMemo(
    () =>
      pairs.map((pair) => ({
        pairId: pair.id,
        text: pair.left,
      })),
    [pairs]
  );


  const [rightItems, setRightItems] = useState([]);

  useEffect(() => {
    const shuffled = [...pairs].sort(
      () => Math.random() - 0.5
    );

    setRightItems(
      shuffled.map((pair) => ({
        pairId: pair.id,
        text: pair.right,
        rightKey: `right-${pair.id}`,
      }))
    );
  }, [question]);

  const correctMatches = useMemo(() => {
    const matches = {};

    const source = Array.isArray(
      question?.correctMatches
    )
      ? question.correctMatches
      : [];

    source.forEach((match) => {
      if (
        match?.leftId !== undefined &&
        match?.rightId !== undefined
      ) {
        matches[match.leftId] = match.rightId;
      }
    });

    return matches;
  }, [question?.correctMatches]);

  const [selectedLeft, setSelectedLeft] =
    useState(null);

  const [matches, setMatches] = useState({});


  useEffect(() => {
    setSelectedLeft(null);
    setMatches({});
    onMatchesChange?.({});
  }, [question, resetKey]);

  const updateMatches = (updatedMatches) => {
    setMatches(updatedMatches);
    onMatchesChange?.(updatedMatches);
  };

  const handleSelectLeft = async (pairId) => {
    if (showResult) {
      return;
    }

    if (selectedLeft === pairId) {
      setSelectedLeft(null);

      await Haptics.impactAsync(
        Haptics.ImpactFeedbackStyle.Light
      );

      return;
    }

    if (matches[pairId]) {
      const updatedMatches = {
        ...matches,
      };

      delete updatedMatches[pairId];

      updateMatches(updatedMatches);
    }

    setSelectedLeft(pairId);

    await Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );
  };

  const handleSelectRight = async (rightItem) => {
    if (
      showResult ||
      selectedLeft === null
    ) {
      return;
    }

    const updatedMatches = {};

    Object.keys(matches).forEach(
      (leftKey) => {
        if (
          matches[leftKey] !==
          rightItem.pairId
        ) {
          updatedMatches[leftKey] =
            matches[leftKey];
        }
      }
    );

    updatedMatches[selectedLeft] =
      rightItem.pairId;

    updateMatches(updatedMatches);
    setSelectedLeft(null);

    await Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );
  };

  const getLeftState = (item) => {
    const matchedRightId =
      matches[item.pairId];

    const isMatched =
      matchedRightId !== undefined;

    const isSelected =
      selectedLeft === item.pairId;

    const isCorrect =
      isMatched &&
      correctMatches[item.pairId] ===
        matchedRightId;

    if (showResult && isMatched) {
      return {
        backgroundColor: isCorrect
          ? theme.success + "18"
          : theme.error + "18",
        borderColor: isCorrect
          ? theme.success
          : theme.error,
        icon: isCorrect
          ? "checkmark-circle"
          : "close-circle",
        iconColor: isCorrect
          ? theme.success
          : theme.error,
      };
    }

    if (isSelected) {
      return {
        backgroundColor:
          theme.primary + "18",
        borderColor: theme.primary,
        icon: "radio-button-on",
        iconColor: theme.primary,
      };
    }

    if (isMatched) {
      return {
        backgroundColor:
          theme.primary + "10",
        borderColor: theme.primary,
        icon: "checkmark-circle",
        iconColor: theme.primary,
      };
    }

    return {
      backgroundColor: theme.surface,
      borderColor: theme.border,
      icon: "radio-button-off",
      iconColor: theme.icon,
    };
  };

  const getRightState = (item) => {
    const matchedLeftId =
      Object.keys(matches).find(
        (leftId) =>
          matches[leftId] ===
          item.pairId
      );

    const isMatched =
      matchedLeftId !== undefined;

    const isCorrect =
      isMatched &&
      correctMatches[matchedLeftId] ===
        item.pairId;

    if (showResult && isMatched) {
      return {
        backgroundColor: isCorrect
          ? theme.success + "18"
          : theme.error + "18",
        borderColor: isCorrect
          ? theme.success
          : theme.error,
        icon: isCorrect
          ? "checkmark-circle"
          : "close-circle",
        iconColor: isCorrect
          ? theme.success
          : theme.error,
      };
    }

    if (isMatched) {
      return {
        backgroundColor:
          theme.primary + "10",
        borderColor: theme.primary,
        icon: "checkmark-circle",
        iconColor: theme.primary,
      };
    }

    return {
      backgroundColor: theme.surface,
      borderColor: theme.border,
      icon: "radio-button-off",
      iconColor: theme.icon,
    };
  };

  const renderLeft = (item) => {
    const state = getLeftState(item);

    return (
      <TouchableOpacity
        key={`left-${item.pairId}`}
        style={[
          styles.itemCard,
          {
            backgroundColor:
              state.backgroundColor,
            borderColor:
              state.borderColor,
          },
        ]}
        onPress={() =>
          handleSelectLeft(item.pairId)
        }
        disabled={showResult}
        activeOpacity={0.75}
      >
        <Text
          style={[
            styles.itemText,
            {
              color: theme.text,
            },
          ]}
          numberOfLines={3}
        >
          {item.text}
        </Text>

        <Ionicons
          name={state.icon}
          size={24}
          color={state.iconColor}
        />
      </TouchableOpacity>
    );
  };

  const renderRight = (item) => {
    const state = getRightState(item);

    const matchedLeftId =
      Object.keys(matches).find(
        (leftId) =>
          matches[leftId] ===
          item.pairId
      );

    const isMatched =
      matchedLeftId !== undefined;

    return (
      <TouchableOpacity
        key={item.rightKey}
        style={[
          styles.itemCard,
          {
            backgroundColor:
              state.backgroundColor,
            borderColor:
              state.borderColor,
          },
        ]}
        onPress={() =>
          handleSelectRight(item)
        }
        disabled={
          showResult ||
          selectedLeft === null
        }
        activeOpacity={0.75}
      >
        <Text
          style={[
            styles.itemText,
            {
              color: theme.text,
            },
          ]}
          numberOfLines={3}
        >
          {item.text}
        </Text>

        <Ionicons
          name={
            isMatched
              ? state.icon
              : "radio-button-off"
          }
          size={24}
          color={
            isMatched
              ? state.iconColor
              : theme.icon
          }
        />
      </TouchableOpacity>
    );
  };

  const matchedCount =
    Object.keys(matches).length;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.instructionCard,
          {
            backgroundColor:
              theme.surface,
            borderColor: theme.border,
          },
        ]}
      >
        <Ionicons
          name="swap-horizontal"
          size={22}
          color={theme.primary}
        />

        <View style={styles.instructionContent}>
          <Text
            style={[
              styles.instructionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Match the pairs
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
            Tap an item on the left, then
            tap its match on the right.
          </Text>
        </View>
      </View>

      <View style={styles.progressRow}>
        <Text
          style={[
            styles.progressText,
            {
              color:
                theme.secondaryText,
            },
          ]}
        >
          Matches
        </Text>

        <Text
          style={[
            styles.progressCount,
            {
              color: theme.primary,
            },
          ]}
        >
          {matchedCount}/{pairs.length}
        </Text>
      </View>

      <View style={styles.columns}>
        <View style={styles.column}>
          <Text
            style={[
              styles.columnLabel,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            TERM
          </Text>

          {leftItems.map(renderLeft)}
        </View>

        <View style={styles.column}>
          <Text
            style={[
              styles.columnLabel,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            MATCH
          </Text>

          {rightItems.map(renderRight)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },

  instructionCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 18,
  },

  instructionContent: {
    flex: 1,
  },

  instructionTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 2,
  },

  instructionText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 2,
  },

  progressText: {
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  progressCount: {
    fontSize: 14,
    fontWeight: "800",
  },

  columns: {
    flexDirection: "row",
    gap: 10,
  },

  column: {
    flex: 1,
    gap: 10,
  },

  columnLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginBottom: 2,
    paddingHorizontal: 2,
  },

  itemCard: {
    minHeight: 68,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  itemText: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 20,
    flex: 1,
  },
});
