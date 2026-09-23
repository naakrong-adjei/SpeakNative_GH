import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ActivityIndicator, View } from "react-native";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { useOAuth, useAuth } from "@clerk/expo";
import { useRouter } from "expo-router";
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
      if (!mounted) {
        return;
      }

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

const getClerkUserIdFromToken = async (getToken) => {
  const token = await getToken();

  if (!token) {
    throw new Error(
      "Unable to get your Google sign-in session."
    );
  }

  try {
    const payload = JSON.parse(
      decodeURIComponent(
        atob(token.split(".")[1])
          .split("")
          .map((char) => {
            return "%" +
              ("00" + char.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      )
    );

    if (!payload.sub) {
      throw new Error(
        "Unable to identify your Google account."
      );
    }

    return payload.sub;
  } catch {
    throw new Error(
      "Unable to identify your Google account."
    );
  }
};

export default function GoogleSignIn() {
  const { theme } = useTheme();
  const router = useRouter();
  const { getToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const oauthInProgress = useRef(false);

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  useWarmUpBrowser();

  const createProfileIfNeeded = useCallback(
    async (clerkId, email, fullName) => {
      if (!clerkId) {
        throw new Error(
          "Unable to identify your Google account."
        );
      }

      const supabase = createSupabaseClient(getToken);

      const {
        data: existingProfile,
        error: fetchError,
      } = await supabase
        .from("profiles")
        .select(
          "clerk_id, email, full_name, onboarding_completed"
        )
        .eq("clerk_id", clerkId)
        .maybeSingle();

      if (fetchError) {
        throw fetchError;
      }

      if (existingProfile) {
        return existingProfile.onboarding_completed === true;
      }

      const { error: insertError } = await supabase
        .from("profiles")
        .insert({
          clerk_id: clerkId,
          email: email || "",
          full_name: fullName || "",
          onboarding_completed: false,
          updated_at: new Date().toISOString(),
        });

      if (insertError) {
        throw insertError;
      }

      return false;
    },
    [getToken]
  );

  const onGoogleSignInPress = useCallback(async () => {
    if (oauthInProgress.current) {
      return;
    }

    oauthInProgress.current = true;
    setLoading(true);

    try {
      const {
        createdSessionId,
        setActive,
        signIn,
        signUp,
      } = await startOAuthFlow({
        redirectUrl: Linking.createURL("/"),
      });

      if (!createdSessionId) {
        toast.error(
          "Google sign-in was not completed."
        );
        return;
      }

      await setActive({
        session: createdSessionId,
      });

      const authenticatedUserId =
        await getClerkUserIdFromToken(getToken);

      const email =
        signIn?.emailAddress ||
        signUp?.emailAddress ||
        "";

      const fullName =
        signIn?.fullName ||
        signUp?.fullName ||
        "";

      const onboardingCompleted =
        await createProfileIfNeeded(
          authenticatedUserId,
          email,
          fullName
        );

      toast.success("Signed in successfully");

      if (onboardingCompleted) {
        router.replace("/(app)/(tabs)");
      } else {
        router.replace("/onboarding");
      }
    } catch (err) {
      const errorName = err?.name || "";

      const errorMessage =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        err?.message ||
        "Unknown Google sign-in error";

      if (
        errorName ===
          "WebBrowserAlreadyOpenException" ||
        errorMessage.includes(
          "Another web browser is already open"
        )
      ) {
        toast.error(
          "A Google sign-in window is already open. Please finish it first."
        );
      } else if (
        errorMessage
          .toLowerCase()
          .includes("cancel")
      ) {
        toast.error(
          "Google sign-in was cancelled."
        );
      } else {
        toast.error(errorMessage);
      }

      try {
        await WebBrowser.dismissBrowser();
      } catch {}
    } finally {
      oauthInProgress.current = false;
      setLoading(false);
    }
  }, [
    createProfileIfNeeded,
    getToken,
    router,
    startOAuthFlow,
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