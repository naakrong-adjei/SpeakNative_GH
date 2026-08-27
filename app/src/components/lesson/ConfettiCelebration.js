import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

const CONFETTI_COUNT = 70;

const seededRandom = (seed: number) => {
  let s = seed;

  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

export default function ConfettiCelebration({
  count = CONFETTI_COUNT,
  colors,
  active = true,
  duration = 4000,
}: {
  count?: number;
  colors?: string[];
  active?: boolean;
  duration?: number;
}) {
  const { theme } = useTheme();

  const animation = useRef(new Animated.Value(0)).current;

  const themeColors = useMemo(
    () =>
      colors || [
        theme.primary,
        theme.accent,
        theme.success,
        theme.info,
        theme.warning,
      ],
    [colors, theme]
  );

  useEffect(() => {
    if (!active) {
      animation.setValue(0);
      return;
    }

    animation.setValue(0);

    Animated.timing(animation, {
      toValue: 1,
      duration,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    return () => {
      animation.stopAnimation();
    };
  }, [active, duration, animation]);

  const { width, height } = Dimensions.get("window");

  const pieces = useMemo(() => {
    const random = seededRandom(
      count * 17 + themeColors.length * 31
    );

    return Array.from({ length: count }, (_, index) => {
      const size = 5 + random() * 9;

      const color =
        themeColors[
          Math.floor(random() * themeColors.length)
        ];

      /*
       * Start mostly around the top-center so the
       * animation feels like a celebration burst.
       */
      const startX =
        width * 0.15 +
        random() * width * 0.7;

      const startY =
        -20 -
        random() * height * 0.15;

      /*
       * Pieces spread outward as they fall.
       */
      const horizontalDistance =
        (random() - 0.5) *
        width *
        (1.4 + random() * 0.8);

      const fallDistance =
        height +
        80 +
        random() * 180;

      /*
       * Give every piece its own movement.
       */
      const sway =
        (random() - 0.5) *
        width *
        0.35;

      const rotation =
        180 +
        random() * 720;

      const delay =
        random() * 0.12;

      const translateX = animation.interpolate({
        inputRange: [0, 0.25, 0.65, 1],
        outputRange: [
          0,
          horizontalDistance * 0.25,
          horizontalDistance * 0.7 + sway,
          horizontalDistance,
        ],
      });

      const translateY = animation.interpolate({
        inputRange: [0, 0.18, 0.55, 1],
        outputRange: [
          startY,
          startY + fallDistance * 0.12,
          startY + fallDistance * 0.55,
          fallDistance,
        ],
      });

      const rotate = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [
          "0deg",
          `${rotation * 0.45}deg`,
          `${rotation}deg`,
        ],
      });

      /*
       * Small pieces appear quickly and disappear
       * naturally near the end.
       */
      const opacity = animation.interpolate({
        inputRange: [
          0,
          0.08 + delay,
          0.68 + delay * 0.5,
          0.9,
          1,
        ],
        outputRange: [0, 1, 1, 0.55, 0],
        extrapolate: "clamp",
      });

      /*
       * Slight scaling makes the pieces feel less static.
       */
      const scale = animation.interpolate({
        inputRange: [0, 0.15, 0.75, 1],
        outputRange: [0.7, 1, 0.95, 0.75],
      });

      /*
       * Alternate between:
       * - small rectangles
       * - circles
       * - longer strips
       */
      const shape = index % 3;

      let pieceWidth = size;
      let pieceHeight = size * 0.55;
      let borderRadius = 2;

      if (shape === 1) {
        pieceWidth = size * 0.8;
        pieceHeight = size * 0.8;
        borderRadius = size;
      }

      if (shape === 2) {
        pieceWidth = size * 1.6;
        pieceHeight = size * 0.35;
        borderRadius = size * 0.2;
      }

      return (
        <Animated.View
          key={index}
          pointerEvents="none"
          style={[
            styles.piece,
            {
              width: pieceWidth,
              height: pieceHeight,
              left: startX,
              top: 0,
              backgroundColor: color,
              borderRadius,

              opacity,

              transform: [
                { translateX },
                { translateY },
                { rotate },
                { scale },
              ],
            },
          ]}
        />
      );
    });
  }, [
    count,
    themeColors,
    width,
    height,
    animation,
  ]);

  if (!active) return null;

  return (
    <View
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
    >
      {pieces}
    </View>
  );
}

const styles = StyleSheet.create({
  piece: {
    position: "absolute",
  },
});