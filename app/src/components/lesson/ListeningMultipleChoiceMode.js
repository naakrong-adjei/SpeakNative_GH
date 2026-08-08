// components/lesson/ListeningMultipleChoiceMode.js
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function ListeningMultipleChoiceMode({
  question,
  onSubmit,
  showResult,
  isCorrect,
}) {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const getAudioSource = () => {
    const audioPath = question?.audioUrl || question?.audio || question?.sound;
    if (!audioPath) return null;
    if (typeof audioPath === "number" || typeof audioPath === "object") {
      return audioPath;
    }
    if (typeof audioPath === "string") {
      return { uri: audioPath };
    }
    return null;
  };

  const playAudio = async () => {
    const audioSource = getAudioSource();
    if (!audioSource) {
      Alert.alert("Audio Unavailable", "No audio source found for this question.");
      return;
    }

    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
      const { sound } = await Audio.Sound.createAsync(audioSource, { shouldPlay: true });
      soundRef.current = sound;
      setIsPlaying(true);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setIsPlaying(false);
        }
      });
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsPlaying(false);
      Alert.alert("Playback Error", "Could not play the audio file.");
    }
  };

  const handleOptionPress = (optionId) => {
    if (showResult || selectedOption !== null) return;
    setSelectedOption(optionId);
    const correct = optionId === question.correctOptionId;
    onSubmit(correct);
  };

  const renderOption = (option) => {
    const isSelected = selectedOption === option.id;
    const isCorrectOption = option.id === question.correctOptionId;
    const showCorrect = showResult && isCorrectOption;
    const showWrong = showResult && isSelected && !isCorrectOption;

    let optionStyle = [
      styles.optionButton,
      { backgroundColor: theme.surface, borderColor: theme.border },
    ];

    if (showCorrect) {
      optionStyle = [
        styles.optionButton,
        { backgroundColor: theme.success + "20", borderColor: theme.success },
      ];
    } else if (showWrong) {
      optionStyle = [
        styles.optionButton,
        { backgroundColor: theme.error + "20", borderColor: theme.error },
      ];
    } else if (isSelected && !showResult) {
      optionStyle = [
        styles.optionButton,
        { backgroundColor: theme.primary + "20", borderColor: theme.primary },
      ];
    }

    return (
      <TouchableOpacity
        key={option.id}
        style={optionStyle}
        onPress={() => handleOptionPress(option.id)}
        disabled={showResult || selectedOption !== null}
        activeOpacity={0.7}
      >
        <View style={styles.optionContent}>
          <View style={[styles.optionCircle, { borderColor: theme.border }]}>
            {isSelected && (
              <View style={[styles.optionSelected, { backgroundColor: theme.primary }]} />
            )}
          </View>
          <Text style={[styles.optionText, { color: theme.text }]}>
            {option.text}
          </Text>
        </View>
        {showCorrect && <Ionicons name="checkmark-circle" size={24} color={theme.success} />}
        {showWrong && <Ionicons name="close-circle" size={24} color={theme.error} />}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.audioButton, { backgroundColor: theme.primary }]}
        onPress={playAudio}
        activeOpacity={0.8}
      >
        <Ionicons name={isPlaying ? "pause-circle" : "volume-high"} size={28} color="#FFF" />
        <Text style={styles.audioButtonText}>
          {isPlaying ? "Playing..." : "Play Audio"}
        </Text>
      </TouchableOpacity>
      <View style={styles.optionsContainer}>{question.options.map(renderOption)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  audioButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 20,
  },
  audioButtonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
  },
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
  },
});
