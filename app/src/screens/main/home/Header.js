import { useEffect, useMemo, useState } from "react";

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

import { useTheme } from "../../../context/ThemeContext";
import { createSupabaseClient } from "../../../utils/supabase";

import { LANGUAGES } from "../../../data/languagesData";

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
  }, [isLoaded, user?.id]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select(`
          streak,
          total_xp,
          hearts,
          target_language
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

  if (loading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: theme.background },
        ]}
      >
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
        activeOpacity={0.8}
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
              { backgroundColor: theme.primary + "20" },
            ]}
          >
            <Ionicons name="globe" size={24} color={theme.primary}/>
          </View>
        )}

        <Text
          numberOfLines={1}
          style={[
            styles.languageText,
            { color: theme.text },
          ]}
        >
          {currentLanguage?.title || "Language"}
        </Text>
      </TouchableOpacity>


      <View style={styles.statsContainer}>
        <TouchableOpacity onPress={onStreakPress} style={styles.statItem}>
          <Ionicons name="flame" size={24} color={theme.accent} />
          <Text style={[styles.statText, { color: theme.text }]}>
            {profile?.streak ?? 0}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={onXpPress} style={styles.statItem}>
          <Ionicons name="flash" size={24} color={theme.warning} />
          <Text style={[styles.statText, { color: theme.text }]}>
            {profile?.total_xp ?? 0}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={onHeartsPress} style={styles.statItem}>
          <Ionicons name="heart" size={24} color={theme.error} />
          <Text style={[styles.statText, { color: theme.text }]}>
            {profile?.hearts ?? 5}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    paddingVertical: 16,
    alignItems: "center",
  },

  container: {
    paddingHorizontal: 0,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },

  languageCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    maxWidth: "42%",
  },

  flag: {
    width: 28,
    height: 28,
    marginRight: 8,
  },

  flagPlaceholder: {
    width: 28,
    height: 28,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  languageText: {
    fontSize: 15,
    fontWeight: "800",
  },

  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  statText: {
    fontSize: 18,
    fontWeight: "900",
  },
});