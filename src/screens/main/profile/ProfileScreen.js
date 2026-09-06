import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth, useUser } from "@clerk/expo";

import { ThemedText } from "../../../components/themed-text";
import Button from "../../../components/ui/Button";
import ThemeToggle from "../../../components/ui/ThemeToggle";
import { useTheme } from "../../../context/ThemeContext";
import { createSupabaseClient } from "../../../utils/supabase";

import {
  LANGUAGES,
  LEVELS,
} from "../../../data/onboardingOptions";

import EditProfileModal from "./EditProfileModal";

export default function ProfileScreen() {
  const { theme } = useTheme();
  const { user } = useUser();
  const { getToken, signOut } = useAuth();
  const router = useRouter();

  const supabase = useMemo(() => {
    if (typeof getToken !== "function") {
      return null;
    }

    return createSupabaseClient(getToken);
  }, [getToken]);

  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [
    isEditModalVisible,
    setIsEditModalVisible,
  ] = useState(false);

  const [userLanguages, setUserLanguages] = useState([]);

  const calculateStreak = useCallback(
    (data) => {
      if (!data) return 0;

      const streak =
        Number(data.streak) || 0;

      const lastActivity =
        data.last_activity_date;

      if (!lastActivity) {
        return streak;
      }

      const lastDate = new Date(
        `${lastActivity}T00:00:00`
      );

      const today = new Date();

      lastDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      const difference = Math.floor(
        (today.getTime() -
          lastDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

      if (difference > 1) {
        return 0;
      }

      return streak;
    },
    []
  );

  const fetchProfile = useCallback(
    async () => {
      if (!user?.id || !supabase) {
        return;
      }

      try {
        const { data, error } =
          await supabase
            .from("profiles")
            .select(`
              full_name,
              streak,
              last_activity_date,
              total_xp,
              hearts,
              target_language,
              language_level,
              email,
              user_languages
            `)
            .eq(
              "clerk_id",
              user.id
            )
            .single();

        if (error) {
          console.error(
            "Error fetching profile:",
            error
          );
          return;
        }

        if (!data) return;

        const currentStreak =
          calculateStreak(data);

        const updatedProfile = {
          ...data,
          streak: currentStreak,
        };

        setProfile(updatedProfile);

        const languages =
          data?.user_languages ||
          (data?.target_language
            ? [data.target_language]
            : []);

        setUserLanguages(
          languages.filter(Boolean)
        );

        if (
          currentStreak === 0 &&
          Number(data.streak) > 0
        ) {
          await supabase
            .from("profiles")
            .update({
              streak: 0,
            })
            .eq(
              "clerk_id",
              user.id
            );
        }
      } catch (error) {
        console.error(
          "Error fetching profile:",
          error
        );
      } finally {
        setLoading(false);
      }
    },
    [
      supabase,
      user?.id,
      calculateStreak,
    ]
  );

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useFocusEffect(
    useCallback(() => {
      fetchProfile();

      return undefined;
    }, [fetchProfile])
  );

  useEffect(() => {
    if (!user?.id || !supabase) {
      return;
    }

    const channel = supabase
      .channel(
        `profile-screen-changes-${user.id}`
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "profiles",
          filter: `clerk_id=eq.${user.id}`,
        },
        (payload) => {
          const updatedProfile =
            payload.new;

          setProfile({
            ...updatedProfile,
            streak:
              calculateStreak(
                updatedProfile
              ),
          });

          const languages =
            updatedProfile?.user_languages ||
            (updatedProfile
              ?.target_language
              ? [
                  updatedProfile.target_language,
                ]
              : []);

          setUserLanguages(
            languages.filter(Boolean)
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(
        channel
      );
    };
  }, [
    supabase,
    user?.id,
    calculateStreak,
  ]);

  const currentLanguage =
    LANGUAGES.find(
      (lang) =>
        lang.id ===
        profile?.target_language
    );

  const currentLevel =
    LEVELS.find(
      (level) =>
        level.id ===
        profile?.language_level
    );

  const userLanguageList =
    userLanguages
      .map((id) =>
        LANGUAGES.find(
          (lang) => lang.id === id
        )
      )
      .filter(Boolean);

  const handleSaveProfile =
    async (updates) => {
      if (!user?.id || !supabase) {
        return;
      }

      try {
        const updateData = {
          target_language:
            updates.target_language,
          language_level:
            updates.language_level,
          user_languages:
            updates.user_languages ||
            userLanguages,
        };

        if (
          updates.username &&
          updates.username !==
            profile?.full_name
        ) {
          updateData.full_name =
            updates.username;
        }

        if (
          updates.email &&
          updates.email !==
            profile?.email
        ) {
          updateData.email =
            updates.email;
        }

        const { error } =
          await supabase
            .from("profiles")
            .update(updateData)
            .eq(
              "clerk_id",
              user.id
            );

        if (error) {
          throw error;
        }

        setProfile((prev) => ({
          ...prev,
          ...updateData,
        }));

        if (updates.user_languages) {
          setUserLanguages(
            updates.user_languages
          );
        }

        Alert.alert(
          "Success",
          "Profile updated successfully!"
        );
      } catch (error) {
        console.error(
          "Failed to update profile:",
          error
        );

        Alert.alert(
          "Error",
          "We couldn't save your changes. Please check your connection."
        );

        throw error;
      }
    };

  const handleSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Sign Out",
          style: "destructive",
          onPress: async () => {
            try {
              await signOut();
            } catch (error) {
              console.error(error);
            }
          },
        },
      ]
    );
  };

  const handleDeleteAccount =
    () => {
      Alert.alert(
        "Delete Account",
        "Are you absolutely sure you want to delete your account? This action is permanent and your progress will be lost forever.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Delete Permanently",
            style: "destructive",
            onPress: async () => {
              try {
                setLoading(true);

                const { error } =
                  await supabase
                    .from("profiles")
                    .delete()
                    .eq(
                      "clerk_id",
                      user.id
                    );

                if (error) {
                  throw error;
                }

                await signOut();
              } catch (error) {
                console.error(
                  "Error deleting account:",
                  error
                );

                Alert.alert(
                  "Error",
                  "Something went wrong while deleting your account."
                );
              } finally {
                setLoading(false);
              }
            },
          },
        ]
      );
    };

  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            theme.background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          size="large"
          color={theme.primary}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          theme.background,
      }}
      edges={[
        "top",
        "left",
        "right",
      ]}
    >
      <View style={styles.container}>
        <View
          style={[
            styles.header,
            {
              borderBottomColor:
                theme.border,
            },
          ]}
        >
          <ThemedText
            style={styles.headerTitle}
          >
            Profile
          </ThemedText>

          <ThemeToggle />
        </View>

        <ScrollView
          contentContainerStyle={
            styles.scrollContainer
          }
          showsVerticalScrollIndicator={
            false
          }
        >
          <View
            style={[
              styles.profileCard,
              {
                backgroundColor:
                  theme.surface,
                borderColor:
                  theme.border,
              },
            ]}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                setIsEditModalVisible(
                  true
                )
              }
              style={[
                styles.editBadge,
                {
                  backgroundColor:
                    theme.surface,
                  borderColor:
                    theme.border,
                },
              ]}
            >
              <Ionicons
                name="pencil"
                size={14}
                color={theme.primary}
              />
            </TouchableOpacity>

            <View
              style={[
                styles.avatarContainer,
                {
                  backgroundColor:
                    theme.primary,
                  borderColor:
                    theme.border,
                },
              ]}
            >
              <ThemedText
                style={styles.avatarText}
              >
                {profile?.full_name
                  ?.charAt(0)
                  ?.toUpperCase() ||
                  "U"}
              </ThemedText>
            </View>

            <View
              style={styles.userInfo}
            >
              <ThemedText
                style={styles.userName}
              >
                {profile?.full_name ||
                  "User"}
              </ThemedText>

              <ThemedText
                style={[
                  styles.userEmail,
                  {
                    color:
                      theme.secondaryText,
                  },
                ]}
              >
                {profile?.email ||
                  user
                    ?.primaryEmailAddress
                    ?.emailAddress ||
                  ""}
              </ThemedText>
            </View>
          </View>

          <ThemedText
            style={[
              styles.sectionTitle,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            Statistics
          </ThemedText>

          <View style={styles.statsRow}>
            <View
              style={[
                styles.statBox,
                {
                  backgroundColor:
                    theme.surface,
                  borderColor:
                    theme.border,
                },
              ]}
            >
              <Ionicons
                name="flame"
                size={24}
                color={theme.accent}
              />

              <ThemedText
                style={styles.statValue}
              >
                {profile?.streak ?? 0}
              </ThemedText>

              <ThemedText
                numberOfLines={1}
                style={[
                  styles.statLabel,
                  {
                    color:
                      theme.secondaryText,
                  },
                ]}
              >
                Streak
              </ThemedText>
            </View>

            <View
              style={[
                styles.statBox,
                {
                  backgroundColor:
                    theme.surface,
                  borderColor:
                    theme.border,
                },
              ]}
            >
              <Ionicons
                name="flash"
                size={24}
                color={theme.warning}
              />

              <ThemedText
                style={styles.statValue}
              >
                {profile?.total_xp ?? 0}
              </ThemedText>

              <ThemedText
                numberOfLines={1}
                style={[
                  styles.statLabel,
                  {
                    color:
                      theme.secondaryText,
                  },
                ]}
              >
                Total XP
              </ThemedText>
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText
              style={[
                styles.sectionTitle,
                {
                  color:
                    theme.secondaryText,
                },
              ]}
            >
              My Courses
            </ThemedText>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                setIsEditModalVisible(
                  true
                )
              }
              style={[
                styles.learningCard,
                {
                  backgroundColor:
                    theme.surface,
                  borderColor:
                    theme.border,
                },
              ]}
            >
              <View
                style={
                  styles.primaryLanguageContainer
                }
              >
                <View
                  style={styles.learningRow}
                >
                  <View
                    style={
                      styles.learningItem
                    }
                  >
                    <View
                      style={[
                        styles.learningIcon,
                        {
                          backgroundColor:
                            theme.surface,
                        },
                      ]}
                    >
                      <Ionicons
                        name="star"
                        size={20}
                        color={
                          theme.warning
                        }
                      />
                    </View>

                    <View
                      style={
                        styles.learningTextBlock
                      }
                    >
                      <ThemedText
                        style={
                          styles.learningTitle
                        }
                        numberOfLines={1}
                      >
                        LEARNING
                      </ThemedText>

                      <ThemedText
                        style={
                          styles.learningValue
                        }
                      >
                        {currentLanguage?.title ||
                          "Not selected"}
                      </ThemedText>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.learningVerticalDivider,
                      {
                        backgroundColor:
                          theme.border,
                      },
                    ]}
                  />

                  <View
                    style={
                      styles.learningItem
                    }
                  >
                    <View
                      style={[
                        styles.learningIcon,
                        {
                          backgroundColor:
                            theme.surface,
                        },
                      ]}
                    >
                      <Ionicons
                        name="school"
                        size={20}
                        color={
                          theme.primary
                        }
                      />
                    </View>

                    <View
                      style={
                        styles.learningTextBlock
                      }
                    >
                      <ThemedText
                        style={
                          styles.learningTitle
                        }
                        numberOfLines={1}
                      >
                        LEVEL
                      </ThemedText>

                      <ThemedText
                        style={
                          styles.learningValue
                        }
                        numberOfLines={1}
                      >
                        {currentLevel?.title ||
                          "Not selected"}
                      </ThemedText>
                    </View>
                  </View>
                </View>
              </View>

              {userLanguageList.length >
                0 && (
                <View
                  style={
                    styles.languagesContainer
                  }
                >
                  <View
                    style={
                      styles.languagesHeader
                    }
                  >
                    <Ionicons
                      name="book-outline"
                      size={16}
                      color={
                        theme.secondaryText
                      }
                    />

                    <ThemedText
                      style={[
                        styles.languagesLabel,
                        {
                          color:
                            theme.secondaryText,
                        },
                      ]}
                    >
                      {
                        userLanguageList.length
                      }{" "}
                      Language
                      {userLanguageList.length >
                      1
                        ? "s"
                        : ""}
                    </ThemedText>
                  </View>

                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={
                      false
                    }
                    style={
                      styles.languageScroll
                    }
                    contentContainerStyle={
                      styles.languageScrollContent
                    }
                  >
                    <View
                      style={
                        styles.languagePills
                      }
                    >
                      {userLanguageList.map(
                        (lang) => {
                          const isPrimary =
                            lang.id ===
                            profile?.target_language;

                          return (
                            <View
                              key={
                                lang.id
                              }
                              style={[
                                styles.languagePill,
                                {
                                  backgroundColor:
                                    isPrimary
                                      ? theme.primary +
                                        "20"
                                      : theme.surface,
                                  borderColor:
                                    isPrimary
                                      ? theme.primary
                                      : theme.border,
                                  borderWidth:
                                    isPrimary
                                      ? 2
                                      : 1,
                                },
                              ]}
                            >
                              <Image
                                source={require(
                                  "../../../assets/images/flagImage.png"
                                )}
                                style={
                                  styles.languageFlag
                                }
                                resizeMode="contain"
                              />

                              <ThemedText
                                style={[
                                  styles.languagePillText,
                                  {
                                    color:
                                      isPrimary
                                        ? theme.primary
                                        : theme.text,
                                    fontWeight:
                                      isPrimary
                                        ? "700"
                                        : "500",
                                  },
                                ]}
                              >
                                {
                                  lang.title
                                }
                              </ThemedText>
                            </View>
                          );
                        }
                      )}
                    </View>
                  </ScrollView>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <ThemedText
              style={[
                styles.sectionTitle,
                {
                  color:
                    theme.secondaryText,
                },
              ]}
            >
              Preferences
            </ThemedText>

            <View
              style={[
                styles.menuCard,
                {
                  backgroundColor:
                    theme.surface,
                  borderColor:
                    theme.border,
                },
              ]}
            >
              <TouchableOpacity
                style={[
                  styles.menuItem,
                  {
                    borderBottomColor:
                      theme.border,
                  },
                ]}
                onPress={() =>
                  Alert.alert(
                    "Settings",
                    "Manage notifications and options."
                  )
                }
              >
                <View
                  style={
                    styles.menuItemLeft
                  }
                >
                  <Ionicons
                    name="settings-outline"
                    size={22}
                    color={
                      theme.primary
                    }
                  />

                  <ThemedText
                    style={
                      styles.menuItemTitle
                    }
                  >
                    App Settings
                  </ThemedText>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={
                    theme.secondaryText
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={
                  styles.menuItemLast
                }
                onPress={() =>
                  Alert.alert(
                    "Help",
                    "Access community guidelines & support documentation."
                  )
                }
              >
                <View
                  style={
                    styles.menuItemLeft
                  }
                >
                  <Ionicons
                    name="help-circle-outline"
                    size={22}
                    color={
                      theme.primary
                    }
                  />

                  <ThemedText
                    style={
                      styles.menuItemTitle
                    }
                  >
                    Help & Support
                  </ThemedText>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={
                    theme.secondaryText
                  }
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={styles.actionContainer}
          >
            <Button
              title="Sign Out"
              onPress={handleSignOut}
              variant="secondary"
              style={
                styles.customSignOut
              }
            />

            <TouchableOpacity
              onPress={
                handleDeleteAccount
              }
              style={
                styles.deleteAccountButton
              }
              activeOpacity={0.7}
            >
              <ThemedText
                style={
                  styles.deleteAccountText
                }
              >
                Delete Account
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <EditProfileModal
        visible={isEditModalVisible}
        onClose={() =>
          setIsEditModalVisible(false)
        }
        currentLanguageId={
          profile?.target_language
        }
        currentLevel={
          profile?.language_level
        }
        currentEmail={
          profile?.email ||
          user?.primaryEmailAddress
            ?.emailAddress ||
          ""
        }
        currentUsername={
          profile?.full_name || ""
        }
        userLanguages={userLanguages}
        onSave={handleSaveProfile}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 2,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
  },

  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    paddingBottom: 60,
  },

  profileCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderBottomWidth: 5,
    marginBottom: 24,
  },

  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  avatarText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    lineHeight: 28,
    paddingTop: 2,
  },

  editBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 10,
  },

  userInfo: {
    marginLeft: 16,
    flex: 1,
    paddingRight: 24,
  },

  userName: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 2,
  },

  userEmail: {
    fontSize: 14,
    fontWeight: "500",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },

  statBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
  },

  statValue: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 4,
  },

  statLabel: {
    fontSize: 11,
    fontWeight: "700",
    marginTop: 1,
  },

  section: {
    marginBottom: 24,
  },

  learningCard: {
    borderRadius: 20,
    borderWidth: 2,
    borderBottomWidth: 4,
    padding: 16,
  },

  primaryLanguageContainer: {
    paddingBottom: 12,
    marginBottom: 4,
  },

  learningRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  learningItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
    minWidth: 0,
  },

  learningTextBlock: {
    flex: 1,
    minWidth: 0,
  },

  learningIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  learningTitle: {
    fontSize: 10,
    opacity: 0.6,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  learningValue: {
    fontSize: 15,
    fontWeight: "800",
    marginTop: 1,
  },

  learningVerticalDivider: {
    width: 2,
    height: 36,
    marginHorizontal: 10,
    flexShrink: 0,
  },

  languagesContainer: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor:
      "rgba(0,0,0,0.08)",
  },

  languagesHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },

  languagesLabel: {
    fontSize: 12,
    fontWeight: "600",
  },

  languageScroll: {
    flexDirection: "row",
  },

  languageScrollContent: {
    paddingVertical: 2,
  },

  languagePills: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 2,
  },

  languagePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
  },

  languageFlag: {
    width: 20,
    height: 20,
  },

  languagePillText: {
    fontSize: 13,
  },

  menuCard: {
    borderRadius: 20,
    borderWidth: 2,
    borderBottomWidth: 4,
    overflow: "hidden",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
  },

  menuItemLast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  menuItemTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  actionContainer: {
    marginTop: 12,
    gap: 16,
  },

  customSignOut: {
    width: "100%",
  },

  deleteAccountButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },

  deleteAccountText: {
    color: "#CC2929",
    fontWeight: "800",
    fontSize: 15,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});