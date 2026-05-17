import React, { useState, useCallback } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import { useSignIn, useSignUp, useUser } from "@clerk/clerk-expo";

import { useTheme } from "../../context/ThemeContext";
import Button from "../../components/ui/Button";
import { ThemedText } from "../../components/themed-text";
import Verification from "../../components/ui/Verification";

export default function EmailAuth({ navigation }) {
  const { theme } = useTheme();


  const { signIn, setActive: setSignInActive, isLoaded: signInLoaded } = useSignIn();
  const { signUp, setActive: setSignUpActive, isLoaded: signUpLoaded } = useSignUp();

  const { user } = useUser();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [flow, setFlow] = useState(null); 

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);


  const sendOTP = useCallback(async () => {
    if (!isValidEmail(email) || !signInLoaded || !signUpLoaded) return;

    try {
      setLoading(true);

      try {
        await signIn.create({ identifier: email });
        await signIn.prepareEmailAddressVerification({ strategy: "email_code" });
        setFlow("signin");
      } catch (err) {
        await signUp.create({ emailAddress: email });
        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
        setFlow("signup");
      }

      setShowVerify(true);
    } catch (err) {
      console.error("Send OTP error:", err);
      Alert.alert("Error", err.errors?.[0]?.message || "Failed to send verification code.");
    } finally {
      setLoading(false);
    }
  }, [email, signIn, signUp, signInLoaded, signUpLoaded]);


  const handleVerify = useCallback(
    async (code) => {
      try {
        setLoading(true);

        if (flow === "signin") {
          const completeSignIn = await signIn.attemptFirstFactor({
            strategy: "email_code",
            code,
          });

          if (completeSignIn.status === "complete") {
            await setSignInActive({ 
              session: completeSignIn.createdSessionId
            });

            setShowVerify(false);
          } else {
            console.log("SignIn incomplete status:", completeSignIn.status);
            throw new Error("Verification incomplete. Please check your details.");
          }
        }
        
        
        else {
          const completeSignUp = await signUp.attemptEmailAddressVerification({
            code,
          });

          if (completeSignUp.status === "complete") {
            await setSignUpActive({ 
              session: completeSignUp.createdSessionId
            });

            if (user?.update && user?.firstName) {
              await user.update({
                firstName: user.firstName,
              });
            }

            setShowVerify(false);
          } else {
            console.log("SignUp incomplete status:", completeSignUp.status);
            throw new Error("Verification incomplete. Please check your details.");
          }
        }
      } catch (err) {
        console.error("Verify validation error:", err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [flow, signIn, signUp, setSignInActive, setSignUpActive, navigation, user]
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerContainer}>
        <ThemedText type="title">What’s your email?</ThemedText>
        <ThemedText style={[styles.subtitle, { color: theme.secondaryText }]}>
          We will send a 6-digit confirmation code to your inbox to verify your account.
        </ThemedText>
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={theme.placeholderText || "#888"}
        style={[styles.input, { color: theme.text, borderColor: theme.border }]}
      />

      <View style={styles.buttonWrapper}>
        <Button
          title={loading && !showVerify ? "Sending..." : "Send OTP"}
          onPress={sendOTP}
          disabled={!isValidEmail(email) || loading}
        />
      </View>

      <Verification
        visible={showVerify}
        email={email}
        loading={loading}
        onClose={() => setShowVerify(false)}
        onVerify={handleVerify}
        onResend={sendOTP}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70
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
    marginBottom:40,
  },
  buttonWrapper: {
    marginTop: 12
  }
});