import { createClientOnlyFn, createIsomorphicFn } from "@tanstack/react-start";
import * as React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";

const themeKey = "theme";

/* ------------------ Types ------------------ */

type ThemeMode = "light" | "dark" | "auto";
type ResolvedTheme = "light" | "dark";

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
  .server((): ResolvedTheme => "light")
  .client(
    (): ResolvedTheme =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
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
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

const getResolvedThemeFromDOM = createIsomorphicFn()
  .server((): ResolvedTheme => "light")
  .client(
    (): ResolvedTheme => (document.documentElement.classList.contains("dark") ? "dark" : "light"),
  );

/* ------------------ Provider ------------------ */

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getStoredThemeMode);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(getResolvedThemeFromDOM);

  // Listen for system theme changes in auto mode
  useEffect(() => {
    if (themeMode !== "auto") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      updateThemeClass("auto");
      setResolvedTheme(getSystemTheme());
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [themeMode]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeMode(newTheme);
    setStoredThemeMode(newTheme);
    updateThemeClass(newTheme);
    setResolvedTheme(newTheme === "auto" ? getSystemTheme() : newTheme);
  };

  const toggleMode = () => {
    setTheme(getNextTheme(themeMode));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, resolvedTheme, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* ------------------ Hooks ------------------ */

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Returns the class string for <html>
const getHtmlClass = createIsomorphicFn()
  .server(() => "")
  .client(() => document.documentElement.className);

export function useHtmlClass(): string {
  return getHtmlClass();
}
