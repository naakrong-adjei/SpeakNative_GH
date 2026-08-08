import React, { useRef, useState, useEffect } from "react";
import { Animated, Pressable, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "../themed-text";
import { useTheme } from "../../context/ThemeContext";
import { Audio } from "expo-av";

export default function Flashcard({ word, direction }) {
  const { theme } = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  // Clean up sound instance on unmount
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setIsFlipped(false);
  };

  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setIsFlipped(true);
  };

  // Helper to determine if an audio property exists on word
  const hasAudio = Boolean(
    word?.audioUrl || word?.audio || word?.sound
  );

  const getAudioSource = () => {
    const audioPath = word?.audioUrl || word?.audio || word?.sound;
    if (!audioPath) return null;

    if (typeof audioPath === "number" || typeof audioPath === "object") {
      return audioPath;
    }

    if (typeof audioPath === "string") {
      return { uri: audioPath };
    }

    return null;
  };

  const playAudio = async (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }

    if (isPlaying) {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
      }
      setIsPlaying(false);
      return;
    }

    const audioSource = getAudioSource();

    if (audioSource) {
      try {
        const { sound: newSound } = await Audio.Sound.createAsync(
          audioSource,
          { shouldPlay: true }
        );
        setSound(newSound);
        setIsPlaying(true);

        newSound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            setIsPlaying(false);
            newSound.unloadAsync();
            setSound(null);
          }
        });
      } catch (error) {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
        Alert.alert("Playback Error", "Could not play the audio file.");
      }
    } else {
      Alert.alert("Audio Unavailable", "No valid audio source found for this word.");
    }
  };

  const getNativeText = () => {
    return typeof word === "string" ? word : word?.native || word?.word || "";
  };

  const getEnglishText = () => {
    return typeof word === "string" ? word : word?.english || word?.translation || "";
  };

  const getPronunciation = () => {
    return typeof word === "object" ? word?.pronunciation || null : null;
  };

  const nativeText = getNativeText();
  const englishText = getEnglishText();
  const pronunciation = getPronunciation();

  const RenderSpeakerButton = ({ isDarkBg = false }) => {
    if (!hasAudio) return null;

    return (
      <TouchableOpacity
        onPress={playAudio}
        style={[
          styles.speakerButton,
          {
            backgroundColor: isDarkBg
              ? "rgba(255,255,255,0.2)"
              : (theme.primary || "#007AFF") + "20",
          },
        ]}
      >
        <Ionicons
          name={isPlaying ? "pause-circle" : "volume-medium"}
          size={24}
          color={isDarkBg ? "#FFFFFF" : theme.primary || "#007AFF"}
        />
      </TouchableOpacity>
    );
  };

  const FrontContent = () => {
    if (direction === "en-native") {
      return (
        <View style={styles.frontContent}>
          <ThemedText style={[styles.englishFront, { color: theme.text }]}>
            {englishText}
          </ThemedText>
        </View>
      );
    }

    return (
      <View style={styles.nativeContent}>
        <ThemedText style={[styles.nativeText, { color: theme.text }]}>
          {nativeText}
        </ThemedText>
        {pronunciation && (
          <ThemedText style={[styles.pronunciationText, { color: theme.secondaryText }]}>
            {pronunciation}
          </ThemedText>
        )}
        <RenderSpeakerButton />
      </View>
    );
  };

  const BackContent = () => {
    if (direction === "en-native") {
      return (
        <View style={styles.nativeContent}>
          <ThemedText style={[styles.nativeText, styles.nativeBackText]}>
            {nativeText}
          </ThemedText>
          {pronunciation && (
            <ThemedText style={[styles.pronunciationText, styles.nativeBackText]}>
              {pronunciation}
            </ThemedText>
          )}
          <RenderSpeakerButton isDarkBg />
        </View>
      );
    }

    return (
      <View style={styles.frontContent}>
        <ThemedText style={[styles.englishBack, styles.nativeBackText]}>
          {englishText}
        </ThemedText>
      </View>
    );
  };

  return (
    <Pressable onPress={isFlipped ? flipToFront : flipToBack}>
      <View>
        <Animated.View
          style={[
            styles.card,
            styles.cardFront,
            frontAnimatedStyle,
            { backgroundColor: theme.surface, borderColor: theme.border },
          ]}
        >
          <FrontContent />
        </Animated.View>
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            backAnimatedStyle,
            { backgroundColor: theme.primary || "#007AFF" },
          ]}
        >
          <BackContent />
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 340,
    maxHeight: 440,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  cardFront: {
    borderWidth: 2,
  },
  cardBack: {
    position: "absolute",
    top: 0,
  },
  frontContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    width: "100%",
  },
  nativeContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
  nativeText: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: "600",
    textAlign: "center",
    maxWidth: "90%",
  },
  pronunciationText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "400",
    textAlign: "center",
    maxWidth: "90%",
    fontStyle: "italic",
  },
  nativeBackText: {
    color: "#FFFFFF",
  },
  englishFront: {
    fontSize: 40,
    lineHeight: 48,
    textAlign: "center",
    fontWeight: "600",
    maxWidth: "90%",
  },
  englishBack: {
    fontSize: 40,
    lineHeight: 48,
    textAlign: "center",
    fontStyle: "italic",
    maxWidth: "90%",
    color: "#FFFFFF",
  },
  speakerButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
});