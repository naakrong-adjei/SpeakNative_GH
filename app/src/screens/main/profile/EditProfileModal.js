import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { useTheme } from "../../../context/ThemeContext";
import { LANGUAGES } from "../../../data/languagesData";

const LEVELS = [
  {
    id: "beginner",
    title: "Beginner",
    description: "Just starting out",
    icon: "leaf-outline",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "Building confidence",
    icon: "trending-up-outline",
    },
  {
    id: "advanced",
    title: "Advanced",
    description: "Confident speaker",
    icon: "school-outline",
  },
];

export default function EditProfileModal({
  visible,
  onClose,
  currentLanguageId,
  currentLevel,
  currentEmail,
  currentUsername,
  userLanguages = [],
  onSave,
  onAddLanguage,
}) {
  const { theme } = useTheme();

  const [activeLanguages, setActiveLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] =
    useState(currentLanguageId);

  const [selectedLevel, setSelectedLevel] =
    useState(currentLevel);

  const [email, setEmail] = useState(
    currentEmail || ""
  );

  const [username, setUsername] = useState(
    currentUsername || ""
  );

  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [showAddLanguageModal, setShowAddLanguageModal] =
    useState(false);

  useEffect(() => {
    if (!visible) return;

    setSelectedLanguage(currentLanguageId);
    setSelectedLevel(currentLevel);
    setEmail(currentEmail || "");
    setUsername(currentUsername || "");

    const languages =
      userLanguages.length > 0
        ? userLanguages
        : currentLanguageId
        ? [currentLanguageId]
        : [];

    setActiveLanguages(languages);
    setActiveTab("profile");
  }, [
    visible,
    currentLanguageId,
    currentLevel,
    currentEmail,
    currentUsername,
    userLanguages,
  ]);

  const originalLanguages = useMemo(() => {
    return userLanguages.length > 0
      ? userLanguages
      : currentLanguageId
      ? [currentLanguageId]
      : [];
  }, [userLanguages, currentLanguageId]);

  const availableToAdd = useMemo(() => {
    return LANGUAGES.filter(
      (language) =>
        !activeLanguages.includes(language.id)
    );
  }, [activeLanguages]);

  const hasChanges = useMemo(() => {
    return (
      selectedLanguage !== currentLanguageId ||
      selectedLevel !== currentLevel ||
      email !== (currentEmail || "") ||
      username !== (currentUsername || "") ||
      JSON.stringify(activeLanguages) !==
        JSON.stringify(originalLanguages)
    );
  }, [
    selectedLanguage,
    selectedLevel,
    email,
    username,
    activeLanguages,
    originalLanguages,
    currentLanguageId,
    currentLevel,
    currentEmail,
    currentUsername,
  ]);

  const handleSave = async () => {
    if (saving || !hasChanges) return;

    setSaving(true);

    try {
      await onSave({
        target_language: selectedLanguage,
        language_level: selectedLevel,
        email: email.trim(),
        username: username.trim(),
        user_languages: activeLanguages,
      });

      onClose();
    } catch (error) {
      console.error(
        "Failed to save profile changes:",
        error
      );
    } finally {
      setSaving(false);
    }
  };

  const handleAddNewLanguage = (langId) => {
    setActiveLanguages((previous) => {
      if (previous.includes(langId)) {
        return previous;
      }

      return [...previous, langId];
    });

    setSelectedLanguage(langId);
    setShowAddLanguageModal(false);

    if (onAddLanguage) {
      onAddLanguage(langId);
    }
  };

  const handleRemoveLanguage = (langId) => {
    if (activeLanguages.length <= 1) {
      return;
    }

    const updatedLanguages = activeLanguages.filter(
      (id) => id !== langId
    );

    setActiveLanguages(updatedLanguages);

    if (selectedLanguage === langId) {
      setSelectedLanguage(updatedLanguages[0]);
    }
  };

  const selectedLanguageData = LANGUAGES.find(
    (language) =>
      language.id === selectedLanguage
  );

  const selectedLevelData = LEVELS.find(
    (level) => level.id === selectedLevel
  );

  const renderProfileTab = () => {
    return (
      <View style={styles.contentSection}>
        <View style={styles.sectionIntro}>
          <View
            style={[
              styles.introIcon,
              {
                backgroundColor:
                  theme.primary + "12",
              },
            ]}
          >
            <Ionicons
              name="person-outline"
              size={22}
              color={theme.primary}
            />
          </View>

          <View style={styles.introText}>
            <Text
              style={[
                styles.introTitle,
                { color: theme.text },
              ]}
            >
              Personal information
            </Text>

            <Text
              style={[
                styles.introDescription,
                {
                  color: theme.secondaryText,
                },
              ]}
            >
              Keep your profile information up to date.
            </Text>
          </View>
        </View>

        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: theme.text },
            ]}
          >
            Username
          </Text>

          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="person-outline"
              size={20}
              color={theme.secondaryText}
              style={styles.inputIcon}
            />

            <TextInput
              style={[
                styles.input,
                { color: theme.text },
              ]}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your username"
              placeholderTextColor={
                theme.secondaryText
              }
              autoCapitalize="none"
              autoCorrect={false}
            />

            {username.length > 0 && (
              <TouchableOpacity
                onPress={() => setUsername("")}
                style={styles.clearButton}
                activeOpacity={0.7}
              >
                <Ionicons
                  name="close-circle"
                  size={19}
                  color={theme.secondaryText}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.fieldGroup}>
          <Text
            style={[
              styles.fieldLabel,
              { color: theme.text },
            ]}
          >
            Email address
          </Text>

          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="mail-outline"
              size={20}
              color={theme.secondaryText}
              style={styles.inputIcon}
            />

            <TextInput
              style={[
                styles.input,
                { color: theme.text },
              ]}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={
                theme.secondaryText
              }
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {email.length > 0 && (
              <TouchableOpacity
                onPress={() => setEmail("")}
                style={styles.clearButton}
                activeOpacity={0.7}
              >
                <Ionicons
                  name="close-circle"
                  size={19}
                  color={theme.secondaryText}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  const renderPreferencesTab = () => {
    return (
      <View style={styles.contentSection}>
        <View style={styles.preferenceSection}>
          <View style={styles.sectionHeading}>
            <View
              style={[
                styles.sectionIcon,
                {
                  backgroundColor:
                    theme.primary + "12",
                },
              ]}
            >
              <Ionicons
                name="language-outline"
                size={19}
                color={theme.primary}
              />
            </View>

            <View style={styles.sectionHeadingText}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: theme.text },
                ]}
              >
                Learning courses
              </Text>

              <Text
                style={[
                  styles.sectionDescription,
                  {
                    color: theme.secondaryText,
                  },
                ]}
              >
                Choose a language to continue learning.
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.courseCard,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            {activeLanguages.map(
              (langId, index) => {
                const language =
                  LANGUAGES.find(
                    (item) =>
                      item.id === langId
                  ) || {
                    id: langId,
                    title: langId,
                  };

                const isSelected =
                  selectedLanguage ===
                  language.id;

                return (
                  <View
                    key={language.id}
                    style={[
                      styles.courseRow,
                      index <
                        activeLanguages.length - 1 && {
                          borderBottomWidth: 1,
                          borderBottomColor:
                            theme.border,
                        },
                    ]}
                  >
                    <TouchableOpacity
                      style={styles.courseSelect}
                      activeOpacity={0.7}
                      onPress={() =>
                        setSelectedLanguage(
                          language.id
                        )
                      }
                    >
                      <View
                        style={[
                          styles.courseIcon,
                          {
                            backgroundColor:
                              isSelected
                                ? theme.primary +
                                  "15"
                                : theme.background,
                          },
                        ]}
                      >
                        <Ionicons
                          name="language-outline"
                          size={21}
                          color={
                            isSelected
                              ? theme.primary
                              : theme.secondaryText
                          }
                        />
                      </View>

                      <View
                        style={
                          styles.courseInfo
                        }
                      >
                        <Text
                          style={[
                            styles.courseName,
                            {
                              color:
                                theme.text,
                            },
                          ]}
                        >
                          {language.title}
                        </Text>

                        <Text
                          style={[
                            styles.courseStatus,
                            {
                              color:
                                theme.secondaryText,
                            },
                          ]}
                        >
                          {isSelected
                            ? "Currently selected"
                            : "Active course"}
                        </Text>
                      </View>
                    </TouchableOpacity>

                    {isSelected ? (
                      <View
                        style={[
                          styles.selectedCheck,
                          {
                            backgroundColor:
                              theme.primary,
                          },
                        ]}
                      >
                        <Ionicons
                          name="checkmark"
                          size={14}
                          color="#FFFFFF"
                        />
                      </View>
                    ) : (
                      activeLanguages.length > 1 && (
                        <TouchableOpacity
                          onPress={() =>
                            handleRemoveLanguage(
                              language.id
                            )
                          }
                          style={
                            styles.removeCourse
                          }
                          activeOpacity={0.7}
                        >
                          <Ionicons
                            name="close-circle-outline"
                            size={20}
                            color={
                              theme.secondaryText
                            }
                          />
                        </TouchableOpacity>
                      )
                    )}
                  </View>
                );
              }
            )}

            {availableToAdd.length > 0 && (
              <TouchableOpacity
                style={styles.addCourseButton}
                activeOpacity={0.7}
                onPress={() =>
                  setShowAddLanguageModal(true)
                }
              >
                <View
                  style={[
                    styles.addCourseIcon,
                    {
                      backgroundColor:
                        theme.primary + "12",
                    },
                  ]}
                >
                  <Ionicons
                    name="add"
                    size={21}
                    color={theme.primary}
                  />
                </View>

                <View
                  style={styles.addCourseText}
                >
                  <Text
                    style={[
                      styles.addCourseTitle,
                      {
                        color:
                          theme.primary,
                      },
                    ]}
                  >
                    Add another course
                  </Text>

                  <Text
                    style={[
                      styles.addCourseSubtitle,
                      {
                        color:
                          theme.secondaryText,
                      },
                    ]}
                  >
                    Learn another language
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={19}
                  color={theme.secondaryText}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.preferenceSection}>
          <View style={styles.sectionHeading}>
            <View
              style={[
                styles.sectionIcon,
                {
                  backgroundColor:
                    theme.primary + "12",
                },
              ]}
            >
              <Ionicons
                name="school-outline"
                size={19}
                color={theme.primary}
              />
            </View>

            <View style={styles.sectionHeadingText}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: theme.text },
                ]}
              >
                Proficiency level
              </Text>

              <Text
                style={[
                  styles.sectionDescription,
                  {
                    color: theme.secondaryText,
                  },
                ]}
              >
                Choose the level that matches your
                current ability.
              </Text>
            </View>
          </View>

          <View style={styles.levelList}>
            {LEVELS.map((level) => {
              const isSelected =
                selectedLevel === level.id;

              return (
                <TouchableOpacity
                  key={level.id}
                  activeOpacity={0.75}
                  onPress={() =>
                    setSelectedLevel(level.id)
                  }
                  style={[
                    styles.levelCard,
                    {
                      backgroundColor:
                        isSelected
                          ? theme.primary + "0D"
                          : theme.surface,
                      borderColor:
                        isSelected
                          ? theme.primary
                          : theme.border,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.levelIcon,
                      {
                        backgroundColor:
                          isSelected
                            ? theme.primary
                            : theme.background,
                      },
                    ]}
                  >
                    <Ionicons
                      name={level.icon}
                      size={22}
                      color={
                        isSelected
                          ? "#FFFFFF"
                          : theme.secondaryText
                      }
                    />
                  </View>

                  <View
                    style={styles.levelInfo}
                  >
                    <Text
                      style={[
                        styles.levelTitle,
                        {
                          color: isSelected
                            ? theme.primary
                            : theme.text,
                        },
                      ]}
                    >
                      {level.title}
                    </Text>

                    <Text
                      style={[
                        styles.levelDescription,
                        {
                          color:
                            theme.secondaryText,
                        },
                      ]}
                    >
                      {level.description}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.radio,
                      {
                        borderColor:
                          isSelected
                            ? theme.primary
                            : theme.border,
                      },
                    ]}
                  >
                    {isSelected && (
                      <View
                        style={[
                          styles.radioInner,
                          {
                            backgroundColor:
                              theme.primary,
                          },
                        ]}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView
        style={[
          styles.safeArea,
          {
            backgroundColor:
              theme.background,
          },
        ]}
      >
        <View
          style={[
            styles.header,
            {
              borderBottomColor:
                theme.border,
            },
          ]}
        >
          <TouchableOpacity
            onPress={onClose}
            activeOpacity={0.7}
            style={styles.headerButton}
          >
            <Ionicons
              name="close"
              size={24}
              color={theme.text}
            />
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <Text
              style={[
                styles.headerTitle,
                { color: theme.text },
              ]}
            >
              Edit Profile
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleSave}
            disabled={saving || !hasChanges}
            activeOpacity={0.75}
            style={[
              styles.saveButton,
              {
                backgroundColor: hasChanges
                  ? theme.primary
                  : theme.border,
                opacity:
                  saving || !hasChanges
                    ? 0.55
                    : 1,
              },
            ]}
          >
            {saving ? (
              <ActivityIndicator
                size="small"
                color="#FFFFFF"
              />
            ) : (
              <Text style={styles.saveText}>
                Save
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.tabs,
            {
              backgroundColor:
                theme.surface,
              borderBottomColor:
                theme.border,
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() =>
              setActiveTab("profile")
            }
            style={[
              styles.tab,
              activeTab === "profile" && {
                backgroundColor:
                  theme.primary + "12",
              },
            ]}
          >
            <Ionicons
              name="person-outline"
              size={18}
              color={
                activeTab === "profile"
                  ? theme.primary
                  : theme.secondaryText
              }
            />

            <Text
              style={[
                styles.tabText,
                {
                  color:
                    activeTab === "profile"
                      ? theme.primary
                      : theme.secondaryText,
                  fontWeight:
                    activeTab === "profile"
                      ? "700"
                      : "500",
                },
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() =>
              setActiveTab("preferences")
            }
            style={[
              styles.tab,
              activeTab === "preferences" && {
                backgroundColor:
                  theme.primary + "12",
              },
            ]}
          >
            <Ionicons
              name="options-outline"
              size={18}
              color={
                activeTab === "preferences"
                  ? theme.primary
                  : theme.secondaryText
              }
            />

            <Text
              style={[
                styles.tabText,
                {
                  color:
                    activeTab === "preferences"
                      ? theme.primary
                      : theme.secondaryText,
                  fontWeight:
                    activeTab === "preferences"
                      ? "700"
                      : "500",
                },
              ]}
            >
              Preferences
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            styles.scrollContent
          }
          keyboardShouldPersistTaps="handled"
        >
          {activeTab === "profile"
            ? renderProfileTab()
            : renderPreferencesTab()}
        </ScrollView>

        <View
          style={[
            styles.footer,
            {
              backgroundColor:
                theme.background,
              borderTopColor:
                theme.border,
            },
          ]}
        >
          <View style={styles.footerItem}>
            <Ionicons
              name="language-outline"
              size={16}
              color={theme.secondaryText}
            />

            <Text
              numberOfLines={1}
              style={[
                styles.footerText,
                {
                  color:
                    theme.secondaryText,
                },
              ]}
            >
              {selectedLanguageData?.title ||
                "No language"}
            </Text>
          </View>

          <View
            style={[
              styles.footerDivider,
              {
                backgroundColor:
                  theme.border,
              },
            ]}
          />

          <View style={styles.footerItem}>
            <Ionicons
              name="school-outline"
              size={16}
              color={theme.secondaryText}
            />

            <Text
              style={[
                styles.footerText,
                {
                  color:
                    theme.secondaryText,
                },
              ]}
            >
              {selectedLevelData?.title ||
                "No level"}
            </Text>
          </View>
        </View>

        <Modal
          visible={showAddLanguageModal}
          animationType="fade"
          transparent
          onRequestClose={() =>
            setShowAddLanguageModal(false)
          }
        >
          <View style={styles.overlay}>
            <TouchableOpacity
              style={StyleSheet.absoluteFill}
              activeOpacity={1}
              onPress={() =>
                setShowAddLanguageModal(false)
              }
            />

            <View
              style={[
                styles.addModal,
                {
                  backgroundColor:
                    theme.surface,
                  borderColor:
                    theme.border,
                },
              ]}
            >
              <View style={styles.addModalHeader}>
                <View>
                  <Text
                    style={[
                      styles.addModalTitle,
                      {
                        color: theme.text,
                      },
                    ]}
                  >
                    Add a course
                  </Text>

                  <Text
                    style={[
                      styles.addModalSubtitle,
                      {
                        color:
                          theme.secondaryText,
                      },
                    ]}
                  >
                    Choose another language to learn.
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    setShowAddLanguageModal(
                      false
                    )
                  }
                  activeOpacity={0.7}
                  style={[
                    styles.modalClose,
                    {
                      backgroundColor:
                        theme.background,
                    },
                  ]}
                >
                  <Ionicons
                    name="close"
                    size={20}
                    color={theme.text}
                  />
                </TouchableOpacity>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.languageList}
              >
                {availableToAdd.map(
                  (language) => (
                    <TouchableOpacity
                      key={language.id}
                      activeOpacity={0.7}
                      onPress={() =>
                        handleAddNewLanguage(
                          language.id
                        )
                      }
                      style={[
                        styles.availableLanguage,
                        {
                          borderBottomColor:
                            theme.border,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.availableIcon,
                          {
                            backgroundColor:
                              theme.primary +
                              "12",
                          },
                        ]}
                      >
                        <Ionicons
                          name="language-outline"
                          size={21}
                          color={
                            theme.primary
                          }
                        />
                      </View>

                      <Text
                        style={[
                          styles.availableName,
                          {
                            color: theme.text,
                          },
                        ]}
                      >
                        {language.title}
                      </Text>

                      <Ionicons
                        name="chevron-forward"
                        size={19}
                        color={
                          theme.secondaryText
                        }
                      />
                    </TouchableOpacity>
                  )
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  header: {
    height: 68,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
  },

  saveButton: {
    minWidth: 62,
    height: 38,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  tabs: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 16,
    padding: 4,
    borderRadius: 14,
    borderWidth: 1,
  },

  tab: {
    flex: 1,
    minHeight: 42,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  tabText: {
    fontSize: 13,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 110,
  },

  contentSection: {
    gap: 24,
  },

  sectionIntro: {
    flexDirection: "row",
    alignItems: "center",
  },

  introIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  introText: {
    flex: 1,
  },

  introTitle: {
    fontSize: 16,
    fontWeight: "800",
  },

  introDescription: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },

  fieldGroup: {
    gap: 8,
  },

  fieldLabel: {
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 2,
  },

  inputContainer: {
    minHeight: 54,
    borderRadius: 15,
    borderWidth: 1.2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 14,
  },

  clearButton: {
    padding: 4,
    marginLeft: 6,
  },

  preferenceSection: {
    gap: 13,
  },

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  sectionHeadingText: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
  },

  sectionDescription: {
    fontSize: 12,
    lineHeight: 17,
    marginTop: 2,
  },

  courseCard: {
    borderRadius: 18,
    borderWidth: 1,
    overflow: "hidden",
  },

  courseRow: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  courseSelect: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  courseIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  courseInfo: {
    flex: 1,
  },

  courseName: {
    fontSize: 14,
    fontWeight: "800",
  },

  courseStatus: {
    fontSize: 11,
    marginTop: 3,
  },

  selectedCheck: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  removeCourse: {
    padding: 5,
  },

  addCourseButton: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  addCourseIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  addCourseText: {
    flex: 1,
  },

  addCourseTitle: {
    fontSize: 14,
    fontWeight: "800",
  },

  addCourseSubtitle: {
    fontSize: 11,
    marginTop: 3,
  },

  levelList: {
    gap: 10,
  },

  levelCard: {
    minHeight: 78,
    borderRadius: 17,
    borderWidth: 1.4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  levelIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  levelInfo: {
    flex: 1,
  },

  levelTitle: {
    fontSize: 14,
    fontWeight: "800",
  },

  levelDescription: {
    fontSize: 11,
    marginTop: 3,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  radioInner: {
    width: 11,
    height: 11,
    borderRadius: 6,
  },

  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 58,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 14,
  },

  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    maxWidth: "40%",
  },

  footerText: {
    fontSize: 12,
    fontWeight: "600",
  },

  footerDivider: {
    width: 1,
    height: 20,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  addModal: {
    width: "100%",
    maxWidth: 380,
    maxHeight: "70%",
    borderRadius: 22,
    borderWidth: 1,
    padding: 20,
  },

  addModalHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  addModalTitle: {
    fontSize: 19,
    fontWeight: "900",
  },

  addModalSubtitle: {
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
    maxWidth: 260,
  },

  modalClose: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  languageList: {
    marginTop: 4,
  },

  availableLanguage: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },

  availableIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  availableName: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
  },
});