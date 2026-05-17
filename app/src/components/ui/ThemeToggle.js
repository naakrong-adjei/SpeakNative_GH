import React, { useRef } from "react";
import { Pressable, View, StyleSheet, Animated } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, mode, toggleTheme } = useTheme();

  const translateY = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: 3,
      useNativeDriver: true,
      tension: 120,
      friction: 6,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      tension: 120,
      friction: 6,
    }).start();
  };

  return (
    <View>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Pressable
          onPress={toggleTheme}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[
            styles.wrapper,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          <Feather
            name={mode === "dark" ? "sun" : "moon"}
            size={20}
            color={theme.text}
          />
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});