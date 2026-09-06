import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function MultipleChoiceMode({
  question,
  showResult,
  onOptionSelect,
}) {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] =
    useState(null);

  useEffect(() => {
    setSelectedOption(null);
    onOptionSelect?.(null);
  }, [question]);

  const handleOptionPress = async (optionId) => {
    if (showResult) {
      return;
    }

    setSelectedOption(optionId);

    await Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );

    onOptionSelect?.(optionId);
  };

  const renderOption = (option) => {
    const isSelected =
      selectedOption === option.id;

    const isCorrectOption =
      option.id === question.correctOptionId;

    const showCorrect =
      showResult && isCorrectOption;

    const showWrong =
      showResult &&
      isSelected &&
      !isCorrectOption;

    let optionStyle = [
      styles.optionButton,
      {
        backgroundColor: theme.surface,
        borderColor: theme.border,
      },
    ];

    if (showCorrect) {
      optionStyle = [
        styles.optionButton,
        {
          backgroundColor:
            theme.success + "20",
          borderColor: theme.success,
        },
      ];
    } else if (showWrong) {
      optionStyle = [
        styles.optionButton,
        {
          backgroundColor:
            theme.error + "20",
          borderColor: theme.error,
        },
      ];
    } else if (isSelected && !showResult) {
      optionStyle = [
        styles.optionButton,
        {
          backgroundColor:
            theme.primary + "20",
          borderColor: theme.primary,
        },
      ];
    }

    return (
      <TouchableOpacity
        key={option.id}
        style={optionStyle}
        onPress={() =>
          handleOptionPress(option.id)
        }
        disabled={showResult}
        activeOpacity={0.7}
      >
        <View style={styles.optionContent}>
          <View
            style={[
              styles.optionCircle,
              {
                borderColor: isSelected
                  ? theme.primary
                  : theme.border,
              },
            ]}
          >
            {isSelected && (
              <View
                style={[
                  styles.optionSelected,
                  {
                    backgroundColor:
                      theme.primary,
                  },
                ]}
              />
            )}
          </View>

          <Text
            style={[
              styles.optionText,
              {
                color: theme.text,
              },
            ]}
          >
            {option.text}
          </Text>
        </View>

        {showCorrect && (
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={theme.success}
          />
        )}

        {showWrong && (
          <Ionicons
            name="close-circle"
            size={24}
            color={theme.error}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.optionsContainer}>
      {question.options.map(renderOption)}
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },

  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
  },

  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },

  optionCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  optionSelected: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },

  optionText: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
});