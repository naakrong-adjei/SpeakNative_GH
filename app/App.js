import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ClerkProvider } from "@clerk/clerk-expo";
import RootNavigator from "./src/navigation/RootNavigator"
import { Toaster } from "sonner-native";
import { ThemeProvider } from "./src/context/ThemeContext"


const publishableKey =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY"
  );
}



export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_KEY}>
        <ThemeProvider>
          <SafeAreaProvider>
            <RootNavigator />
            <Toaster />
          </SafeAreaProvider>
        </ThemeProvider>
      </ClerkProvider>
    </GestureHandlerRootView>
  );
}


