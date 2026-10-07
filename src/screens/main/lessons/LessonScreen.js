import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useUser, useAuth } from "@clerk/expo";

import { useTheme } from "../../../context/ThemeContext";
import { createSupabaseClient } from "../../../utils/supabase";
import { getLanguageData } from "../../../utils/lessonData";
import { getAllProgress } from "../../../lib/lessonProgress";
import Header from "../../../components/ui/Header";

const MAX_STARS = 3;

const LessonNode = React.memo(
  ({
    lesson,
    index,
    theme,
    onPress,
    completionCount = 0,
    isLocked = false,
  }) => {
    const safeCompletion = Math.max(
      0,
      Math.min(MAX_STARS, Number(completionCount) || 0)
    );

    const isMastered = safeCompletion >= MAX_STARS;

    const alignmentStyle =
      index % 2 === 0 ? "flex-start" : "flex-end";

    const renderCompletionStars = () => {
      const stars = [];

      const starsToShow = Math.min(
        Math.max(0, Number(safeCompletion) || 0),
        MAX_STARS
      );

      for (let i = 0; i < starsToShow; i++) {
        stars.push(
          <Ionicons
            key={`star-${i}`}
            name="star"
            size={16}
            color={theme.warning || "#FFD700"}
          />
        );
      }

      for (let i = starsToShow; i < MAX_STARS; i++) {
        stars.push(
          <Ionicons
            key={`empty-star-${i}`}
            name="star-outline"
            size={16}
            color={theme.icon || "#8e8e93"}
          />
        );
      }

      return (
        <View style={styles.completionStarsContainer}>
          {stars}
        </View>
      );
    };

    return (
      <View
        style={[
          styles.lessonNodeContainer,
          {
            alignItems: alignmentStyle,
          },
        ]}
      >
        <TouchableOpacity
          disabled={isLocked}
          style={[
            styles.lessonBubble,
            {
              backgroundColor: isLocked
                ? theme.background
                : isMastered
                ? `${theme.success}20`
                : theme.surface,
              borderColor: isLocked
                ? theme.border
                : isMastered
                ? theme.success
                : theme.border,
              opacity: isLocked ? 0.5 : 1,
            },
          ]}
          onPress={() => onPress(lesson)}
          activeOpacity={isLocked ? 1 : 0.7}
        >
          <View
            style={[
              styles.lessonIconContainer,
              {
                backgroundColor: isLocked
                  ? `${theme.border}60`
                  : `${theme.primary}15`,
              },
            ]}
          >
            <Ionicons
              name={
                isLocked
                  ? "lock-closed"
                  : lesson?.icon || "book-outline"
              }
              size={22}
              color={
                isLocked
                  ? theme.secondaryText || "#8e8e93"
                  : theme.primary
              }
            />
          </View>

          <View style={styles.lessonTextContainer}>
            <Text
              style={[
                styles.lessonTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              {lesson?.title || "Untitled Lesson"}
            </Text>

            {isLocked ? (
              <Text
                style={[
                  styles.lockedText,
                  {
                    color:
                      theme.secondaryText || "#8e8e93",
                  },
                ]}
              >
                Complete the previous lesson first
              </Text>
            ) : (
              renderCompletionStars()
            )}
          </View>

          {!isLocked && (
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.secondaryText || "#8e8e93"}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }
);

export default function LessonScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  const [selectedLanguage, setSelectedLanguage] =
    useState("as-tw");

  const [selectedLevel, setSelectedLevel] =
    useState("beginner");

  const [profileLoading, setProfileLoading] =
    useState(true);

  const [error, setError] = useState(null);

  const [chapters, setChapters] = useState([]);

  const [chaptersLoading, setChaptersLoading] =
    useState(true);

  const [hasLoadedChaptersOnce, setHasLoadedChaptersOnce] =
    useState(false);

  const [progress, setProgress] = useState({});

  const [isInitialLoad, setIsInitialLoad] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const memoizedTheme = useMemo(
    () => theme,
    [
      theme?.background,
      theme?.surface,
      theme?.text,
      theme?.primary,
      theme?.secondaryText,
      theme?.border,
      theme?.icon,
      theme?.success,
      theme?.warning,
      theme?.danger,
      theme?.isDark,
    ]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
      setProfileLoading(false);
      setChaptersLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const fetchUserProfile = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    if (!user?.id) {
      setError("You need to be signed in to view lessons.");
      setProfileLoading(false);
      setIsInitialLoad(false);
      return;
    }

    try {
      const token = await getToken();

      if (!token) {
        throw new Error(
          "Unable to authenticate. Please try again."
        );
      }

      const supabase = createSupabaseClient(token);

      const {
        data,
        error: profileError,
      } = await supabase
        .from("profiles")
        .select("target_language, language_level")
        .eq("clerk_id", user.id)
        .single();

      if (profileError) {
        throw profileError;
      }

      const language =
        data?.target_language || "as-tw";

      const level =
        data?.language_level || "beginner";

      setSelectedLanguage((current) =>
        current === language ? current : language
      );

      setSelectedLevel((current) =>
        current === level ? current : level
      );

      setError(null);
    } catch (err) {
      setError(
        err?.message || "Unable to load profile."
      );
    } finally {
      setProfileLoading(false);
      setIsInitialLoad(false);
    }
  }, [isLoaded, user?.id, getToken]);

  useEffect(() => {
    if (!isLoaded || !user?.id) {
      return;
    }

    fetchUserProfile();
  }, [isLoaded, user?.id, fetchUserProfile]);

  const loadChapters = useCallback(() => {
    if (profileLoading) {
      return;
    }

    setChaptersLoading(true);

    try {
      if (!selectedLanguage || !selectedLevel) {
        setChapters([]);
        setError(null);
        return;
      }

      const languageData = getLanguageData(
        selectedLanguage,
        selectedLevel
      );

      if (
        !languageData ||
        Object.keys(languageData).length === 0
      ) {
        setChapters([]);
        setError(null);
        return;
      }

      const chaptersArray = Object.keys(
        languageData
      ).map((key) => ({
        id: key,
        title: languageData[key]?.title || key,
        description:
          languageData[key]?.description || "",
        vocabulary:
          languageData[key]?.vocabulary || [],
        lessons:
          languageData[key]?.sections || [],
        review:
          languageData[key]?.review || null,
        totalXp: Number.isFinite(
          Number(languageData[key]?.totalXp)
        )
          ? Math.max(
              0,
              Number(languageData[key]?.totalXp)
            )
          : 0,
      }));

      setChapters(chaptersArray);
      setError(null);
    } catch (err) {
      setError(
        err?.message || "Unable to load lessons."
      );
      setChapters([]);
    } finally {
      setChaptersLoading(false);
      setHasLoadedChaptersOnce(true);
    }
  }, [
    selectedLanguage,
    selectedLevel,
    profileLoading,
  ]);

  useEffect(() => {
    loadChapters();
  }, [loadChapters]);

  const loadProgress = useCallback(async () => {
    if (
      !selectedLanguage ||
      !selectedLevel ||
      !user?.id
    ) {
      setProgress({});
      return;
    }

    try {
      const token = await getToken();

      if (!token) {
        setProgress({});
        return;
      }

      const supabase = createSupabaseClient(token);

      const savedProgress = await getAllProgress(
        selectedLanguage,
        selectedLevel,
        supabase,
        user.id
      );

      const normalizedProgress = {};

      Object.entries(
        savedProgress || {}
      ).forEach(([lessonId, value]) => {
        const numericValue = Number(value);

        normalizedProgress[lessonId] = Math.max(
          0,
          Math.min(
            MAX_STARS,
            Number.isFinite(numericValue)
              ? numericValue
              : 0
          )
        );
      });

      setProgress(normalizedProgress);
    } catch {
      setProgress({});
    }
  }, [
    selectedLanguage,
    selectedLevel,
    user?.id,
    getToken,
  ]);

  useEffect(() => {
    if (
      profileLoading ||
      !selectedLanguage ||
      !selectedLevel ||
      !user?.id
    ) {
      return;
    }

    loadProgress();
  }, [
    profileLoading,
    selectedLanguage,
    selectedLevel,
    user?.id,
    loadProgress,
  ]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    try {
      await fetchUserProfile();
    } finally {
      setRefreshing(false);
    }
  }, [fetchUserProfile]);

  const isLessonUnlocked = useCallback(
    (chapterIndex, lessonIndex) => {
      if (
        chapterIndex === 0 &&
        lessonIndex === 0
      ) {
        return true;
      }

      if (lessonIndex > 0) {
        const previousLesson =
          chapters[chapterIndex]?.lessons?.[
            lessonIndex - 1
          ];

        if (!previousLesson?.id) {
          return false;
        }

        return (
          Number(
            progress[previousLesson.id] || 0
          ) >= MAX_STARS
        );
      }

      const previousChapter =
        chapters[chapterIndex - 1];

      const previousLessons =
        previousChapter?.lessons || [];

      if (previousLessons.length === 0) {
        return false;
      }

      const lastLesson =
        previousLessons[
          previousLessons.length - 1
        ];

      if (!lastLesson?.id) {
        return false;
      }

      return (
        Number(progress[lastLesson.id] || 0) >=
        MAX_STARS
      );
    },
    [chapters, progress]
  );

  const handleLessonPress = useCallback(
    (lesson) => {
      if (!lesson?.id) {
        return;
      }

      const chapter = chapters.find(
        (chapterItem) =>
          (chapterItem.lessons || []).some(
            (item) => item.id === lesson.id
          )
      );

      if (!chapter) {
        return;
      }

      const chapterIndex = chapters.findIndex(
        (item) => item.id === chapter.id
      );

      const lessonIndex =
        chapter.lessons.findIndex(
          (item) => item.id === lesson.id
        );

      const unlocked = isLessonUnlocked(
        chapterIndex,
        lessonIndex
      );

      if (!unlocked) {
        return;
      }

      const languageData = getLanguageData(
        selectedLanguage,
        selectedLevel
      );

      const fullChapterData =
        languageData?.[chapter.id];

      const dataToPass =
        fullChapterData || chapter;

      router.push({
        pathname: "/(app)/lesson/[id]",
        params: {
          id: lesson.id,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          lessonData: JSON.stringify(
            dataToPass
          ),
          language: selectedLanguage,
          level: selectedLevel,
          chapterId: chapter.id,
        },
      });
    },
    [
      router,
      selectedLanguage,
      selectedLevel,
      chapters,
      isLessonUnlocked,
    ]
  );

  const handleChapterReview = useCallback(
    (chapter) => {
      if (!chapter?.review?.id) {
        return;
      }

      const lessons = chapter.lessons || [];

      const allLessonsCompleted =
        lessons.length === 0 ||
        lessons.every(
          (lesson) =>
            Number(progress[lesson.id] || 0) >=
            MAX_STARS
        );

      if (!allLessonsCompleted) {
        return;
      }

      router.push({
        pathname: "/(app)/lesson/[id]",
        params: {
          id: chapter.review.id,
          lessonId: chapter.review.id,
          lessonTitle:
            chapter.review.title ||
            `Review: ${chapter.title}`,
          lessonData: JSON.stringify(
            chapter.review
          ),
          language: selectedLanguage,
          level: selectedLevel,
          isReview: true,
          chapterId: chapter.id,
        },
      });
    },
    [
      router,
      selectedLanguage,
      selectedLevel,
      progress,
    ]
  );

  const handleStreakPress = useCallback(() => {
    router.push("/(app)/streak");
  }, [router]);

  const showInitialSpinner =
    !isLoaded ||
    isInitialLoad ||
    profileLoading;

  const showChaptersLoading =
    chaptersLoading ||
    !hasLoadedChaptersOnce;

  if (showInitialSpinner) {
    return (
      <View
        style={[
          styles.center,
          {
            backgroundColor:
              memoizedTheme.background,
          },
        ]}
      >
        <ActivityIndicator
          size="large"
          color={memoizedTheme.primary}
        />

        <Text
          style={[
            styles.loadingText,
            {
              color: memoizedTheme.text,
            },
          ]}
        >
          {!isLoaded
            ? "Loading..."
            : isInitialLoad
            ? "Loading..."
            : "Loading profile..."}
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[
          styles.center,
          {
            backgroundColor:
              memoizedTheme.background,
          },
        ]}
      >
        <Ionicons
          name="alert-circle"
          size={50}
          color="red"
        />

        <Text
          style={{
            color: "red",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Error: {error}
        </Text>

        <TouchableOpacity
          style={[
            styles.retryButton,
            {
              backgroundColor:
                memoizedTheme.primary,
              marginTop: 16,
            },
          ]}
          onPress={() => {
            setError(null);
            setIsInitialLoad(true);
            setProfileLoading(true);
            setHasLoadedChaptersOnce(false);
            setChaptersLoading(true);
            fetchUserProfile();
          }}
        >
          <Text style={styles.retryButtonText}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        styles.container,
        {
          backgroundColor:
            memoizedTheme.background,
        },
      ]}
    >
      <Header onStreakPress={handleStreakPress} />

      <ScrollView
        contentContainerStyle={
          styles.scrollContainer
        }
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={memoizedTheme.primary}
            colors={[memoizedTheme.primary]}
          />
        }
      >
        {showChaptersLoading ? (
          <View style={styles.center}>
            <ActivityIndicator
              size="large"
              color={memoizedTheme.primary}
            />

            <Text
              style={[
                styles.loadingText,
                {
                  color: memoizedTheme.text,
                },
              ]}
            >
              Loading lessons...
            </Text>
          </View>
        ) : chapters.length === 0 ? (
          <View style={styles.center}>
            <Ionicons
              name="book-outline"
              size={50}
              color={
                memoizedTheme.icon || "#8e8e93"
              }
            />

            <Text
              style={[
                styles.noDataText,
                {
                  color: memoizedTheme.text,
                },
              ]}
            >
              No lessons found
            </Text>

            <Text
              style={[
                styles.noDataSubText,
                {
                  color:
                    memoizedTheme.secondaryText ||
                    "#8e8e93",
                },
              ]}
            >
              Try selecting a different language
              or level
            </Text>
          </View>
        ) : (
          chapters.map(
            (chapter, chapterIndex) => {
              const chapterProgress = (
                chapter.lessons || []
              ).reduce(
                (total, lesson) =>
                  total +
                  (progress[lesson.id] || 0),
                0
              );

              const totalLessons = (
                chapter.lessons || []
              ).length;

              const avgProgress =
                totalLessons > 0
                  ? Math.round(
                      (chapterProgress /
                        (totalLessons *
                          MAX_STARS)) *
                        100
                    )
                  : 0;

              const allLessonsCompleted =
                totalLessons > 0 &&
                (chapter.lessons || []).every(
                  (lesson) =>
                    Number(
                      progress[lesson.id] || 0
                    ) >= MAX_STARS
                );

              return (
                <View
                  key={chapter.id}
                  style={
                    styles.chapterContainer
                  }
                >
                  <View
                    style={styles.chapterHeader}
                  >
                    <View
                      style={
                        styles.chapterHeaderRow
                      }
                    >
                      <Text
                        style={[
                          styles.chapterNumberText,
                          {
                            color:
                              memoizedTheme.secondaryText ||
                              "#8e8e93",
                          },
                        ]}
                      >
                        CHAPTER {chapterIndex + 1}
                      </Text>

                      <View
                        style={
                          styles.chapterHeaderRight
                        }
                      >
                        {chapter.totalXp > 0 && (
                          <View
                            style={[
                              styles.chapterXPContainer,
                              {
                                backgroundColor: `${
                                  memoizedTheme.warning ||
                                  "#FFD700"
                                }20`,
                              },
                            ]}
                          >
                            <Ionicons
                              name="flash"
                              size={16}
                              color={
                                memoizedTheme.warning ||
                                "#FFD700"
                              }
                            />

                            <Text
                              style={[
                                styles.chapterXPText,
                                {
                                  color:
                                    memoizedTheme.warning ||
                                    "#D6A900",
                                },
                              ]}
                            >
                              +{chapter.totalXp} XP
                            </Text>
                          </View>
                        )}

                        <View
                          style={[
                            styles.chapterProgressBadge,
                            {
                              backgroundColor: `${memoizedTheme.primary}20`,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.chapterProgressText,
                              {
                                color:
                                  memoizedTheme.primary,
                              },
                            ]}
                          >
                            {avgProgress}%
                          </Text>
                        </View>
                      </View>
                    </View>

                    <Text
                      style={[
                        styles.chapterTitleText,
                        {
                          color:
                            memoizedTheme.text,
                        },
                      ]}
                    >
                      {chapter.title}
                    </Text>

                    {chapter.description && (
                      <Text
                        style={[
                          styles.chapterDescription,
                          {
                            color:
                              memoizedTheme.secondaryText ||
                              "#8e8e93",
                          },
                        ]}
                      >
                        {chapter.description}
                      </Text>
                    )}
                  </View>

                  <View
                    style={styles.lessonsWrapper}
                  >
                    {(chapter.lessons || []).map(
                      (lesson, lessonIndex) => {
                        const unlocked =
                          isLessonUnlocked(
                            chapterIndex,
                            lessonIndex
                          );

                        return (
                          <LessonNode
                            key={lesson.id}
                            lesson={lesson}
                            index={lessonIndex}
                            theme={memoizedTheme}
                            onPress={
                              handleLessonPress
                            }
                            completionCount={
                              progress[
                                lesson.id
                              ] || 0
                            }
                            isLocked={!unlocked}
                          />
                        );
                      }
                    )}
                  </View>

                  {chapter.review && (
                    <TouchableOpacity
                      disabled={
                        !allLessonsCompleted
                      }
                      style={[
                        styles.reviewButton,
                        {
                          backgroundColor:
                            allLessonsCompleted
                              ? memoizedTheme.primary
                              : memoizedTheme.border,
                          opacity:
                            allLessonsCompleted
                              ? 1
                              : 0.55,
                        },
                      ]}
                      onPress={() =>
                        handleChapterReview(
                          chapter
                        )
                      }
                      activeOpacity={
                        allLessonsCompleted
                          ? 0.8
                          : 1
                      }
                    >
                      <Ionicons
                        name={
                          allLessonsCompleted
                            ? "refresh-outline"
                            : "lock-closed-outline"
                        }
                        size={20}
                        color="#FFF"
                      />

                      <Text
                        style={
                          styles.reviewButtonText
                        }
                      >
                        {allLessonsCompleted
                          ? "Review Chapter"
                          : "Complete Lessons to Review"}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  scrollContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexGrow: 1,
  },

  chapterContainer: {
    marginBottom: 24,
  },

  chapterHeader: {
    marginBottom: 14,
  },

  chapterHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  chapterHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  chapterNumberText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  chapterProgressBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  chapterProgressText: {
    fontSize: 12,
    fontWeight: "600",
  },

  chapterXPContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 14,
    gap: 4,
  },

  chapterXPText: {
    fontSize: 12,
    fontWeight: "800",
  },

  chapterTitleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 3,
  },

  chapterDescription: {
    fontSize: 14,
    marginTop: 3,
    lineHeight: 20,
  },

  lessonsWrapper: {
    gap: 14,
  },

  lessonNodeContainer: {
    minHeight: 72,
    justifyContent: "center",
    width: "100%",
  },

  lessonBubble: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 2,
    width: "88%",
    gap: 10,
  },

  lessonIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  lessonTextContainer: {
    flex: 1,
  },

  lessonTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  completionStarsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },

  lockedText: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: 4,
    lineHeight: 15,
  },

  reviewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 12,
    alignSelf: "center",
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  reviewButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  loadingText: {
    fontSize: 16,
    marginTop: 12,
  },

  retryButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  retryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  noDataText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },

  noDataSubText: {
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
  },
});