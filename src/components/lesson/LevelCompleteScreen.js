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
              styles.title,
              {
                color: theme.primary,
              },
            ]}
          >
            Level complete!
          </ThemedText>

          <ThemedText
            style={[
              styles.levelTitle,
              {
                color: theme.text,
              },
            ]}
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
            You've completed this level!
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
    paddingTop: 70,
    paddingBottom: 28,
  },

  messageContainer: {
    alignItems: "center",
  },

  trophyContainer: {
    width: 240,
    height: 240,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  trophyVideo: {
    width: 240,
    height: 240,
  },

  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "900",
    textAlign: "center",
  },

  levelTitle: {
    marginTop: 12,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 8,
    maxWidth: 320,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: "500",
    textAlign: "center",
  },

  buttonContainer: {
    width: "100%",
  },
});
