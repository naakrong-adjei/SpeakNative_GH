import AsyncStorage from "@react-native-async-storage/async-storage";

const PROGRESS_STORAGE_KEY = "lesson_progress";
const VOCAB_PROGRESS_STORAGE_KEY = "lesson_vocabulary_progress";
const QUIZ_COMPLETION_PREFIX = "quiz_completed_";
const REVIEW_COMPLETION_PREFIX = "review_completed_";
const CHAPTER_XP_REWARD_PREFIX = "chapter_xp_reward_";

const MAX_LESSON_PROGRESS = 3;

const createProgressScope = (language, level) => {
  const safeLanguage = String(language || "as-tw")
    .trim()
    .toLowerCase();

  const safeLevel = String(level || "beginner")
    .trim()
    .toLowerCase();

  return `${safeLanguage}_${safeLevel}`;
};

const getScopedLessonId = (
  lessonId,
  language,
  level
) => {
  if (!lessonId) {
    return null;
  }

  return `${createProgressScope(
    language,
    level
  )}_${lessonId}`;
};

const getQuizStorageKey = (
  lessonId,
  language,
  level
) => {
  const scopedLessonId = getScopedLessonId(
    lessonId,
    language,
    level
  );

  if (!scopedLessonId) {
    return null;
  }

  return `${QUIZ_COMPLETION_PREFIX}${scopedLessonId}`;
};

const getReviewStorageKey = (
  lessonId,
  language,
  level
) => {
  const scopedLessonId = getScopedLessonId(
    lessonId,
    language,
    level
  );

  if (!scopedLessonId) {
    return null;
  }

  return `${REVIEW_COMPLETION_PREFIX}${scopedLessonId}`;
};

const getChapterXPRewardKey = (
  chapterId,
  language,
  level
) => {
  if (!chapterId) {
    return null;
  }

  return `${CHAPTER_XP_REWARD_PREFIX}${createProgressScope(
    language,
    level
  )}_${chapterId}`;
};

const normalizeStars = (value) => {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(MAX_LESSON_PROGRESS, number)
  );
};

export const getAllProgress = async (
  language = "as-tw",
  level = "beginner"
) => {
  try {
    const stored = await AsyncStorage.getItem(
      PROGRESS_STORAGE_KEY
    );

    if (!stored) {
      return {};
    }

    const parsed = JSON.parse(stored);

    if (
      !parsed ||
      typeof parsed !== "object"
    ) {
      return {};
    }

    const scope = createProgressScope(
      language,
      level
    );

    const scopedProgress = {};

    Object.entries(parsed).forEach(
      ([key, value]) => {
        if (
          key.startsWith(`${scope}_`)
        ) {
          const lessonId = key.slice(
            scope.length + 1
          );

          scopedProgress[lessonId] =
            normalizeStars(value);
        }
      }
    );

    return scopedProgress;
  } catch {
    return {};
  }
};

export const getLessonProgress = async (
  lessonId,
  language = "as-tw",
  level = "beginner"
) => {
  if (!lessonId) {
    return 0;
  }

  try {
    const stored = await AsyncStorage.getItem(
      PROGRESS_STORAGE_KEY
    );

    if (!stored) {
      return 0;
    }

    const parsed = JSON.parse(stored);

    if (
      !parsed ||
      typeof parsed !== "object"
    ) {
      return 0;
    }

    const scopedLessonId =
      getScopedLessonId(
        lessonId,
        language,
        level
      );

    return normalizeStars(
      parsed[scopedLessonId]
    );
  } catch {
    return 0;
  }
};

export const setLessonProgress = async (
  lessonId,
  stars,
  language = "as-tw",
  level = "beginner"
) => {
  if (!lessonId) {
    return 0;
  }

  try {
    const stored = await AsyncStorage.getItem(
      PROGRESS_STORAGE_KEY
    );

    let allProgress = {};

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        if (
          parsed &&
          typeof parsed === "object"
        ) {
          allProgress = parsed;
        }
      } catch {
        allProgress = {};
      }
    }

    const normalizedStars =
      normalizeStars(stars);

    const scopedLessonId =
      getScopedLessonId(
        lessonId,
        language,
        level
      );

    allProgress[scopedLessonId] =
      normalizedStars;

    await AsyncStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify(allProgress)
    );

    return normalizedStars;
  } catch {
    return 0;
  }
};

