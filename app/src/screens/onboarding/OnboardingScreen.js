import React, { useMemo, useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ThemedText } from "../../components/themed-text";
import { createSupabaseClient } from "../../utils/supabase";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useTheme } from "../../context/ThemeContext";

import OptionCard from "../../components/ui/OptionCard";
import Button from "../../components/ui/Button";
import ProgressBar from "../../components/ui/ProgressBar";


const LANGUAGES = [
  {
    id: "as-tw",
    title: "Asante Twi",
    description: "A widely spoken Akan language in Ghana.",
    image: require("../../assets/images/flagImage.png"),
  },
  {
    id: "ga",
    title: "Ga",
    description: "Spoken in Accra and coastal areas.",
    image: require("../../assets/images/flagImage.png"),
  },
  {
    id: "ee",
    title: "Ewe",
    description: "Spoken in Volta Region and parts of Togo.",
    image: require("../../assets/images/flagImage.png"),
  },
];

const LEVELS = [
  {
    id: "beginner",
    title: "Beginner",
    description: "I know a few words or nothing at all.",
    icon: "leaf-outline",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "I can have basic conversations.",
    icon: "partly-sunny-outline",
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "I can express myself fluently.",
    icon: "trophy-outline",
  },
];

const MOTIVATIONS = [
  { id: "travel", title: "Travel", icon: "airplane-outline" },
  { id: "work", title: "Work", icon: "briefcase-outline" },
  { id: "family", title: "Family", icon: "people-outline" },
  { id: "culture", title: "Culture", icon: "book-outline" },
  { id: "hobby", title: "Hobby", icon: "game-controller-outline" },
];

const GOALS = [
  { id: "casual", title: "Casual", description: "5 min/day", icon: "walk-outline" },
  { id: "regular", title: "Regular", description: "10 min/day", icon: "bicycle-outline" },
  { id: "serious", title: "Serious", description: "20 min/day", icon: "flame-outline" },
  { id: "intense", title: "Intense", description: "30 min/day", icon: "rocket-outline" },
];


export default function OnboardingScreen({ onComplete, navigation }) {
  const { theme: colors } = useTheme();

  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();

  const supabase = useMemo(() => createSupabaseClient(getToken), [getToken]);

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [language, setLanguage] = useState(null);
  const [level, setLevel] = useState(null);
  const [motivations, setMotivations] = useState([]);
  const [goal, setGoal] = useState(null);

  const clerkId = isLoaded ? user?.id : null;


  useEffect(() => {
    if (user?.firstName && !name) {
      setName(user.firstName);
    }
  }, [user]);

  const toggleMotivation = (id) => {
    setMotivations((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const isNextEnabled = () => {
    if (!clerkId) return false;

    if (step === 0) return name.trim().length > 0;
    if (step === 1) return !!language;
    if (step === 2) return !!level;
    if (step === 3) return motivations.length > 0;
    if (step === 4) return !!goal;

    return false;
  };

  const selectedLanguageTitle = useMemo(() => {
    return LANGUAGES.find((l) => l.id === language)?.title || "this language";
  }, [language]);


  const saveProfile = async () => {
    if (!clerkId) return;

    setLoading(true);

    try {
      try {
        if (user && name?.trim()) {
          await user.update({
            unsafeMetadata: {
              full_name: name.trim(),
            },
        });
        }
      } catch (err) {
        console.log("Clerk update failed:", err);
      }

      const { data: existingProfile, error: fetchError } = await supabase
        .from("profiles")
        .select("clerk_id")
        .eq("clerk_id", clerkId)
        .maybeSingle();

      if (fetchError) {
        console.log("Fetch error:", fetchError);
      }

      let error;

      if (!existingProfile) {
        const { error: insertError } = await supabase.from("profiles").insert({
          clerk_id: clerkId,
          full_name: name,
          email: user?.emailAddresses?.[0]?.emailAddress || "",
          target_language: language,
          language_level: level,
          motivations,
          daily_goal: goal,
          onboarding_completed: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

        error = insertError;
      } else {
        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            full_name: name,
            target_language: language,
            language_level: level,
            motivations,
            daily_goal: goal,
            onboarding_completed: true,
            updated_at: new Date().toISOString(),
          })
          .eq("clerk_id", clerkId);

        error = updateError;
      }

      if (error) {
        console.log("Supabase error:", error);
        return;
      }

      if (onComplete) {
        onComplete();
      } else if (navigation?.replace) {
        navigation.replace("Home");
      }
    } catch (err) {
      console.log("Save crash:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = async () => {
    if (loading) return;

    if (step < 4) {
      setStep((s) => s + 1);
      return;
    }

    await saveProfile();
  };

  if (!isLoaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }


  const steps = [
    <View key="name" style={styles.step}>
      <ThemedText type="title">What should we call you?</ThemedText>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Your name"
        placeholderTextColor="#999"
        style={[styles.input, { color: colors.text, borderColor: colors.border }]}
      />
    </View>,

    <View key="language" style={styles.step}>
      <ThemedText type="title">Select a language</ThemedText>
      <ScrollView>
        {LANGUAGES.map((l) => (
          <OptionCard
            key={l.id}
            title={l.title}
            description={l.description}
            image={l.image}
            selected={language === l.id}
            onPress={() => setLanguage(l.id)}
          />
        ))}
      </ScrollView>
    </View>,

    <View key="level" style={styles.step}>
      <ThemedText type="title">
        How much {selectedLanguageTitle} do you know?
      </ThemedText>
      <ScrollView>
        {LEVELS.map((l) => (
          <OptionCard
            key={l.id}
            title={l.title}
            description={l.description}
            icon={l.icon}
            selected={level === l.id}
            onPress={() => setLevel(l.id)}
          />
        ))}
      </ScrollView>
    </View>,

    <View key="motivations" style={styles.step}>
      <ThemedText type="title">Why are you learning?</ThemedText>
      <ScrollView>
        {MOTIVATIONS.map((m) => (
          <OptionCard
            key={m.id}
            title={m.title}
            icon={m.icon}
            selected={motivations.includes(m.id)}
            onPress={() => toggleMotivation(m.id)}
          />
        ))}
      </ScrollView>
    </View>,

    <View key="goals" style={styles.step}>
      <ThemedText type="title">What's your daily learning goal</ThemedText>
      <ScrollView>
        {GOALS.map((g) => (
          <OptionCard
            key={g.id}
            title={g.title}
            description={g.description}
            icon={g.icon}
            selected={goal === g.id}
            onPress={() => setGoal(g.id)}
          />
        ))}
      </ScrollView>
    </View>,
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => step > 0 && setStep(step - 1)}>
            <Ionicons name="arrow-back" size={24} color={step === 0 ? "#ccc" : colors.text} />
          </TouchableOpacity>

          <ProgressBar step={step} total={5} />
        </View>

        <Animated.View
          key={step}
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.content}
        >
          {steps[step]}
        </Animated.View>

        <View style={styles.footer}>
          <Button
            title={loading ? "Saving..." : step === 4 ? "Finish" : "Continue"}
            onPress={handleContinue}
            loading={loading}
            disabled={!isNextEnabled() || loading}
            theme={colors}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20
  },
  content: {
    flex: 1,
    padding: 20
  },
  step: {
    flex: 1,
    gap: 18
  },
  input: {
    borderBottomWidth: 2,
    fontSize: 18,
    paddingVertical: 10,
  },
  footer: {
    padding: 20
  },
});