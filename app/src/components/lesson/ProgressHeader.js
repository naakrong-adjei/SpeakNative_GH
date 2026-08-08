import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

export default function ProgressHeader({
  progress,
  currentCount,
  totalCount,
  hearts,
  onClose,
}) {
  const { theme } = useTheme();
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: Math.min(Math.max(progress, 0), 100),
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton} activeOpacity={0.7}>
        <Ionicons name="close" size={28} color={theme.text} />
      </TouchableOpacity>

      <View style={[styles.progressBarTrack, { backgroundColor: theme.border || "#E5E5E5" }]}>
        <Animated.View
          style={[
            styles.progressBarFill,
            {
              width: widthInterpolated,
              backgroundColor: theme.primary || "#58CC02",
            },
          ]}
        >
        
          <View style={styles.progressHighlight} />
        </Animated.View>
      </View>

    
        <View style={styles.statContainer}>
          <Text style={[styles.countText, { color: theme.secondaryText }]}>
            {currentCount}/{totalCount}
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  closeButton: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarTrack: {
    flex: 1,
    height: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 8,
    position: "relative",
  },
  progressHighlight: {
    position: "absolute",
    top: 2,
    left: 4,
    right: 4,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 2,
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    minWidth: 40,
    justifyContent: "flex-end",
  },
  heartText: {
    fontSize: 16,
    fontWeight: "700",
  },
  countText: {
    fontSize: 15,
    fontWeight: "700",
  },
});