export const updateLessonProgress = async (
  lessonId,
  increment = 1,
  language = "as-tw",
  level = "beginner"
) => {
  if (!lessonId) {
    return 0;
  }

  try {
    const current =
      await getLessonProgress(
        lessonId,
        language,
        level
      );

    const amount = Number(increment);

    if (!Number.isFinite(amount)) {
      return current;
    }

    return setLessonProgress(
      lessonId,
      current + amount,
      language,
      level
    );
  } catch {
    return 0;
  }
};

export const incrementLessonCompletion =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    return updateLessonProgress(
      lessonId,
      1,
      language,
      level
    );
  };

export const getAllVocabularyProgress =
  async (
    language = "as-tw",
    level = "beginner"
  ) => {
    try {
      const stored =
        await AsyncStorage.getItem(
          VOCAB_PROGRESS_STORAGE_KEY
        );

      if (!stored) {
        return {};
      }

      const parsed = JSON.parse(stored);

      if (
        !parsed ||
        typeof parsed !== "object"
      ) {
        return {};
      }

      const scope = createProgressScope(
        language,
        level
      );

      const scopedProgress = {};

      Object.entries(parsed).forEach(
        ([key, value]) => {
          if (
            key.startsWith(`${scope}_`)
          ) {
            const lessonId = key.slice(
              scope.length + 1
            );

            const numericValue =
              Number(value);

            scopedProgress[lessonId] =
              Number.isFinite(
                numericValue
              )
                ? numericValue
                : 0;
          }
        }
      );

      return scopedProgress;
    } catch {
      return {};
    }
  };

export const getVocabularyProgress =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    if (!lessonId) {
      return 0;
    }

    try {
      const stored =
        await AsyncStorage.getItem(
          VOCAB_PROGRESS_STORAGE_KEY
        );

      if (!stored) {
        return 0;
      }

      const parsed = JSON.parse(stored);

      if (
        !parsed ||
        typeof parsed !== "object"
      ) {
        return 0;
      }

      const scopedLessonId =
        getScopedLessonId(
          lessonId,
          language,
          level
        );

      const value =
        Number(
          parsed[scopedLessonId]
        );

      return Number.isFinite(value)
        ? value
        : 0;
    } catch {
      return 0;
    }
  };

export const getQuizCompletion =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    const storageKey =
      getQuizStorageKey(
        lessonId,
        language,
        level
      );

    if (!storageKey) {
      return false;
    }

    try {
      const storedValue =
        await AsyncStorage.getItem(
          storageKey
        );

      return storedValue === "true";
    } catch {
      return false;
    }
  };

export const markQuizComplete =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    const storageKey =
      getQuizStorageKey(
        lessonId,
        language,
        level
      );

    if (!storageKey) {
      return false;
    }

    try {
      await AsyncStorage.setItem(
        storageKey,
        "true"
      );

      await setLessonProgress(
        lessonId,
        MAX_LESSON_PROGRESS,
        language,
        level
      );

      return true;
    } catch {
      return false;
    }
  };

export const resetQuizCompletion =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    const storageKey =
      getQuizStorageKey(
        lessonId,
        language,
        level
      );

    if (!storageKey) {
      return false;
    }

    try {
      await AsyncStorage.removeItem(
        storageKey
      );

      return true;
    } catch {
      return false;
    }
  };

export const getReviewCompletion =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    const storageKey =
      getReviewStorageKey(
        lessonId,
        language,
        level
      );

    if (!storageKey) {
      return false;
    }

    try {
      const storedValue =
        await AsyncStorage.getItem(
          storageKey
        );

      return storedValue === "true";
    } catch {
      return false;
    }
  };

export const markReviewComplete =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    const storageKey =
      getReviewStorageKey(
        lessonId,
        language,
        level
      );

    if (!storageKey) {
      return false;
    }

    try {
      await AsyncStorage.setItem(
        storageKey,
        "true"
      );

      return true;
    } catch {
      return false;
    }
  };

