import AsyncStorage from "@react-native-async-storage/async-storage";

const MAX_STARS = 3;
const LESSON_COMPLETION_STARS = 2;

const DEFAULT_LANGUAGE = "as-tw";
const DEFAULT_LEVEL = "beginner";

const LOCAL_PROGRESS_KEY = "@speaknative_gh_lesson_progress";

const normalizeLanguage = (language = DEFAULT_LANGUAGE) =>
  String(language || DEFAULT_LANGUAGE)
    .trim()
    .toLowerCase();

const normalizeLevel = (level = DEFAULT_LEVEL) =>
  String(level || DEFAULT_LEVEL)
    .trim()
    .toLowerCase();

const normalizeLessonId = (lessonId) =>
  String(lessonId ?? "").trim();

const normalizeScope = (
  language = DEFAULT_LANGUAGE,
  level = DEFAULT_LEVEL
) =>
  `${normalizeLanguage(language)}_${normalizeLevel(level)}`;

const getLessonProgressKey = (
  lessonId,
  language = DEFAULT_LANGUAGE,
  level = DEFAULT_LEVEL
) =>
  `${normalizeScope(language, level)}_${normalizeLessonId(
    lessonId
  )}`;

const getChapterRewardKey = (
  chapterId,
  language = DEFAULT_LANGUAGE,
  level = DEFAULT_LEVEL
) =>
  `__chapter__${normalizeScope(
    language,
    level
  )}_${String(chapterId ?? "").trim()}`;

const normalizeStars = (stars) => {
  const numericStars = Number(stars);

  if (!Number.isFinite(numericStars)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(MAX_STARS, numericStars)
  );
};

const normalizeProgressMap = (value) => {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    return {};
  }

  return value;
};

const normalizeProgressEntry = (entry) => {
  if (
    !entry ||
    typeof entry !== "object" ||
    Array.isArray(entry)
  ) {
    return {
      stars: 0,
      vocabulary_completed: false,
      quiz_completed: false,
      review_completed: false,
      chapter_xp_reward_received: false,
    };
  }

  const quizCompleted =
    Boolean(entry.quiz_completed);

  return {
    ...entry,

    stars: quizCompleted
      ? MAX_STARS
      : normalizeStars(entry.stars),

    vocabulary_completed: Boolean(
      entry.vocabulary_completed
    ),

    quiz_completed: quizCompleted,

    review_completed: Boolean(
      entry.review_completed
    ),

    chapter_xp_reward_received: Boolean(
      entry.chapter_xp_reward_received
    ),
  };
};

/**
 * --------------------------------------------------------------------------
 * LOCAL STORAGE HELPERS
 * --------------------------------------------------------------------------
 */

const readLocalProgressMap = async () => {
  try {
    const value = await AsyncStorage.getItem(
      LOCAL_PROGRESS_KEY
    );

    if (!value) {
      return {};
    }

    return normalizeProgressMap(
      JSON.parse(value)
    );
  } catch {
    return {};
  }
};

const writeLocalProgressMap = async (
  progressMap
) => {
  try {
    await AsyncStorage.setItem(
      LOCAL_PROGRESS_KEY,
      JSON.stringify(
        normalizeProgressMap(progressMap)
      )
    );

    return true;
  } catch {
    return false;
  }
};

/**
 * --------------------------------------------------------------------------
 * REMOTE STORAGE HELPERS
 *
 * Lesson progress is stored in:
 *
 * profiles.lesson_progress
 *
 * There is NO separate lesson_progress table.
 * --------------------------------------------------------------------------
 */

