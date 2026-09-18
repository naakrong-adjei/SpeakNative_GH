import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Animated,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useAudioPlayer } from "expo-audio";

import { ThemedText } from "../themed-text";
import { useTheme } from "../../context/ThemeContext";

export default function Flashcard({
  word,
  direction,
}) {
  const { theme } = useTheme();

  const [isFlipped, setIsFlipped] = useState(false);

  const flipAnimation = useRef(
    new Animated.Value(0)
  ).current;

  const audioSource = useMemo(() => {
    const source =
      word?.audioUrl ||
      word?.audio ||
      word?.sound;

    if (!source) {
      return null;
    }

    if (
      typeof source === "string" ||
      typeof source === "number"
    ) {
      return source;
    }

    if (typeof source === "object") {
      return source;
    }

    return null;
  }, [word]);

  const player = useAudioPlayer(audioSource);

  const hasAudio = Boolean(audioSource);

  const nativeText =
    typeof word === "string"
      ? word
      : word?.native ||
        word?.word ||
        "";

  const englishText =
    typeof word === "string"
      ? word
      : word?.english ||
        word?.translation ||
        "";

  const pronunciation =
    word &&
    typeof word === "object"
      ? word?.pronunciation || null
      : null;

  useEffect(() => {
    flipAnimation.stopAnimation();
    flipAnimation.setValue(0);
    setIsFlipped(false);

    try {
      player.pause();
      player.seekTo(0);
    } catch {}
  }, [word, direction]);

  const flipToBack = () => {
    if (isFlipped) {
      return;
    }

    setIsFlipped(true);

    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const flipToFront = () => {
    if (!isFlipped) {
      return;
    }

    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(false);
    });
  };

  const handleCardPress = () => {
    if (isFlipped) {
      flipToFront();
    } else {
      flipToBack();
    }
  };

  const playAudio = (event) => {
    event?.stopPropagation?.();

    if (!audioSource) {
      return;
    }

    try {
      player.pause();
      player.seekTo(0);
      player.play();
    } catch {}
  };

  const handleSpeakerPressIn = (event) => {
    event?.stopPropagation?.();
  };

  const renderSpeakerButton = ({
    isDarkBg = false,
  } = {}) => {
    if (!hasAudio) {
      return null;
    }

    return (
      <TouchableOpacity
        onPressIn={handleSpeakerPressIn}
        onPress={playAudio}
        activeOpacity={0.7}
        style={[
          styles.speakerButton,
          {
            backgroundColor: isDarkBg
              ? theme.surface
              : theme.primary,
          },
        ]}
      >
        <Ionicons
          name="volume-medium"
          size={24}
          color={
            isDarkBg
              ? theme.primary
              : theme.surface
          }
        />
      </TouchableOpacity>
    );
  };

  const frontContent =
    direction === "en-native" ? (
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
    ) : (
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
                color: theme.secondaryText,
              },
            ]}
          >
            {pronunciation}
          </ThemedText>
        )}

        {renderSpeakerButton()}
      </View>
    );

  const backContent =
    direction === "en-native" ? (
      <View style={styles.nativeContent}>
        <ThemedText
          style={[
            styles.nativeText,
            {
              color: theme.surface,
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
                color: theme.surface,
              },
            ]}
          >
            {pronunciation}
          </ThemedText>
        )}

        {renderSpeakerButton({
          isDarkBg: true,
        })}
      </View>
    ) : (
      <View style={styles.frontContent}>
        <ThemedText
          style={[
            styles.englishBack,
            {
              color: theme.surface,
            },
          ]}
        >
          {englishText}
        </ThemedText>
      </View>
    );

  const frontRotation =
    flipAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    });

  const backRotation =
    flipAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"],
    });

  return (
    <Pressable onPress={handleCardPress}>
      <View style={styles.cardWrapper}>
        <Animated.View
          style={[
            styles.card,
            styles.cardFront,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
              transform: [
                {
                  rotateY: frontRotation,
                },
              ],
            },
          ]}
        >
          {frontContent}
        </Animated.View>

        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            {
              backgroundColor: theme.primary,
              borderColor: theme.primary,
              transform: [
                {
                  rotateY: backRotation,
                },
              ],
            },
          ]}
        >
          {backContent}
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: 340,
    height: 440,
  },

  card: {
    position: "absolute",
    width: 340,
    height: 440,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden",
    paddingHorizontal: 32,
    paddingVertical: 48,
    backfaceVisibility: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  cardFront: {
    borderWidth: 2,
  },

  cardBack: {
    borderWidth: 0,
  },

  frontContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
    width: "100%",
  },

  nativeContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: "100%",
  },

  nativeText: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "600",
    textAlign: "center",
    maxWidth: "90%",
  },

  englishFront: {
    fontSize: 32,
    lineHeight: 40,
    textAlign: "center",
    fontWeight: "600",
    maxWidth: "90%",
  },

  englishBack: {
    fontSize: 32,
    lineHeight: 40,
    textAlign: "center",
    fontStyle: "italic",
    maxWidth: "90%",
  },

  pronunciationText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "400",
    textAlign: "center",
    maxWidth: "90%",
    fontStyle: "italic",
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