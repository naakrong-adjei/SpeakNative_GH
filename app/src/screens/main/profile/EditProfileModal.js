// components/modals/EditProfileModal.js
import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "../../../context/ThemeContext";
import { LANGUAGES } from "../../../data/languagesData";

const { width } = Dimensions.get("window");

// Levels available for selection
const LEVELS = [
  { id: "beginner", title: "Beginner", icon: "🌱", description: "Just starting out" },
  { id: "intermediate", title: "Intermediate", icon: "🌿", description: "Some experience" },
  { id: "advanced", title: "Advanced", icon: "🌳", description: "Confident speaker" },
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
  
  // Use ref to track if it's the first render to prevent infinite loops
  const isFirstRender = useRef(true);
  
  const [activeLanguages, setActiveLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguageId);
  const [selectedLevel, setSelectedLevel] = useState(currentLevel);
  const [email, setEmail] = useState(currentEmail || "");
  const [username, setUsername] = useState(currentUsername || "");
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [showAddLanguageModal, setShowAddLanguageModal] = useState(false);

  // Initialize state when modal opens - fixed dependencies
  useEffect(() => {
    if (visible) {
      setSelectedLanguage(currentLanguageId);
      setSelectedLevel(currentLevel);
      setEmail(currentEmail || "");
      setUsername(currentUsername || "");
      
      // Only update active languages if it's different to avoid loops
      const newLanguages = userLanguages.length > 0 ? userLanguages : [currentLanguageId];
      // Compare arrays to prevent unnecessary updates
      const currentActive = activeLanguages;
      if (JSON.stringify(currentActive) !== JSON.stringify(newLanguages)) {
        setActiveLanguages(newLanguages);
      }
    }
  }, [visible, currentLanguageId, currentLevel, currentEmail, currentUsername]);

  // Separate effect for userLanguages to avoid dependency issues
  useEffect(() => {
    if (visible && userLanguages.length > 0) {
      const newLanguages = userLanguages;
      const currentActive = activeLanguages;
      if (JSON.stringify(currentActive) !== JSON.stringify(newLanguages)) {
        setActiveLanguages(newLanguages);
      }
    }
  }, [userLanguages, visible]);

  const hasChanges = 
    selectedLanguage !== currentLanguageId || 
    selectedLevel !== currentLevel ||
    email !== currentEmail ||
    username !== currentUsername ||
    JSON.stringify(activeLanguages) !== JSON.stringify(userLanguages);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave({
        target_language: selectedLanguage,
        language_level: selectedLevel,
        email: email,
        username: username,
        user_languages: activeLanguages,
      });
      onClose();
    } catch (error) {
      console.error("Failed to save changes:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleAddNewLanguage = (langId) => {
    if (!activeLanguages.includes(langId)) {
      setActiveLanguages([...activeLanguages, langId]);
    }
    setSelectedLanguage(langId);
    setShowAddLanguageModal(false);
    
    if (onAddLanguage) {
      onAddLanguage(langId);
    }
  };

  const renderProfileTab = () => (
    <View style={styles.tabContent}>
      {/* Username Field */}
      <View style={styles.inputGroup}>
        <Text style={[styles.inputLabel, { color: theme.text }]}>
          <Ionicons name="person-outline" size={18} color={theme.primary} /> Username
        </Text>
        <View style={[styles.inputContainer, { borderColor: theme.border, backgroundColor: theme.surface }]}>
          <TextInput
            style={[styles.input, { color: theme.text }]}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            placeholderTextColor={theme.secondaryText || "#888"}
          />
          {username ? (
            <TouchableOpacity onPress={() => setUsername("")} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color={theme.secondaryText} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* Email Field */}
      <View style={styles.inputGroup}>
        <Text style={[styles.inputLabel, { color: theme.text }]}>
          <Ionicons name="mail-outline" size={18} color={theme.primary} /> Email
        </Text>
        <View style={[styles.inputContainer, { borderColor: theme.border, backgroundColor: theme.surface }]}>
          <TextInput
            style={[styles.input, { color: theme.text }]}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={theme.secondaryText || "#888"}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {email ? (
            <TouchableOpacity onPress={() => setEmail("")} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color={theme.secondaryText} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );

  const renderPreferencesTab = () => {
    const availableToAdd = LANGUAGES.filter((lang) => !activeLanguages.includes(lang.id));

    return (
      <View style={styles.tabContent}>
        {/* Active Learning Courses */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="earth-outline" size={20} color={theme.primary} />
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Active Courses
            </Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.languageScroll}>
            <View style={styles.languageRow}>
              {activeLanguages.map((langId) => {
                const lang = LANGUAGES.find((l) => l.id === langId) || { id: langId, title: langId, flag: "🌍" };
                const isSelected = selectedLanguage === lang.id;
                return (
                  <TouchableOpacity
                    key={lang.id}
                    activeOpacity={0.7}
                    style={[
                      styles.languagePill,
                      {
                        backgroundColor: isSelected ? theme.primary : theme.surface,
                        borderColor: isSelected ? theme.primary : theme.border,
                      },
                    ]}
                    onPress={() => setSelectedLanguage(lang.id)}
                  >
                    <Text style={styles.languageFlag}>{lang.flag || "🌍"}</Text>
                    <Text
                      style={[
                        styles.languageName,
                        {
                          color: isSelected ? "#FFF" : theme.text,
                          fontWeight: isSelected ? "700" : "500",
                        },
                      ]}
                    >
                      {lang.title}
                    </Text>
                    {isSelected && (
                      <Ionicons name="checkmark-circle" size={16} color="#FFF" style={styles.pillCheck} />
                    )}
                  </TouchableOpacity>
                );
              })}

              {/* Add New Language Button */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.addLanguagePill,
                  {
                    borderColor: theme.primary,
                    backgroundColor: theme.surface,
                  },
                ]}
                onPress={() => setShowAddLanguageModal(true)}
              >
                <Ionicons name="add" size={18} color={theme.primary} />
                <Text style={[styles.addLanguageText, { color: theme.primary }]}>
                  Add Course
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Level Selection */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="school-outline" size={20} color={theme.primary} />
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Proficiency Level
            </Text>
          </View>

          <View style={styles.levelGrid}>
            {LEVELS.map((level) => {
              const isSelected = selectedLevel === level.id;
              return (
                <TouchableOpacity
                  key={level.id}
                  activeOpacity={0.7}
                  style={[
                    styles.levelCard,
                    {
                      backgroundColor: isSelected ? theme.primary + "15" : theme.surface,
                      borderColor: isSelected ? theme.primary : theme.border,
                      borderWidth: isSelected ? 2 : 1.5,
                    },
                  ]}
                  onPress={() => setSelectedLevel(level.id)}
                >
                  <View style={styles.levelCardContent}>
                    <Text style={styles.levelCardIcon}>{level.icon}</Text>
                    <Text
                      style={[
                        styles.levelCardTitle,
                        {
                          color: isSelected ? theme.primary : theme.text,
                          fontWeight: isSelected ? "700" : "600",
                        },
                      ]}
                    >
                      {level.title}
                    </Text>
                    <Text
                      style={[
                        styles.levelCardDescription,
                        { color: theme.secondaryText || "#888" },
                      ]}
                    >
                      {level.description}
                    </Text>
                    {isSelected && (
                      <View style={[styles.levelCheckmark, { backgroundColor: theme.primary }]}>
                        <Ionicons name="checkmark" size={12} color="#FFF" />
                      </View>
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
      <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.modalHeader, { borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.modalTitle, { color: theme.text }]}>Edit Profile</Text>
          <TouchableOpacity 
            onPress={handleSave} 
            disabled={saving || !hasChanges}
            style={[
              styles.saveButton,
              { 
                backgroundColor: hasChanges ? theme.primary : theme.border,
                opacity: (!hasChanges || saving) ? 0.6 : 1,
              },
            ]}
          >
            {saving ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.saveButtonText}>Save</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={[styles.tabsContainer, { borderBottomColor: theme.border }]}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "profile" && [styles.activeTab, { borderBottomColor: theme.primary }],
            ]}
            onPress={() => setActiveTab("profile")}
          >
            <Ionicons 
              name="person-outline" 
              size={20} 
              color={activeTab === "profile" ? theme.primary : theme.secondaryText} 
            />
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTab === "profile" ? theme.primary : theme.secondaryText,
                  fontWeight: activeTab === "profile" ? "700" : "500",
                },
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "preferences" && [styles.activeTab, { borderBottomColor: theme.primary }],
            ]}
            onPress={() => setActiveTab("preferences")}
          >
            <Ionicons 
              name="settings-outline" 
              size={20} 
              color={activeTab === "preferences" ? theme.primary : theme.secondaryText} 
            />
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTab === "preferences" ? theme.primary : theme.secondaryText,
                  fontWeight: activeTab === "preferences" ? "700" : "500",
                },
              ]}
            >
              Preferences
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          showsVerticalScrollIndicator={false}
        >
          {activeTab === "profile" ? renderProfileTab() : renderPreferencesTab()}
        </ScrollView>

        {/* Footer */}
        <View style={[styles.footer, { borderTopColor: theme.border, backgroundColor: theme.background }]}>
          <View style={styles.footerStats}>
            <View style={styles.footerStat}>
              <Ionicons name="language" size={16} color={theme.secondaryText} />
              <Text style={[styles.footerStatText, { color: theme.secondaryText }]}>
                {LANGUAGES.find(l => l.id === selectedLanguage)?.title || "Not selected"}
              </Text>
            </View>
            <View style={[styles.footerDivider, { backgroundColor: theme.border }]} />
            <View style={styles.footerStat}>
              <Ionicons name="school" size={16} color={theme.secondaryText} />
              <Text style={[styles.footerStatText, { color: theme.secondaryText }]}>
                {LEVELS.find(l => l.id === selectedLevel)?.title || "Not selected"}
              </Text>
            </View>
          </View>
        </View>

        {/* Add Language Modal */}
        <Modal
          visible={showAddLanguageModal}
          animationType="fade"
          transparent
          onRequestClose={() => setShowAddLanguageModal(false)}
        >
          <View style={styles.overlay}>
            <TouchableOpacity 
              style={StyleSheet.absoluteFill} 
              activeOpacity={1} 
              onPress={() => setShowAddLanguageModal(false)} 
            />
            <View style={[styles.addLanguageCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <View style={styles.addModalHeader}>
                <Text style={[styles.addModalTitle, { color: theme.text }]}>Add a New Language</Text>
                <TouchableOpacity onPress={() => setShowAddLanguageModal(false)}>
                  <Ionicons name="close" size={24} color={theme.secondaryText} />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.availableList} showsVerticalScrollIndicator={false}>
                {LANGUAGES.filter((lang) => !activeLanguages.includes(lang.id)).map((lang) => (
                  <TouchableOpacity
                    key={lang.id}
                    style={[styles.availableItem, { borderBottomColor: theme.border }]}
                    onPress={() => handleAddNewLanguage(lang.id)}
                  >
                    <Text style={styles.availableFlag}>{lang.flag || "🌍"}</Text>
                    <Text style={[styles.availableTitle, { color: theme.text }]}>{lang.title}</Text>
                    <Ionicons name="chevron-forward" size={18} color={theme.secondaryText} />
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
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  closeButton: {
    padding: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  saveButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 60,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 14,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  tabContent: {
    gap: 24,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
  clearButton: {
    padding: 4,
  },
  section: {
    gap: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  languageScroll: {
    marginHorizontal: -4,
  },
  languageRow: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 4,
  },
  languagePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1.5,
  },
  addLanguagePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1.5,
    borderStyle: "dashed",
  },
  addLanguageText: {
    fontSize: 14,
    fontWeight: "600",
  },
  languageFlag: {
    fontSize: 20,
  },
  languageName: {
    fontSize: 14,
  },
  pillCheck: {
    marginLeft: 2,
  },
  levelGrid: {
    gap: 10,
  },
  levelCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    position: "relative",
  },
  levelCardContent: {
    gap: 4,
  },
  levelCardIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  levelCardTitle: {
    fontSize: 16,
  },
  levelCardDescription: {
    fontSize: 13,
  },
  levelCheckmark: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  footerStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  footerStat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerStatText: {
    fontSize: 13,
    fontWeight: "500",
  },
  footerDivider: {
    width: 1,
    height: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  addLanguageCard: {
    width: "100%",
    maxWidth: 340,
    maxHeight: 400,
    borderRadius: 20,
    borderWidth: 2,
    padding: 18,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  addModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  addModalTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  availableList: {
    marginTop: 8,
  },
  availableItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  availableFlag: {
    fontSize: 22,
  },
  availableTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
  },
});