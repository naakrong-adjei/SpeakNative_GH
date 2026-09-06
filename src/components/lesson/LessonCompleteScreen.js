import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import { ThemedText } from "../themed-text";
import ConfettiCelebration from "./ConfettiCelebration";

const STAR_GIF = require("../../assets/images/star.gif");

export default function LessonCompleteScreen({
  onContinue,
  type = "lesson",
}) {
  const { theme } = useTheme();

  const [showConfetti, setShowConfetti] = useState(false);

  const [starLoaded, setStarLoaded] = useState(false);

  useEffect(() => {
    const confettiTimer = setTimeout(() => {
      setShowConfetti(true);
    }, 200);

    return () => {
      clearTimeout(confettiTimer);
    };
  }, []);

  const completionText =
    type === "quiz"
      ? "You just completed this quiz!"
      : "You just completed this lesson!";

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
          <View style={styles.starContainer}>
            <Image
              source={STAR_GIF}
              style={styles.starGif}
              resizeMode="contain"
              onLoad={() => setStarLoaded(true)}
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
            {completionText}
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
          '#FF6B6B',
          '#4ECDC4',
          '#FFE66D',
          '#A8E6CF',
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

  starContainer: {
    width: 220,
    height: 220,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  starGif: {
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