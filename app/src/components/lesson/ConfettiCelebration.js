import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  View,
} from "react-native";

const DEFAULT_COLORS = [
  "#FFD700",
  "#34C759",
  "#FF9F0A",
  "#4CAF50",
  "#FF3B30",
  "#007AFF",
  "#AF52DE",
  "#FF6B35",
];

const CONFETTI_COUNT = 60;

// Deterministic pseudo-random generator so rendering is stable
const seededRandom = (seed) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

export default function ConfettiCelebration({
  count = CONFETTI_COUNT,
  colors = DEFAULT_COLORS,
  active = true,
  duration = 3500,
}) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!active) return undefined;

    Animated.timing(animation, {
      toValue: 1,
      duration,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    return () => animation.stopAnimation();
  }, [active, duration, animation]);

  const { width: windowWidth, height: windowHeight } =
    Dimensions.get("window");
  const random = seededRandom(count * 7 + colors.length);

  const pieces = Array.from({ length: count }, (_, index) => {
    const size = 6 + random() * 8;
    const color = colors[Math.floor(random() * colors.length)];
    const startX = random() * windowWidth;
    const startY = -20 - random() * windowHeight * 0.2;
    const endX = (random() - 0.5) * windowWidth * 1.4;
    const endY = windowHeight + 60 + random() * 120;
    const rotateDeg = random() * 360;

    const translateX = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, endX],
    });
    const translateY = animation.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [startY, startY + (endY - startY) * 0.35, endY],
    });
    const rotate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [`${rotateDeg}deg`, `${rotateDeg + 720}deg`],
    });
    const opacity = animation.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [1, 1, 0],
    });

    return (
      <Animated.View
        key={index}
        pointerEvents="none"
        style={[
          styles.piece,
          {
            width: size,
            height: size * 0.6,
            backgroundColor: color,
            left: startX,
            top: 0,
            borderRadius: random() > 0.5 ? size * 0.5 : 2,
            opacity,
            transform: [
              { translateX },
              { translateY },
              { rotate },
            ],
          },
        ]}
      />
    );
  });

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {pieces}
    </View>
  );
}

const styles = StyleSheet.create({
  piece: {
    position: "absolute",
  },
});

