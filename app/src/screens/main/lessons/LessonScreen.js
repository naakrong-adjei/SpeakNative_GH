import React, { useEffect, useState, useCallback } from "react";
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
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useTheme } from "../../../context/ThemeContext";
import { createSupabaseClient } from "../../../utils/supabase";
import { getLanguageData } from "../../../utils/lessonData";
import { getAllProgress } from "../../../lib/lessonProgress";
import Header from "../../../components/ui/Header";

const MAX_STARS = 3;

const LessonNode = React.memo(({
  lesson,
  index,
  theme,
  onPress,
  completionCount = 0
}) => {
  const isMastered = completionCount >= MAX_STARS;
  const alignmentStyle = index % 2 === 0 ? "flex-start" : "flex-end";

  const renderCompletionStars = useCallback((completion) => {
    const stars = [];
    const starsToShow = Math.min(completion, MAX_STARS);

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

    if (completion > MAX_STARS) {
      stars.push(
        <Text
          key="extra-stars"
          style={[styles.extraCountText, { color: theme.text }]}
        >
          +{completion - MAX_STARS}
        </Text>
      );
    }

    return <View style={styles.completionStarsContainer}>{stars}</View>;
  }, [theme]);

  return (
    <View
      style={[
        styles.lessonNodeContainer,
        { alignItems: alignmentStyle },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.lessonBubble,
          {
            backgroundColor: isMastered ? theme.success + "20" : theme.surface,
            borderColor: isMastered ? theme.success : theme.border,
          },
        ]}
        onPress={() => onPress(lesson)}
        activeOpacity={0.7}
      >
        <Ionicons
          name={lesson?.icon || "book-outline"}
          size={24}
          color={theme.primary}
        />
        <View style={styles.lessonTextContainer}>
          <Text style={[styles.lessonTitle, { color: theme.text }]}>
            {lesson?.title || "Untitled Lesson"}
          </Text>
          {renderCompletionStars(completionCount)}
        </View>
      </TouchableOpacity>
    </View>
  );
});

export default function LessonScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { user } = useUser();
  const { getToken } = useAuth();
  
  const [selectedLanguage, setSelectedLanguage] = useState('as-tw');
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [profileLoading, setProfileLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [progress, setProgress] = useState({});
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch user profile
  useEffect(() => {
    let isMounted = true;
    
    const fetchUserProfile = async () => {
      try {
        if (!user?.id) {
          if (isMounted) {
            setProfileLoading(false);
            setIsInitialLoad(false);
          }
          return;
        }
        
        const token = await getToken();
        const supabase = createSupabaseClient(token);
        const { data, error } = await supabase
          .from("profiles")
          .select("target_language, language_level")
          .eq("clerk_id", user.id)
          .single();
        
        if (error) {
          console.error("Error fetching user profile:", error);
          if (isMounted) {
            setError(error.message);
            setProfileLoading(false);
            setIsInitialLoad(false);
          }
          return;
        }

        if (data && isMounted) {
          setSelectedLanguage(data.target_language || 'as-tw');
          setSelectedLevel(data.language_level || 'beginner');
        }
        if (isMounted) {
          setProfileLoading(false);
          setIsInitialLoad(false);
        }
      } catch (err) {
        console.error("Error:", err);
        if (isMounted) {
          setError(err.message);
          setProfileLoading(false);
          setIsInitialLoad(false);
        }
      }
    };

    fetchUserProfile();

    return () => {
      isMounted = false;
    };
  }, [user?.id, getToken]);

  useFocusEffect(
    useCallback(() => {
      if (!profileLoading && selectedLanguage && selectedLevel) {
        loadChapters();
      }
    }, [selectedLanguage, selectedLevel, profileLoading])
  );

  const loadChapters = useCallback(() => {
    if (profileLoading || !selectedLanguage || !selectedLevel) return;

    try {
      const languageData = getLanguageData(selectedLanguage, selectedLevel);
      
      if (!languageData || Object.keys(languageData).length === 0) {
        setChapters([]);
        return;
      }
      
      const chaptersArray = Object.keys(languageData).map(key => ({
        id: key,
        title: languageData[key]?.title || key,
        description: languageData[key]?.description || "",
        vocabulary: languageData[key]?.vocabulary || [],
        lessons: languageData[key]?.sections || [],
        review: languageData[key]?.review || null
      }));
      
      setChapters(chaptersArray);
      setError(null);
    } catch (err) {
      console.error("Error loading chapters:", err);
      setError(err.message);
      setChapters([]);
    }
  }, [selectedLanguage, selectedLevel, profileLoading]);

  useEffect(() => {
    loadChapters();
  }, [loadChapters]);

  // Load progress from AsyncStorage
  const loadProgress = useCallback(async () => {
    try {
      const savedProgress = await getAllProgress();
      setProgress(savedProgress);
    } catch (err) {
      console.error("Error loading progress:", err);
    }
  }, []);

  useEffect(() => {
    if (chapters.length > 0) {
      loadProgress();
    }
  }, [chapters, loadProgress]);

  // Pull to refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadProgress();
    loadChapters();
    setRefreshing(false);
  }, [loadProgress, loadChapters]);

