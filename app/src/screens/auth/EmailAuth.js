import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useSignIn,
  useSignUp,
  useUser,
} from "@clerk/clerk-expo";

import { useTheme } from "../../context/ThemeContext";

import Button from "../../components/ui/Button";
import { ThemedText } from "../../components/themed-text";
import Verification from "../../components/ui/Verification";

export default function EmailAuth() {
  const { theme } = useTheme();

  const {
    signIn,
    setActive: setSignInActive,
    isLoaded: signInLoaded,
  } = useSignIn();

  const {
    signUp,
    setActive: setSignUpActive,
    isLoaded: signUpLoaded,
  } = useSignUp();

  const { user } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [flow, setFlow] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const sendOTP = useCallback(async () => {
    if (
      !isValidEmail(email) ||
      password.length < 6 ||
      !signInLoaded ||
      !signUpLoaded
    ) return;

    try {
      setLoading(true);

      try {
        const signInAttempt = await signIn.create({
          identifier: email,
          password,
        });

        const emailFactor =
          signInAttempt.supportedFirstFactors?.find(
            (f) => f.strategy === "email_code"
          );

        if (!emailFactor?.emailAddressId) {
          throw new Error("Email OTP not available");
        }

        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId: emailFactor.emailAddressId,
        });

        setFlow("signin");
      } catch (signInErr) {
        const code = signInErr?.errors?.[0]?.code;

        if (code === "form_identifier_not_found") {
          await signUp.create({
            emailAddress: email,
            password,
          });

          await signUp.prepareEmailAddressVerification({
            strategy: "email_code",
          });

          setFlow("signup");
        } else {
          throw signInErr;
        }
      }

      setShowVerify(true);
    } catch (err) {
      Alert.alert(
        "Error",
        err?.errors?.[0]?.message || err.message
      );
    } finally {
      setLoading(false);
    }
  }, [email, password, signIn, signUp]);

  const resendCode = useCallback(async () => {
    try {
      setLoading(true);

      if (flow === "signin") {
        const signInAttempt = await signIn.create({
          identifier: email,
          password,
        });

        const emailFactor =
          signInAttempt.supportedFirstFactors?.find(
            (f) => f.strategy === "email_code"
          );

        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId: emailFactor.emailAddressId,
        });
      }

      if (flow === "signup") {
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
      }

      if (flow === "forgot-password") {
        await signIn.create({
          strategy: "reset_password_email_code",
          identifier: email,
        });
      }
    } catch (err) {
      Alert.alert(
        "Resend Failed",
        err?.errors?.[0]?.message || err.message
      );
    } finally {
      setLoading(false);
    }
  }, [flow, email, password, signIn, signUp]);

  const handleVerify = useCallback(async (code) => {
    try {
      setLoading(true);

      if (flow === "signin") {
        const res = await signIn.attemptFirstFactor({
          strategy: "email_code",
          code,
        });

        if (res.status === "complete") {
          await setSignInActive({
            session: res.createdSessionId,
          });

          setShowVerify(false);
        }
      }

      if (flow === "signup") {const res =
          await signUp.attemptEmailAddressVerification({
            code,
          });

        if (res.status === "complete") {
          await setSignUpActive({
            session: res.createdSessionId,
          });

          setShowVerify(false);
        }
      }

      if (flow === "forgot-password") {
        const result = await signIn.attemptFirstFactor({
          strategy: "reset_password_email_code",
          code,
          password,
        });

        if (result.status === "complete") {
          await setSignInActive({
            session: result.createdSessionId,
          });

          Alert.alert(
            "Success",
            "Password reset successful"
          );

          setShowVerify(false);
        }
      }
    } catch (err) {
      Alert.alert(
        "Invalid Code",
        err?.errors?.[0]?.message || err.message
      );
    } finally {
      setLoading(false);
    }
  }, [flow, password, signIn, signUp]);

  const forgotPassword = useCallback(async () => {
    if (!isValidEmail(email)) {
      Alert.alert("Error", "Enter your email first");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Error",
        "Enter your new password first"
      );
      return;
    }

    try {
      setLoading(true);

      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });

      setFlow("forgot-password");
      setShowVerify(true);
    } catch (err) {
      Alert.alert(
        "Error",
        err?.errors?.[0]?.message || err.message
      );
    } finally {
      setLoading(false);
    }
  }, [email, password, signIn]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerContainer}>
        <ThemedText type="title">Welcome</ThemedText>

        <ThemedText
          style={[
            styles.subtitle,
            { color: theme.secondaryText },
          ]}
        >
          Enter your email and password. We’ll send a verification code.
        </ThemedText>
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        style={[
          styles.input,
          {
            color: theme.text,
            borderColor: theme.border,
          },
        ]}
      />

      <View
        style={[
          styles.passwordContainer,
          { borderColor: theme.border },
        ]}
      >
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={[
            styles.passwordInput,
            { color: theme.text },
          ]}
        />

        <TouchableOpacity
          onPress={() =>
            setShowPassword(!showPassword)
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

      <TouchableOpacity
        onPress={forgotPassword}
        style={styles.forgotButton}
      >
        <ThemedText
          style={{ color: theme.primary }}
        >
          Forgot Password?
        </ThemedText>
      </TouchableOpacity>

      <Button
        title={loading ? "Please wait..." : "Continue"}
        onPress={sendOTP}
        disabled={
          !isValidEmail(email) ||
          password.length < 6 ||
          loading
        }
      />

      <Verification
        visible={showVerify}
        email={email}
        loading={loading}
        onClose={() => setShowVerify(false)}
        onVerify={handleVerify}
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

  headerContainer: {
    gap: 8,
    marginBottom: 32,
  },

  subtitle: {
    fontSize: 15,lineHeight: 22,
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
    justifyContent: "space-between",
  },

  passwordInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 12,
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginTop: 12,
    marginBottom: 32,
  },
});