import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ThemeToggle from "../../components/ui/ThemeToggle";
import Button from "../../components/ui/Button";
import { introData } from "../../constants/data/introData";
import { useTheme } from "../../context/ThemeContext";
import GoogleSignIn from "./GoogleSignIn";
import { ThemedText } from "../../components/themed-text";

const { width, height } = Dimensions.get("window");

export default function IntroScreen({ navigation }) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(currentIndex, { duration: 500 });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % introData.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          progress.value,
          [0, 1, 2],
          [0, -width, -width * 2],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <View style={[styles.themeToggle, { top: insets.top + 10 }]}>
        <ThemeToggle />
      </View>


      <View style={styles.sliderWrapper}>
        <Animated.View style={[styles.slider, slideAnimatedStyle]}>
          {introData.map((item) => (
            <View key={item.id} style={styles.slide}>
              <Image source={item.image} style={styles.image} />

              <ThemedText type="title" style={styles.title}>
                {item.title}
              </ThemedText>

              <ThemedText style={styles.desc}>
                {item.description}
              </ThemedText>
            </View>
          ))}
        </Animated.View>
      </View>


      <View style={styles.dots}>
        {introData.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor:
                  currentIndex === i ? theme.primary : theme.border,
                width: currentIndex === i ? 18 : 8,
              },
            ]}
          />
        ))}
      </View>


      <View
        style={[
          styles.bottomContainer,
          { paddingBottom: insets.bottom + 10 },
        ]}
      >
        <Button
          title="Continue with Email"
          variant="primary"
          onPress={() => navigation.navigate("Email")}
        />

        <GoogleSignIn />

        <View style={styles.termsWrapper}>
          <ThemedText style={styles.termsText}>
            By continuing, you agree to our{" "}
            <ThemedText type="link" color={theme.primary}>Terms</ThemedText>
            {" and "}
            <ThemedText type="link" color={theme.primary}>Privacy Policy</ThemedText>
          </ThemedText>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  themeToggle: {
    position: "absolute",
    right: 20,
    zIndex: 100,
  },

  sliderWrapper: {
    height: height * 0.62,
  },

  slider: {
    flexDirection: "row",
    width: width * 3,
  },

  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: "10%",
  },

  image: {
    width: 240,
    height: 240,
    resizeMode: "contain",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginVertical: 20,
  },

  dot: {
    height: 8,
    borderRadius: 999,
  },

  bottomContainer: {
    marginTop: "auto",
    paddingHorizontal: 24,
    gap: 24,
  },

  title: {
    textAlign: "center",
    marginTop: 20,
  },

  desc: {
    textAlign: "center",
    marginTop: 12,
    paddingHorizontal: 15,
  },

  termsWrapper: {
    marginTop: 12,
    marginBottom: 5,
  },

  termsText: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
  }
});