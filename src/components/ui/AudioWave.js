import { Ionicons } from "@expo/vector-icons";
import { useAudioPlayer } from "expo-audio";
import { useEffect, useRef } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function AudioWave({
  source,
  size = "medium",
  showText = true,
  onPress,
}) {
  const { theme } = useTheme();

  const pulseAnimation = useRef(new Animated.Value(0)).current;
  const animationRef = useRef(null);

  const player = useAudioPlayer(source);
  const isPlaying = player?.playing ?? false;

  const sizes = {
    small: {
      circle: 46,
      icon: 21,
      waveHeight: 42,
      cardPadding: 12,
      barWidth: 3,
      gap: 3,
    },
    medium: {
      circle: 56,
      icon: 25,
      waveHeight: 54,
      cardPadding: 15,
      barWidth: 4,
      gap: 3,
    },
    large: {
      circle: 64,
      icon: 29,
      waveHeight: 64,
      cardPadding: 17,
      barWidth: 4,
      gap: 4,
    },
  };

  const currentSize = sizes[size] || sizes.medium;

  const barHeights = [
    12, 20, 30, 18, 38,
    26, 15, 32, 22, 42,
    28, 18, 35, 25, 44,
    30, 16, 34, 23, 40,
    28, 17, 31, 20, 36,
  ];

  const startAnimation = () => {
    animationRef.current?.stop();

    animationRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 450,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 0,
          duration: 450,
          useNativeDriver: true,
        }),
      ])
    );

    animationRef.current.start();
  };

  const stopAnimation = () => {
    animationRef.current?.stop();
    animationRef.current = null;

    pulseAnimation.stopAnimation();

    Animated.timing(pulseAnimation, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!isPlaying) {
      stopAnimation();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      animationRef.current?.stop();
    };
  }, []);

  const handlePress = () => {
    if (!source) return;

    onPress?.();

    try {
      if (player.playing) {
        player.pause();
        stopAnimation();
      } else {
        player.seekTo(0);
        player.play();
        startAnimation();
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      stopAnimation();
    }
  };

  const renderWaveBar = (height, index) => {
    const scale = pulseAnimation.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [
        1,
        0.8 + (index % 3) * 0.12,
        1.45 - (index % 4) * 0.08,
        0.85 + (index % 5) * 0.08,
        1,
      ],
    });

    return (
      <Animated.View
        key={index}
        style={[
          styles.waveBar,
          {
            height,
            width: currentSize.barWidth,
            backgroundColor: theme.primary,
            opacity: isPlaying ? 1 : 0.4,
            transform: [{ scaleY: scale }],
          },
        ]}
      />
    );
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={!source}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: theme.surface,
          borderColor: theme.primary,
          borderBottomColor: theme.primaryDark,
          padding: currentSize.cardPadding,
          opacity: !source ? 0.55 : 1,
          transform: [{ translateY: pressed ? 3 : 0 }],
        },
      ]}
    >
      <View style={styles.audioContent}>
        <View
          style={[
            styles.speakerButton,
            {
              width: currentSize.circle,
              height: currentSize.circle,
              borderRadius: currentSize.circle / 2,
              backgroundColor: theme.primary,
            },
          ]}
        >
          <Ionicons
            name={isPlaying ? "volume-high" : "volume-medium"}
            size={currentSize.icon}
            color="#FFFFFF"
          />
        </View>

        <View
          style={[
            styles.waveContainer,
            {
              height: currentSize.waveHeight,
              gap: currentSize.gap,
            },
          ]}
        >
          {barHeights.map(renderWaveBar)}
        </View>
      </View>

      {showText && (
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            Tap to listen
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 5,
    overflow: "hidden",
  },

  audioContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  speakerButton: {
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    elevation: 3,
  },

  waveContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 14,
    overflow: "hidden",
  },

  waveBar: {
    borderRadius: 4,
    flexShrink: 1,
  },

  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingHorizontal: 8,
    paddingBottom: 2,
  },

  title: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});