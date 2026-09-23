import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useVideoPlayer, VideoView } from "expo-video";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import { ThemedText } from "../themed-text";

const SUCCESS_ANIMATION = require("../../assets/images/celebration/success.mp4");

const SPRING_CONFIG = {
  damping: 12,
  stiffness: 120,
  mass: 0.8,
};

export default function ChapterCompleteScreen({
  chapterTitle,
  xp = 0,
  onContinue,
}) {
  const { theme } = useTheme();

  const videoScale = useSharedValue(0.3);
  const cardScale = useSharedValue(0);
  const buttonScale = useSharedValue(0);

  const player = useVideoPlayer(SUCCESS_ANIMATION, (p) => {
    p.loop = true;
    p.muted = true;
    p.play();
  });

  useEffect(() => {
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Success
    );

    videoScale.value = withSpring(1, SPRING_CONFIG);

    cardScale.value = withDelay(
      200,
      withSpring(1, SPRING_CONFIG)
    );

    buttonScale.value = withDelay(
      400,
      withSpring(1, SPRING_CONFIG)
    );
  }, [cardScale, videoScale, buttonScale]);

  const animatedVideoStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: videoScale.value,
      },
    ],
  }));

  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: cardScale.value,
      },
    ],
    opacity: cardScale.value,
  }));

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: buttonScale.value,
      },
    ],
    opacity: buttonScale.value,
  }));

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.messageContainer}>
          <View style={styles.animationWrapper}>
            <Animated.View
              style={[
                styles.animationContainer,
                animatedVideoStyle,
              ]}
            >
              <VideoView
                player={player}
                style={styles.animation}
                contentFit="contain"
                nativeControls={false}
              />
            </Animated.View>
          </View>

          <ThemedText
            style={[
              styles.completeLabel,
              {
                color: theme.primary,
              },
            ]}
          >
            CHAPTER COMPLETE
          </ThemedText>

          <ThemedText
            style={[
              styles.chapterTitle,
              {
                color: theme.primary,
              },
            ]}
            numberOfLines={3}
          >
            {chapterTitle || "Chapter completed"}
          </ThemedText>

          <ThemedText
            style={[
              styles.subtitle,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            You've completed every lesson in this chapter.
          </ThemedText>

          {xp > 0 && (
            <Animated.View
              style={[
                styles.statsRow,
                animatedCardStyle,
              ]}
            >
              <View
                style={[
                  styles.xpCard,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.accent,
                  },
                ]}
              >
                <Ionicons
                  name="flash"
                  size={26}
                  color={theme.accent}
                />

                <ThemedText
                  style={[
                    styles.xpValue,
                    {
                      color: theme.accent,
                    },
                  ]}
                >
                  +{xp} XP
                </ThemedText>
              </View>
            </Animated.View>
          )}
        </View>

        <Animated.View
          style={[
            styles.buttonContainer,
            animatedButtonStyle,
          ]}
        >
          <Button
            title="CONTINUE"
            variant="primary"
            onPress={onContinue}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 24,
  },

  messageContainer: {
    alignItems: "center",
  },

  animationWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  animationContainer: {
    width: 220,
    height: 220,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  animation: {
    width: 220,
    height: 220,
  },

  completeLabel: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "800",
    letterSpacing: 1.6,
    textAlign: "center",
  },

  chapterTitle: {
    marginTop: 2,
    maxWidth: 340,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 0.1,
  },

  subtitle: {
    marginTop: 8,
    maxWidth: 320,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "600",
    textAlign: "center",
  },

  statsRow: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  xpCard: {
    minWidth: 150,
    minHeight: 100,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderBottomWidth: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  xpValue: {
    fontSize: 22,
    fontWeight: "900",
  },

  buttonContainer: {
    width: "100%",
  },
});