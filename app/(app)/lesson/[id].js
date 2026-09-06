import React from "react";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import LessonOverview from "../../../src/components/lesson/LessonOverview"
import { useTheme } from "../../../src/context/ThemeContext";

export default function LessonOverviewRoute() {
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LessonOverview lessonId={id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});