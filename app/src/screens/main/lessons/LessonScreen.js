import React, {
  useCallback,
  useEffect,
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

import {
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";

import {
  useUser,
  useAuth,
} from "@clerk/expo";

import { useTheme } from "../../../context/ThemeContext";

import {
  createSupabaseClient,
} from "../../../utils/supabase";

import {
  getLanguageData,
} from "../../../utils/lessonData";

import {
  getAllProgress,
} from "../../../lib/lessonProgress";

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
      Math.min(
        MAX_STARS,
        Number(completionCount) || 0
      )
    );

    const isMastered =
      safeCompletion >= MAX_STARS;

    const alignmentStyle =
      index % 2 === 0
        ? "flex-start"
        : "flex-end";

    const renderCompletionStars = useCallback(
      (completion) => {
        const stars = [];

        const starsToShow = Math.min(
          Math.max(
            0,
            Number(completion) || 0
          ),
          MAX_STARS
        );

        for (
          let i = 0;
          i < starsToShow;
          i++
        ) {
          stars.push(
            <Ionicons
              key={`star-${i}`}
              name="star"
              size={16}
              color={
                theme.warning ||
                "#FFD700"
              }
            />
          );
        }

        for (
          let i = starsToShow;
          i < MAX_STARS;
          i++
        ) {
          stars.push(
            <Ionicons
              key={`empty-star-${i}`}
              name="star-outline"
              size={16}
              color={
                theme.icon ||
                "#8e8e93"
              }
            />
          );
        }

        return (
          <View
            style={
              styles.completionStarsContainer
            }
          >
            {stars}
          </View>
        );
      },
      [theme]
    );

    return (
      <View
        style={[
          styles.lessonNodeContainer,
          {
            alignItems:
              alignmentStyle,
          },
        ]}
      >
        <TouchableOpacity
          disabled={isLocked}
          style={[
            styles.lessonBubble,
            {
              backgroundColor:
                isLocked
                  ? theme.background
                  : isMastered
                  ? `${theme.success}20`
                  : theme.surface,
              borderColor:
                isLocked
                  ? theme.border
                  : isMastered
                  ? theme.success
                  : theme.border,
              opacity:
                isLocked ? 0.5 : 1,
            },
          ]}
          onPress={() =>
            onPress(lesson)
          }
          activeOpacity={
            isLocked ? 1 : 0.7
          }
        >
          <View
            style={[
              styles.lessonIconContainer,
              {
                backgroundColor:
                  isLocked
                    ? `${theme.border}60`
                    : `${theme.primary}15`,
              },
            ]}
          >
            <Ionicons
              name={
                isLocked
                  ? "lock-closed"
                  : lesson?.icon ||
                    "book-outline"
              }
              size={22}
              color={
                isLocked
                  ? theme.secondaryText ||
                    "#8e8e93"
                  : theme.primary
              }
            />
          </View>

          <View
            style={
              styles.lessonTextContainer
            }
          >
            <Text
              style={[
                styles.lessonTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              {lesson?.title ||
                "Untitled Lesson"}
            </Text>

            {isLocked ? (
              <Text
                style={[
                  styles.lockedText,
                  {
                    color:
                      theme.secondaryText ||
                      "#8e8e93",
                  },
                ]}
              >
                Complete the previous
                lesson first
              </Text>
            ) : (
              renderCompletionStars(
                safeCompletion
              )
            )}
          </View>

          {!isLocked && (
            <Ionicons
              name="chevron-forward"
              size={20}
              color={
                theme.secondaryText ||
                "#8e8e93"
              }
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }
);

export default function LessonScreen() {
  const navigation =
    useNavigation();

  const { theme } = useTheme();

  const { user } = useUser();

  const { getToken } = useAuth();

  const [
    selectedLanguage,
    setSelectedLanguage,
  ] = useState("as-tw");

  const [
    selectedLevel,
    setSelectedLevel,
  ] = useState("beginner");

  const [
    profileLoading,
    setProfileLoading,
  ] = useState(true);

  const [error, setError] =
    useState(null);

  const [chapters, setChapters] =
    useState([]);

  const [progress, setProgress] =
    useState({});

  const [
    isInitialLoad,
    setIsInitialLoad,
  ] = useState(true);

  const [
    refreshing,
    setRefreshing,
  ] = useState(false);

  const fetchUserProfile =
    useCallback(async () => {
      if (!user?.id) {
        setProfileLoading(false);
        setIsInitialLoad(false);
        return;
      }

      try {
        const token =
          await getToken();

        const supabase =
          createSupabaseClient(
            token
          );

        const {
          data,
          error: profileError,
        } = await supabase
          .from("profiles")
          .select(
            "target_language, language_level"
          )
          .eq(
            "clerk_id",
            user.id
          )
          .single();

        if (profileError) {
          throw profileError;
        }

        setSelectedLanguage(
          data?.target_language ||
            "as-tw"
        );

        setSelectedLevel(
          data?.language_level ||
            "beginner"
        );

        setError(null);
      } catch (err) {
        setError(
          err?.message ||
            "Unable to load profile."
        );
      } finally {
        setProfileLoading(false);
        setIsInitialLoad(false);
      }
    }, [
      user?.id,
      getToken,
    ]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  useFocusEffect(
    useCallback(() => {
      fetchUserProfile();
    }, [fetchUserProfile])
  );

  const loadChapters =
    useCallback(() => {
      if (
        profileLoading ||
        !selectedLanguage ||
        !selectedLevel
      ) {
        return;
      }

      try {
        const languageData =
          getLanguageData(
            selectedLanguage,
            selectedLevel
          );

        if (
          !languageData ||
          Object.keys(languageData)
            .length === 0
        ) {
          setChapters([]);
          return;
        }

        const chaptersArray =
          Object.keys(
            languageData
          ).map((key) => ({
            id: key,
            title:
              languageData[key]
                ?.title || key,
            description:
              languageData[key]
                ?.description || "",
            vocabulary:
              languageData[key]
                ?.vocabulary || [],
            lessons:
              languageData[key]
                ?.sections || [],
            review:
              languageData[key]
                ?.review || null,
            totalXp:
              Number.isFinite(
                Number(
                  languageData[key]
                    ?.totalXp
                )
              )
                ? Math.max(
                    0,
                    Number(
                      languageData[key]
                        ?.totalXp
                    )
                  )
                : 0,
          }));

        setChapters(
          chaptersArray
        );

        setError(null);
      } catch (err) {
        setError(
          err?.message ||
            "Unable to load lessons."
        );

        setChapters([]);
      }
    }, [
      selectedLanguage,
      selectedLevel,
      profileLoading,
    ]);

  useEffect(() => {
    loadChapters();
  }, [loadChapters]);

  const loadProgress =
    useCallback(async () => {
      if (
        !selectedLanguage ||
        !selectedLevel
      ) {
        setProgress({});
        return;
      }

      try {
        const savedProgress =
          await getAllProgress(
            selectedLanguage,
            selectedLevel
          );

        const normalizedProgress =
          {};

        Object.entries(
          savedProgress || {}
        ).forEach(
          ([lessonId, value]) => {
            const numericValue =
              Number(value);

            normalizedProgress[
              lessonId
            ] = Math.max(
              0,
              Math.min(
                MAX_STARS,
                Number.isFinite(
                  numericValue
                )
                  ? numericValue
                  : 0
              )
            );
          }
        );

        setProgress(
          normalizedProgress
        );
      } catch {
        setProgress({});
      }
    }, [
      selectedLanguage,
      selectedLevel,
    ]);

  useEffect(() => {
    if (
      chapters.length > 0 &&
      selectedLanguage &&
      selectedLevel
    ) {
      loadProgress();
    } else if (
      selectedLanguage &&
      selectedLevel
    ) {
      setProgress({});
    }
  }, [
    chapters,
    selectedLanguage,
    selectedLevel,
    loadProgress,
  ]);

  useFocusEffect(
    useCallback(() => {
      if (
        profileLoading ||
        !selectedLanguage ||
        !selectedLevel
      ) {
        return undefined;
      }

      let cancelled = false;

      const refresh =
        async () => {
          await new Promise(
            (resolve) =>
              setTimeout(
                resolve,
                100
              )
          );

          if (cancelled) {
            return;
          }

          await loadProgress();
        };

      refresh();

      return () => {
        cancelled = true;
      };
    }, [
      profileLoading,
      selectedLanguage,
      selectedLevel,
      loadProgress,
    ])
  );

  const onRefresh =
    useCallback(async () => {
      setRefreshing(true);

      try {
        await fetchUserProfile();
        loadChapters();
        await loadProgress();
      } finally {
        setRefreshing(false);
      }
    }, [
      fetchUserProfile,
      loadChapters,
      loadProgress,
    ]);

  const isLessonUnlocked =
    useCallback(
      (
        chapterIndex,
        lessonIndex
      ) => {
        if (
          chapterIndex === 0 &&
          lessonIndex === 0
        ) {
          return true;
        }

        if (lessonIndex > 0) {
          const previousLesson =
            chapters[
              chapterIndex
            ]?.lessons?.[
              lessonIndex - 1
            ];

          if (
            !previousLesson?.id
          ) {
            return false;
          }

          return (
            Number(
              progress[
                previousLesson.id
              ] || 0
            ) >= MAX_STARS
          );
        }

        const previousChapter =
          chapters[
            chapterIndex - 1
          ];

        const previousLessons =
          previousChapter?.lessons ||
          [];

        if (
          previousLessons.length ===
          0
        ) {
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
          Number(
            progress[
              lastLesson.id
            ] || 0
          ) >= MAX_STARS
        );
      },
      [chapters, progress]
    );

  const handleLessonPress =
    useCallback(
      (lesson) => {
        if (!lesson?.id) {
          return;
        }

        const chapter =
          chapters.find(
            (chapterItem) =>
              (
                chapterItem.lessons ||
                []
              ).some(
                (item) =>
                  item.id ===
                  lesson.id
              )
          );

        if (!chapter) {
          return;
        }

        const chapterIndex =
          chapters.findIndex(
            (item) =>
              item.id ===
              chapter.id
          );

        const lessonIndex =
          chapter.lessons.findIndex(
            (item) =>
              item.id ===
              lesson.id
          );

        const unlocked =
          isLessonUnlocked(
            chapterIndex,
            lessonIndex
          );

        if (!unlocked) {
          return;
        }

        const languageData =
          getLanguageData(
            selectedLanguage,
            selectedLevel
          );

        const fullChapterData =
          languageData?.[
            chapter.id
          ];

        const dataToPass =
          fullChapterData ||
          chapter;

        navigation.navigate(
          "LessonOverview",
          {
            lessonId:
              lesson.id,
            lessonTitle:
              lesson.title,
            lessonData:
              dataToPass,
            language:
              selectedLanguage,
            level:
              selectedLevel,
            chapterId:
              chapter.id,
          }
        );
      },
      [
        navigation,
        selectedLanguage,
        selectedLevel,
        chapters,
        isLessonUnlocked,
      ]
    );

  const handleChapterReview =
    useCallback(
      (chapter) => {
        if (
          !chapter?.review?.id
        ) {
          return;
        }

        const lessons =
          chapter.lessons || [];

        const allLessonsCompleted =
          lessons.length === 0 ||
          lessons.every(
            (lesson) =>
              Number(
                progress[
                  lesson.id
                ] || 0
              ) >= MAX_STARS
          );

        if (!allLessonsCompleted) {
          return;
        }

        navigation.navigate(
          "LessonOverview",
          {
            lessonId:
              chapter.review.id,
            lessonTitle:
              chapter.review
                .title ||
              `Review: ${chapter.title}`,
            lessonData:
              chapter.review,
            language:
              selectedLanguage,
            level:
              selectedLevel,
            isReview: true,
            chapterId:
              chapter.id,
          }
        );
      },
      [
        navigation,
        selectedLanguage,
        selectedLevel,
        progress,
      ]
    );

  const handleStreakPress =
    useCallback(() => {
      navigation.navigate(
        "Streak"
      );
    }, [navigation]);

  if (
    isInitialLoad ||
    profileLoading
  ) {
    return (
      <View
        style={[
          styles.center,
          {
            backgroundColor:
              theme.background,
          },
        ]}
      >
        <ActivityIndicator
          size="large"
          color={theme.primary}
        />

        <Text
          style={[
            styles.loadingText,
            {
              color:
                theme.text,
            },
          ]}
        >
          {isInitialLoad
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
              theme.background,
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
                theme.primary,
              marginTop: 16,
            },
          ]}
          onPress={() => {
            setError(null);
            setProfileLoading(
              true
            );
            setIsInitialLoad(true);
          }}
        >
          <Text
            style={
              styles.retryButtonText
            }
          >
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}
    >
      <Header
        onStreakPress={
          handleStreakPress
        }
      />

      <ScrollView
        contentContainerStyle={
          styles.scrollContainer
        }
        showsVerticalScrollIndicator={
          false
        }
        refreshControl={
          <RefreshControl
            refreshing={
              refreshing
            }
            onRefresh={
              onRefresh
            }
            tintColor={
              theme.primary
            }
            colors={[
              theme.primary,
            ]}
          />
        }
      >
        {chapters.length ===
        0 ? (
          <View
            style={styles.center}
          >
            <Ionicons
              name="book-outline"
              size={50}
              color={
                theme.icon ||
                "#8e8e93"
              }
            />

            <Text
              style={[
                styles.noDataText,
                {
                  color:
                    theme.text,
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
                    theme.secondaryText ||
                    "#8e8e93",
                },
              ]}
            >
              Try selecting a
              different language
              or level
            </Text>
          </View>
        ) : (
          chapters.map(
            (
              chapter,
              chapterIndex
            ) => {
              const chapterProgress =
                (
                  chapter.lessons ||
                  []
                ).reduce(
                  (
                    total,
                    lesson
                  ) =>
                    total +
                    (
                      progress[
                        lesson.id
                      ] || 0
                    ),
                  0
                );

              const totalLessons =
                (
                  chapter.lessons ||
                  []
                ).length;

              const avgProgress =
                totalLessons > 0
                  ? Math.round(
                      (
                        chapterProgress /
                        (
                          totalLessons *
                          MAX_STARS
                        )
                      ) *
                        100
                    )
                  : 0;

              const allLessonsCompleted =
                totalLessons > 0 &&
                (
                  chapter.lessons ||
                  []
                ).every(
                  (lesson) =>
                    Number(
                      progress[
                        lesson.id
                      ] || 0
                    ) >= MAX_STARS
                );

              return (
                <View
                  key={
                    chapter.id
                  }
                  style={
                    styles.chapterContainer
                  }
                >
                  <View
                    style={
                      styles.chapterHeader
                    }
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
                              theme.secondaryText ||
                              "#8e8e93",
                          },
                        ]}
                      >
                        CHAPTER{" "}
                        {chapterIndex +
                          1}
                      </Text>

                      <View
                        style={
                          styles.chapterHeaderRight
                        }
                      >
                        {chapter.totalXp >
                          0 && (
                          <View
                            style={[
                              styles.chapterXPContainer,
                              {
                                backgroundColor:
                                  `${
                                    theme.warning ||
                                    "#FFD700"
                                  }20`,
                              },
                            ]}
                          >
                            <Ionicons
                              name="flash"
                              size={16}
                              color={
                                theme.warning ||
                                "#FFD700"
                              }
                            />

                            <Text
                              style={[
                                styles.chapterXPText,
                                {
                                  color:
                                    theme.warning ||
                                    "#D6A900",
                                },
                              ]}
                            >
                              +
                              {
                                chapter.totalXp
                              }{" "}
                              XP
                            </Text>
                          </View>
                        )}

                        <View
                          style={[
                            styles.chapterProgressBadge,
                            {
                              backgroundColor:
                                `${theme.primary}20`,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.chapterProgressText,
                              {
                                color:
                                  theme.primary,
                              },
                            ]}
                          >
                            {
                              avgProgress
                            }
                            %
                          </Text>
                        </View>
                      </View>
                    </View>

                    <Text
                      style={[
                        styles.chapterTitleText,
                        {
                          color:
                            theme.text,
                        },
                      ]}
                    >
                      {
                        chapter.title
                      }
                    </Text>

                    {chapter.description && (
                      <Text
                        style={[
                          styles.chapterDescription,
                          {
                            color:
                              theme.secondaryText ||
                              "#8e8e93",
                          },
                        ]}
                      >
                        {
                          chapter.description
                        }
                      </Text>
                    )}
                  </View>

                  <View
                    style={
                      styles.lessonsWrapper
                    }
                  >
                    {(
                      chapter.lessons ||
                      []
                    ).map(
                      (
                        lesson,
                        lessonIndex
                      ) => {
                        const unlocked =
                          isLessonUnlocked(
                            chapterIndex,
                            lessonIndex
                          );

                        return (
                          <LessonNode
                            key={
                              lesson.id
                            }
                            lesson={
                              lesson
                            }
                            index={
                              lessonIndex
                            }
                            theme={
                              theme
                            }
                            onPress={
                              handleLessonPress
                            }
                            completionCount={
                              progress[
                                lesson.id
                              ] || 0
                            }
                            isLocked={
                              !unlocked
                            }
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
                              ? theme.primary
                              : theme.border,
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

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
    },

    center: {
      flex: 1,
      justifyContent:
        "center",
      alignItems: "center",
      padding: 20,
    },

    scrollContainer: {
      paddingVertical: 24,
      paddingHorizontal: 20,
      paddingBottom: 40,
    },

    chapterContainer: {
      marginBottom: 32,
    },

    chapterHeader: {
      marginBottom: 20,
    },

    chapterHeaderRow: {
      flexDirection: "row",
      justifyContent:
        "space-between",
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
      textTransform:
        "uppercase",
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
      marginTop: 4,
    },

    chapterDescription: {
      fontSize: 14,
      marginTop: 4,
    },

    lessonsWrapper: {
      gap: 20,
    },

    lessonNodeContainer: {
      minHeight: 80,
      justifyContent:
        "center",
      width: "100%",
    },

    lessonBubble: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 14,
      borderWidth: 2,
      width: "88%",
      gap: 12,
    },

    lessonIconContainer: {
      width: 42,
      height: 42,
      borderRadius: 12,
      alignItems: "center",
      justifyContent:
        "center",
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
    },

    reviewButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent:
        "center",
      gap: 8,
      marginTop: 16,
      alignSelf: "center",
      paddingVertical: 12,
      paddingHorizontal: 24,
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

