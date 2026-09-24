import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useClerk, useSignIn } from "@clerk/expo";
import { toast } from "sonner-native";

import { useTheme } from "../../context/ThemeContext";
import { ThemedText } from "../themed-text";
import Button from "./Button";
import Verification from "./Verification";

export default function ForgotPassword({ onClose, onComplete }) {
  const { theme } = useTheme();
  const { signIn } = useSignIn();
  const { signOut } = useClerk();

  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loadingAction, setLoadingAction] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const loading = loadingAction !== null;

  const cleanEmail = email.trim().toLowerCase();

  const isValidEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

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

  const handleEmailChange = useCallback((value) => {
    setEmail(value);
    setErrorMessage("");
  }, []);

  const handlePasswordChange = useCallback((value) => {
    setPassword(value);
    setErrorMessage("");
  }, []);

  const handleConfirmPasswordChange = useCallback((value) => {
    setConfirmPassword(value);
    setErrorMessage("");
  }, []);

  const sendResetCode = useCallback(async () => {
    if (loading) {
      return;
    }

    setErrorMessage("");

    if (!cleanEmail) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoadingAction("send");

      const { error } = await signIn.create({
        identifier: cleanEmail,
      });

      if (error) {
        throw error;
      }

      const { error: codeError } =
        await signIn.resetPasswordEmailCode.sendCode();

      if (codeError) {
        throw codeError;
      }

      setStep("code");
    } catch (error) {
      setErrorMessage(
        getClerkErrorMessage(
          error,
          "Unable to send the reset code. Please try again."
        )
      );
    } finally {
      setLoadingAction(null);
    }
  }, [
    cleanEmail,
    getClerkErrorMessage,
    isValidEmail,
    loading,
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
          await signIn.resetPasswordEmailCode.verifyCode({
            code: cleanCode,
          });

        if (error) {
          throw error;
        }

        setStep("password");
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
    [getClerkErrorMessage, loading, signIn]
  );

  const resendCode = useCallback(async () => {
    if (loading) {
      return;
    }

    try {
      setLoadingAction("resend");
      setErrorMessage("");

      const { error } =
        await signIn.resetPasswordEmailCode.sendCode();

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
  }, [getClerkErrorMessage, loading, signIn]);

  const resetPassword = useCallback(async () => {
    if (loading) {
      return;
    }

    setErrorMessage("");

    if (!password) {
      setErrorMessage("Please enter a new password.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (!confirmPassword) {
      setErrorMessage(
        "Please confirm your new password."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      setLoadingAction("reset");

      const { error } =
        await signIn.resetPasswordEmailCode.submitPassword({
          password,
        });

      if (error) {
        throw error;
      }

      await signOut();

      toast.success("Password reset successfully", {
        description:
          "You can now sign in with your new password.",
      });

      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      setErrorMessage(
        getClerkErrorMessage(
          error,
          "Unable to reset your password. Please try again."
        )
      );
    } finally {
      setLoadingAction(null);
    }
  }, [
    confirmPassword,
    getClerkErrorMessage,
    loading,
    onComplete,
    password,
    signIn,
    signOut,
  ]);

  const handleBack = useCallback(() => {
    if (loading) {
      return;
    }

    if (step === "code") {
      setStep("email");
      setErrorMessage("");
      return;
    }

    if (step === "password") {
      setStep("code");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
      return;
    }

    if (onClose) {
      onClose();
    }
  }, [loading, onClose, step]);

  const handleVerificationClose = useCallback(() => {
    if (loading) {
      return;
    }

    setStep("email");
    setErrorMessage("");
  }, [loading]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      {step !== "code" && (
        <TouchableOpacity
          onPress={handleBack}
          disabled={loading}
          style={styles.backButton}
          hitSlop={10}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel={
            step === "email"
              ? "Back to login"
              : "Go back"
          }
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={theme.text}
          />
        </TouchableOpacity>
      )}

      {step === "email" && (
        <>
          <View style={styles.header}>
            <ThemedText type="title">
              Forgot Password?
            </ThemedText>

            <ThemedText
              style={{
                color: theme.secondaryText,
              }}
            >
              Enter the email associated with your account.
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
            returnKeyType="done"
            onSubmitEditing={sendResetCode}
            style={[
              styles.input,
              {
                borderColor: theme.border,
                color: theme.text,
              },
            ]}
          />

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
                loadingAction === "send"
                  ? "Sending..."
                  : "Send code"
              }
              onPress={sendResetCode}
              disabled={!isValidEmail || loading}
            />

            {loadingAction === "send" && (
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
        </>
      )}

      {step === "code" && (
        <Verification
          visible={true}
          email={cleanEmail}
          loading={loading}
          onClose={handleVerificationClose}
          onVerify={verifyCode}
          onResend={resendCode}
        />
      )}

      {step === "password" && (
        <>
          <View style={styles.header}>
            <ThemedText type="title">
              Create New Password
            </ThemedText>

            <ThemedText
              style={{
                color: theme.secondaryText,
              }}
            >
              Create a new password for your account.
            </ThemedText>
          </View>

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
              placeholder="New password"
              placeholderTextColor={
                theme.secondaryText
              }
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              autoComplete="new-password"
              editable={!loading}
              returnKeyType="next"
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

          <View
            style={[
              styles.passwordContainer,
              {
                borderColor: theme.border,
                marginTop: 24,
              },
            ]}
          >
            <TextInput
              value={confirmPassword}
              onChangeText={
                handleConfirmPasswordChange
              }
              placeholder="Confirm password"
              placeholderTextColor={
                theme.secondaryText
              }
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              autoComplete="new-password"
              editable={!loading}
              returnKeyType="done"
              onSubmitEditing={resetPassword}
              style={[
                styles.passwordInput,
                {
                  color: theme.text,
                },
              ]}
            />

            <TouchableOpacity
              onPress={() =>
                setShowConfirmPassword(
                  (previous) => !previous
                )
              }
              disabled={loading}
              hitSlop={10}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel={
                showConfirmPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              <Ionicons
                name={
                  showConfirmPassword
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
                styles.passwordError,
                {
                  color: theme.error || "#D32F2F",
                },
              ]}
            >
              {errorMessage}
            </ThemedText>
          ) : null}

          <View
            style={[
              styles.buttonWrapper,
              styles.passwordButton,
            ]}
          >
            <Button
              title={
                loadingAction === "reset"
                  ? "Resetting..."
                  : "Reset password"
              }
              onPress={resetPassword}
              disabled={
                !password ||
                !confirmPassword ||
                loading
              }
            />

            {loadingAction === "reset" && (
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
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70,
  },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 28,
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

  passwordError: {
    marginTop: 24,
  },

  buttonWrapper: {
    width: "100%",
    position: "relative",
  },

  passwordButton: {
    marginTop: 24,
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
});