const readRemoteProgressMap = async (
  supabase,
  userId
) => {
  if (!supabase || !userId) {
    return {};
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("lesson_progress")
    .eq("clerk_id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return normalizeProgressMap(
    data?.lesson_progress
  );
};

const writeRemoteProgressMap = async (
  supabase,
  userId,
  progressMap
) => {
  if (!supabase || !userId) {
    return false;
  }

  const normalizedMap =
    normalizeProgressMap(progressMap);

  const { data, error } = await supabase
    .from("profiles")
    .update({
      lesson_progress: normalizedMap,
    })
    .eq("clerk_id", userId)
    .select("lesson_progress")
    .maybeSingle();

  if (error) {
    throw error;
  }

  return Boolean(data);
};

/**
 * --------------------------------------------------------------------------
 * GET PROGRESS MAP
 *
 * Authenticated users:
 *   Remote profiles.lesson_progress is authoritative.
 *
 * Unauthenticated / no Supabase:
 *   AsyncStorage is used.
 *
 * If the remote request succeeds with an empty object, we DO NOT fall back
 * to old local data. This prevents stale device progress from overriding
 * the user's actual cloud progress.
 * --------------------------------------------------------------------------
 */

const getProgressMap = async (
  supabase = null,
  userId = null
) => {
  if (supabase && userId) {
    try {
      const remoteMap =
        await readRemoteProgressMap(
          supabase,
          userId
        );

      return remoteMap;
    } catch {
      // Only use local storage if the remote request failed.
      return readLocalProgressMap();
    }
  }

  return readLocalProgressMap();
};

/**
 * --------------------------------------------------------------------------
 * UPDATE PROGRESS MAP
 * --------------------------------------------------------------------------
 */

const updateProgressMap = async (
  supabase,
  userId,
  updater
) => {
  if (supabase && userId) {
    try {
      const currentMap =
        await readRemoteProgressMap(
          supabase,
          userId
        );

      const updatedMap =
        normalizeProgressMap(
          await updater({
            ...currentMap,
          })
        );

      await writeRemoteProgressMap(
        supabase,
        userId,
        updatedMap
      );

      // Keep local storage as a mirror/fallback.
      await writeLocalProgressMap(
        updatedMap
      );

      return {
        map: updatedMap,
        remote: true,
      };
    } catch {
      // Remote failed. Fall back to local.
      const currentMap =
        await readLocalProgressMap();

      const updatedMap =
        normalizeProgressMap(
          await updater({
            ...currentMap,
          })
        );

      await writeLocalProgressMap(
        updatedMap
      );

      return {
        map: updatedMap,
        remote: false,
      };
    }
  }

  const currentMap =
    await readLocalProgressMap();

  const updatedMap =
    normalizeProgressMap(
      await updater({
        ...currentMap,
      })
    );

  await writeLocalProgressMap(
    updatedMap
  );

  return {
    map: updatedMap,
    remote: false,
  };
};

/**
 * --------------------------------------------------------------------------
 * GET ONE REMOTE LESSON ENTRY
 * --------------------------------------------------------------------------
 */

const getRemoteLessonEntry = async (
  lessonId,
  language,
  level,
  supabase,
  userId
) => {
  if (!supabase || !userId || !lessonId) {
    return null;
  }

  const progressMap =
    await readRemoteProgressMap(
      supabase,
      userId
    );

  const key = getLessonProgressKey(
    lessonId,
    language,
    level
  );

  const entry = progressMap[key];

  if (!entry) {
    return null;
  }

  return normalizeProgressEntry(entry);
};

/**
 * --------------------------------------------------------------------------
 * UPDATE ONE LESSON ENTRY
 *
 * Existing fields are always preserved.
 * --------------------------------------------------------------------------
 */

const updateRemoteLessonEntry = async (
  lessonId,
  updates,
  language,
  level,
  supabase,
  userId
) => {
  if (!supabase || !userId || !lessonId) {
    return null;
  }

  const result =
    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => {
        const key =
          getLessonProgressKey(
            lessonId,
            language,
            level
          );

        const existingEntry =
          normalizeProgressEntry(
            progressMap[key]
          );

        const updatedEntry =
          normalizeProgressEntry({
            ...existingEntry,
            ...updates,
          });

        return {
          ...progressMap,
          [key]: updatedEntry,
        };
      }
    );

  const key = getLessonProgressKey(
    lessonId,
    language,
    level
  );

  return normalizeProgressEntry(
    result.map[key]
  );
};

/**
 * --------------------------------------------------------------------------
 * GET ALL LESSON STAR PROGRESS
 *
 * Returns:
 *
 * {
 *   "1-1": 2,
 *   "1-2": 3
 * }
 * --------------------------------------------------------------------------
 */

