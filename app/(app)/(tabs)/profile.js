import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../../src/context/ThemeContext";
import ProfileScreen from "../../../src/screens/main/profile/ProfileScreen";

export default function ProfileTab() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});