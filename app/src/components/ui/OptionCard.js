import React from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../../context/ThemeContext";
import { ThemedText } from "../themed-text";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function OptionCard({
  title,
  description,
  selected,
  onPress,
  icon,
  image,
}) {

  const { theme } = useTheme();

  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handlePressIn = () => {
    translateY.value = withSpring(2, { damping: 15 });
  };

  const handlePressOut = () => {
    translateY.value = withSpring(0, { damping: 15 });
  };

  const activeColor = theme.primary;
  const borderColor = selected ? activeColor : theme.border;

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.card,
        animatedStyle,
        {
          backgroundColor: theme.background,
          borderColor,
          borderBottomWidth: selected ? 4 : 2,
        },
      ]}
    >
      <View style={styles.mediaBox}>
        {image ? (
          <Image source={image} style={styles.image} resizeMode="contain" />
        ) : (
          <Ionicons
            name={icon || "ellipse-outline"}
            size={24}
            color={selected ? activeColor : theme.text}
          />
        )}
      </View>

      <View style={styles.textBox}>
        <ThemedText
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.title,
            { color: selected ? activeColor : theme.text },
          ]}
        >
          {title}
        </ThemedText>

        {description ? (
          <ThemedText
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[
              styles.desc,
              { color: selected ? activeColor : theme.secondaryText },
            ]}
          >
            {description}
          </ThemedText>
        ) : null}
      </View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    borderWidth: 2,
    marginBottom: 16,
    minHeight: 80,
  },

  mediaBox: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  image: {
    width: 24,
    height: 24,
  },

  textBox: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  desc: {
    fontSize: 13,
    fontWeight:"500",
    marginTop: 2,
  },
});