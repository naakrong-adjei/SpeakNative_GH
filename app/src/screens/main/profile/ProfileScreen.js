import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useUser, useAuth } from "@clerk/clerk-expo";

import { useTheme } from "../../../context/ThemeContext";
import { ThemedText } from "../../../components/themed-text";
import Button from "../../../components/ui/Button"; 
import ThemeToggle from "../../../components/ui/ThemeToggle";
import { createSupabaseClient } from "../../../utils/supabase";

import { LANGUAGES, LEVELS } from "../../../data/onboardingOptions";

export default function ProfileScreen() {
  const { theme } = useTheme();
  const { user } = useUser();
  const { getToken, signOut } = useAuth();

  const supabase = useMemo(
    () => createSupabaseClient(getToken),
    [getToken]
  );

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;
    fetchProfile();
  }, [user?.id]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select(`
          full_name,
          streak,
          total_xp,
          hearts,
          target_language,
          language_level
        `)
        .eq("clerk_id", user.id)
        .single();

      if (error) {
        console.log(error);
        return;
      }

      setProfile(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const currentLanguage = LANGUAGES.find(
    (lang) => lang.id === profile?.target_language
  );

  const currentLevel = LEVELS.find(
    (lvl) => lvl.id === profile?.language_level
  );

  const handleSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Sign Out",
          style: "destructive",
          onPress: async () => {
            try {
              await signOut();
            } catch (err) {
              console.log(err);
            }
          } 
        }
      ]
    );
  };
  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "Profile editing feature coming soon!");
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you absolutely sure you want to delete your account? This action is permanent and your progress will be lost forever.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete Permanently",
          style: "destructive",
          onPress: async () => {
            try {
              setLoading(true);
              const { error } = await supabase
                .from("profiles")
                .delete()
                .eq("clerk_id", user.id);

              if (error) throw error;
              await signOut();
            } catch (err) {
              console.log("Error deleting account:", err);
              Alert.alert("Error", "Something went wrong while deleting your account.");
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
          backgroundColor: theme.background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={theme.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.background }}
      edges={["top", "left", "right"]}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: theme.border }]}>
          <ThemedText style={styles.headerTitle}>Profile</ThemedText>
          <ThemeToggle />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Card */}
          <View
            style={[
              styles.profileCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            {/* Absolute Positioned Edit Badge in Top Right */}
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={handleEditProfile}
              style={[styles.editBadge, { backgroundColor: theme.card, borderColor: theme.border }]}
            >
              <Ionicons name="pencil" size={14} color={theme.primary} />
            </TouchableOpacity>

            {/* Avatar */}
            <View
              style={[
                styles.avatarContainer,
                { backgroundColor: theme.primary, borderColor: theme.border },
              ]}
            >
              <ThemedText style={styles.avatarText}>
                {profile?.full_name?.charAt(0)?.toUpperCase() || "U"}
              </ThemedText>
            </View>

            <View style={styles.userInfo}>
              <ThemedText style={styles.userName}>
                {profile?.full_name || "User"}
              </ThemedText>
              <ThemedText style={[styles.userEmail, { color: theme.secondaryText }]}>
                {user?.primaryEmailAddress?.emailAddress || ""}
              </ThemedText>
            </View>
          </View>

          <ThemedText style={[styles.sectionTitle, { color: theme.secondaryText }]}>
            Statistics
          </ThemedText>
          <View style={styles.statsRow}>
            <View style={[styles.statBox, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <Ionicons name="flame" size={24} color={theme.accent} />
              <ThemedText style={styles.statValue}>{profile?.streak ?? 0}</ThemedText>
              <ThemedText numberOfLines={1} style={[styles.statLabel, { color: theme.secondaryText }]}>Streak</ThemedText>
            </View>

            <View style={[styles.statBox, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <Ionicons name="flash" size={24} color={theme.warning} />
              <ThemedText style={styles.statValue}>{profile?.total_xp ?? 0}</ThemedText>
              <ThemedText numberOfLines={1} style={[styles.statLabel, { color: theme.secondaryText }]}>Total XP</ThemedText>
            </View>

            <View style={[styles.statBox, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <Ionicons name="heart" size={24} color={theme.error} />
              <ThemedText style={styles.statValue}>{profile?.hearts ?? 5}</ThemedText>
              <ThemedText numberOfLines={1} style={[styles.statLabel, { color: theme.secondaryText }]}>Hearts</ThemedText>
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={[styles.sectionTitle, { color: theme.secondaryText }]}>
              Current Course
            </ThemedText>

            <View
              style={[
                styles.learningCard,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                },
              ]}
            >
              <View style={styles.learningRow}>
                <View style={styles.learningItem}>
                  <View style={[styles.learningIcon, { backgroundColor: theme.surface }]}>
                    <Ionicons name="language" size={20} color={theme.primary} />
                  </View>
                  <View>
                    <ThemedText style={styles.learningTitle}>LANGUAGE</ThemedText>
                    <ThemedText style={styles.learningValue}>
                      {currentLanguage?.title || "Not selected"}
                    </ThemedText>
                  </View>
                </View>

                <View style={[styles.learningVerticalDivider, { backgroundColor: theme.border }]} />

                <View style={styles.learningItem}>
                  <View style={[styles.learningIcon, { backgroundColor: theme.surface }]}>
                    <Ionicons name={currentLevel?.icon || "school"} size={20} color={theme.primary} />
                  </View>
                  <View>
                    <ThemedText style={styles.learningTitle}>LEVEL</ThemedText>
                    <ThemedText style={styles.learningValue}>
                      {currentLevel?.title || "Not selected"}
                    </ThemedText>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Preferences Settings Section */}
          <View style={styles.section}>
            <ThemedText style={[styles.sectionTitle, { color: theme.secondaryText }]}>
              Preferences
            </ThemedText>

            <View style={[styles.menuCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <TouchableOpacity
                style={[styles.menuItem, { borderBottomColor: theme.border }]}
                onPress={() => Alert.alert("Settings", "Manage notifications and options.")}
              >
                <View style={styles.menuItemLeft}>
                  <Ionicons name="settings-outline" size={22} color={theme.primary} />
                  <ThemedText style={styles.menuItemTitle}>App Settings</ThemedText>
                </View>
                <Ionicons name="chevron-forward" size={18} color={theme.secondaryText} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItemLast}
                onPress={() => Alert.alert("Help", "Access community guidelines & support documentation.")}
              >
                <View style={styles.menuItemLeft}>
                  <Ionicons name="help-circle-outline" size={22} color={theme.primary} />
                  <ThemedText style={styles.menuItemTitle}>Help & Support</ThemedText>
                </View>
                <Ionicons name="chevron-forward" size={18} color={theme.secondaryText} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.actionContainer}>
            <Button 
              title="Sign Out" 
              onPress={handleSignOut} 
              variant="secondary" 
              style={styles.customSignOut}
            />

            <TouchableOpacity 
              onPress={handleDeleteAccount} 
              style={styles.deleteAccountButton}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.deleteAccountText}>
                Delete Account
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
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
    shadowOffset: { width: 0, height: 2 },
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
  learningRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  learningItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  learningIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  learningTitle: {
    fontSize: 10,
    opacity: 0.6,
    fontWeight: "800",
  },
  learningValue: {
    fontSize: 15,
    fontWeight: "800",
    marginTop: 1,
  },
  learningVerticalDivider: {
    width: 2,
    height: 36,
    marginHorizontal: 12,
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