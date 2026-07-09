import { AsyncStorage } from "@react-native-async-storage/async-storage";

const STATS_KEY = "speaking_listening_stats";

const MINUTES_PER_QUESTION = 0.5;
const MINUTES_PER_CONVERSATION_TURN = 1;

const getDefaultStats = () => ({
  minutesSpoken: 0,
  minutesListened: 0,
  lastUpdate: new Date().toISOString(),
  questionsAnswered: 0,
  questionsListened: 0,
  conversationTurns: 0,
});

const readStats = async () => {
  try {
    const raw = await AsyncStorage.getItem(STATS_KEY);

    if (!raw) {
      return getDefaultStats();
    }

    return JSON.parse(raw);
  } catch (error) {
    console.log("Error reading stats:", error);
    return getDefaultStats();
  }
};

const writeStats = async (stats) => {
  try {
    await AsyncStorage.setItem(
      STATS_KEY,
      JSON.stringify(stats)
    );
  } catch (error) {
    console.log("Error saving stats:", error);
  }
};

export const recordQuestionAnswered = async () => {
  const stats = await readStats();

  stats.questionsAnswered += 1;
  stats.minutesSpoken =
    stats.questionsAnswered *
    MINUTES_PER_QUESTION;

  stats.lastUpdate =
    new Date().toISOString();

  await writeStats(stats);
};

export const recordQuestionListened = async () => {
  const stats = await readStats();

  stats.questionsListened += 1;
  stats.minutesListened =
    stats.questionsListened *
    MINUTES_PER_QUESTION;

  stats.lastUpdate =
    new Date().toISOString();

  await writeStats(stats);
};

export const recordConversationTurn =
  async () => {
    const stats =
      await readStats();

    stats.conversationTurns += 1;

    stats.minutesSpoken +=
      MINUTES_PER_CONVERSATION_TURN;

    stats.minutesListened +=
      MINUTES_PER_CONVERSATION_TURN;

    stats.lastUpdate =
      new Date().toISOString();

    await writeStats(stats);
  };

export const getWeeklyStats =
  async () => {
    const stats =
      await readStats();

    return {
      minutesSpoken:
        Math.round(
          stats.minutesSpoken *
            10
        ) / 10,

      minutesListened:
        Math.round(
          stats.minutesListened *
            10
        ) / 10,

      weeklyChange: {
        spoken: 0,
        listened: 0,
      },
    };
  };