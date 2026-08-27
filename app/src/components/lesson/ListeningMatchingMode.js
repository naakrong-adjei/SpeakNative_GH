import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useTheme } from "../../context/ThemeContext";
import AudioWave from "../ui/AudioWave";

export default function ListeningMatchingMode({
  question,
  onSubmit,
  showResult,
  isCorrect,
}) {
  const { theme } = useTheme();

  const pairs = question?.pairs || [];
  const options = question?.options || [];

  const [selectedPair, setSelectedPair] =
    useState(null);

  const [answers, setAnswers] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  // --------------------------------
  // RESET WHEN QUESTION CHANGES
  // --------------------------------

  useEffect(() => {
    setSelectedPair(null);
    setAnswers({});
    setSubmitted(false);
  }, [question]);

  // --------------------------------
  // GET CORRECT ANSWER
  // --------------------------------

  const getCorrectOptionId = (pairId) => {
    const pair = pairs.find(
      (p) => p.id === pairId
    );

    if (pair?.correctOptionId) {
      return pair.correctOptionId;
    }

    const drops =
      question?.correctDrops || [];

    const drop = drops.find(
      (d) => d.pairId === pairId
    );

    return drop?.optionId || null;
  };

  // --------------------------------
  // GET AUDIO SOURCE
  // --------------------------------

  const getAudioSource = (pair) => {
    const audioPath =
      pair?.audioUrl ||
      pair?.audio ||
      pair?.sound;

    if (!audioPath) {
      return null;
    }

    if (
      typeof audioPath === "number" ||
      typeof audioPath === "object"
    ) {
      return audioPath;
    }

    if (typeof audioPath === "string") {
      return {
        uri: audioPath,
      };
    }

    return null;
  };

  // --------------------------------
  // SELECT PAIR
  // --------------------------------

  const handlePairPress = (pairId) => {
    if (
      submitted ||
      showResult
    ) {
      return;
    }

    setSelectedPair(
      selectedPair === pairId
        ? null
        : pairId
    );
  };

  // --------------------------------
  // SELECT ENGLISH OPTION
  // --------------------------------

  const handleOptionPress = (optionId) => {
    if (
      submitted ||
      showResult ||
      selectedPair === null
    ) {
      return;
    }

    const newAnswers = {
      ...answers,
      [selectedPair]: optionId,
    };

    setAnswers(newAnswers);
    setSelectedPair(null);

    // Check whether every pair
    // has been matched.

    if (
      Object.keys(newAnswers).length ===
      pairs.length
    ) {
      setSubmitted(true);

      const allCorrect = pairs.every(
        (pair) =>
          newAnswers[pair.id] ===
          getCorrectOptionId(pair.id)
      );

      onSubmit(allCorrect);
    }
  };

  // --------------------------------
  // RENDER AUDIO PAIR
  // --------------------------------

  const renderPair = (pair) => {
    const answeredId =
      answers[pair.id];

    const isAnswered =
      answeredId !== undefined;

    const isSelected =
      selectedPair === pair.id;

    const isCorrectMatch =
      submitted &&
      isAnswered &&
      answeredId ===
        getCorrectOptionId(pair.id);

    const isWrongMatch =
      submitted &&
      isAnswered &&
      answeredId !==
        getCorrectOptionId(pair.id);

    let backgroundColor =
      theme.surface;

    let borderColor =
      theme.border;

    if (isCorrectMatch) {
      backgroundColor =
        theme.success + "15";

      borderColor =
        theme.success;
    } else if (isWrongMatch) {
      backgroundColor =
        theme.error + "15";

      borderColor =
        theme.error;
    } else if (isSelected) {
      backgroundColor =
        theme.primary + "15";

      borderColor =
        theme.primary;
    }

    const audioSource =
      getAudioSource(pair);

    return (
      <View
        key={pair.id}
        style={[
          styles.pairCard,
          {
            backgroundColor,
            borderColor,
          },
        ]}
      >
        {/* AUDIO */}

        <AudioWave
          source={audioSource}
          size="small"
          showText={false}
        />

        {/* PAIR SELECTION */}

        <Pressable
          onPress={() =>
            handlePairPress(pair.id)
          }
          disabled={
            submitted ||
            showResult
          }
          style={({ pressed }) => [
            styles.pairSelectButton,
            {
              backgroundColor:
                isSelected
                  ? theme.primary +
                    "15"
                  : theme.surface,

              borderColor:
                isSelected
                  ? theme.primary
                  : theme.border,

              opacity:
                pressed ? 0.8 : 1,
            },
          ]}
        >
          <View
            style={
              styles.pairContent
            }
          >
            {/* SELECT ICON */}

            <Ionicons
              name={
                isCorrectMatch
                  ? "checkmark-circle"
                  : isWrongMatch
                  ? "close-circle"
                  : isSelected
                  ? "radio-button-on"
                  : "radio-button-off"
              }
              size={25}
              color={
                isCorrectMatch
                  ? theme.success
                  : isWrongMatch
                  ? theme.error
                  : isSelected
                  ? theme.primary
                  : theme.icon
              }
            />

            <Text
              style={[
                styles.pairText,
                {
                  color:
                    theme.text,
                },
              ]}
            >
              {pair.native ||
                pair.text ||
                pair.left ||
                `Listen ${pair.id}`}
            </Text>
          </View>

          {/* RESULT */}

          {isCorrectMatch && (
            <Ionicons
              name="checkmark"
              size={22}
              color={theme.success}
            />
          )}

          {isWrongMatch && (
            <Ionicons
              name="close"
              size={22}
              color={theme.error}
            />
          )}
        </Pressable>
      </View>
    );
  };

  // --------------------------------
  // RENDER ENGLISH OPTION
  // --------------------------------

  const renderOption = (option) => {
    const usedBy = Object.keys(
      answers
    ).find(
      (pairId) =>
        answers[pairId] ===
        option.id
    );

    const isUsed =
      usedBy !== undefined;

    const isCorrectMatch =
      submitted &&
      isUsed &&
      getCorrectOptionId(
        usedBy
      ) === option.id;

    const isWrongMatch =
      submitted &&
      isUsed &&
      getCorrectOptionId(
        usedBy
      ) !== option.id;

    let backgroundColor =
      theme.surface;

    let borderColor =
      theme.border;

    let textColor =
      theme.text;

    if (isCorrectMatch) {
      backgroundColor =
        theme.success + "15";

      borderColor =
        theme.success;

      textColor =
        theme.success;
    } else if (isWrongMatch) {
      backgroundColor =
        theme.error + "15";

      borderColor =
        theme.error;

      textColor =
        theme.error;
    } else if (isUsed) {
      backgroundColor =
        theme.primary + "15";

      borderColor =
        theme.primary;
    }

    return (
      <Pressable
        key={option.id}
        onPress={() =>
          handleOptionPress(
            option.id
          )
        }
        disabled={
          showResult ||
          submitted ||
          isUsed
        }
        style={({ pressed }) => [
          styles.optionButton,

          {
            backgroundColor,
            borderColor,

            opacity:
              pressed ? 0.8 : 1,
          },
        ]}
      >
        <View
          style={
            styles.optionContent
          }
        >
          <Ionicons
            name={
              isCorrectMatch
                ? "checkmark-circle"
                : isWrongMatch
                ? "close-circle"
                : isUsed
                ? "radio-button-on"
                : "radio-button-off"
            }
            size={25}
            color={
              isCorrectMatch
                ? theme.success
                : isWrongMatch
                ? theme.error
                : isUsed
                ? theme.primary
                : theme.icon
            }
          />

          <Text
            style={[
              styles.optionText,
              {
                color: textColor,
              },
            ]}
          >
            {option.text}
          </Text>
        </View>

        {isCorrectMatch && (
          <Ionicons
            name="checkmark"
            size={22}
            color={theme.success}
          />
        )}

        {isWrongMatch && (
          <Ionicons
            name="close"
            size={22}
            color={theme.error}
          />
        )}
      </Pressable>
    );
  };

  // --------------------------------
  // RENDER
  // --------------------------------

  return (
    <ScrollView
      showsVerticalScrollIndicator={
        false
      }
      contentContainerStyle={
        styles.container
      }
    >
      {/* INSTRUCTION */}

      <View
        style={styles.instructions}
      >
        <Text
          style={[
            styles.instructionText,
            {
              color:
                theme.secondaryText,
            },
          ]}
        >
          Listen to each word and
          match it with its meaning.
        </Text>
      </View>

      {/* AUDIO / NATIVE WORDS */}

      <View
        style={
          styles.pairsContainer
        }
      >
        {pairs.map(renderPair)}
      </View>

      {/* ENGLISH OPTIONS */}

      <View
        style={
          styles.optionsContainer
        }
      >
        {options.map(
          renderOption
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },

  instructions: {
    alignItems: "center",

    marginBottom: 20,

    paddingHorizontal: 12,
  },

  instructionText: {
    fontSize: 14,

    lineHeight: 20,

    textAlign: "center",

    fontWeight: "500",
  },

  pairsContainer: {
    gap: 14,

    marginBottom: 24,
  },

  pairCard: {
    borderRadius: 18,

    borderWidth: 2,

    padding: 12,

    gap: 10,
  },

  pairSelectButton: {
    minHeight: 58,
    borderRadius: 14,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pairContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },

  pairText: {
    fontSize: 17,
    fontWeight: "700",
    flex: 1,
    lineHeight: 23,
  },

  optionsContainer: {
    gap: 12,
  },

  optionButton: {
    minHeight: 62,
    borderRadius: 16,
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    flex: 1,
  },

  optionText: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    lineHeight: 22,
  },
});