export const getAllProgress = async (
  language = DEFAULT_LANGUAGE,
  level = DEFAULT_LEVEL,
  supabase = null,
  userId = null
) => {
  const progressMap =
    await getProgressMap(
      supabase,
      userId
    );

  const scopePrefix = `${normalizeScope(
    language,
    level
  )}_`;

  const result = {};

  Object.entries(
    progressMap || {}
  ).forEach(([key, entry]) => {
    if (
      !key.startsWith(scopePrefix) ||
      key.startsWith("__chapter__")
    ) {
      return;
    }

    const lessonId =
      key.slice(scopePrefix.length);

    if (!lessonId) {
      return;
    }

    const normalizedEntry =
      normalizeProgressEntry(entry);

    result[lessonId] =
      normalizedEntry.stars;
  });

  return result;
};

/**
 * --------------------------------------------------------------------------
 * GET ONE LESSON'S STAR PROGRESS
 * --------------------------------------------------------------------------
 */

export const getLessonProgress = async (
  lessonId,
  language = DEFAULT_LANGUAGE,
  level = DEFAULT_LEVEL,
  supabase = null,
  userId = null
) => {
  const normalizedLessonId =
    normalizeLessonId(lessonId);

  if (!normalizedLessonId) {
    return 0;
  }

  const progressMap =
    await getProgressMap(
      supabase,
      userId
    );

  const key =
    getLessonProgressKey(
      normalizedLessonId,
      language,
      level
    );

  const entry =
    normalizeProgressEntry(
      progressMap[key]
    );

  if (entry.quiz_completed) {
    return MAX_STARS;
  }

  return normalizeStars(
    entry.stars
  );
};

/**
 * --------------------------------------------------------------------------
 * SET LESSON STAR PROGRESS
 *
 * This only changes stars.
 *
 * It does NOT automatically mark quiz_completed.
 *
 * This is important because 3 stars should only be awarded by
 * markQuizComplete().
 * --------------------------------------------------------------------------
 */

export const setLessonProgress = async (
  lessonId,
  stars,
  language = DEFAULT_LANGUAGE,
  level = DEFAULT_LEVEL,
  supabase = null,
  userId = null
) => {
  const normalizedLessonId =
    normalizeLessonId(lessonId);

  if (!normalizedLessonId) {
    return 0;
  }

  const normalizedStars =
    normalizeStars(stars);

  const result =
    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => {
        const key =
          getLessonProgressKey(
            normalizedLessonId,
            language,
            level
          );

        const existingEntry =
          normalizeProgressEntry(
            progressMap[key]
          );

        const updatedStars =
          existingEntry.quiz_completed
            ? MAX_STARS
            : normalizedStars;

        return {
          ...progressMap,
          [key]: {
            ...existingEntry,
            stars: updatedStars,
          },
        };
      }
    );

  const key =
    getLessonProgressKey(
      normalizedLessonId,
      language,
      level
    );

  return normalizeProgressEntry(
    result.map[key]
  ).stars;
};

/**
 * --------------------------------------------------------------------------
 * UPDATE LESSON PROGRESS
 *
 * Supports:
 *
 * updateLessonProgress(
 *   lessonId,
 *   updates,
 *   language,
 *   level,
 *   supabase,
 *   userId
 * )
 * --------------------------------------------------------------------------
 */

export const updateLessonProgress = async (
  lessonId,
  updates = {},
  language = DEFAULT_LANGUAGE,
  level = DEFAULT_LEVEL,
  supabase = null,
  userId = null
) => {
  const normalizedLessonId =
    normalizeLessonId(lessonId);

  if (!normalizedLessonId) {
    return null;
  }

  const safeUpdates = {
    ...updates,
  };

  if (
    Object.prototype.hasOwnProperty.call(
      safeUpdates,
      "stars"
    )
  ) {
    safeUpdates.stars =
      normalizeStars(
        safeUpdates.stars
      );
  }

  if (
    Object.prototype.hasOwnProperty.call(
      safeUpdates,
      "quiz_completed"
    ) &&
    safeUpdates.quiz_completed === true
  ) {
    safeUpdates.stars =
      MAX_STARS;
  }

  const result =
    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => {
        const key =
          getLessonProgressKey(
            normalizedLessonId,
            language,
            level
          );

        const existingEntry =
          normalizeProgressEntry(
            progressMap[key]
          );

        const updatedEntry =
          normalizeProgressEntry({
            ...existingEntry,
            ...safeUpdates,
          });

        return {
          ...progressMap,
          [key]: updatedEntry,
        };
      }
    );

  const key =
    getLessonProgressKey(
      normalizedLessonId,
      language,
      level
    );

  return normalizeProgressEntry(
    result.map[key]
  );
};

