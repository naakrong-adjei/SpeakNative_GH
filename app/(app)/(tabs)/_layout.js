import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "../../../src/context/ThemeContext";

export default function TabsLayout() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const bottomInset = Math.max(insets.bottom, 0);

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: [
          styles.tabBar,
          {
            backgroundColor: theme.background,
            borderTopColor: theme.border,
            height:
              Platform.OS === "ios"
                ? 58 + bottomInset
                : 58 + bottomInset,
            paddingBottom:
              Platform.OS === "ios"
                ? bottomInset
                : Math.max(bottomInset, 6),
            paddingTop: 6,
          },
        ],

        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.secondaryText,

        tabBarLabelStyle: styles.label,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "index":
              iconName = focused
                ? "book"
                : "book-outline";
              break;

            case "profile":
              iconName = focused
                ? "person"
                : "person-outline";
              break;

            default:
              iconName = "help-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Lessons",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
    elevation: 0,
    shadowOpacity: 0,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 1,
  },
});