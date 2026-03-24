import { createClientOnlyFn, createIsomorphicFn } from "@tanstack/react-start";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const themeKey = "theme";

/* ------------------ Types ------------------ */

type ThemeMode = "light" | "dark" | "auto";

const isThemeMode = (value: unknown): value is ThemeMode =>
  value === "light" || value === "dark" || value === "auto";

/* ------------------ Storage ------------------ */

const getStoredThemeMode = createIsomorphicFn()
  .server((): ThemeMode => "auto")
  .client((): ThemeMode => {
    try {
      const stored = localStorage.getItem(themeKey);
      return isThemeMode(stored) ? stored : "auto";
    } catch {
      return "auto";
    }
  });

const setStoredThemeMode = createClientOnlyFn((theme: ThemeMode) => {
  try {
    localStorage.setItem(themeKey, theme);
  } catch {}
});

/* ------------------ System Theme ------------------ */

const getSystemTheme = createIsomorphicFn()
  .server((): "light" | "dark" => "light")
  .client(
    (): "light" | "dark" =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
  );

/* ------------------ DOM helpers ------------------ */

const updateThemeClass = createClientOnlyFn((themeMode: ThemeMode) => {
  const root = document.documentElement;

  root.classList.remove("light", "dark", "auto");

  const resolved = themeMode === "auto" ? getSystemTheme() : themeMode;
  root.classList.add(resolved);

  if (themeMode === "auto") {
    root.classList.add("auto");
  }
});

const getNextTheme = createClientOnlyFn((current: ThemeMode): ThemeMode => {
  if (current === "dark") return "light";
  return "dark";
});

/* ------------------ Context ------------------ */

type ThemeContextProps = {
  themeMode: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

/* ------------------ Provider ------------------ */

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getStoredThemeMode);

  // Sync state with localStorage after hydration (server renders "auto", client may differ)
  useEffect(() => {
    const stored = getStoredThemeMode();
    if (stored !== themeMode) {
      setThemeMode(stored);
    }
  }, []);

  // Listen for system theme changes in auto mode
  useEffect(() => {
    if (themeMode !== "auto") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      updateThemeClass("auto");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [themeMode]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeMode(newTheme);
    setStoredThemeMode(newTheme);
    updateThemeClass(newTheme);
  };

  const toggleMode = () => {
    setTheme(getNextTheme(themeMode));
  };

  return (
    <ThemeContext.Provider
      value={{ themeMode, setTheme, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/* ------------------ Hooks ------------------ */

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

