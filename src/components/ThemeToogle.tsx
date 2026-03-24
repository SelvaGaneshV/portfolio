import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export function ThemeToggleButton() {
  const { themeMode, toggleMode } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      aria-label="Toggle theme"
      className="rounded-full"
    >
      {themeMode === "auto" ? (
        <SunMoon className="h-5 w-5" />
      ) : themeMode === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
