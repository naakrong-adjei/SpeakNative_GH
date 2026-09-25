import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import { ThemedText } from "../themed-text";
import ConfettiCelebration from "./ConfettiCelebration";

export default function LessonCompleteScreen({
  onContinue,
  type = "lesson",
}) {
  const { theme } = useTheme();

  const subtitle =
    type === "quiz"
      ? "You just completed this quiz!"
      : "You just completed this lesson!";

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
      <ConfettiCelebration
        count={50}
        active={true}
        duration={2000}
      />

      <View style={styles.content}>
        <View style={styles.messageContainer}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: theme.success,
                borderColor: theme.border,
                shadowColor: theme.primary,
              },
            ]}
          >
            <Ionicons
              name="checkmark-circle"
              size={82}
              color="#FFFFFF"
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

  iconContainer: {
    width: 170,
    height: 170,
    borderRadius: 85,
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",

    // Subtle depth
    borderWidth: 4,

    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,

    // Android
    elevation: 6,
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