/**
 * --------------------------------------------------------------------------
 * COMPLETE LESSON
 *
 * Lesson completion gives 2 stars.
 *
 * It NEVER gives 3 stars unless the quiz was already completed.
 * --------------------------------------------------------------------------
 */

export const incrementLessonCompletion =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return 0;
    }

    const result =
      await updateProgressMap(
        supabase,
        userId,
        (progressMap) => {
          const key =
            getLessonProgressKey(
              normalizedLessonId,
              language,
              level
            );

          const existingEntry =
            normalizeProgressEntry(
              progressMap[key]
            );

          const nextStars =
            existingEntry.quiz_completed
              ? MAX_STARS
              : Math.max(
                  existingEntry.stars,
                  LESSON_COMPLETION_STARS
                );

          return {
            ...progressMap,
            [key]: {
              ...existingEntry,
              stars: nextStars,
            },
          };
        }
      );

    const key =
      getLessonProgressKey(
        normalizedLessonId,
        language,
        level
      );

    return normalizeProgressEntry(
      result.map[key]
    ).stars;
  };

/**
 * --------------------------------------------------------------------------
 * VOCABULARY PROGRESS
 * --------------------------------------------------------------------------
 */

export const getAllVocabularyProgress =
  async (
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const progressMap =
      await getProgressMap(
        supabase,
        userId
      );

    const scopePrefix = `${normalizeScope(
      language,
      level
    )}_`;

    const result = {};

    Object.entries(
      progressMap || {}
    ).forEach(([key, entry]) => {
      if (
        !key.startsWith(scopePrefix) ||
        key.startsWith("__chapter__")
      ) {
        return;
      }

      const lessonId =
        key.slice(scopePrefix.length);

      if (!lessonId) {
        return;
      }

      const normalizedEntry =
        normalizeProgressEntry(entry);

      result[lessonId] =
        normalizedEntry.vocabulary_completed
          ? 1
          : 0;
    });

    return result;
  };

export const getVocabularyProgress =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return 0;
    }

    const progressMap =
      await getProgressMap(
        supabase,
        userId
      );

    const key =
      getLessonProgressKey(
        normalizedLessonId,
        language,
        level
      );

    const entry =
      normalizeProgressEntry(
        progressMap[key]
      );

    return entry.vocabulary_completed
      ? 1
      : 0;
  };

/**
 * --------------------------------------------------------------------------
 * MARK VOCABULARY COMPLETE
 *
 * Vocabulary completion gives at least 2 stars.
 * It does NOT give 3 stars unless quiz_completed is already true.
 * --------------------------------------------------------------------------
 */

export const markVocabularyComplete =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return false;
    }

    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => {
        const key =
          getLessonProgressKey(
            normalizedLessonId,
            language,
            level
          );

        const existingEntry =
          normalizeProgressEntry(
            progressMap[key]
          );

        const nextStars =
          existingEntry.quiz_completed
            ? MAX_STARS
            : Math.max(
                existingEntry.stars,
                LESSON_COMPLETION_STARS
              );

        return {
          ...progressMap,
          [key]: {
            ...existingEntry,
            vocabulary_completed: true,
            stars: nextStars,
          },
        };
      }
    );

    return true;
  };

/**
 * --------------------------------------------------------------------------
 * QUIZ COMPLETION
 * --------------------------------------------------------------------------
 */

export const getQuizCompletion =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return false;
    }

    const progressMap =
      await getProgressMap(
        supabase,
        userId
      );

    const key =
      getLessonProgressKey(
        normalizedLessonId,
        language,
        level
      );

    const entry =
      normalizeProgressEntry(
        progressMap[key]
      );

    return Boolean(
      entry.quiz_completed
    );
  };

/**
 * --------------------------------------------------------------------------
 * MARK QUIZ COMPLETE
 *
 * Quiz completion is the ONLY normal action that awards the third star.
 * --------------------------------------------------------------------------
 */

