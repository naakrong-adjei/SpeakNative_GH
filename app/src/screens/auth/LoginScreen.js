import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useSignIn } from "@clerk/clerk-expo";

import { useTheme } from "../../context/ThemeContext";
import { ThemedText } from "../../components/themed-text";
import Button from "../../components/ui/Button";
import Verification from "../../components/ui/Verification";
import GoogleSignIn from "./GoogleSignIn";

export default function LoginScreen() {
  const { theme, themeName } = useTheme(); // Assuming themeName (e.g., 'light' | 'dark') is exposed here

  const {
    signIn,
    setActive,
    isLoaded,
  } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const sendOTP = useCallback(async () => {
    if (!isLoaded) return;

    if (!isValidEmail(email)) {
      Alert.alert("Error", "Enter a valid email");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password too short");
      return;
    }

    try {
      setLoading(true);

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

      setShowVerify(true);
    } catch (err) {
      Alert.alert(
        "Login Failed",
        err?.errors?.[0]?.message ||
          err.message
      );
    } finally {
      setLoading(false);
    }
  }, [email, password, signIn, isLoaded]);

  const verifyCode = useCallback(async (code) => {
    try {
      setLoading(true);

      const res =
        await signIn.attemptFirstFactor({
          strategy: "email_code",
          code,
        });

      if (res.status === "complete") {
        await setActive({
          session: res.createdSessionId,
        });

        setShowVerify(false);
      }
    } catch (err) {
      Alert.alert(
        "Invalid Code",
        err?.errors?.[0]?.message ||
          err.message
      );
    } finally {
      setLoading(false);
    }
  }, [signIn, setActive]);

  const resendCode = useCallback(async () => {
    try {
      setLoading(true);

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
    } catch (err) {
      Alert.alert(
        "Resend Failed",
        err?.errors?.[0]?.message ||
          err.message
      );
    } finally {
      setLoading(false);
    }
  }, [email, password, signIn]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.header}>
        <ThemedText type="title">
          Welcome Back
        </ThemedText>

        <ThemedText
          style={{ color: theme.secondaryText }}
        >
          Login to continue your learning journey
        </ThemedText>
      </View>

      <TextInput
        key={`email-${themeName || 'input'}`}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={theme.secondaryText}
        autoCapitalize="none"
        keyboardType="email-address"
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
          { borderColor: theme.border },
        ]}
      >
        <TextInput
          key={`pass-${themeName || 'input'}`}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={theme.secondaryText}
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

      <Button
        title={
          loading
            ? "Please wait..."
            : "Login"
        }
        onPress={sendOTP}
        disabled={
          !isValidEmail(email) ||
          password.length < 6 ||
          loading
        }
      />

      <View style={styles.dividerContainer}>
        <View
          style={[
            styles.divider,
            { backgroundColor: theme.border },
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
            { backgroundColor: theme.border },
          ]}
        />
      </View>
      
      <GoogleSignIn />

      <Verification
        visible={showVerify}
        email={email}
        loading={loading}
        onClose={() => setShowVerify(false)}
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
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 56,
  },
  divider: {
    flex: 1,
    height: 1,
  }
});