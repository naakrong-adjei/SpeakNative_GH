import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useEffect, useMemo, useState } from "react";
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
  showResult,
  onMatchesChange,
}) {
  const { theme } = useTheme();

  const pairs = question?.pairs || [];
  const options = question?.options || [];

  const [selectedPair, setSelectedPair] = useState(null);
  const [answers, setAnswers] = useState({});

  const shuffledOptions = useMemo(() => {
    return [...options].sort(() => Math.random() - 0.5);
  }, [question]);

  useEffect(() => {
    setSelectedPair(null);
    setAnswers({});
    onMatchesChange?.({});
  }, [question]);

  const getCorrectOptionId = (pairId) => {
    const pair = pairs.find(
      (item) => item.id === pairId
    );

    if (pair?.correctOptionId) {
      return pair.correctOptionId;
    }

    const drops = question?.correctDrops || [];

    const drop = drops.find(
      (item) => item.pairId === pairId
    );

    return drop?.optionId || null;
  };

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

  const handlePairPress = async (pairId) => {
    if (showResult) {
      return;
    }

    const isAlreadyAnswered =
      answers[pairId] !== undefined;

    if (isAlreadyAnswered) {
      const updatedAnswers = {
        ...answers,
      };

      delete updatedAnswers[pairId];

      setAnswers(updatedAnswers);
      setSelectedPair(pairId);
      onMatchesChange?.(updatedAnswers);

      await Haptics.impactAsync(
        Haptics.ImpactFeedbackStyle.Light
      );

      return;
    }

    setSelectedPair(
      selectedPair === pairId
        ? null
        : pairId
    );

    await Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );
  };

  const handleOptionPress = async (optionId) => {
    if (
      showResult ||
      selectedPair === null
    ) {
      return;
    }

    const existingPairId = Object.keys(
      answers
    ).find(
      (pairId) =>
        answers[pairId] === optionId
    );

    const updatedAnswers = {
      ...answers,
    };

    if (existingPairId) {
      delete updatedAnswers[existingPairId];
    }

    updatedAnswers[selectedPair] =
      optionId;

    setAnswers(updatedAnswers);
    setSelectedPair(null);
    onMatchesChange?.(updatedAnswers);

    await Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );
  };

  const getPairState = (pair) => {
    const answeredOptionId =
      answers[pair.id];

    const isAnswered =
      answeredOptionId !== undefined;

    const isSelected =
      selectedPair === pair.id;

    const isCorrect =
      showResult &&
      isAnswered &&
      answeredOptionId ===
        getCorrectOptionId(pair.id);

    const isWrong =
      showResult &&
      isAnswered &&
      answeredOptionId !==
        getCorrectOptionId(pair.id);

    if (isCorrect) {
      return {
        backgroundColor:
          theme.success + "12",
        borderColor: theme.success,
        icon: "checkmark-circle",
        iconColor: theme.success,
      };
    }

    if (isWrong) {
      return {
        backgroundColor:
          theme.error + "12",
        borderColor: theme.error,
        icon: "close-circle",
        iconColor: theme.error,
      };
    }

    if (isSelected) {
      return {
        backgroundColor:
          theme.primary + "12",
        borderColor: theme.primary,
        icon: "radio-button-on",
        iconColor: theme.primary,
      };
    }

    if (isAnswered) {
      return {
        backgroundColor:
          theme.primary + "08",
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

  const getOptionState = (option) => {
    const matchedPairId = Object.keys(
      answers
    ).find(
      (pairId) =>
        answers[pairId] === option.id
    );

    const isUsed =
      matchedPairId !== undefined;

    const isCorrect =
      showResult &&
      isUsed &&
      getCorrectOptionId(
        matchedPairId
      ) === option.id;

    const isWrong =
      showResult &&
      isUsed &&
      getCorrectOptionId(
        matchedPairId
      ) !== option.id;

    if (isCorrect) {
      return {
        backgroundColor:
          theme.success + "12",
        borderColor: theme.success,
        textColor: theme.success,
        icon: "checkmark-circle",
        iconColor: theme.success,
      };
    }

    if (isWrong) {
      return {
        backgroundColor:
          theme.error + "12",
        borderColor: theme.error,
        textColor: theme.error,
        icon: "close-circle",
        iconColor: theme.error,
      };
    }

    if (isUsed) {
      return {
        backgroundColor:
          theme.primary + "08",
        borderColor: theme.primary,
        textColor: theme.text,
        icon: "checkmark-circle",
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

  const renderPair = (pair, index) => {
    const state = getPairState(pair);

    const answeredOptionId =
      answers[pair.id];

    const matchedOption = options.find(
      (option) =>
        option.id === answeredOptionId
    );

    return (
      <Pressable
        key={pair.id}
        onPress={() =>
          handlePairPress(pair.id)
        }
        disabled={showResult}
        style={({ pressed }) => [
          styles.pairCard,
          {
            backgroundColor:
              state.backgroundColor,
            borderColor:
              state.borderColor,
            opacity:
              pressed && !showResult
                ? 0.85
                : 1,
          },
        ]}
      >
        <View style={styles.pairTopRow}>
          <View
            style={[
              styles.numberBadge,
              {
                backgroundColor:
                  state.borderColor +
                  "18",
              },
            ]}
          >
            <Text
              style={[
                styles.numberText,
                {
                  color:
                    state.borderColor,
                },
              ]}
            >
              {index + 1}
            </Text>
          </View>

          <View style={styles.audioWrapper}>
            <AudioWave
              source={getAudioSource(pair)}
              size="small"
              showText={false}
            />
          </View>

          <Ionicons
            name={state.icon}
            size={24}
            color={state.iconColor}
          />
        </View>

        <View style={styles.pairTextArea}>
          <Text
            style={[
              styles.listenLabel,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            TAP TO LISTEN
          </Text>

          <Text
            style={[
              styles.nativeText,
              {
                color: theme.text,
              },
            ]}
          >
            {pair.native ||
              pair.text ||
              pair.left ||
              `Word ${index + 1}`}
          </Text>

          {matchedOption && (
            <View
              style={[
                styles.matchedAnswer,
                {
                  backgroundColor:
                    theme.background,
                },
              ]}
            >
              <Ionicons
                name="arrow-forward"
                size={16}
                color={theme.secondaryText}
              />

              <Text
                style={[
                  styles.matchedAnswerText,
                  {
                    color:
                      theme.secondaryText,
                  },
                ]}
                numberOfLines={1}
              >
                {matchedOption.text}
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    );
  };

  const renderOption = (option) => {
    const state =
      getOptionState(option);

    const isUsed =
      Object.values(answers).includes(
        option.id
      );

    return (
      <Pressable
        key={option.id}
        onPress={() =>
          handleOptionPress(option.id)
        }
        disabled={
          showResult ||
          selectedPair === null
        }
        style={({ pressed }) => [
          styles.optionButton,
          {
            backgroundColor:
              state.backgroundColor,
            borderColor:
              state.borderColor,
            opacity:
              pressed &&
              !showResult &&
              selectedPair !== null
                ? 0.85
                : selectedPair === null &&
                    !isUsed
                  ? 0.6
                  : 1,
          },
        ]}
      >
        <View
          style={styles.optionContent}
        >
          <Ionicons
            name={state.icon}
            size={23}
            color={state.iconColor}
          />

          <Text
            style={[
              styles.optionText,
              {
                color:
                  state.textColor,
              },
            ]}
          >
            {option.text}
          </Text>
        </View>
      </Pressable>
    );
  };

  const matchedCount =
    Object.keys(answers).length;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={
        styles.container
      }
    >
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
        <View
          style={[
            styles.instructionIcon,
            {
              backgroundColor:
                theme.primary + "15",
            },
          ]}
        >
          <Ionicons
            name="headset-outline"
            size={22}
            color={theme.primary}
          />
        </View>

        <View
          style={styles.instructionContent}
        >
          <Text
            style={[
              styles.instructionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Match what you hear
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
            Listen to a word, select it,
            then choose its meaning.
          </Text>
        </View>
      </View>

      <View style={styles.progressRow}>
        <Text
          style={[
            styles.progressLabel,
            {
              color:
                theme.secondaryText,
            },
          ]}
        >
          MATCHES
        </Text>

        <Text
          style={[
            styles.progressCount,
            {
              color: theme.text,
            },
          ]}
        >
          {matchedCount}/{pairs.length}
        </Text>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: theme.text,
            },
          ]}
        >
          Listen & select
        </Text>

        <Text
          style={[
            styles.sectionSubtitle,
            {
              color:
                theme.secondaryText,
            },
          ]}
        >
          Tap a word to choose its meaning
        </Text>

        <View style={styles.pairsContainer}>
          {pairs.map(renderPair)}
        </View>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: theme.text,
            },
          ]}
        >
          Choose the meaning
        </Text>

        <View style={styles.optionsContainer}>
          {shuffledOptions.map(
            renderOption
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },

  instructionCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    gap: 12,
  },

  instructionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  instructionContent: {
    flex: 1,
  },

  instructionTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 3,
  },

  instructionText: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  progressLabel: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.8,
  },

  progressCount: {
    fontSize: 14,
    fontWeight: "800",
  },

  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 4,
  },

  sectionSubtitle: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "500",
    marginBottom: 12,
  },

  pairsContainer: {
    gap: 10,
  },

  pairCard: {
    borderWidth: 2,
    borderRadius: 18,
    padding: 14,
  },

  pairTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  numberBadge: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  numberText: {
    fontSize: 13,
    fontWeight: "900",
  },

  audioWrapper: {
    flex: 1,
    alignItems: "flex-start",
  },

  pairTextArea: {
    marginTop: 10,
    paddingLeft: 40,
  },

  listenLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginBottom: 3,
  },

  nativeText: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: "800",
  },

  matchedAnswer: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
  },

  matchedAnswerText: {
    fontSize: 13,
    fontWeight: "600",
    maxWidth: 220,
  },

  optionsContainer: {
    gap: 10,
  },

  optionButton: {
    minHeight: 60,
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 15,
    justifyContent: "center",
  },

  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  optionText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
  },
});