import { useSignUp } from "@clerk/expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemedText } from "../../src/components/themed-text";
import Button from "../../src/components/ui/Button";
import GoogleSignIn from "../../src/components/ui/GoogleSignIn";
import Verification from "../../src/components/ui/Verification";
import { useTheme } from "../../src/context/ThemeContext";

export default function SignUpScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { signUp } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingAction, setLoadingAction] = useState(null);
  const [showVerify, setShowVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const loading = loadingAction !== null;
  const cleanEmail = email.trim().toLowerCase();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    cleanEmail
  );

  const canContinue =
    isValidEmail &&
    password.length >= 6 &&
    !loading;

  const getClerkErrorMessage = useCallback(
    (error, fallback) => {
      const clerkError = error?.errors?.[0];

      return (
        clerkError?.longMessage ||
        clerkError?.message ||
        error?.message ||
        fallback
      );
    },
    []
  );

  const goToOnboarding = useCallback(() => {
    setShowVerify(false);
    router.replace("/onboarding");
  }, [router]);

  const createAccount = useCallback(async () => {
    if (loading) {
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      Alert.alert(
        "Email required",
        "Please enter your email address."
      );
      return;
    }

    if (!isValidEmail) {
      Alert.alert(
        "Invalid email",
        "Please enter a valid email address."
      );
      return;
    }

    if (!password) {
      Alert.alert(
        "Password required",
        "Please enter a password."
      );
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Weak password",
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      setLoadingAction("create");

      const { error } = await signUp.password({
        emailAddress: normalizedEmail,
        password,
      });

      if (error) {
        throw error;
      }

      if (
        signUp.status === "missing_requirements" &&
        signUp.unverifiedFields?.includes("email_address")
      ) {
        const { error: verificationError } =
          await signUp.verifications.sendEmailCode();

        if (verificationError) {
          throw verificationError;
        }

        setShowVerify(true);
        return;
      }

      if (signUp.status === "complete") {
        const { error: finalizeError } =
          await signUp.finalize({
            navigate: goToOnboarding,
          });

        if (finalizeError) {
          throw finalizeError;
        }
      }
    } catch (error) {
      Alert.alert(
        "Sign up failed",
        getClerkErrorMessage(
          error,
          "Unable to create your account. Please check your details and try again."
        )
      );
    } finally {
      setLoadingAction(null);
    }
  }, [
    email,
    getClerkErrorMessage,
    goToOnboarding,
    isValidEmail,
    loading,
    password,
    signUp,
  ]);

  const verifyCode = useCallback(
    async (code) => {
      if (loading) {
        return;
      }

      const cleanCode = code?.trim();

      if (!cleanCode) {
        Alert.alert(
          "Code required",
          "Please enter the verification code sent to your email."
        );
        return;
      }

      try {
        setLoadingAction("verify");

        const { error } =
          await signUp.verifications.verifyEmailCode({
            code: cleanCode,
          });

        if (error) {
          throw error;
        }

        if (signUp.status !== "complete") {
          Alert.alert(
            "Verification incomplete",
            "Your email was verified, but your account still has requirements to complete."
          );
          return;
        }

        const { error: finalizeError } =
          await signUp.finalize({
            navigate: goToOnboarding,
          });

        if (finalizeError) {
          throw finalizeError;
        }
      } catch (error) {
        Alert.alert(
          "Verification failed",
          getClerkErrorMessage(
            error,
            "The verification code is incorrect or has expired. Please try again."
          )
        );
      } finally {
        setLoadingAction(null);
      }
    },
    [
      getClerkErrorMessage,
      goToOnboarding,
      loading,
      signUp,
    ]
  );

  const resendCode = useCallback(async () => {
    if (loading) {
      return;
    }

    try {
      setLoadingAction("resend");

      const { error } =
        await signUp.verifications.sendEmailCode();

      if (error) {
        throw error;
      }

      Alert.alert(
        "Code sent",
        "A new verification code has been sent to your email."
      );
    } catch (error) {
      Alert.alert(
        "Unable to resend",
        getClerkErrorMessage(
          error,
          "Unable to resend the verification code. Please try again."
        )
      );
    } finally {
      setLoadingAction(null);
    }
  }, [
    getClerkErrorMessage,
    loading,
    signUp,
  ]);

  const handleCloseVerification = useCallback(() => {
    if (loading) {
      return;
    }

    setShowVerify(false);
  }, [loading]);

  return (
    <KeyboardAvoidingView
      style={[
        styles.keyboardView,
        {
          backgroundColor: theme.background,
        },
      ]}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor: theme.background,
            },
          ]}
        >
          <View style={styles.header}>
            <ThemedText type="title">
              Create Account
            </ThemedText>

            <ThemedText
              style={{
                color: theme.secondaryText,
              }}
            >
              Create your account to start learning.
            </ThemedText>
          </View>

          <TextInput
            placeholder="Email"
            placeholderTextColor={theme.secondaryText}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
            editable={!loading}
            returnKeyType="next"
            style={[
              styles.input,
              {
                borderColor: theme.border,
                color: theme.text,
              },
            ]}
          />

          <View
            style={[
              styles.passwordContainer,
              {
                borderColor: theme.border,
              },
            ]}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={theme.secondaryText}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              autoComplete="password-new"
              value={password}
              onChangeText={setPassword}
              editable={!loading}
              returnKeyType="done"
              onSubmitEditing={createAccount}
              style={[
                styles.passwordInput,
                {
                  color: theme.text,
                },
              ]}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              disabled={loading}
              onPress={() =>
                setShowPassword(
                  (previous) => !previous
                )
              }
              style={styles.eyeButton}
              accessibilityRole="button"
              accessibilityLabel={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              <Ionicons
                name={
                  showPassword
                    ? "eye-off-outline"
                    : "eye-outline"
                }
                size={22}
                color={theme.secondaryText}
              />
            </TouchableOpacity>
          </View>

          <View nativeID="clerk-captcha" />

          <View style={styles.buttonWrapper}>
            <Button
              title={
                loadingAction === "create"
                  ? "Creating account..."
                  : "Continue"
              }
              onPress={createAccount}
              disabled={!canContinue}
            />
          </View>

          <View style={styles.dividerContainer}>
            <View
              style={[
                styles.divider,
                {
                  backgroundColor: theme.border,
                },
              ]}
            />

            <ThemedText
              style={{
                color: theme.secondaryText,
                marginHorizontal: 12,
              }}
            >
              or continue with
            </ThemedText>

            <View
              style={[
                styles.divider,
                {
                  backgroundColor: theme.border,
                },
              ]}
            />
          </View>

          <GoogleSignIn />
        </View>
      </ScrollView>

      <Verification
        visible={showVerify}
        email={cleanEmail}
        loading={loading}
        onClose={handleCloseVerification}
        onVerify={verifyCode}
        onResend={resendCode}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 40,
  },

  header: {
    gap: 8,
    marginBottom: 32,
  },

  input: {
    borderBottomWidth: 2,
    fontSize: 18,
    paddingVertical: 12,
    marginBottom: 24,
  },

  passwordContainer: {
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  passwordInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 12,
  },

  eyeButton: {
    padding: 8,
  },

  buttonWrapper: {
    width: "100%",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 56,
  },

  divider: {
    flex: 1,
    height: 1,
  },
});