export const markQuizComplete =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return false;
    }

    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => {
        const key =
          getLessonProgressKey(
            normalizedLessonId,
            language,
            level
          );

        const existingEntry =
          normalizeProgressEntry(
            progressMap[key]
          );

        return {
          ...progressMap,
          [key]: {
            ...existingEntry,
            stars: MAX_STARS,
            quiz_completed: true,
          },
        };
      }
    );

    return true;
  };

export const resetQuizCompletion =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return false;
    }

    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => {
        const key =
          getLessonProgressKey(
            normalizedLessonId,
            language,
            level
          );

        const existingEntry =
          normalizeProgressEntry(
            progressMap[key]
          );

        return {
          ...progressMap,
          [key]: {
            ...existingEntry,
            quiz_completed: false,

            // If quiz is reset, remove the third star.
            // Lesson completion can still retain 2 stars.
            stars:
              existingEntry.vocabulary_completed
                ? Math.min(
                    existingEntry.stars,
                    LESSON_COMPLETION_STARS
                  )
                : 0,
          },
        };
      }
    );

    return true;
  };

/**
 * --------------------------------------------------------------------------
 * REVIEW COMPLETION
 * --------------------------------------------------------------------------
 */

export const getReviewCompletion =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return false;
    }

    const progressMap =
      await getProgressMap(
        supabase,
        userId
      );

    const key =
      getLessonProgressKey(
        normalizedLessonId,
        language,
        level
      );

    const entry =
      normalizeProgressEntry(
        progressMap[key]
      );

    return Boolean(
      entry.review_completed
    );
  };

export const markReviewComplete =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return false;
    }

    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => {
        const key =
          getLessonProgressKey(
            normalizedLessonId,
            language,
            level
          );

        const existingEntry =
          normalizeProgressEntry(
            progressMap[key]
          );

        return {
          ...progressMap,
          [key]: {
            ...existingEntry,
            review_completed: true,
          },
        };
      }
    );

    return true;
  };

export const resetReviewCompletion =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return false;
    }

    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => {
        const key =
          getLessonProgressKey(
            normalizedLessonId,
            language,
            level
          );

        const existingEntry =
          normalizeProgressEntry(
            progressMap[key]
          );

        return {
          ...progressMap,
          [key]: {
            ...existingEntry,
            review_completed: false,
          },
        };
      }
    );

    return true;
  };

/**
 * --------------------------------------------------------------------------
 * LESSON PROGRESS SUMMARY
 * --------------------------------------------------------------------------
 */

export const getLessonProgressSummary =
  async (
    lessonId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const normalizedLessonId =
      normalizeLessonId(lessonId);

    if (!normalizedLessonId) {
      return {
        stars: 0,
        vocabularyCompleted: false,
        quizCompleted: false,
        reviewCompleted: false,
        chapterXpRewardReceived: false,
      };
    }

    const progressMap =
      await getProgressMap(
        supabase,
        userId
      );

    const key =
      getLessonProgressKey(
        normalizedLessonId,
        language,
        level
      );

    const entry =
      normalizeProgressEntry(
        progressMap[key]
      );

    return {
      stars: entry.stars,

      vocabularyCompleted:
        Boolean(
          entry.vocabulary_completed
        ),

      quizCompleted:
        Boolean(
          entry.quiz_completed
        ),

      reviewCompleted:
        Boolean(
          entry.review_completed
        ),

      chapterXpRewardReceived:
        Boolean(
          entry.chapter_xp_reward_received
        ),
    };
  };

/**
 * --------------------------------------------------------------------------
 * CHAPTER COMPLETION
 *
 * A chapter is complete ONLY when every lesson quiz is complete.
 *
 * 2 stars = lesson completed, quiz incomplete
 * 3 stars = quiz completed
 *
 * Therefore stars alone are NOT used to determine chapter completion.
 * --------------------------------------------------------------------------
 */

export const areAllChapterLessonsComplete =
  async (
    chapter,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const lessons = Array.isArray(
      chapter?.lessons
    )
      ? chapter.lessons
      : Array.isArray(
          chapter?.sections
        )
      ? chapter.sections
      : [];

    if (lessons.length === 0) {
      return false;
    }

    const summaries =
      await Promise.all(
        lessons.map((lesson) =>
          getLessonProgressSummary(
            lesson?.id,
            language,
            level,
            supabase,
            userId
          )
        )
      );

    return summaries.every(
      (summary) =>
        summary.quizCompleted === true
    );
  };

