import React, { useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "../themed-text";
import { useTheme } from "../../context/ThemeContext";
import {
  useAudioPlayer,
  useAudioPlayerStatus,
} from "expo-audio";

export default function Flashcard({ word, direction }) {
  const { theme } = useTheme();

  const [isFlipped, setIsFlipped] = useState(false);

  const flipAnimation = useRef(
    new Animated.Value(0)
  ).current;


  const player = useAudioPlayer(null);
  const playerStatus = useAudioPlayerStatus(player);

  const isPlaying = playerStatus.playing;

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


  const hasAudio = Boolean(
    word?.audioUrl ||
    word?.audio ||
    word?.sound
  );

  const getAudioSource = () => {
    const audioPath =
      word?.audioUrl ||
      word?.audio ||
      word?.sound;

    if (!audioPath) {
      return null;
    }


    if (typeof audioPath === "number") {
      return audioPath;
    }


    if (typeof audioPath === "object") {
      return audioPath;
    }


    if (typeof audioPath === "string") {
      return audioPath;
    }

    return null;
  };

  const playAudio = async (event) => {
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }

    const audioSource = getAudioSource();

    if (!audioSource) {
      Alert.alert(
        "Audio Unavailable",
        "No valid audio source was found for this word."
      );
      return;
    }

    try {
      if (isPlaying) {
        player.pause();
        return;
      }

      player.replace(audioSource);

      player.play();
    } catch (error) {
      console.error(
        "Error playing audio:",
        error
      );

      Alert.alert(
        "Playback Error",
        "Could not play the audio file."
      );
    }
  };


  const getNativeText = () => {
    if (typeof word === "string") {
      return word;
    }

    return (
      word?.native ||
      word?.word ||
      ""
    );
  };

  const getEnglishText = () => {
    if (typeof word === "string") {
      return word;
    }

    return (
      word?.english ||
      word?.translation ||
      ""
    );
  };

  const getPronunciation = () => {
    if (
      word &&
      typeof word === "object"
    ) {
      return word?.pronunciation || null;
    }

    return null;
  };

  const nativeText = getNativeText();
  const englishText = getEnglishText();
  const pronunciation = getPronunciation();


  const RenderSpeakerButton = ({
    isDarkBg = false,
  }) => {
    if (!hasAudio) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={playAudio}
        activeOpacity={0.7}
        style={[
          styles.speakerButton,
          {
            backgroundColor: isDarkBg
              ? "rgba(255,255,255,0.2)"
              : `${theme.primary || "#2E7D32"}20`,
          },
        ]}
      >
        <Ionicons
          name={
            isPlaying
              ? "pause-circle"
              : "volume-medium"
          }
          size={24}
          color={
            isDarkBg
              ? "#FFFFFF"
              : theme.primary || "#2E7D32"
          }
        />
      </TouchableOpacity>
    );
  };


  const FrontContent = () => {
    if (direction === "en-native") {
      return (
        <View style={styles.frontContent}>
          <ThemedText
            style={[
              styles.englishFront,
              {
                color: theme.text,
              },
            ]}
          >
            {englishText}
          </ThemedText>
        </View>
      );
    }

    return (
      <View style={styles.nativeContent}>
        <ThemedText
          style={[
            styles.nativeText,
            {
              color: theme.text,
            },
          ]}
        >
          {nativeText}
        </ThemedText>

        {pronunciation && (
          <ThemedText
            style={[
              styles.pronunciationText,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
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
          <ThemedText
            style={[
              styles.nativeText,
              styles.nativeBackText,
            ]}
          >
            {nativeText}
          </ThemedText>

          {pronunciation && (
            <ThemedText
              style={[
                styles.pronunciationText,
                styles.nativeBackText,
              ]}
            >
              {pronunciation}
            </ThemedText>
          )}

          <RenderSpeakerButton
            isDarkBg={true}
          />
        </View>
      );
    }

    return (
      <View style={styles.frontContent}>
        <ThemedText
          style={[
            styles.englishBack,
            styles.nativeBackText,
          ]}
        >
          {englishText}
        </ThemedText>
      </View>
    );
  };


  return (
    <Pressable
      onPress={
        isFlipped
          ? flipToFront
          : flipToBack
      }
    >
      <View>
        <Animated.View
          style={[
            styles.card,
            styles.cardFront,
            frontAnimatedStyle,
            {
              backgroundColor:
                theme.surface,
              borderColor:
                theme.border,
            },
          ]}
        >
          <FrontContent />
        </Animated.View>


        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            backAnimatedStyle,
            {
              backgroundColor:
                theme.primary ||
                "#2E7D32",
            },
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

    shadowOffset: {
      width: 0,
      height: 4,
    },
    
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
    color: "#FFFFFF",
    maxWidth: "90%",
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