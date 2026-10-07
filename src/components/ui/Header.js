import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "expo-router";
import { useAuth, useUser } from "@clerk/expo";

import { useTheme } from "../../context/ThemeContext";
import { createSupabaseClient } from "../../utils/supabase";
import { LANGUAGES } from "../../data/languagesData";

const getLocalDateString = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getDateDifference = (firstDate, secondDate) => {
  if (!firstDate || !secondDate) {
    return null;
  }

  const first = new Date(firstDate);
  const second = new Date(secondDate);

  if (
    Number.isNaN(first.getTime()) ||
    Number.isNaN(second.getTime())
  ) {
    return null;
  }

  return Math.round(
    (second.getTime() - first.getTime()) /
      (1000 * 60 * 60 * 24)
  );
};

export default function Header({
  onLanguagePress,
  onStreakPress,
  onXpPress,
}) {
  const { theme } = useTheme();
  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();

  const supabase = useMemo(() => {
    if (typeof getToken !== "function") {
      return null;
    }

    return createSupabaseClient(getToken);
  }, [getToken]);

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = user?.id;

  const syncStreak = useCallback(
    async (profileData) => {
      if (!profileData || !userId || !supabase) {
        return profileData;
      }

      const currentStreak = Number(profileData.streak) || 0;

      if (currentStreak === 0) {
        return profileData;
      }

      const today = getLocalDateString();
      const lastActivity = profileData.last_activity_date;

      if (!lastActivity) {
        return profileData;
      }

      const daysSinceActivity = getDateDifference(
        lastActivity,
        today
      );

      if (
        daysSinceActivity === null ||
        daysSinceActivity <= 1
      ) {
        return profileData;
      }

      const { data, error } = await supabase
        .from("profiles")
        .update({
          streak: 0,
        })
        .eq("clerk_id", userId)
        .select(`
          streak,
          total_xp,
          hearts,
          target_language,
          language_level,
          last_activity_date
        `)
        .maybeSingle();

      if (error) {
        return {
          ...profileData,
          streak: 0,
        };
      }

      return (
        data || {
          ...profileData,
          streak: 0,
        }
      );
    },
    [supabase, userId]
  );

  const fetchProfile = useCallback(
    async (showLoader = false) => {
      if (!userId || !supabase) {
        return;
      }

      try {
        if (showLoader && !profile) {
          setLoading(true);
        }

        const { data, error } = await supabase
          .from("profiles")
          .select(`
            streak,
            total_xp,
            hearts,
            target_language,
            language_level,
            last_activity_date
          `)
          .eq("clerk_id", userId)
          .maybeSingle();

        if (error || !data) {
          return;
        }

        const syncedProfile = await syncStreak(data);

        setProfile(syncedProfile);
      } catch (error) {
        return;
      } finally {
        if (showLoader && !profile) {
          setLoading(false);
        }
      }
    },
    [
      supabase,
      userId,
      syncStreak,
      profile,
    ]
  );

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!userId || !supabase) {
      setLoading(false);
      return;
    }

    fetchProfile(true);
  }, [
    isLoaded,
    userId,
    supabase,
    fetchProfile,
  ]);

  useFocusEffect(
    useCallback(() => {
      if (
        !isLoaded ||
        !userId ||
        !supabase
      ) {
        return;
      }

      fetchProfile(false);
    }, [
      isLoaded,
      userId,
      supabase,
      fetchProfile,
    ])
  );

  useEffect(() => {
    if (
      !isLoaded ||
      !userId ||
      !supabase
    ) {
      return;
    }

    const channel = supabase
      .channel(`header-profile-${userId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "profiles",
          filter: `clerk_id=eq.${userId}`,
        },
        async (payload) => {
          const updatedProfile = payload.new;

          const syncedProfile =
            await syncStreak(updatedProfile);

          setProfile(syncedProfile);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [
    isLoaded,
    userId,
    supabase,
    syncStreak,
  ]);

  const handleStreakPress = useCallback(
    async () => {
      await fetchProfile(false);

      if (onStreakPress) {
        onStreakPress();
      }
    },
    [
      fetchProfile,
      onStreakPress,
    ]
  );

  const handleXpPress = useCallback(
    async () => {
      await fetchProfile(false);

      if (onXpPress) {
        onXpPress();
      }
    },
    [
      fetchProfile,
      onXpPress,
    ]
  );

  const currentLanguage = LANGUAGES.find(
    (lang) =>
      lang.id === profile?.target_language
  );

  const formatLevel = (level) => {
    if (!level) {
      return "";
    }

    return (
      level.charAt(0).toUpperCase() +
      level.slice(1)
    );
  };

  if (loading && !profile) {
    return (
      <View
        style={[
          styles.loadingContainer,
          {
            backgroundColor:
              theme.background,
          },
        ]}
      >
        <ActivityIndicator
          size="small"
          color={theme.primary}
        />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
          borderBottomColor:
            theme.border,
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
              {
                backgroundColor:
                  theme.primary + "15",
              },
            ]}
          >
            <Ionicons
              name="globe"
              size={20}
              color={theme.primary}
            />
          </View>
        )}

        <View
          style={styles.languageTextWrapper}
        >
          <Text
            numberOfLines={1}
            style={[
              styles.languageText,
              {
                color: theme.text,
              },
            ]}
          >
            {currentLanguage?.title ||
              "Language"}
          </Text>

          {profile?.language_level && (
            <Text
              numberOfLines={1}
              style={[
                styles.levelText,
                {
                  color:
                    theme.secondaryText ||
                    "#888",
                },
              ]}
            >
              {formatLevel(
                profile.language_level
              )}
            </Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.statsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleStreakPress}
          style={styles.statItem}
        >
          <Ionicons
            name="flame"
            size={24}
            color={theme.warning}
          />

          <Text
            style={[
              styles.statText,
              {
                color: theme.icon,
              },
            ]}
          >
            {Number(profile?.streak) || 0}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleXpPress}
          style={styles.statItem}
        >
          <Ionicons
            name="flash"
            size={24}
            color={theme.accent}
          />

          <Text
            style={[
              styles.statText,
              {
                color: theme.icon,
              },
            ]}
          >
            {Number(profile?.total_xp) || 0}
          </Text>
        </TouchableOpacity>
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