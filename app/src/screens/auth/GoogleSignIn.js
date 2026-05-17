import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { useOAuth, useAuth, useUser } from "@clerk/clerk-expo";
import AntDesign from "@expo/vector-icons/AntDesign";

import Button from "../../components/ui/Button";
import { toast } from "sonner-native";
import { createSupabaseClient } from "../../utils/supabase";
import { useTheme } from "../../context/ThemeContext";

const useWarmUpBrowser = () => {
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
};

export default function GoogleSignIn() {
  const { theme } = useTheme();

  const [loading, setLoading] = useState(false);

  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  useWarmUpBrowser();

  const createOrUpdateProfile = async (userData) => {
    if (!isLoaded || !user?.id) return;

    const supabase = createSupabaseClient(getToken);

    const { error } = await supabase.from("profiles").upsert(
      {
        clerk_id: user.id,
        email: userData.email,
        full_name: userData.fullName,
        onboarding_completed: false,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "clerk_id" }
    );

    if (error) {
      console.error("Profile error:", error);
      toast.error("Failed to save profile");
    }
  };

  const onGoogleSignInPress = useCallback(async () => {
    setLoading(true);

    try {
      const { createdSessionId, setActive, signIn, signUp } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/"),
        });

      if (!createdSessionId) {
        toast.error("Google sign-in failed");
        return;
      }

      await setActive({ session: createdSessionId });

      const userData = {
        email: signIn?.emailAddress || signUp?.emailAddress || "",
        fullName: signIn?.fullName || signUp?.fullName || "",
      };

      setTimeout(() => {
        createOrUpdateProfile(userData);
      }, 500);

      toast.success("Signed in successfully");
    } catch (err) {
      console.log("OAuth error:", err);
      toast.error("Google sign-in error");
    } finally {
      setLoading(false);
    }
  }, [startOAuthFlow, getToken, isLoaded, user]);

  return (
    <View style={{ width: "100%" }}>
      <Button
        title={loading ? "Signing in..." : "Continue with Google"}
        variant="secondary"
        onPress={onGoogleSignInPress}
        disabled={loading}
        icon={
          loading ? (
            <ActivityIndicator color={theme.primary} />
          ) : (
            <AntDesign name="google" size={18} color={theme.primary} />
          )
        }
      />
    </View>
  );
}