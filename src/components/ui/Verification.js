import React, {
  useRef,
  useState,
  useEffect,
} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Modal,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";
import Button from "./Button";

const BlinkingCaret = React.memo(
  ({ color }) => {
    const fadeAnim = useRef(
      new Animated.Value(0)
    ).current;

    useEffect(() => {
      const animation =
        Animated.loop(
          Animated.sequence([
            Animated.timing(
              fadeAnim,
              {
                toValue: 1,
                duration: 450,
                useNativeDriver: true,
              }
            ),
            Animated.timing(
              fadeAnim,
              {
                toValue: 0,
                duration: 450,
                useNativeDriver: true,
              }
            ),
          ])
        );

      animation.start();

      return () =>
        animation.stop();
    }, [fadeAnim]);

    return (
      <Animated.View
        style={[
          styles.caret,
          {
            opacity: fadeAnim,
            backgroundColor:
              color,
          },
        ]}
      />
    );
  }
);

BlinkingCaret.displayName =
  "BlinkingCaret";

export default function Verification({
  visible,
  email,
  onClose,
  onVerify,
  onResend,
  loading,
}) {
  const { theme } = useTheme();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);

  const [resending, setResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputRef = useRef(null);
  const shake = useRef(new Animated.Value(0)).current;
  const errorTimerRef = useRef(null);

  useEffect(() => {
    if (!visible) return;

    setOtp("");
    setError("");
    setResendTimer(60);
    setCanResend(false);

    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [visible]);

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shake, {
        toValue: 8,
        duration: 40,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: -8,
        duration: 40,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 6,
        duration: 40,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: -6,
        duration: 40,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 0,
        duration: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const triggerError = (msg, shouldShake = true) => {
    setError(msg);

    if (shouldShake) triggerShake();

    if (errorTimerRef.current) {
      clearTimeout(errorTimerRef.current);
    }

    errorTimerRef.current = setTimeout(() => {
      setError("");
    }, 4000);
  };

  useEffect(() => {
    if (visible) {
      setOtp("");
      setError("");
      setFocused(false);

      const timer =
        setTimeout(() => {
          inputRef.current?.focus();
        }, 250);

      return () =>
        clearTimeout(timer);
    } else {
      Keyboard.dismiss();

      if (
        errorTimerRef.current
      ) {
        clearTimeout(
          errorTimerRef.current
        );
      }
    }
  }, [visible]);

  useEffect(() => {
    return () => {
      if (
        errorTimerRef.current
      ) {
        clearTimeout(
          errorTimerRef.current
        );
      }
    };
  }, []);

  const submitOtpCode = async (code) => {
    if (code.length !== 6) {
      triggerError("Enter 6-digit code", true);
      return;
    }

    try {
      Keyboard.dismiss();
      await onVerify?.(code);
    } catch (err) {
      const message =
        err?.errors?.[0]?.message ||
        err?.message ||
        "Invalid code";

      const isOtpError =
        message.toLowerCase().includes("code") ||
        message.toLowerCase().includes("invalid");

      triggerError(message, isOtpError);

      setOtp("");

      setTimeout(() => {
        inputRef.current?.focus();
      }, 120);
    }
  };

  const handleChange = (text) => {
    const code = text.replace(/\D/g, "").slice(0, 6);
    setOtp(code);

    if (error) setError("");

    if (code.length === 6) {
      submitOtpCode(code);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    try {
      setError("");
      setOtp("");
      setResending(true);

      await onResend?.();

      setResendTimer(60);
      setCanResend(false);

      const interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } catch (err) {
      triggerError(
        err?.errors?.[0]?.message ||
          "Failed to resend code",
        false
      );
    } finally {
      setResending(false);
    }
  };

  const boxes = Array(6).fill("");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={[
          styles.overlay,
          {
            backgroundColor:
              theme.overlay ||
              "rgba(0,0,0,0.5)",
          },
        ]}
      >
        <View
          style={[
            styles.modal,
            {
              backgroundColor:
                theme.surface,
            },
          ]}
        >
          <TouchableOpacity
            style={
              styles.closeBtn
            }
            onPress={onClose}
          >
            <Ionicons
              name="close"
              size={22}
              color={
                theme.text
              }
            />
          </TouchableOpacity>

          <Text
            style={[
              styles.title,
              {
                color:
                  theme.text,
              },
            ]}
          >
            Verify Email
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            Enter the
            6-digit code
            sent to{"\n"}

            <Text
              style={{
                color:
                  theme.primary,
                fontWeight:
                  "700",
              }}
            >
              {email}
            </Text>
          </Text>

          {!!error && (
            <Text
              style={[
                styles.error,
                {
                  color:
                    theme.error,
                },
              ]}
            >
              {error}
            </Text>
          )}

          <View
            style={
              styles.otpContainer
            }
          >
            <Animated.View
              style={[
                styles.otpRow,
                {
                  transform: [
                    {
                      translateX:
                        shake,
                    },
                  ],
                },
              ]}
            >
              {boxes.map(
                (_, i) => {
                  const digit =
                    otp[i] ||
                    "";

                  const isActive =
                    i ===
                    otp.length;

                  return (
                    <View
                      key={i}
                      style={[
                        styles.box,
                        {
                          borderColor:
                            isActive &&
                            focused
                              ? theme.primary
                              : theme.border,
                          backgroundColor:
                            theme.background,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.boxText,
                          {
                            color:
                              theme.text,
                          },
                        ]}
                      >
                        {
                          digit
                        }
                      </Text>

                      {isActive &&
                        focused && (
                          <BlinkingCaret
                            color={
                              theme.primary
                            }
                          />
                        )}
                    </View>
                  );
                }
              )}
            </Animated.View>

            <TextInput
              ref={inputRef}
              value={otp}
              onChangeText={
                handleChange
              }
              keyboardType="number-pad"
              maxLength={6}
              onFocus={() =>
                setFocused(
                  true
                )
              }
              onBlur={() =>
                setFocused(
                  false
                )
              }
              style={
                styles.hiddenInput
              }
              caretHidden
              autoComplete="sms-otp"
              textContentType="oneTimeCode"
              editable={
                !loading
              }
            />
          </View>

          <Button
            title={
              loading
                ? "Verifying..."
                :resending
                ? "Resending..."
                : "Verify"
            }
            onPress={() =>
              submitOtpCode(
                otp
              )
            }
            disabled={
              loading
            }
            status={
              error
                ? "error"
                : "default"
            }
          />

          <TouchableOpacity
            onPress={
              handleResend
            }
            disabled={!canResend || loading || resending}
            style={
              styles.resendTouch
            }
          >
            <Text
              style={[
                styles.resend,
                {
                  color: theme.primary,
                  opacity: !canResend ? 0.5 : 1,
                },
              ]}
            >
              {canResend
                ? "Resend code"
                : `Resend in ${resendTimer}s`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles =
  StyleSheet.create({
    overlay: {
      flex: 1,
      alignItems:
        "center",
    },

    modal: {
      width: "88%",
      maxWidth: 400,
      top: "20%",
      padding: 24,
      borderRadius: 16,
      position: "relative",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      elevation: 5,
    },

    closeBtn: {
      position:
        "absolute",
      top: 16,
      right: 16,
      zIndex: 10,
      padding: 4,
    },

    title: {
      fontSize: 22,
      fontWeight: "700",
      textAlign:
        "center",
      marginTop: 8,
    },

    subtitle: {
      fontSize: 14,
      textAlign:
        "center",
      marginTop: 8,
      marginBottom: 20,
      lineHeight: 20,
    },

    error: {
      textAlign:
        "center",
      marginBottom: 12,
      fontWeight: "500",
      fontSize: 14,
    },

    otpContainer: {
      position:
        "relative",
      marginBottom: 24,
      justifyContent:
        "center",
      alignItems:
        "center",
    },

    otpRow: {
      flexDirection:
        "row",
      justifyContent:
        "center",
      width: "100%",
    },

    box: {
      width: 44,
      height: 52,
      borderWidth: 1.5,
      borderRadius: 10,
      justifyContent:
        "center",
      alignItems:
        "center",
      marginHorizontal: 5,
    },

    boxText: {
      fontSize: 20,
      fontWeight: "600",
    },

    hiddenInput: {
      ...StyleSheet.absoluteFillObject,
      opacity: 0,
      fontSize: 24,
    },

    resendTouch: {
      paddingVertical: 10,
    },

    resend: {
      textAlign:
        "center",
      marginTop: 8,
      fontWeight: "600",
      fontSize: 14,
    },

    caret: {
      position:
        "absolute",
      width: 2,
      height: 22,
    },
  });