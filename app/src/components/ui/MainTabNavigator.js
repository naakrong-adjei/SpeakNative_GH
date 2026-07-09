import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../../screens/main/home/HomeScreen";
import ProfileScreen from "../../screens/main/profile/ProfileScreen";
import LessonScreen from "../../screens/main/lessons/LessonScreen";
import PracticeScreen from "../../screens/main/practice/PracticeScreen";
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
        
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: Platform.OS === "android" ? 5 : 0,
        },
        tabBarIcon: ({
          focused,
          color,
          size,
        }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Lessons":
              iconName = focused ? "book" : "book-outline";
              break;
            case "Practice":
              iconName = focused ? "school" : "school-outline";
              break;
            case "Progress":
              iconName = focused ? "poll" : "poll";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "help";
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
        name="Practice"
        component={PracticeScreen}
        options={{
          title: "Practice",
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