import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useSignUp } from "@clerk/clerk-expo";

import { useTheme } from "../../context/ThemeContext";
import { ThemedText } from "../../components/themed-text";
import Button from "../../components/ui/Button";
import GoogleSignIn from "./GoogleSignIn";
import Verification from "../../components/ui/Verification";

export default function SignUpScreen() {
  const { theme, themeName } = useTheme(); // Extracted themeName to trigger forced input repaints

  const {
    signUp,
    setActive,
    isLoaded,
  } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const createAccount = useCallback(async () => {
    if (!isLoaded) return;

    if (!isValidEmail(email)) {
      Alert.alert(
        "Invalid Email",
        "Please enter a valid email."
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

      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setShowVerify(true);
    } catch (err) {
      Alert.alert(
        "Sign Up Failed",
        err?.errors?.[0]?.message ||
          err?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }, [
    email,
    password,
    signUp,
    isLoaded,
  ]);

  const verifyCode = useCallback(
    async (code) => {
      try {
        setLoading(true);

        const result =
          await signUp.attemptEmailAddressVerification({
            code,
          });

        if (result.status === "complete") {
          await setActive({
            session: result.createdSessionId,
          });

          setShowVerify(false);
        }
      } catch (err) {
        Alert.alert(
          "Invalid Code",
          err?.errors?.[0]?.message ||
            err?.message
        );
      } finally {
        setLoading(false);
      }
    },
    [signUp, setActive]
  );

  const resendCode = useCallback(async () => {
    try {
      setLoading(true);

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
    } catch (err) {
      Alert.alert(
        "Error",
        err?.errors?.[0]?.message ||
          err?.message
      );
    } finally {
      setLoading(false);
    }
  }, [signUp]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
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
        key={`signup-email-${themeName || 'input'}`} // Forces layout re-render on dark/light switch
        placeholder="Email"
        placeholderTextColor={theme.secondaryText} // Fixes unreadable placeholders in dark mode
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
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
          key={`signup-pass-${themeName || 'input'}`} // Forces layout re-render on dark/light switch
          placeholder="Password"
          placeholderTextColor={theme.secondaryText} // Fixes unreadable placeholders in dark mode
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
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
        title={loading ? "Please wait..." : "Continue"}
        onPress={createAccount}
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