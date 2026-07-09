import { getWeeklyStats } from "../lib/speakingListeningStats"
import { useEffect, useState } from "react";

export const useSpeakingListeningStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const weeklyStats =
        await getWeeklyStats();

      setStats(weeklyStats);
    } catch (err) {
      console.error(
        "Failed to load speaking/listening stats:",
        err
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return {
    stats,
    loading,
    refresh,
  };
};