export const resetReviewCompletion =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    const storageKey =
      getReviewStorageKey(
        lessonId,
        language,
        level
      );

    if (!storageKey) {
      return false;
    }

    try {
      await AsyncStorage.removeItem(
        storageKey
      );

      return true;
    } catch {
      return false;
    }
  };

export const markVocabularyComplete =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    if (!lessonId) {
      return false;
    }

    try {
      const alreadyCompleted =
        (await getVocabularyProgress(
          lessonId,
          language,
          level
        )) > 0;

      if (!alreadyCompleted) {
        const stored =
          await AsyncStorage.getItem(
            VOCAB_PROGRESS_STORAGE_KEY
          );

        let allProgress = {};

        if (stored) {
          try {
            const parsed =
              JSON.parse(stored);

            if (
              parsed &&
              typeof parsed === "object"
            ) {
              allProgress = parsed;
            }
          } catch {
            allProgress = {};
          }
        }

        const scopedLessonId =
          getScopedLessonId(
            lessonId,
            language,
            level
          );

        allProgress[scopedLessonId] = 1;

        await AsyncStorage.setItem(
          VOCAB_PROGRESS_STORAGE_KEY,
          JSON.stringify(allProgress)
        );

        const currentStars =
          await getLessonProgress(
            lessonId,
            language,
            level
          );

        if (currentStars < 1) {
          await setLessonProgress(
            lessonId,
            1,
            language,
            level
          );
        }
      }

      return true;
    } catch {
      return false;
    }
  };

export const getLessonProgressSummary =
  async (
    lessonId,
    language = "as-tw",
    level = "beginner"
  ) => {
    if (!lessonId) {
      return {
        stars: 0,
        vocabularyCompleted: false,
        quizCompleted: false,
        reviewCompleted: false,
      };
    }

    try {
      const [
        stars,
        vocabularyProgress,
        quizCompleted,
        reviewCompleted,
      ] = await Promise.all([
        getLessonProgress(
          lessonId,
          language,
          level
        ),
        getVocabularyProgress(
          lessonId,
          language,
          level
        ),
        getQuizCompletion(
          lessonId,
          language,
          level
        ),
        getReviewCompletion(
          lessonId,
          language,
          level
        ),
      ]);

      return {
        stars,
        vocabularyCompleted:
          vocabularyProgress > 0,
        quizCompleted,
        reviewCompleted,
      };
    } catch {
      return {
        stars: 0,
        vocabularyCompleted: false,
        quizCompleted: false,
        reviewCompleted: false,
      };
    }
  };

export const areAllChapterLessonsComplete =
  async (
    chapter,
    language = "as-tw",
    level = "beginner"
  ) => {
    if (
      !chapter ||
      !chapter.id ||
      !Array.isArray(chapter.sections) ||
      chapter.sections.length === 0
    ) {
      return false;
    }

    try {
      const summaries = await Promise.all(
        chapter.sections.map((section) =>
          getLessonProgressSummary(
            section.id,
            language,
            level
          )
        )
      );

      return summaries.every(
        (summary) =>
          summary.quizCompleted
      );
    } catch {
      return false;
    }
  };

export const hasReceivedChapterXPReward =
  async (
    chapterId,
    language = "as-tw",
    level = "beginner"
  ) => {
    const key =
      getChapterXPRewardKey(
        chapterId,
        language,
        level
      );

    if (!key) {
      return false;
    }

    try {
      const value =
        await AsyncStorage.getItem(key);

      return value === "true";
    } catch {
      return false;
    }
  };

export const markChapterXPRewardReceived =
  async (
    chapterId,
    language = "as-tw",
    level = "beginner"
  ) => {
    const key =
      getChapterXPRewardKey(
        chapterId,
        language,
        level
      );

    if (!key) {
      return false;
    }

    try {
      await AsyncStorage.setItem(
        key,
        "true"
      );

      return true;
    } catch {
      return false;
    }
  };

export const getXP = async (
  supabase,
  userId
) => {
  if (!supabase || !userId) {
    return 0;
  }

  try {
    const { data, error } =
      await supabase
        .from("profiles")
        .select("total_xp")
        .eq("clerk_id", userId)
        .single();

    if (error) {
      return 0;
    }

    const xp = Number(
      data?.total_xp
    );

    if (!Number.isFinite(xp)) {
      return 0;
    }

    return Math.max(0, xp);
  } catch {
    return 0;
  }
};

