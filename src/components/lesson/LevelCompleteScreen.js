import { StyleSheet, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import { ThemedText } from "../themed-text";

const TROPHY_VIDEO = require("../../assets/images/celebration/trophy.mp4");

export default function LevelCompleteScreen({
  levelTitle,
  onContinue,
}) {
  const { theme } = useTheme();

  const player = useVideoPlayer(TROPHY_VIDEO, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

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
          <View style={styles.trophyContainer}>
            <VideoView
              player={player}
              style={styles.trophyVideo}
              contentFit="contain"
              nativeControls={false}
            />
          </View>

          <ThemedText
            style={[
              styles.completeLabel,
              {
                color: theme.primary,
              },
            ]}
          >
            LEVEL COMPLETE
          </ThemedText>

          <ThemedText
            style={[
              styles.levelTitle,
              {
                color: theme.primary,
              },
            ]}
            numberOfLines={3}
          >
            {levelTitle || "Level completed"}
          </ThemedText>

          <ThemedText
            style={[
              styles.subtitle,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            You've completed this level.
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

  trophyContainer: {
    width: 240,
    height: 240,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  trophyVideo: {
    width: 240,
    height: 240,
  },

  completeLabel: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "800",
    letterSpacing: 1.6,
    textAlign: "center",
  },

  levelTitle: {
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

  buttonContainer: {
    width: "100%",
  },
});