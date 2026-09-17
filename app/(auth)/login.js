import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSignIn } from "@clerk/expo";
import { useRouter } from "expo-router";

import { useTheme } from "../../src/context/ThemeContext";
import { ThemedText } from "../../src/components/themed-text";
import Button from "../../src/components/ui/Button";
import Verification from "../../src/components/ui/Verification";
import GoogleSignIn from "../../src/components/ui/GoogleSignIn";

export default function LoginScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { signIn } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingAction, setLoadingAction] = useState(null);
  const [showVerify, setShowVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loading = loadingAction !== null;
  const cleanEmail = email.trim().toLowerCase();

  const isValidEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

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

  const goToApp = useCallback(() => {
    setShowVerify(false);
    router.replace("/(app)/(tabs)");
  }, [router]);

  const login = useCallback(async () => {
    if (loading) {
      return;
    }

    setErrorMessage("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage(
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      setLoadingAction("login");

      const { error } = await signIn.create({
        identifier: normalizedEmail,
      });

      if (error) {
        throw error;
      }

      const { error: passwordError } =
        await signIn.password({
          password,
        });

      if (passwordError) {
        throw passwordError;
      }

      if (signIn.status === "complete") {
        await signIn.finalize({
          navigate: goToApp,
        });
        return;
      }

      if (
        signIn.status === "needs_first_factor" ||
        signIn.status === "needs_second_factor"
      ) {
        const emailFactor =
          signIn.supportedFirstFactors?.find(
            (factor) => factor.strategy === "email_code"
          );

        if (!emailFactor?.emailAddressId) {
          throw new Error(
            "Email verification is not available for this account."
          );
        }

        const { error: verificationError } =
          await signIn.emailCode.sendCode({
            emailAddressId:
              emailFactor.emailAddressId,
          });

        if (verificationError) {
          throw verificationError;
        }

        setShowVerify(true);
        return;
      }

      throw new Error(
        `Unable to complete login. Current status: ${
          signIn.status || "unknown"
        }`
      );
    } catch (error) {
      setErrorMessage(
        getClerkErrorMessage(
          error,
          "Unable to log in. Please check your email and password."
        )
      );
    } finally {
      setLoadingAction(null);
    }
  }, [
    email,
    getClerkErrorMessage,
    goToApp,
    isValidEmail,
    loading,
    password,
    signIn,
  ]);

  const verifyCode = useCallback(
    async (code) => {
      if (loading) {
        return;
      }

      const cleanCode = code?.trim();

      if (!cleanCode) {
        setErrorMessage(
          "Please enter the verification code."
        );
        return;
      }

      if (cleanCode.length !== 6) {
        setErrorMessage(
          "Please enter the 6-digit verification code."
        );
        return;
      }

      try {
        setLoadingAction("verify");
        setErrorMessage("");

        const { error } =
          await signIn.emailCode.verifyCode({
            code: cleanCode,
          });

        if (error) {
          throw error;
        }

        if (signIn.status !== "complete") {
          throw new Error(
            "Verification could not be completed."
          );
        }

        await signIn.finalize({
          navigate: goToApp,
        });
      } catch (error) {
        setErrorMessage(
          getClerkErrorMessage(
            error,
            "The verification code is invalid or has expired."
          )
        );
      } finally {
        setLoadingAction(null);
      }
    },
    [
      getClerkErrorMessage,
      goToApp,
      loading,
      signIn,
    ]
  );

  const resendCode = useCallback(async () => {
    if (loading) {
      return;
    }

    try {
      setLoadingAction("resend");
      setErrorMessage("");

      const emailFactor =
        signIn.supportedFirstFactors?.find(
          (factor) => factor.strategy === "email_code"
        );

      if (!emailFactor?.emailAddressId) {
        throw new Error(
          "Email verification is not available for this account."
        );
      }

      const { error } =
        await signIn.emailCode.sendCode({
          emailAddressId:
            emailFactor.emailAddressId,
        });

      if (error) {
        throw error;
      }
    } catch (error) {
      setErrorMessage(
        getClerkErrorMessage(
          error,
          "Unable to resend the verification code."
        )
      );
    } finally {
      setLoadingAction(null);
    }
  }, [
    getClerkErrorMessage,
    loading,
    signIn,
  ]);

  const handleCloseVerification = useCallback(() => {
    if (loading) {
      return;
    }

    setShowVerify(false);
    setErrorMessage("");
  }, [loading]);

  const handleEmailChange = useCallback((value) => {
    setEmail(value);
    setErrorMessage("");
  }, []);

  const handlePasswordChange = useCallback((value) => {
    setPassword(value);
    setErrorMessage("");
  }, []);

  return (
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
          Welcome Back
        </ThemedText>

        <ThemedText
          style={{
            color: theme.secondaryText,
          }}
        >
          Login to continue your learning journey
        </ThemedText>
      </View>

      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Email"
        placeholderTextColor={theme.secondaryText}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        autoComplete="email"
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
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
          placeholderTextColor={theme.secondaryText}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          autoComplete="password"
          editable={!loading}
          returnKeyType="done"
          onSubmitEditing={login}
          style={[
            styles.passwordInput,
            {
              color: theme.text,
            },
          ]}
        />

        <TouchableOpacity
          onPress={() =>
            setShowPassword(
              (previous) => !previous
            )
          }
          disabled={loading}
          hitSlop={10}
          activeOpacity={0.7}
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

      {errorMessage ? (
        <ThemedText
          style={[
            styles.errorText,
            {
              color: theme.error || "#D32F2F",
            },
          ]}
        >
          {errorMessage}
        </ThemedText>
      ) : null}

      <View style={styles.buttonWrapper}>
        <Button
          title={
            loadingAction === "login"
              ? "Logging in..."
              : "Login"
          }
          onPress={login}
          disabled={!canContinue}
        />

        {loadingAction === "login" && (
          <View
            pointerEvents="none"
            style={styles.loadingOverlay}
          >
            <ActivityIndicator
              size="small"
              color="#FFFFFF"
            />
          </View>
        )}
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

      <Verification
        visible={showVerify}
        email={cleanEmail}
        loading={loading}
        onClose={handleCloseVerification}
        onVerify={verifyCode}
        onResend={resendCode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70,
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

  errorText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: -8,
    marginBottom: 16,
  },

  buttonWrapper: {
    width: "100%",
    position: "relative",
  },

  loadingOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
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