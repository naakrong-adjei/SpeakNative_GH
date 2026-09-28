import { ActivityIndicator, View } from "react-native";
import { useTheme } from "../src/context/ThemeContext"

export default function OAuthCallback() {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
}