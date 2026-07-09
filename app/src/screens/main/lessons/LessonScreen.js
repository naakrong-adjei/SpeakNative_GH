import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { useSpeakingListeningStats } from '../../../hooks/useSpeakingListeningStats';
import Ionicons from "@expo/vector-icons/Ionicons";

const MAX_STARS = 3;

export default function LessonScreen() {
  const { theme } = useTheme();
  const { stats, loading } = useSpeakingListeningStats();
  const [ progress, setProgress ] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('https://api.example.com/user/progress');
        const data = await response.json();
        setProgress(data.progress);
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background, padding: 10 }}>
      <View style={StyleSheet.container}>

        <View style={[styles.header, { borderBottomColor: theme.border }]}>

          <TouchableOpacity>
            <Text style={[ styles.headerTitle, {color: theme.text}]}>This Week</Text>
            <Text style={[styles.headerSubtitle, {color: theme.secondaryText }]}>In review</Text>
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.statItem}>
              <View style={styles.statValueContainer}>
                <Text style={styles.statValue}>{loading ? "-" : Math.floor(stats?.minutesSpoken ?? 0)}</Text>
                <Ionicons name="arrow-up" size={14} color={theme.primary} style={{marginLeft: 2}}/>
                <Text style={styles.statChangePositive}>{loading ? "-" : Math.floor(stats?.weeklyChange.spoken ?? 0)}</Text>
              </View>
              <Text style={[styles.statLabel, {color: theme.secondaryText}]}>minutes spoken</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerSeparator}/>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.statItem}>
              <View style={styles.statValueContainer}>
                <Text style={styles.statValue}>{loading ? "-" : Math.floor(stats?.minutesListened ?? 0)}</Text>
                <Ionicons name="arrow-up" size={14} color={theme.primary} style={{marginLeft: 2}}/>
                <Text style={styles.statChangePositive}>{loading ? "-" : Math.floor(stats?.weeklyChange.listened ?? 0)}</Text>
              </View>
              <Text style={[styles.statLabel, {color: theme.secondaryText}]}>minutes listened</Text>
            </TouchableOpacity>
          </View>




        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: -2,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statValueContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statChangePositive: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#34C759", // Green for positive change
  },
  statLabel: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: -2,
  },
  headerSeparator: {
    width: 1,
    height: 24,
    marginRight: -8, // Adjust spacing
  },
  scrollContainer: {
    paddingTop: 24,
    paddingBottom: 48,
    paddingHorizontal: 20,
  },
  chapterContainer: {
    marginBottom: 24,
  },
  chapterHeader: {
    marginBottom: 24,
  },
  chapterNumberText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8e8e93",
    textTransform: "uppercase",
  },
  chapterTitleText: {
    marginTop: 4,
  },
  lessonsWrapper: {
    gap: 20,
  },
  lessonNodeContainer: {
    minHeight: 80,
    justifyContent: "center",
  },
  lessonBubble: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    borderWidth: 2,
    width: "80%",
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  lessonTextContainer: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginBottom: 6,
  },
  completionStarsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    marginRight: 3,
  },
  extraCountText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
  practiceChapterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
    marginBottom: 24,
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  practiceChapterButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});