/**
 * --------------------------------------------------------------------------
 * CHAPTER XP REWARD
 * --------------------------------------------------------------------------
 */

export const hasReceivedChapterXPReward =
  async (
    chapterId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    if (!chapterId) {
      return false;
    }

    const progressMap =
      await getProgressMap(
        supabase,
        userId
      );

    const key =
      getChapterRewardKey(
        chapterId,
        language,
        level
      );

    return Boolean(
      progressMap?.[key]
        ?.chapter_xp_reward_received
    );
  };

export const markChapterXPRewardReceived =
  async (
    chapterId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    if (!chapterId) {
      return false;
    }

    const key =
      getChapterRewardKey(
        chapterId,
        language,
        level
      );

    await updateProgressMap(
      supabase,
      userId,
      (progressMap) => ({
        ...progressMap,

        [key]: {
          ...(progressMap[key] || {}),
          chapter_xp_reward_received:
            true,
        },
      })
    );

    return true;
  };

/**
 * --------------------------------------------------------------------------
 * STREAK
 * --------------------------------------------------------------------------
 */

export const getStreak = async (
  supabase = null,
  userId = null
) => {
  if (!supabase || !userId) {
    return {
      streak: 0,
      last_activity_date: null,
    };
  }

  const { data, error } =
    await supabase
      .from("profiles")
      .select(
        "streak, last_activity_date"
      )
      .eq("clerk_id", userId)
      .maybeSingle();

  if (error) {
    throw error;
  }

  return {
    streak:
      Number(data?.streak) || 0,

    last_activity_date:
      data?.last_activity_date ||
      null,
  };
};

/**
 * --------------------------------------------------------------------------
 * DAILY ACTIVITY
 * --------------------------------------------------------------------------
 */

export const recordDailyActivity =
  async (
    supabase = null,
    userId = null
  ) => {
    if (!supabase || !userId) {
      return {
        streak: 0,
        last_activity_date: null,
      };
    }

    const { data, error } =
      await supabase
        .from("profiles")
        .select(
          "streak, last_activity_date"
        )
        .eq("clerk_id", userId)
        .maybeSingle();

    if (error) {
      throw error;
    }

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    const currentStreak =
      Number(data?.streak) || 0;

    const lastActivity =
      data?.last_activity_date ||
      null;

    if (lastActivity === today) {
      return {
        streak: currentStreak,
        last_activity_date: today,
      };
    }

    let newStreak = 1;

    if (lastActivity) {
      const lastDate =
        new Date(
          `${lastActivity}T00:00:00`
        );

      const todayDate =
        new Date(
          `${today}T00:00:00`
        );

      const difference =
        Math.round(
          (
            todayDate.getTime() -
            lastDate.getTime()
          ) /
            (1000 *
              60 *
              60 *
              24)
        );

      if (difference === 1) {
        newStreak =
          currentStreak + 1;
      }
    }

    const {
      error: updateError,
    } = await supabase
      .from("profiles")
      .update({
        streak: newStreak,
        last_activity_date: today,
      })
      .eq("clerk_id", userId);

    if (updateError) {
      throw updateError;
    }

    return {
      streak: newStreak,
      last_activity_date: today,
    };
  };

/**
 * --------------------------------------------------------------------------
 * COMPLETE LESSON ACTIVITY
 *
 * Extra arguments are accepted through JavaScript's normal argument
 * handling, so existing callers can continue passing lessonId/language/level.
 * --------------------------------------------------------------------------
 */

export const completeLessonActivity =
  async (
    supabase = null,
    userId = null
  ) => {
    return recordDailyActivity(
      supabase,
      userId
    );
  };

/**
 * --------------------------------------------------------------------------
 * XP
 * --------------------------------------------------------------------------
 */

export const getXP = async (
  supabase = null,
  userId = null
) => {
  if (!supabase || !userId) {
    return 0;
  }

  const { data, error } =
    await supabase
      .from("profiles")
      .select("total_xp")
      .eq("clerk_id", userId)
      .maybeSingle();

  if (error) {
    throw error;
  }

  return (
    Number(data?.total_xp) || 0
  );
};

