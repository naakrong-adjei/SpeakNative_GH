import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import AppRoute from "./AppRoute";
import { createSupabaseClient } from "../utils/supabase";
import { useAuth } from "@clerk/clerk-expo";

const Stack = createNativeStackNavigator();

export default function AppNavigator({ user }) {
  const { getToken } = useAuth();
  const supabase = createSupabaseClient(getToken);

  const [loading, setLoading] = useState(true);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("onboarding_completed")
        .eq("clerk_id", user.id)
        .single();

      setNeedsOnboarding(!data?.onboarding_completed);
      setLoading(false);
    };

    if (user) check();
  }, [user]);

  if (loading) return null;

    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {needsOnboarding ? (
        <Stack.Screen name="Onboarding">
          {(props) => (
            <OnboardingScreen
              {...props}
              onComplete={() => setNeedsOnboarding(false)}
            />
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="App" component={AppRoute} />
      )}
    </Stack.Navigator>
  );
}