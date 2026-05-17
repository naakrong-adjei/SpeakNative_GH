import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../../screens/main/HomeScreen";
import LessonScreen from "../../screens/main/LessonScreen";
import ProfileScreen from "../../screens/main/ProfileScreen";
import { useTheme } from "../../context/ThemeContext";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor:theme.border,
        },

        tabBarActiveTintColor:
          theme.primary,

        tabBarInactiveTintColor:
          theme.muted,

        tabBarIcon: ({
          focused,
          color,
          size,
        }) => {
          let iconName = "home-outline";

          switch (route.name) {
            case "Home":
              iconName = focused
                ? "home"
                : "home-outline";
              break;

            case "Lessons":
              iconName = focused
                ? "school"
                : "school-outline";
              break;

            case "Profile":
              iconName = focused
                ? "person"
                : "person-outline";
              break;
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />

      <Tab.Screen
        name="Lessons"
        component={LessonScreen}
        options={{
          title: "Lessons",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}