// screens/main/lessons/LessonScreen.js
// Update the handleLessonPress function

const handleLessonPress = useCallback((lesson) => {
  if (!lesson?.id) return;
  
  // Find which chapter this lesson belongs to
  const chapter = chapters.find(c => 
    c.lessons.some(l => l.id === lesson.id)
  );
  
  // Get the full chapter data from the original language data
  const languageData = getLanguageData(selectedLanguage, selectedLevel);
  const fullChapterData = languageData?.[chapter?.id];
  
  // If we have full chapter data, use it; otherwise use the chapter from state
  const dataToPass = fullChapterData || chapter;
  
  console.log("Passing to LessonOverview:", dataToPass); // Debug log
  
  navigation.navigate("LessonOverview", {
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    lessonData: dataToPass, // Pass the FULL chapter data
    language: selectedLanguage,
    level: selectedLevel,
    chapterId: chapter?.id,
  });
}, [navigation, selectedLanguage, selectedLevel, chapters]);
  const handleChapterReview = useCallback((chapter) => {
    if (!chapter?.review?.id) return;
    

    navigation.navigate("LessonOverview", {
      lessonId: chapter.review.id,
      lessonTitle: chapter.review.title || `Review: ${chapter.title}`,
      lessonData: chapter.review,
      language: selectedLanguage,
      level: selectedLevel,
      isReview: true,
      chapterId: chapter.id,
    });
  }, [navigation, selectedLanguage, selectedLevel]);

  // Loading state
  if (isInitialLoad || profileLoading) {
    return (
      <View style={[styles.center, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.primary} />
        <Text style={[styles.loadingText, { color: theme.text }]}>
          {isInitialLoad ? "Loading..." : "Loading profile..."}
        </Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={[styles.center, { backgroundColor: theme.background }]}>
        <Ionicons name="alert-circle" size={50} color="red" />
        <Text style={{ color: 'red', marginTop: 10, textAlign: 'center' }}>Error: {error}</Text>
        <TouchableOpacity
          style={[styles.retryButton, { backgroundColor: theme.primary, marginTop: 16 }]}
          onPress={() => {
            setError(null);
            setProfileLoading(true);
            setIsInitialLoad(true);
          }}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />
      
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.primary}
            colors={[theme.primary]}
          />
        }
      >
        {chapters.length === 0 ? (
          <View style={styles.center}>
            <Ionicons name="book-outline" size={50} color={theme.icon || "#8e8e93"} />
            <Text style={[styles.noDataText, { color: theme.text }]}>No lessons found</Text>
            <Text style={[styles.noDataSubText, { color: theme.secondaryText || "#8e8e93" }]}>
              Try selecting a different language or level
            </Text>
          </View>
        ) : (
          chapters.map((chapter, chapterIndex) => {
            const chapterProgress = chapter.lessons.reduce((total, lesson) => {
              return total + (progress[lesson.id] || 0);
            }, 0);
            const totalLessons = chapter.lessons.length;
            const avgProgress = totalLessons > 0 ? Math.round((chapterProgress / (totalLessons * MAX_STARS)) * 100) : 0;

            return (
              <View key={chapter.id} style={styles.chapterContainer}>
                <View style={styles.chapterHeader}>
                  <View style={styles.chapterHeaderRow}>
                    <Text style={[styles.chapterNumberText, { color: theme.secondaryText || "#8e8e93" }]}>
                      CHAPTER {chapterIndex + 1}
                    </Text>
                    <View style={styles.chapterProgressBadge}>
                      <Text style={[styles.chapterProgressText, { color: theme.primary }]}>
                        {avgProgress}%
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.chapterTitleText, { color: theme.text }]}>
                    {chapter.title}
                  </Text>
                  {chapter.description && (
                    <Text style={[styles.chapterDescription, { color: theme.secondaryText || "#8e8e93" }]}>
                      {chapter.description}
                    </Text>
                  )}
                </View>

                <View style={styles.lessonsWrapper}>
                  {chapter.lessons.map((lesson, lessonIndex) => (
                    <LessonNode
                      key={lesson.id}
                      lesson={lesson}
                      index={lessonIndex}
                      theme={theme}
                      onPress={handleLessonPress}
                      completionCount={progress[lesson.id] || 0}
                    />
                  ))}
                </View>

                {/* Review Button (if review exists) */}
                {chapter.review && (
                  <TouchableOpacity
                    style={[
                      styles.reviewButton,
                      { backgroundColor: theme.primary },
                    ]}
                    onPress={() => handleChapterReview(chapter)}
                    activeOpacity={0.8}
                  >
                    <Ionicons name="refresh-outline" size={20} color="#FFF" />
                    <Text style={styles.reviewButtonText}>
                      Review Chapter
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  chapterNumberText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  chapterProgressBadge: {
    backgroundColor: "#007AFF20",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 12,
  },
  chapterProgressText: {
    fontSize: 12,
    fontWeight: "600",
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
    justifyContent: "center",
    width: "100%",
  },
  lessonBubble: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    width: "85%",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
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
  },
  extraCountText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
  reviewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 16,
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  reviewButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
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