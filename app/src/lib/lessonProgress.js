import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESS_STORAGE_KEY = "lesson_progress";
const VOCAB_PROGRESS_STORAGE_KEY = "lesson_vocabulary_progress";

export const getAllProgress = async () => {
  try {
    const stored = await AsyncStorage.getItem(PROGRESS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return {};
  } catch (error) {
    console.error('Error getting all progress:', error);
    return {};
  }
};

export const getLessonProgress = async (lessonId) => {
  try {
    const allProgress = await getAllProgress();
    return allProgress[lessonId] || 0;
  } catch (error) {
    console.error('Error getting lesson progress:', error);
    return 0;
  }
};

export const updateLessonProgress = async (lessonId, increment = 1) => {
  try {
    const allProgress = await getAllProgress();
    const current = allProgress[lessonId] || 0;
    const newProgress = Math.min(current + increment, 5);
    allProgress[lessonId] = newProgress;
    await AsyncStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(allProgress));
    return newProgress;
  } catch (error) {
    console.error('Error updating lesson progress:', error);
    return 0;
  }
};

// Vocabulary-specific progress tracking
export const getAllVocabularyProgress = async () => {
  try {
    const stored = await AsyncStorage.getItem(VOCAB_PROGRESS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return {};
  } catch (error) {
    console.error('Error getting all vocabulary progress:', error);
    return {};
  }
};

export const getVocabularyProgress = async (lessonId) => {
  try {
    const allProgress = await getAllVocabularyProgress();
    return allProgress[lessonId] || 0;
  } catch (error) {
    console.error('Error getting vocabulary progress:', error);
    return 0;
  }
};

export const markVocabularyComplete = async (lessonId) => {
  try {
    if (!lessonId) return;
    const allProgress = await getAllVocabularyProgress();
    allProgress[lessonId] = 1;
    await AsyncStorage.setItem(VOCAB_PROGRESS_STORAGE_KEY, JSON.stringify(allProgress));
    return true;
  } catch (error) {
    console.error('Error marking vocabulary complete:', error);
    return false;
  }
};
