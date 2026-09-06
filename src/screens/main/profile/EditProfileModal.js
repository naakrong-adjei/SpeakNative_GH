import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
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
    icon: "trophy-outline",
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
  const [selectedLevel, setSelectedLevel] = useState(currentLevel);
  const [email, setEmail] = useState(currentEmail || "");
  const [username, setUsername] = useState(currentUsername || "");
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [showAddLanguageModal, setShowAddLanguageModal] = useState(false);

  useEffect(() => {
    if (!visible) return;

    setSelectedLanguage(currentLanguageId);
    setSelectedLevel(currentLevel);
    setEmail(currentEmail || "");
    setUsername(currentUsername || "");
    setActiveTab("profile");

    const languages =
      userLanguages.length > 0
        ? userLanguages
        : currentLanguageId
        ? [currentLanguageId]
        : [];

    setActiveLanguages(languages);
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
      (language) => !activeLanguages.includes(language.id)
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
      console.error("Failed to save profile changes:", error);
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
    (language) => language.id === selectedLanguage
  );

  const selectedLevelData = LEVELS.find(
    (level) => level.id === selectedLevel
  );

  const renderHeader = () => (
    <View
      style={[
        styles.header,
        {
          backgroundColor: theme.background,
          borderBottomColor: theme.border,
        },
      ]}
    >
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={0.7}
        style={styles.closeButton}
      >
        <Ionicons
          name="close"
          size={28}
          color={theme.secondaryText}
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.headerTitle,
          {
            color: theme.text,
          },
        ]}
      >
        Edit Profile
      </Text>

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
            opacity: saving || !hasChanges ? 0.6 : 1,
          },
        ]}
      >
        {saving ? (
          <ActivityIndicator
            size="small"
            color="#FFFFFF"
          />
        ) : (
          <Text style={styles.saveText}>Save</Text>
        )}
      </TouchableOpacity>
    </View>
  );

  const renderProfileTab = () => (
    <View style={styles.tabContent}>
      <View
        style={[
          styles.card,
          styles.profileCard,
          {
            backgroundColor: theme.background,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.avatarContainer}>
          <View
            style={[
              styles.avatar,
              {
                backgroundColor: theme.surface,
                borderColor: theme.primary,
              },
            ]}
          >
            <Text
              style={[
                styles.avatarText,
                {
                  color: theme.primary,
                },
              ]}
            >
              {username
                ? username.charAt(0).toUpperCase()
                : "?"}
            </Text>
          </View>

          <Text
            style={[
              styles.profileName,
              {
                color: theme.text,
              },
            ]}
          >
            {username || "Your Profile"}
          </Text>

          <View style={styles.profileMeta}>
            <View style={styles.profileMetaItem}>
              <Ionicons
                name="language-outline"
                size={16}
                color={theme.primary}
              />

              <Text
                style={[
                  styles.profileMetaText,
                  {
                    color: theme.text,
                  },
                ]}
              >
                {selectedLanguageData?.title || "Language"}
              </Text>
            </View>

            <View
              style={[
                styles.metaDivider,
                {
                  backgroundColor: theme.border,
                },
              ]}
            />

            <View style={styles.profileMetaItem}>
              <Ionicons
                name="trending-up-outline"
                size={16}
                color={theme.primary}
              />

              <Text
                style={[
                  styles.profileMetaText,
                  {
                    color: theme.text,
                  },
                ]}
              >
                {selectedLevelData?.title || "Beginner"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.profileFields}>
          <View style={styles.fieldGroup}>
            <Text
              style={[
                styles.fieldLabel,
                {
                  color: theme.secondaryText,
                },
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
                color={theme.icon}
                style={styles.inputIcon}
              />

              <TextInput
                style={[
                  styles.input,
                  {
                    color: theme.text,
                  },
                ]}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
                placeholderTextColor={theme.secondaryText}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text
              style={[
                styles.fieldLabel,
                {
                  color: theme.secondaryText,
                },
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
                color={theme.icon}
                style={styles.inputIcon}
              />

              <TextInput
                style={[
                  styles.input,
                  {
                    color: theme.text,
                  },
                ]}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor={theme.secondaryText}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const renderPreferencesTab = () => (
    <View style={styles.tabContent}>
      <View
        style={[
          styles.card,
          styles.courseCard,
          {
            backgroundColor: theme.background,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <View
            style={[
              styles.sectionIcon,
              {
                backgroundColor: theme.surface,
              },
            ]}
          >
            <Ionicons
              name="language-outline"
              size={21}
              color={theme.primary}
            />
          </View>

          <View style={styles.sectionHeaderText}>
            <Text
              style={[
                styles.cardTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Your Languages
            </Text>

            <Text
              style={[
                styles.cardSubtitle,
                {
                  color: theme.secondaryText,
                },
              ]}
            >
              Choose your active learning language
            </Text>
          </View>
        </View>

        <View style={styles.courseList}>
          {activeLanguages.map((langId) => {
            const language =
              LANGUAGES.find(
                (item) => item.id === langId
              ) || {
                id: langId,
                title: langId,
              };

            const isSelected =
              selectedLanguage === language.id;

            return (
              <TouchableOpacity
                key={language.id}
                activeOpacity={0.75}
                onPress={() =>
                  setSelectedLanguage(language.id)
                }
                style={[
                  styles.courseItem,
                  {
                    backgroundColor: isSelected
                      ? theme.surface
                      : theme.background,
                    borderColor: isSelected
                      ? theme.primary
                      : theme.border,
                  },
                ]}
              >
                <View style={styles.courseLeft}>
                  <View
                    style={[
                      styles.courseIcon,
                      {
                        backgroundColor: isSelected
                          ? theme.primary
                          : theme.surface,
                      },
                    ]}
                  >
                    <Ionicons
                      name="language-outline"
                      size={21}
                      color={
                        isSelected
                          ? "#FFFFFF"
                          : theme.primary
                      }
                    />
                  </View>

                  <View style={styles.courseDetails}>
                    <Text
                      style={[
                        styles.courseName,
                        {
                          color: isSelected
                            ? theme.primary
                            : theme.text,
                        },
                      ]}
                    >
                      {language.title}
                    </Text>

                    <View
                      style={styles.courseStatusRow}
                    >
                      <View
                        style={[
                          styles.statusDot,
                          {
                            backgroundColor: isSelected
                              ? theme.primary
                              : theme.secondaryText,
                          },
                        ]}
                      />

                      <Text
                        style={[
                          styles.courseStatus,
                          {
                            color: theme.secondaryText,
                          },
                        ]}
                      >
                        {isSelected
                          ? "Currently learning"
                          : "Tap to switch"}
                      </Text>
                    </View>
                  </View>
                </View>

                {isSelected ? (
                  <View
                    style={[
                      styles.selectedBadge,
                      {
                        backgroundColor:
                          theme.primary,
                      },
                    ]}
                  >
                    <Ionicons
                      name="checkmark"
                      size={17}
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
                      activeOpacity={0.7}
                      style={[
                        styles.removeButton,
                        {
                          backgroundColor:
                            theme.surface,
                        },
                      ]}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={18}
                        color={theme.error}
                      />
                    </TouchableOpacity>
                  )
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {availableToAdd.length > 0 && (
          <TouchableOpacity
            style={[
              styles.addCourseButton,
              {
                borderColor: theme.border,
                backgroundColor: theme.surface,
              },
            ]}
            activeOpacity={0.75}
            onPress={() =>
              setShowAddLanguageModal(true)
            }
          >
            <View
              style={[
                styles.addCourseCircle,
                {
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                },
              ]}
            >
              <Ionicons
                name="add"
                size={22}
                color={theme.primary}
              />
            </View>

            <View style={styles.addCourseInfo}>
              <Text
                style={[
                  styles.addCourseText,
                  {
                    color: theme.text,
                  },
                ]}
              >
                Add a new language
              </Text>

              <Text
                style={[
                  styles.addCourseSubtitle,
                  {
                    color: theme.secondaryText,
                  },
                ]}
              >
                Start learning another language
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.secondaryText}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Proficiency Level */}
      <View
        style={[
          styles.card,
          styles.levelCard,
          {
            backgroundColor: theme.background,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <View
            style={[
              styles.sectionIcon,
              {
                backgroundColor: theme.surface,
              },
            ]}
          >
            <Ionicons
              name="school-outline"
              size={21}
              color={theme.primary}
            />
          </View>

          <View style={styles.sectionHeaderText}>
            <Text
              style={[
                styles.cardTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Proficiency Level
            </Text>

            <Text
              style={[
                styles.cardSubtitle,
                {
                  color: theme.secondaryText,
                },
              ]}
            >
              Choose the level that matches you
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
                  styles.levelItem,
                  {
                    backgroundColor: isSelected
                      ? theme.surface
                      : theme.background,
                    borderColor: isSelected
                      ? theme.primary
                      : theme.border,
                  },
                ]}
              >
                <View
                  style={[
                    styles.levelIcon,
                    {
                      backgroundColor: isSelected
                        ? theme.primary
                        : theme.surface,
                    },
                  ]}
                >
                  <Ionicons
                    name={level.icon}
                    size={22}
                    color={
                      isSelected
                        ? "#FFFFFF"
                        : theme.primary
                    }
                  />
                </View>

                <View style={styles.levelInfo}>
                  <View
                    style={styles.levelTitleRow}
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

                    {isSelected && (
                      <View
                        style={[
                          styles.currentLabel,
                          {
                            backgroundColor:
                              theme.primary,
                          },
                        ]}
                      >
                        <Text
                          style={styles.currentLabelText}
                        >
                          Current
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text
                    style={[
                      styles.levelDescription,
                      {
                        color: theme.secondaryText,
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
                      borderColor: isSelected
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

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <StatusBar
        barStyle={
          theme.background === "#121212"
            ? "light-content"
            : "dark-content"
        }
      />

      <SafeAreaView
        style={[
          styles.safeArea,
          {
            backgroundColor: theme.background,
          },
        ]}
      >
        {renderHeader()}

        {/* Tab Navigation */}
        <View
          style={[
            styles.tabBar,
            {
              backgroundColor: theme.surface,
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => setActiveTab("profile")}
            style={[
              styles.tab,
              activeTab === "profile" && {
                backgroundColor: theme.background,
              },
            ]}
          >
            <Ionicons
              name="person-outline"
              size={20}
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
                backgroundColor: theme.background,
              },
            ]}
          >
            <Ionicons
              name="options-outline"
              size={20}
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
                },
              ]}
            >
              Preferences
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {activeTab === "profile"
            ? renderProfileTab()
            : renderPreferencesTab()}

          <View style={styles.footerSpacer} />
        </ScrollView>

        {/* Add Language Modal */}
        <Modal
          visible={showAddLanguageModal}
          animationType="fade"
          transparent
          onRequestClose={() =>
            setShowAddLanguageModal(false)
          }
        >
          <View
            style={[
              styles.overlay,
              {
                backgroundColor:
                  "rgba(0, 0, 0, 0.4)",
              },
            ]}
          >
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
                  backgroundColor: theme.background,
                },
              ]}
            >
              <View style={styles.addModalHeader}>
                <View style={styles.addModalTitleRow}>
                  <View
                    style={[
                      styles.addModalIcon,
                      {
                        backgroundColor:
                          theme.surface,
                      },
                    ]}
                  >
                    <Ionicons
                      name="language-outline"
                      size={22}
                      color={theme.primary}
                    />
                  </View>

                  <View>
                    <Text
                      style={[
                        styles.addModalTitle,
                        {
                          color: theme.text,
                        },
                      ]}
                    >
                      Add a language
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
                      Choose another language to learn
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    setShowAddLanguageModal(false)
                  }
                  activeOpacity={0.7}
                  style={[
                    styles.modalClose,
                    {
                      backgroundColor:
                        theme.surface,
                    },
                  ]}
                >
                  <Ionicons
                    name="close"
                    size={24}
                    color={theme.secondaryText}
                  />
                </TouchableOpacity>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                {availableToAdd.map((language) => (
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
                            theme.surface,
                        },
                      ]}
                    >
                      <Ionicons
                        name="language-outline"
                        size={21}
                        color={theme.primary}
                      />
                    </View>

                    <View style={styles.availableInfo}>
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

                      <Text
                        style={[
                          styles.availableDescription,
                          {
                            color:
                              theme.secondaryText,
                          },
                        ]}
                      >
                        Start learning
                      </Text>
                    </View>

                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color={theme.secondaryText}
                    />
                  </TouchableOpacity>
                ))}
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
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },

  closeButton: {
    padding: 8,
    borderRadius: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
  },

  saveButton: {
    paddingHorizontal: 18,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  tabBar: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 4,
    borderRadius: 12,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  tabText: {
    fontSize: 14,
    fontWeight: "600",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },

  tabContent: {
    gap: 16,
  },

  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  profileCard: {
    paddingBottom: 20,
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 3,
  },

  avatarText: {
    fontSize: 32,
    fontWeight: "700",
  },

  profileName: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  profileMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  profileMetaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  profileMetaText: {
    fontSize: 13,
    fontWeight: "600",
  },

  metaDivider: {
    width: 1,
    height: 16,
  },

  profileFields: {
    gap: 14,
  },

  fieldGroup: {
    gap: 6,
  },

  fieldLabel: {
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 4,
  },

  inputContainer: {
    height: 48,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
  },

  inputIcon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 8,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  sectionIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  sectionHeaderText: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
  },

  cardSubtitle: {
    fontSize: 12,
    marginTop: 3,
    lineHeight: 17,
  },

  courseCard: {
    paddingBottom: 16,
  },

  courseList: {
    gap: 10,
  },

  courseItem: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 13,
    borderWidth: 1,
  },

  courseLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  courseIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  courseDetails: {
    flex: 1,
  },

  courseName: {
    fontSize: 15,
    fontWeight: "700",
  },

  courseStatusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 6,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  courseStatus: {
    fontSize: 12,
  },

  selectedBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  removeButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  addCourseButton: {
    minHeight: 66,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 12,
    borderRadius: 13,
    borderWidth: 1,
    borderStyle: "dashed",
  },

  addCourseCircle: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginRight: 12,
  },

  addCourseInfo: {
    flex: 1,
  },

  addCourseText: {
    fontSize: 14,
    fontWeight: "700",
  },

  addCourseSubtitle: {
    fontSize: 11,
    marginTop: 3,
  },

  levelCard: {
    paddingBottom: 16,
  },

  levelList: {
    gap: 10,
  },

  levelItem: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 11,
    borderRadius: 13,
    borderWidth: 1,
  },

  levelIcon: {
    width: 46,
    height: 46,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  levelInfo: {
    flex: 1,
  },

  levelTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  levelTitle: {
    fontSize: 15,
    fontWeight: "700",
  },

  currentLabel: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 7,
  },

  currentLabelText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "800",
    textTransform: "uppercase",
  },

  levelDescription: {
    fontSize: 12,
    marginTop: 4,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  footerSpacer: {
    height: 20,
  },

  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  addModal: {
    width: "100%",
    maxWidth: 380,
    maxHeight: "70%",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },

  addModalHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  addModalTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },

  addModalIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  addModalTitle: {
    fontSize: 19,
    fontWeight: "800",
  },

  addModalSubtitle: {
    fontSize: 12,
    marginTop: 3,
  },

  modalClose: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  availableLanguage: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
  },

  availableIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  availableInfo: {
    flex: 1,
  },

  availableName: {
    fontSize: 15,
    fontWeight: "700",
  },

  availableDescription: {
    fontSize: 11,
    marginTop: 3,
  },
});
