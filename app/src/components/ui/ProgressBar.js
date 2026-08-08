import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function ProgressBar({ step, total, color }) {
  const { theme } = useTheme();

  // Prevent division by zero and compute percentage [0 - 100]
  const targetProgress = total > 0 ? Math.min(Math.max(((step + 1) / total) * 100, 0), 100) : 0;

  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: targetProgress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [targetProgress]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const barColor = color || theme.primary || "#58CC02";

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.track,
          { backgroundColor: theme.border || "#E5E5E5" },
        ]}
      >
        <Animated.View
          style={[
            styles.fill,
            {
              width: widthInterpolated,
              backgroundColor: barColor,
            },
          ]}
        >
          {/* Duolingo glossy top highlight line */}
          <View style={styles.highlight} />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 12,
  },
  track: {
    height: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 8,
    position: "relative",
  },
  highlight: {
    position: "absolute",
    top: 2,
    left: 4,
    right: 4,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 2,
  },
});