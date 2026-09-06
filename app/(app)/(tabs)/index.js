import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../../src/context/ThemeContext";
import LessonScreen from "../../../src/screens/main/lessons/LessonScreen";

export default function LessonsTab() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LessonScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});