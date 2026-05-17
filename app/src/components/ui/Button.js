import { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function Button({
  title,
  onPress,
  disabled,
  style,
  textStyle,
  variant = "primary",
  icon,
  status = "default",
}) {
  const { theme } = useTheme();

  const translateY = useRef(new Animated.Value(0)).current;
  const isPrimary = variant === "primary";

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: 4,
      useNativeDriver: true,
      tension: 150,
      friction: 10,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      tension: 150,
      friction: 10,
    }).start();
  };

  const getColors = () => {
    if (disabled) {
      return {
        bg: theme.border,
        border: theme.border,
        text: theme.secondaryText,
        bottom: theme.border,
      };
    }

    if (status === "error") {
      return {
        bg: theme.error,
        border: theme.error,
        text: "#fff",
        bottom: theme.error,
      };
    }

    if (status === "success") {
      return {
        bg: theme.success,
        border: theme.success,
        text: "#fff",
        bottom: theme.success,
      };
    }

    return {
      bg: isPrimary ? theme.primary : theme.surface,
      border: isPrimary ? theme.primary : theme.border,
      text: isPrimary ? "#fff" : theme.text,
      bottom: isPrimary ? theme.primaryDark : theme.border,
    };
  };

  const colors = getColors();

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        style={[
          styles.button,
          {
            backgroundColor: colors.bg,
            borderColor: colors.border,
            borderBottomColor: colors.bottom,
          },

          isPrimary ? styles.primary : styles.secondary,

          disabled && styles.disabled,

          style,
        ]}
      >
        <View style={styles.content}>
          {icon}

          <Text
            style={[
              styles.text,
              { color: colors.text },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },

  primary: {
    borderBottomWidth: 5,
  },

  secondary: {
    borderWidth: 2,
    borderBottomWidth: 5,
  },

  disabled: {
    opacity: 0.7,
    borderBottomWidth: 5,
  },

  text: {
    fontWeight: "700",
    fontSize: 15,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});