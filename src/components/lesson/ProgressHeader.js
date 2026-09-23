import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
  }, [progress, animatedWidth]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TouchableOpacity
        onPress={onClose}
        style={styles.closeButton}
        activeOpacity={0.7}
      >
        <Ionicons
          name="close"
          size={26}
          color={theme.text}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.progressBarTrack,
          {
            backgroundColor:
              theme.border || "#E5E5E5",
          },
        ]}
      >
        <Animated.View
          style={[
            styles.progressBarFill,
            {
              width: widthInterpolated,
              backgroundColor:
                theme.primary || "#58CC02",
            },
          ]}
        >
          <View style={styles.progressHighlight} />
        </Animated.View>
      </View>

      <View style={styles.statContainer}>
        <Text
          style={[
            styles.countText,
            {
              color: theme.secondaryText,
            },
          ]}
        >
          {currentCount}/{totalCount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 8,
    gap: 10,
  },

  closeButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },

  progressBarTrack: {
    flex: 1,
    height: 14,
    borderRadius: 7,
    overflow: "hidden",
  },

  progressBarFill: {
    height: "100%",
    borderRadius: 7,
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
    minWidth: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  countText: {
    fontSize: 15,
    fontWeight: "700",
  },
});
