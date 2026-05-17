import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "../components/ui/MainTabNavigator"

const Stack = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
      />
    </Stack.Navigator>
  );
}