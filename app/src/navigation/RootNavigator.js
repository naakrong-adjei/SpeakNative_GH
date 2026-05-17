import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth, useUser } from "@clerk/clerk-expo";
import AuthRoute from "./AuthRoute";
import AppNavigator from "./AppNavigator";

export default function RootNavigator() {
  const { isSignedIn, isLoaded: authLoaded } = useAuth();
  const { user, isLoaded: userLoaded } = useUser();

  if (!authLoaded || (isSignedIn && !userLoaded)) return null;

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <AppNavigator user={user} />
      ) : (
        <AuthRoute />
      )}
    </NavigationContainer>
  );
}