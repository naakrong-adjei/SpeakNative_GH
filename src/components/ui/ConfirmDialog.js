import { Modal, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";

export default function ConfirmDialog({
  visible,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onCancel,
  onConfirm,
  destructive = false,
}) {
  const { theme } = useTheme();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onCancel} />

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surface || "#FFFFFF",
              borderColor: theme.border || "#E5E5E5",
            },
          ]}
        >
          <ThemedText style={[styles.title, { color: theme.text }]}>
            {title}
          </ThemedText>

          {description ? (
            <ThemedText style={[styles.description, { color: theme.secondaryText }]}>
              {description}
            </ThemedText>
          ) : null}

          <View style={styles.actions}>
            <Button
              title={confirmLabel}
              onPress={onConfirm}
              variant="primary"
              status={destructive ? "error" : "default"}
            />

            <Button
              title={cancelLabel}
              onPress={onCancel}
              variant="secondary"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    width: "85%",
    maxWidth: 340,
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderBottomWidth: 6,
    alignItems: "center",
    zIndex: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 4,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 4,
  },
  actions: {
    width: "100%",
    gap: 10,
    marginTop: 20,
  },
});