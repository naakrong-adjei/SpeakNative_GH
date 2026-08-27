import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";
import AudioWave from "../ui/AudioWave";

export default function ListeningMultipleChoiceMode({
  question,
  onSubmit,
  showResult,
}) {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
  }, [question]);

  const getAudioSource = () => {
    const audioPath =
      question?.audioUrl ||
      question?.audio ||
      question?.sound;

    if (!audioPath) return null;

    if (
      typeof audioPath === "number" ||
      typeof audioPath === "object"
    ) {
      return audioPath;
    }

    return typeof audioPath === "string"
      ? { uri: audioPath }
      : null;
  };

  const handleOptionPress = (optionId) => {
    if (showResult || selectedOption !== null) return;

    setSelectedOption(optionId);

    onSubmit(
      optionId === question?.correctOptionId
    );
  };

  const getOptionState = (option) => {
    const isSelected = selectedOption === option.id;
    const isCorrect = option.id === question?.correctOptionId;

    if (showResult && isCorrect) {
      return {
        backgroundColor: theme.success + "15",
        borderColor: theme.success,
        textColor: theme.success,
        icon: "checkmark-circle",
        iconColor: theme.success,
      };
    }

    if (showResult && isSelected && !isCorrect) {
      return {
        backgroundColor: theme.error + "15",
        borderColor: theme.error,
        textColor: theme.error,
        icon: "close-circle",
        iconColor: theme.error,
      };
    }

    if (isSelected) {
      return {
        backgroundColor: theme.primary + "15",
        borderColor: theme.primary,
        textColor: theme.text,
        icon: "radio-button-on",
        iconColor: theme.primary,
      };
    }

    return {
      backgroundColor: theme.surface,
      borderColor: theme.border,
      textColor: theme.text,
      icon: "radio-button-off",
      iconColor: theme.icon,
    };
  };

  const renderOption = (option) => {
    const state = getOptionState(option);
    const isSelected = selectedOption === option.id;

    return (
      <Pressable
        key={option.id}
        onPress={() => handleOptionPress(option.id)}
        disabled={showResult || selectedOption !== null}
        style={({ pressed }) => [
          styles.optionButton,
          {
            backgroundColor: state.backgroundColor,
            borderColor: state.borderColor,
            borderWidth: isSelected && !showResult ? 3 : 2,
            opacity: pressed && !showResult ? 0.85 : 1,
          },
        ]}
      >
        <View style={styles.optionContent}>
          <Ionicons
            name={state.icon}
            size={26}
            color={state.iconColor}
          />

          <Text
            style={[
              styles.optionText,
              { color: state.textColor },
            ]}
          >
            {option.text}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.audioContainer}>
        <AudioWave
          source={getAudioSource()}
          size="medium"
        />
      </View>

      <ScrollView
        style={styles.optionsScrollView}
        contentContainerStyle={styles.optionsContentContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={!showResult}
      >
        {question?.options?.map(renderOption)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  audioContainer: {
    width: "100%",
    marginBottom: 24,
  },

  optionsScrollView: {
    flex: 1,
  },

  optionsContentContainer: {
    paddingBottom: 20,
    gap: 12,
  },

  optionButton: {
    minHeight: 64,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 14,
  },

  optionText: {
    fontSize: 17,
    fontWeight: "600",
    flex: 1,
    lineHeight: 23,
  },
});