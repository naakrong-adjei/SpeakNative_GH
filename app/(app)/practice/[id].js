import React from "react";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PracticeScreen from "../../../src/screens/main/practice/PracticeScreen";
import { useTheme } from "../../../src/context/ThemeContext";

export default function PracticeRoute() {
  const params = useLocalSearchParams();
  const { theme } = useTheme();

  const sectionData = params.sectionData
    ? (typeof params.sectionData === 'string' ? JSON.parse(params.sectionData) : params.sectionData)
    : null;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <PracticeScreen
        sectionId={params.sectionId}
        sectionData={sectionData}
        language={params.language || "as-tw"}
        level={params.level || "beginner"}
        mode={params.mode}
        isReview={params.isReview === 'true'}
        sectionTitle={params.sectionTitle}
        quizAlreadyCompleted={params.quizAlreadyCompleted === 'true'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});