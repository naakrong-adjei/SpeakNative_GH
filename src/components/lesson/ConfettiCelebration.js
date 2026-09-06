import React, { useRef, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { useTheme } from "../../context/ThemeContext";

export default function ConfettiCelebration({
  count = 70,
  colors,
  active = true,
  duration = 4000,
}) {
  const { theme } = useTheme();
  const confettiRef = useRef(null);

  const confettiColors = colors || [
    theme.primary,
    theme.accent,
    theme.success,
    theme.info,
    theme.warning,
  ];

  useEffect(() => {
    if (active && confettiRef.current) {
      confettiRef.current.start();
    }
  }, [active]);

  if (!active) return null;

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <ConfettiCannon
        ref={confettiRef}
        count={count}
        origin={{ x: -10, y: -10 }}
        autoStart={true}
        fadeOut={true}
        fallSpeed={duration / 1000}
        colors={confettiColors}
        explosionSpeed={350}
        renderCount={count}
      />
    </View>
  );
}