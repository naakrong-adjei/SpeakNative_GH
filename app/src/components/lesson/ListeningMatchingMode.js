// components/lesson/ListeningMatchingMode.js
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

/**
 * ListeningMatchingMode presents a list of audio clips (one per prompt) and
 * a set of English answer choices. The user taps a play button to hear an
 * audio clip, then taps the matching English answer. Question shape:
 *   {
 *     id, type: "listening_matching",
 *     instruction,
 *     pairs: [{ id, native, audioUrl }],
 *     options: [{ id, text }],        // English choices
 *     correctDrops: [{ pairId, optionId }]  // or correctOptionId per pair
 *   }
 */
export default function ListeningMatchingMode({
  question,
  onSubmit,
  showResult,
  isCorrect,
}) {
  const { theme } = useTheme();
  const pairs = question?.pairs || [];
  const options = question?.options || [];
  const [selectedPair, setSelectedPair] = useState(null);
  const [answers, setAnswers] = useState({}); // pairId -> optionId
  const [submitted, setSubmitted] = useState(false);
  const [playingPairId, setPlayingPairId] = useState(null);
  const soundRef = useRef(null);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const getCorrectOptionId = (pairId) => {
    const pair = pairs.find((p) => p.id === pairId);
    if (pair?.correctOptionId) return pair.correctOptionId;
    const drops = question?.correctDrops || [];
    const drop = drops.find((d) => d.pairId === pairId);
    return drop ? drop.optionId : null;
  };

  const playAudio = async (pair) => {
    const audioSource = pair?.audioUrl || pair?.audio || pair?.sound;
    if (!audioSource) {
      Alert.alert("Audio Unavailable", "No audio source found for this item.");
      return;
    }

    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
      const source =
        typeof audioSource === "string" ? { uri: audioSource } : audioSource;
      const { sound } = await Audio.Sound.createAsync(source, { shouldPlay: true });
      soundRef.current = sound;
      setPlayingPairId(pair.id);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setPlayingPairId(null);
        }
      });
    } catch (error) {
      console.error("Error playing audio:", error);
      setPlayingPairId(null);
      Alert.alert("Playback Error", "Could not play the audio file.");
    }
  };

  const handleOptionPress = (optionId) => {
    if (submitted || showResult) return;
    if (selectedPair === null) return;

    const newAnswers = { ...answers, [selectedPair]: optionId };
    setAnswers(newAnswers);
    setSelectedPair(null);

    // If all pairs answered, evaluate
    if (Object.keys(newAnswers).length === pairs.length) {
      setSubmitted(true);
      const allCorrect = pairs.every(
        (p) => newAnswers[p.id] && newAnswers[p.id] === getCorrectOptionId(p.id)
      );
      onSubmit(allCorrect);
    }
  };

  const renderPair = (pair) => {
    const answeredId = answers[pair.id];
    const isDone = answeredId !== undefined;
    const isCorrectMatch = submitted && answeredId === getCorrectOptionId(pair.id);

    let style = [
      styles.pairButton,
      { backgroundColor: theme.surface, borderColor: theme.border },
    ];
    if (isCorrectMatch) {
      style = [styles.pairButton, { backgroundColor: theme.success + "20", borderColor: theme.success }];
    } else if (isDone && submitted) {
      style = [styles.pairButton, { backgroundColor: theme.error + "20", borderColor: theme.error }];
    } else if (selectedPair === pair.id) {
      style = [styles.pairButton, { backgroundColor: theme.primary + "20", borderColor: theme.primary }];
    }

    return (
      <TouchableOpacity
        key={pair.id}
        style={style}
        onPress={() => !submitted && !showResult && setSelectedPair(pair.id)}
        disabled={submitted || showResult}
        activeOpacity={0.7}
      >
        <Ionicons
          name={playingPairId === pair.id ? "pause" : "play"}
          size={22}
          color={theme.primary}
        />
        <Text style={[styles.pairText, { color: theme.text }]}>
          {pair.native || pair.text || pair.left || `Listen ${pair.id}`}
        </Text>
        {isCorrectMatch && <Ionicons name="checkmark-circle" size={22} color={theme.success} />}
      </TouchableOpacity>
    );
  };

  const renderOption = (option) => {
    const isUsed = Object.values(answers).includes(option.id);
    const usedBy = Object.keys(answers).find((k) => answers[k] === option.id);
    const isCorrectMatch = submitted && usedBy && getCorrectOptionId(usedBy) === option.id;

    let style = [
      styles.optionButton,
      { backgroundColor: theme.surface, borderColor: theme.border },
    ];
    if (isCorrectMatch) {
      style = [styles.optionButton, { backgroundColor: theme.success + "20", borderColor: theme.success }];
    } else if (isUsed && submitted) {
      style = [styles.optionButton, { backgroundColor: theme.error + "20", borderColor: theme.error }];
    } else if (isUsed) {
      style = [styles.optionButton, { backgroundColor: theme.primary + "20", borderColor: theme.primary }];
    }

    return (
      <TouchableOpacity
        key={option.id}
        style={style}
        onPress={() => handleOptionPress(option.id)}
        disabled={showResult || isUsed}
        activeOpacity={0.7}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>{option.text}</Text>
        {isCorrectMatch && <Ionicons name="checkmark-circle" size={22} color={theme.success} />}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.instructions}>
        <Text style={[styles.instructionText, { color: theme.secondaryText }]}>
          Tap a play button to hear audio, then tap its English meaning below.
        </Text>
      </View>
      <View style={styles.pairsContainer}>
        {pairs.map(renderPair)}
      </View>
      <View style={styles.optionsContainer}>
        {options.map(renderOption)}
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
  pairsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  pairButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  pairText: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  optionsContainer: {
    gap: 12,
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
  optionText: {
    fontSize: 15,
    fontWeight: "500",
    flex: 1,
  },
});
