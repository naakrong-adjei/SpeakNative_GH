import { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/theme";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const systemTheme = useColorScheme();
  const [mode, setMode] = useState("system");

  const theme = useMemo(() => {
    if (mode === "system") {
      return systemTheme === "dark" ? Colors.dark : Colors.light;
    }

    return mode === "dark" ? Colors.dark : Colors.light;
  }, [mode, systemTheme]);

  const isDark =
    mode === "system"
      ? systemTheme === "dark"
      : mode === "dark";

  const toggleTheme = () => {
    setMode((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        setMode,
        toggleTheme,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}