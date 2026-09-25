import React, { useEffect, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

export default function ConfettiCelebration({
  count = 50,
  colors,
  active = true,
}) {
  const confettiRef = useRef(null);

  const confettiColors = useMemo(
    () =>
      colors || [
        "#2E7D32",
        "#F4A100",
        "#E53935",
        "#1E88E5",
        "#8E44AD",
        "#00A896",
      ],
    [colors]
  );

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
        origin={{ x: 0, y: 0 }}
        autoStart
        fadeOut
        fallSpeed={25}
        explosionSpeed={350}
        colors={confettiColors}
        renderCount={count}
      />
    </View>
  );
}
