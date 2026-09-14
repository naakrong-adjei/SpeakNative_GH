import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ActivityIndicator, View } from "react-native";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import {
  useOAuth,
  useAuth,
  useUser,
} from "@clerk/expo";
import AntDesign from "@expo/vector-icons/AntDesign";

import Button from "../../components/ui/Button";
import { toast } from "sonner-native";
import { createSupabaseClient } from "../../utils/supabase";
import { useTheme } from "../../context/ThemeContext";

WebBrowser.maybeCompleteAuthSession();

const useWarmUpBrowser = () => {
  useEffect(() => {
    let mounted = true;

    const warmUp = async () => {
      if (!mounted) return;

      try {
        await WebBrowser.warmUpAsync();
      } catch {}
    };

    warmUp();

    return () => {
      mounted = false;

      WebBrowser.coolDownAsync().catch(() => {});
    };
  }, []);
};

export default function GoogleSignIn() {
  const { theme } = useTheme();

  const [loading, setLoading] = useState(false);
  const oauthInProgress = useRef(false);

  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  useWarmUpBrowser();

  const createOrUpdateProfile = useCallback(
    async (userData) => {
      if (!isLoaded || !user?.id) {
        return;
      }

      try {
        const supabase = createSupabaseClient(getToken);

        const { error } = await supabase
          .from("profiles")
          .upsert(
            {
              clerk_id: user.id,
              email: userData.email,
              full_name: userData.fullName,
              onboarding_completed: false,
              updated_at: new Date().toISOString(),
            },
            {
              onConflict: "clerk_id",
            }
          );

        if (error) {
          toast.error("Failed to save profile");
        }
      } catch {
        toast.error("Failed to save profile");
      }
    },
    [getToken, isLoaded, user]
  );

  const onGoogleSignInPress = useCallback(async () => {
    if (oauthInProgress.current) {
      return;
    }

    oauthInProgress.current = true;
    setLoading(true);

    try {
      const { createdSessionId, setActive, signIn, signUp } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/"),
        });

      if (!createdSessionId) {
        toast.error("Google sign-in was not completed");
        return;
      }

      await setActive({
        session: createdSessionId,
      });

      const userData = {
        email:
          signIn?.emailAddress ||
          signUp?.emailAddress ||
          "",
        fullName:
          signIn?.fullName ||
          signUp?.fullName ||
          "",
      };

      await createOrUpdateProfile(userData);

      toast.success("Signed in successfully");
    } catch (err) {
      const errorName = err?.name || "";
      const errorMessage = err?.message || "";

      if (
        errorName === "WebBrowserAlreadyOpenException" ||
        errorMessage.includes("Another web browser is already open")
      ) {
        toast.error(
          "A Google sign-in window is already open. Please finish it first."
        );
      } else if (
        errorMessage.toLowerCase().includes("cancel")
      ) {
        toast.error("Google sign-in was cancelled");
      } else {
        toast.error("Google sign-in error");
      }

      try {
        await WebBrowser.dismissBrowser();
      } catch {}
    } finally {
      oauthInProgress.current = false;
      setLoading(false);
    }
  }, [
    startOAuthFlow,
    createOrUpdateProfile,
  ]);

  return (
    <View style={{ width: "100%" }}>
      <Button
        title={
          loading
            ? "Signing in..."
            : "Continue with Google"
        }
        variant="secondary"
        onPress={onGoogleSignInPress}
        disabled={loading}
        icon={
          loading ? (
            <ActivityIndicator
              color={theme.primary}
            />
          ) : (
            <AntDesign
              name="google"
              size={18}
              color={theme.primary}
            />
          )
        }
      />
    </View>
  );
}
