import { useAuth, useUser } from "@clerk/expo";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
} from "react-native";

import { useTheme } from "../src/context/ThemeContext";
import { createSupabaseClient } from "../src/utils/supabase"

const supabase = createSupabaseClient(() => {});

export default function Index() {
  const { isSignedIn, isLoaded: authLoaded } = useAuth();
  const { user, isLoaded: userLoaded } = useUser();
  const { theme } = useTheme();

  const [checkingOnboarding, setCheckingOnboarding] = useState(true);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);

  const userId = user?.id;

  useEffect(() => {
    if (!authLoaded || !userLoaded) {
      return;
    }

    if (!isSignedIn || !userId) {
      setCheckingOnboarding(false);
      return;
    }

    let cancelled = false;

    const checkOnboarding = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("onboarding_completed")
          .eq("clerk_id", userId)
          .maybeSingle();

        if (cancelled) {
          return;
        }

        if (error) {
          setNeedsOnboarding(true);
        } else {
          setNeedsOnboarding(!data?.onboarding_completed);
        }
      } catch {
        if (!cancelled) {
          setNeedsOnboarding(true);
        }
      } finally {
        if (!cancelled) {
          setCheckingOnboarding(false);
        }
      }
    };

    checkOnboarding();

    return () => {
      cancelled = true;
    };
  }, [authLoaded, userLoaded, isSignedIn, userId]);

  if (!authLoaded || !userLoaded || checkingOnboarding) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.background,
        }}
      >
        <ActivityIndicator
          size="large"
          color={theme.primary}
        />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/intro" />;
  }

  if (needsOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/(app)/(tabs)" />;
}