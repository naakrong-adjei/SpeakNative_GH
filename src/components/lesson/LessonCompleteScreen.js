import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import {
  useVideoPlayer,
  VideoView,
} from "expo-video";

import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import { ThemedText } from "../themed-text";
import ConfettiCelebration from "./ConfettiCelebration";

const REWARD_VIDEO = require("../../assets/images/celebration/reward.mp4");

export default function LessonCompleteScreen({
  onContinue,
  type = "lesson",
}) {
  const { theme } = useTheme();

  const [showConfetti, setShowConfetti] = useState(false);

  const player = useVideoPlayer(REWARD_VIDEO, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  useEffect(() => {
    const confettiTimer = setTimeout(() => {
      setShowConfetti(true);
    }, 200);

    return () => {
      clearTimeout(confettiTimer);
    };
  }, []);

  const completionText = {
    lesson: "You just completed this lesson!",
    quiz: "You just completed this quiz!",
    chapter: "You just completed this chapter!",
  };

  const subtitle =
    completionText[type] ||
    completionText.lesson;

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.messageContainer}>
          <View style={styles.rewardContainer}>
            <VideoView
              player={player}
              style={styles.rewardVideo}
              contentFit="contain"
              nativeControls={false}
            />
          </View>

          <ThemedText
            style={[
              styles.title,
              {
                color: theme.primary,
              },
            ]}
          >
            Learning legend!
          </ThemedText>

          <ThemedText
            style={[
              styles.subtitle,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            {subtitle}
          </ThemedText>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="CONTINUE"
            variant="primary"
            onPress={onContinue}
          />
        </View>
      </View>

      <ConfettiCelebration
        active={showConfetti}
        count={100}
        duration={4000}
        colors={[
          theme.primary,
          theme.accent,
          theme.success,
          theme.info,
          theme.warning,
          "#FF6B6B",
          "#4ECDC4",
          "#FFE66D",
          "#A8E6CF",
        ]}
      />
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
    paddingTop: 100,
    paddingBottom: 28,
  },

  messageContainer: {
    alignItems: "center",
  },

  rewardContainer: {
    width: 220,
    height: 220,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  rewardVideo: {
    width: 220,
    height: 220,
  },

  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "center",
  },

  buttonContainer: {
    width: "100%",
  },
});
