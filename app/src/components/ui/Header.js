import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth, useUser } from "@clerk/clerk-expo";

import { useTheme } from "../../context/ThemeContext";
import { createSupabaseClient } from "../../utils/supabase";
import { LANGUAGES } from "../../data/languagesData";

export default function Header({
  onLanguagePress,
  onStreakPress,
  onXpPress,
  onHeartsPress,
}) {
  const { theme } = useTheme();
  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();

  const supabase = useMemo(
    () => createSupabaseClient(getToken),
    [getToken]
  );

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded || !user?.id) return;

    fetchProfile();


    const subscription = supabase
      .channel(`profile-header-changes-${user.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "profiles",
          filter: `clerk_id=eq.${user.id}`,
        },
        (payload) => {
          setProfile(payload.new);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [isLoaded, user?.id]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select(`
          streak,
          total_xp,
          hearts,
          target_language,
          language_level
        `)
        .eq("clerk_id", user.id)
        .single();

      if (error) {
        console.log("Profile fetch error:", error);
        return;
      }

      setProfile(data);
    } catch (err) {
      console.log("Header fetch crash:", err);
    } finally {
      setLoading(false);
    }
  };

  const currentLanguage = LANGUAGES.find(
    (lang) => lang.id === profile?.target_language
  );

  
  const formatLevel = (level) => {
    if (!level) return "";
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="small" color={theme.primary} />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          borderBottomColor: theme.border,
        },
      ]}
    >

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onLanguagePress}
        style={styles.languageCard}
      >
        {currentLanguage?.image ? (
          <Image
            source={currentLanguage.image}
            style={styles.flag}
            resizeMode="contain"
          />
        ) : (
          <View
            style={[
              styles.flagPlaceholder,
              { backgroundColor: theme.primary + "15" },
            ]}
          >
            <Ionicons name="globe" size={20} color={theme.primary} />
          </View>
        )}

        <View style={styles.languageTextWrapper}>
          <Text
            numberOfLines={1}
            style={[styles.languageText, { color: theme.text }]}
          >
            {currentLanguage?.title || "Language"}
          </Text>
          {profile?.language_level && (
            <Text 
              numberOfLines={1}
              style={[styles.levelText, { color: theme.secondaryText || "#888" }]}
            >
              {formatLevel(profile.language_level)}
            </Text>
          )}
        </View>

      </TouchableOpacity>

      
      <View style={styles.statsContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={onStreakPress} style={styles.statItem}>
          <Ionicons name="flame" size={24} color={theme.warning} />
          <Text style={[styles.statText, { color: theme.icon }]}>
            {profile?.streak ?? 0}
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity activeOpacity={0.7} onPress={onXpPress} style={styles.statItem}>
          <Ionicons name="flash" size={24} color={theme.accent} />
          <Text style={[styles.statText, { color: theme.icon }]}>
            {profile?.total_xp ?? 0}
          </Text>
        </TouchableOpacity>

        {/* Hearts
          <TouchableOpacity activeOpacity={0.7} onPress={onHeartsPress} style={styles.statItem}>
          <Ionicons name="heart" size={24} color="#FF4B4B" />
          <Text style={[styles.statText, { color: "#FF4B4B" }]}>
            {profile?.hearts ?? 0}
          </Text>
        </TouchableOpacity>
        */}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    paddingVertical: 18,
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 14,
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
  },
  languageCard: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  flag: {
    width: 32,
    height: 32,
    marginRight: 12,
    borderRadius: 6,
  },
  flagPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  languageTextWrapper: {
    flexDirection: "column",
    justifyContent: "center",
  },
  languageText: {
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  levelText: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
  },
  chevron: {
    marginLeft: 4,
    alignSelf: "center",
    marginTop: 2,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    fontSize: 16,
    fontWeight: "800",
  },
});