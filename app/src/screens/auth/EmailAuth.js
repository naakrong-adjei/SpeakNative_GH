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

export default function EmailAuth({
  navigation,
}) {
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

  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showVerify, setShowVerify] =
    useState(false);

  const [flow, setFlow] =
    useState(null);

  const [showPassword, setShowPassword] =
    useState(false);

  const isValidEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const sendOTP = useCallback(async () => {
    if (
      !isValidEmail(email) ||
      password.length < 6 ||
      !signInLoaded ||
      !signUpLoaded
    ) {
      return;
    }

    try {
      setLoading(true);

      try {
        const signInAttempt =
          await signIn.create({
            identifier: email,
            password,
          });

        const emailFactor =
          signInAttempt.supportedFirstFactors?.find(
            (factor) =>
              factor.strategy ===
              "email_code"
          );

        if (
          !emailFactor?.emailAddressId
        ) {
          throw new Error(
            "Email OTP verification is unavailable."
          );
        }

        await signIn.prepareFirstFactor(
          {
            strategy:
              "email_code",
            emailAddressId:
              emailFactor.emailAddressId,
          }
        );

        setFlow("signin");
      } catch (signInErr) {
        console.log(
          "Sign in failed:",
          signInErr
        );

        const errorCode =
          signInErr?.errors?.[0]
            ?.code;


        if (
          errorCode ===
          "form_identifier_not_found"
        ) {
          const signUpAttempt =
            await signUp.create({
              emailAddress: email,
              password,
            });

          await signUp.prepareEmailAddressVerification(
            {
              strategy:
                "email_code",
            }
          );

          setFlow("signup");
        }

        else if (
          errorCode ===
          "form_password_incorrect"
        ) {
          throw new Error(
            "Incorrect password."
          );
        }

        else if (
          errorCode ===
          "session_exists"
        ) {
          throw new Error(
            "You are already signed in."
          );
        } else {
          throw signInErr;
        }
      }

      setShowVerify(true);
    } catch (err) {
      console.log(
        "Authentication Error:",
        err
      );

      Alert.alert(
        "Authentication Error",
        err?.errors?.[0]
          ?.message ||
          err.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }, [
    email,
    password,
    signIn,
    signUp,
    signInLoaded,
    signUpLoaded,
  ]);

  const handleVerify = useCallback(
    async (code) => {
      try {
        setLoading(true);

        if (flow === "signin") {
          const completeSignIn =
            await signIn.attemptFirstFactor(
              {
                strategy:
                  "email_code",
                code,
              }
            );

          if (
            completeSignIn.status ===
            "complete"
          ) {
            await setSignInActive({
              session:
                completeSignIn.createdSessionId,
            });

            setShowVerify(false);
          } else {
            throw new Error(
              "Verification incomplete."
            );
          }
        }

        else if (
          flow === "signup"
        ) {
          const completeSignUp =
            await signUp.attemptEmailAddressVerification(
              {
                code,
              }
            );

          if (
            completeSignUp.status ===
            "complete"
          ) {
            await setSignUpActive({
              session:
                completeSignUp.createdSessionId,
            });

            setShowVerify(false);

            if (
              user?.update &&
              user?.firstName
            ) {
              await user.update({
                firstName:
                  user.firstName,
              });
            }
          } else {
            throw new Error(
              "Verification incomplete."
            );
          }
        }
      } catch (err) {
        console.log(
          "Verification Error:",
          err
        );

        Alert.alert(
          "Verification Error",
          err?.errors?.[0]
            ?.message ||
            err.message ||
            "Invalid verification code."
        );
      } finally {
        setLoading(false);
      }
    },
    [
      flow,
      signIn,
      signUp,
      setSignInActive,
      setSignUpActive,
      user,
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
      <View
        style={
          styles.headerContainer
        }
      >
        <ThemedText type="title">
          Welcome
        </ThemedText>

        <ThemedText
          style={[
            styles.subtitle,
            {
              color:
                theme.secondaryText,
            },
          ]}
        >
          Enter your email and password.
          We’ll send a verification code to confirm your identity.
        </ThemedText>
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={
          theme.placeholderText ||
          "#888"
        }
        style={[
          styles.input,
          {
            color: theme.text,
            borderColor:
              theme.border,
          },
        ]}
      />

      <View
        style={[
          styles.passwordContainer,
          {
            borderColor:
              theme.border,
          },
        ]}
      >
        <TextInput
          value={password}
          onChangeText={
            setPassword
          }
          placeholder="Enter your password"
          secureTextEntry={
            !showPassword
          }
          autoCapitalize="none"
          placeholderTextColor={
            theme.placeholderText ||
            "#888"
          }
          style={[
            styles.passwordInput,
            {
              color:
                theme.text,
            },
          ]}
        />

        <TouchableOpacity
          onPress={() =>
            setShowPassword(
              !showPassword
            )
          }
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

      <View
        style={
          styles.buttonWrapper
        }
      >
        <Button
          title={
            loading &&
            !showVerify
              ? "Please wait..."
              : "Continue"
          }
          onPress={sendOTP}
          disabled={
            !isValidEmail(
              email
            ) ||
            password.length <
              6 ||
            loading
          }
        />
      </View>


      <Verification
        visible={showVerify}
        email={email}
        loading={loading}
        onClose={() =>
          setShowVerify(false)
        }
        onVerify={
          handleVerify
        }
        onResend={sendOTP}
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
    fontSize: 15,
    lineHeight: 22,
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
    justifyContent:
      "space-between",
    marginBottom: 40,
  },

  passwordInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 12,
  },

  buttonWrapper: {
    marginTop: 12,
  },
});