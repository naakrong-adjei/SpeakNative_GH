import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useSignUp } from "@clerk/expo";
import { useRouter } from "expo-router";

import { useTheme } from "../../src/context/ThemeContext";
import { ThemedText } from "../../src/components/themed-text";
import Button from "../../src/components/ui/Button";
import GoogleSignIn from "../../src/components/ui/GoogleSignIn";
import Verification from "../../src/components/ui/Verification";

export default function SignUpScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  const { signUp, setActive, isLoaded } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = useCallback((value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      value.trim()
    );
  }, []);

  const createAccount = useCallback(async () => {
    if (loading) {
      return;
    }

    if (!isLoaded) {
      Alert.alert(
        "Please wait",
        "Authentication is still loading. Please try again in a moment."
      );
      return;
    }

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      Alert.alert(
        "Email required",
        "Please enter your email address."
      );
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      Alert.alert(
        "Invalid Email",
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
        "Weak Password",
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      setLoading(true);

      const result = await signUp.create({
        emailAddress: cleanEmail,
        password: password,
      });

      console.log("Sign up created:", result.status);

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setShowVerify(true);
    } catch (err) {
      console.log("Sign up error:", err);

      const clerkError =
        err?.errors?.[0];

      const errorMessage =
        clerkError?.longMessage ||
        clerkError?.message ||
        err?.message ||
        "Unable to create your account. Please try again.";

      Alert.alert(
        "Sign Up Failed",
        errorMessage
      );
    } finally {
      setLoading(false);
    }
  }, [
    email,
    password,
    loading,
    isLoaded,
    signUp,
    isValidEmail,
  ]);

  const verifyCode = useCallback(
    async (code) => {
      if (!isLoaded || loading) {
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
        setLoading(true);

        const result =
          await signUp.attemptEmailAddressVerification({
            code: cleanCode,
          });

        console.log(
          "Verification status:",
          result.status
        );

        if (result.status === "complete") {
          await setActive({
            session: result.createdSessionId,
          });

          setShowVerify(false);

          router.replace(
            "/(app)/(tabs)/lessons"
          );

          return;
        }

        Alert.alert(
          "Verification incomplete",
          "Your email could not be verified yet. Please try again."
        );
      } catch (err) {
        console.log(
          "Verification error:",
          err
        );

        const clerkError =
          err?.errors?.[0];

        const errorMessage =
          clerkError?.longMessage ||
          clerkError?.message ||
          err?.message ||
          "The verification code is incorrect or has expired.";

        Alert.alert(
          "Invalid Code",
          errorMessage
        );
      } finally {
        setLoading(false);
      }
    },
    [
      signUp,
      setActive,
      router,
      isLoaded,
      loading,
    ]
  );

  const resendCode = useCallback(async () => {
    if (!isLoaded || loading) {
      return;
    }

    try {
      setLoading(true);

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      Alert.alert(
        "Code sent",
        "A new verification code has been sent to your email."
      );
    } catch (err) {
      console.log(
        "Resend code error:",
        err
      );

      const clerkError =
        err?.errors?.[0];

      const errorMessage =
        clerkError?.longMessage ||
        clerkError?.message ||
        err?.message ||
        "Unable to resend the verification code.";

      Alert.alert(
        "Error",
        errorMessage
      );
    } finally {
      setLoading(false);
    }
  }, [
    signUp,
    isLoaded,
    loading,
  ]);

  const handleCloseVerification = useCallback(() => {
    if (loading) {
      return;
    }

    setShowVerify(false);
  }, [loading]);

  const canContinue =
    isValidEmail(email.trim()) &&
    password.length >= 6 &&
    isLoaded &&
    !loading;

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
        contentContainerStyle={
          styles.scrollContent
        }
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                theme.background,
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
              Create your account to start
              learning.
            </ThemedText>
          </View>

          {/* EMAIL */}
          <TextInput
            placeholder="Email"
            placeholderTextColor={
              theme.secondaryText
            }
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
            editable={!loading}
            style={[
              styles.input,
              {
                borderColor: theme.border,
                color: theme.text,
              },
            ]}
          />

          {/* PASSWORD */}
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
              placeholderTextColor={
                theme.secondaryText
              }
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              autoComplete="password-new"
              value={password}
              onChangeText={setPassword}
              editable={!loading}
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
            >
              <Ionicons
                name={
                  showPassword
                    ? "eye-off-outline"
                    : "eye-outline"
                }
                size={22}
                color={
                  theme.secondaryText
                }
              />
            </TouchableOpacity>
          </View>

          {/* CONTINUE */}
          <Button
            title={
              loading
                ? "Please wait..."
                : "Continue"
            }
            onPress={createAccount}
            disabled={!canContinue}
          />

          {/* DIVIDER */}
          <View
            style={styles.dividerContainer}
          >
            <View
              style={[
                styles.divider,
                {
                  backgroundColor:
                    theme.border,
                },
              ]}
            />

            <ThemedText
              style={{
                color:
                  theme.secondaryText,
                marginHorizontal: 12,
              }}
            >
              or continue with
            </ThemedText>

            <View
              style={[
                styles.divider,
                {
                  backgroundColor:
                    theme.border,
                },
              ]}
            />
          </View>

          {/* GOOGLE */}
          <GoogleSignIn />
        </View>
      </ScrollView>

      {/* EMAIL VERIFICATION */}
      <Verification
        visible={showVerify}
        email={email.trim()}
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


