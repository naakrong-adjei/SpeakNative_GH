import React, {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import {
  useAuth,
  useSignIn,
} from "@clerk/expo";
import { useRouter } from "expo-router";

import { useTheme } from "../../src/context/ThemeContext";
import { ThemedText } from "../../src/components/themed-text";
import Button from "../../src/components/ui/Button";
import Verification from "../../src/components/ui/Verification";
import GoogleSignIn from "../../src/components/ui/GoogleSignIn";

export default function LoginScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  const {
    signIn,
    setActive,
    isLoaded,
  } = useSignIn();

  const {
    isSignedIn,
    isLoaded: authLoaded,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /*
   * Once Clerk confirms that the session is active,
   * leave the login screen.
   *
   * We navigate to "/" instead of directly to lessons
   * because index.js is responsible for checking:
   *
   * 1. Authentication
   * 2. Onboarding status
   * 3. Final app destination
   */
  useEffect(() => {
    if (!authLoaded || !isSignedIn) {
      return;
    }

    setShowVerify(false);
    setLoading(false);

    router.replace("/");
  }, [
    authLoaded,
    isSignedIn,
    router,
  ]);

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const sendOTP = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert(
        "Error",
        "Enter a valid email"
      );
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Error",
        "Password too short"
      );
      return;
    }

    try {
      setLoading(true);

      const signInAttempt =
        await signIn.create({
          identifier: email.trim(),
          password,
        });

      const emailFactor =
        signInAttempt.supportedFirstFactors?.find(
          (factor) =>
            factor.strategy === "email_code"
        );

      if (!emailFactor?.emailAddressId) {
        throw new Error(
          "Email verification is not available for this account."
        );
      }

      await signIn.prepareFirstFactor({
        strategy: "email_code",
        emailAddressId:
          emailFactor.emailAddressId,
      });

      setShowVerify(true);
    } catch (err) {
      Alert.alert(
        "Login Failed",
        err?.errors?.[0]?.message ||
          err?.message ||
          "Unable to log in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, [
    email,
    password,
    signIn,
    isLoaded,
  ]);

  const verifyCode = useCallback(
    async (code) => {
      if (!isLoaded) {
        return;
      }

      try {
        setLoading(true);

        const result =
          await signIn.attemptFirstFactor({
            strategy: "email_code",
            code: code.trim(),
          });

        if (result.status !== "complete") {
          throw new Error(
            "Verification could not be completed."
          );
        }

        if (!result.createdSessionId) {
          throw new Error(
            "No active session was created."
          );
        }

        /*
         * Activate the Clerk session.
         *
         * We intentionally DO NOT navigate here.
         *
         * The useEffect above watches isSignedIn.
         * When Clerk finishes updating its state,
         * it will automatically navigate to "/".
         */
        await setActive({
          session: result.createdSessionId,
        });
      } catch (err) {
        Alert.alert(
          "Invalid Code",
          err?.errors?.[0]?.message ||
            err?.message ||
            "The verification code is invalid."
        );

        setLoading(false);
      }
    },
    [
      signIn,
      setActive,
      isLoaded,
    ]
  );

  const resendCode = useCallback(
    async () => {
      if (!isLoaded) {
        return;
      }

      try {
        setLoading(true);

        const signInAttempt =
          await signIn.create({
            identifier: email.trim(),
            password,
          });

        const emailFactor =
          signInAttempt.supportedFirstFactors?.find(
            (factor) =>
              factor.strategy === "email_code"
          );

        if (!emailFactor?.emailAddressId) {
          throw new Error(
            "Email verification is not available."
          );
        }

        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId:
            emailFactor.emailAddressId,
        });
      } catch (err) {
        Alert.alert(
          "Resend Failed",
          err?.errors?.[0]?.message ||
            err?.message ||
            "Unable to resend the verification code."
        );
      } finally {
        setLoading(false);
      }
    },
    [
      email,
      password,
      signIn,
      isLoaded,
    ]
  );

  return (
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
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={
          theme.secondaryText
        }
        autoCapitalize="none"
        autoCorrect={false}
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
          {
            borderColor: theme.border,
          },
        ]}
      >
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={
            theme.secondaryText
          }
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
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
            {
              backgroundColor:
                theme.border,
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
              backgroundColor:
                theme.border,
            },
          ]}
        />
      </View>

      <GoogleSignIn />

      <Verification
        visible={showVerify}
        email={email}
        loading={loading}
        onClose={() => {
          if (!loading) {
            setShowVerify(false);
          }
        }}
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
  },
});