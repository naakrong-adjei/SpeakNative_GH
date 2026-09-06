import React from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import OnboardingScreen from "../../src/screens/onboarding/OnboardingScreen";
import { useTheme } from "../../src/context/ThemeContext";

export default function OnboardingRoute() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleComplete = () => {
    console.log("Attempting to navigate to tabs...");
    router.replace("/(app)"); 
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <OnboardingScreen onComplete={handleComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});