import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "../components/ui/MainTabNavigator";
import LessonOverview from "../components/lesson/LessonOverview";
import PracticeScreen from "../screens/main/practice/PracticeScreen";

const Stack = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
      />

      <Stack.Screen
        name="LessonOverview"
        component={LessonOverview}
        options={{
          animation: "slide_from_right",
        }}
      />

      <Stack.Screen
        name="Practice"
        component={PracticeScreen}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
}