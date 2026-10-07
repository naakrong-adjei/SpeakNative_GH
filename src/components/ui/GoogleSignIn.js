import { useCallback, useRef, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/expo";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../../components/ui/Button";
import { toast } from "sonner-native";
import { useTheme } from "../../context/ThemeContext";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignIn() {
  const { theme } = useTheme();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const oauthInProgress = useRef(false);

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  const onGoogleSignInPress = useCallback(async () => {
    if (oauthInProgress.current) {
      return;
    }

    oauthInProgress.current = true;
    setLoading(true);

    try {
      const redirectUrl = Linking.createURL("/oauth-callback");

  

      const { createdSessionId, setActive } =
        await startOAuthFlow({
          redirectUrl,
        });


      if (!createdSessionId) {
        toast.error("Google sign-in was not completed.");
        return;
      }

      await setActive({
        session: createdSessionId,
      });


      router.replace("/");
    } catch (err) {

      const errorName = err?.name || "";

      const errorMessage =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        err?.message ||
        "Google sign-in failed.";



      if (
        errorName === "WebBrowserAlreadyOpenException" ||
        errorMessage
          .toLowerCase()
          .includes("another web browser is already open")
      ) {
        toast.error(
          "A Google sign-in window is already open. Please finish it first."
        );
      } else if (
        errorMessage.toLowerCase().includes("cancel")
      ) {
        toast.error("Google sign-in was cancelled.");
      } else {
        toast.error(errorMessage);
      }
    } finally {
      oauthInProgress.current = false;
      setLoading(false);
    }
  }, [startOAuthFlow, router]);

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