export const setXP = async (
  supabase,
  userId,
  xp
) => {
  if (!supabase || !userId) {
    return 0;
  }

  try {
    const number = Number(xp);

    const normalizedXP =
      Number.isFinite(number)
        ? Math.max(0, number)
        : 0;

    const { data, error } =
      await supabase
        .from("profiles")
        .update({
          total_xp: normalizedXP,
        })
        .eq("clerk_id", userId)
        .select("total_xp")
        .single();

    if (error) {
      return 0;
    }

    const updatedXP = Number(
      data?.total_xp
    );

    return Number.isFinite(updatedXP)
      ? updatedXP
      : normalizedXP;
  } catch {
    return 0;
  }
};

export const addXP = async (
  supabase,
  userId,
  amount
) => {
  if (!supabase || !userId) {
    return 0;
  }

  try {
    const value = Number(amount);

    if (
      !Number.isFinite(value) ||
      value <= 0
    ) {
      return getXP(
        supabase,
        userId
      );
    }

    const currentXP =
      await getXP(
        supabase,
        userId
      );

    return setXP(
      supabase,
      userId,
      currentXP + value
    );
  } catch {
    return 0;
  }
};

export const checkAndAwardChapterXP =
  async (
    chapter,
    supabase,
    userId,
    language = "as-tw",
    level = "beginner"
  ) => {
    if (
      !chapter ||
      !chapter.id ||
      !supabase ||
      !userId
    ) {
      return {
        completed: false,
        xpAwarded: false,
        xp: 0,
        totalXP: 0,
      };
    }

    try {
      const allLessonsComplete =
        await areAllChapterLessonsComplete(
          chapter,
          language,
          level
        );

      const currentXP =
        await getXP(
          supabase,
          userId
        );

      if (!allLessonsComplete) {
        return {
          completed: false,
          xpAwarded: false,
          xp: 0,
          totalXP: currentXP,
        };
      }

      const alreadyRewarded =
        await hasReceivedChapterXPReward(
          chapter.id,
          language,
          level
        );

      if (alreadyRewarded) {
        return {
          completed: true,
          xpAwarded: false,
          xp: 0,
          totalXP: currentXP,
        };
      }

      const chapterXP = Number(
        chapter.totalXp
      );

      if (
        !Number.isFinite(chapterXP) ||
        chapterXP <= 0
      ) {
        return {
          completed: true,
          xpAwarded: false,
          xp: 0,
          totalXP: currentXP,
        };
      }

      const newTotalXP =
        await addXP(
          supabase,
          userId,
          chapterXP
        );

      await markChapterXPRewardReceived(
        chapter.id,
        language,
        level
      );

      return {
        completed: true,
        xpAwarded: true,
        xp: chapterXP,
        totalXP: newTotalXP,
      };
    } catch {
      return {
        completed: false,
        xpAwarded: false,
        xp: 0,
        totalXP: await getXP(
          supabase,
          userId
        ),
      };
    }
  };

export const getChapterProgressSummary =
  async (
    chapter,
    language = "as-tw",
    level = "beginner"
  ) => {
    if (
      !chapter ||
      !Array.isArray(chapter.sections)
    ) {
      return {
        completedLessons: 0,
        totalLessons: 0,
        completed: false,
        xpRewardReceived: false,
      };
    }

    try {
      const summaries = await Promise.all(
        chapter.sections.map((section) =>
          getLessonProgressSummary(
            section.id,
            language,
            level
          )
        )
      );

      const completedLessons =
        summaries.filter(
          (summary) =>
            summary.quizCompleted
        ).length;

      const totalLessons =
        chapter.sections.length;

      const completed =
        totalLessons > 0 &&
        completedLessons ===
          totalLessons;

      const xpRewardReceived =
        await hasReceivedChapterXPReward(
          chapter.id,
          language,
          level
        );

      return {
        completedLessons,
        totalLessons,
        completed,
        xpRewardReceived,
      };
    } catch {
      return {
        completedLessons: 0,
        totalLessons:
          chapter.sections.length,
        completed: false,
        xpRewardReceived: false,
      };
    }
  };