export const setXP = async (
  xp,
  supabase = null,
  userId = null
) => {
  if (!supabase || !userId) {
    return 0;
  }

  const normalizedXP = Math.max(
    0,
    Number(xp) || 0
  );

  const { error } =
    await supabase
      .from("profiles")
      .update({
        total_xp: normalizedXP,
      })
      .eq("clerk_id", userId);

  if (error) {
    throw error;
  }

  return normalizedXP;
};

export const addXP = async (
  amount,
  supabase = null,
  userId = null
) => {
  if (!supabase || !userId) {
    return 0;
  }

  const currentXP =
    await getXP(
      supabase,
      userId
    );

  const amountToAdd =
    Number(amount) || 0;

  const newXP = Math.max(
    0,
    currentXP + amountToAdd
  );

  return setXP(
    newXP,
    supabase,
    userId
  );
};

/**
 * --------------------------------------------------------------------------
 * CHECK AND AWARD CHAPTER XP
 *
 * Correct signature:
 *
 * checkAndAwardChapterXP(
 *   chapter,
 *   supabase,
 *   userId,
 *   language,
 *   level
 * )
 * --------------------------------------------------------------------------
 */

export const checkAndAwardChapterXP =
  async (
    chapter,
    supabase,
    userId,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL
  ) => {
    if (
      !chapter ||
      !supabase ||
      !userId
    ) {
      return {
        completed: false,
        xpAwarded: false,
        xp: 0,
      };
    }

    const lessons = Array.isArray(
      chapter.lessons
    )
      ? chapter.lessons
      : Array.isArray(
          chapter.sections
        )
      ? chapter.sections
      : [];

    if (lessons.length === 0) {
      return {
        completed: false,
        xpAwarded: false,
        xp: 0,
      };
    }

    const allCompleted =
      await areAllChapterLessonsComplete(
        chapter,
        language,
        level,
        supabase,
        userId
      );

    if (!allCompleted) {
      return {
        completed: false,
        xpAwarded: false,
        xp: 0,
      };
    }

    const chapterId =
      chapter.id;

    const chapterXP = Math.max(
      0,
      Number(
        chapter.totalXp
      ) || 0
    );

    const alreadyAwarded =
      await hasReceivedChapterXPReward(
        chapterId,
        language,
        level,
        supabase,
        userId
      );

    if (alreadyAwarded) {
      return {
        completed: true,
        xpAwarded: false,
        xp: chapterXP,
      };
    }

    if (chapterXP > 0) {
      await addXP(
        chapterXP,
        supabase,
        userId
      );
    }

    await markChapterXPRewardReceived(
      chapterId,
      language,
      level,
      supabase,
      userId
    );

    return {
      completed: true,
      xpAwarded: true,
      xp: chapterXP,
    };
  };

/**
 * --------------------------------------------------------------------------
 * CHAPTER PROGRESS SUMMARY
 * --------------------------------------------------------------------------
 */

export const getChapterProgressSummary =
  async (
    chapter,
    language = DEFAULT_LANGUAGE,
    level = DEFAULT_LEVEL,
    supabase = null,
    userId = null
  ) => {
    const lessons = Array.isArray(
      chapter?.lessons
    )
      ? chapter.lessons
      : Array.isArray(
          chapter?.sections
        )
      ? chapter.sections
      : [];

    if (lessons.length === 0) {
      return {
        totalLessons: 0,
        completedLessons: 0,
        totalStars: 0,
        maxStars: 0,
        percentage: 0,
        allCompleted: false,
      };
    }

    const summaries =
      await Promise.all(
        lessons.map((lesson) =>
          getLessonProgressSummary(
            lesson?.id,
            language,
            level,
            supabase,
            userId
          )
        )
      );

    const totalStars =
      summaries.reduce(
        (total, summary) =>
          total +
          normalizeStars(
            summary.stars
          ),
        0
      );

    const completedLessons =
      summaries.filter(
        (summary) =>
          summary.quizCompleted === true
      ).length;

    const maxStars =
      lessons.length *
      MAX_STARS;

    const percentage =
      maxStars > 0
        ? Math.round(
            (totalStars /
              maxStars) *
              100
          )
        : 0;

    return {
      totalLessons:
        lessons.length,

      completedLessons,

      totalStars,

      maxStars,

      percentage,

      allCompleted:
        completedLessons ===
        lessons.length,
    };
  };