import React from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "../context/ThemeContext";

export function ThemedText({
  style,
  type = "default",
  color: colorProp,
  children,
  ...rest
}) {
  const { theme } = useTheme();

  const textColor = colorProp || theme.text;

  return (
    <Text
      style={[
        { color: textColor },
        styles[type] || styles.default,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },

  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.8,
  },

  link: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight:"500",
  },
});