import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useActiveSection } from "~/hooks/useActiveSection";
import { cn } from "~/lib/utils";
import { ThemeToggleButton } from "./ThemeToogle";
import { Button } from "./ui/button";
const sections = ["about", "experience", "projects"];

function Navbar() {
  const { hash } = useLocation();
  const navigate = useNavigate({ from: "/" });

  const active = useActiveSection(sections);

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [hash]);

  return (
    <div className="sticky top-0 right-0 left-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-8">
      <header className="w-full max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
        <div className="mx-auto flex w-full rounded-full border border-accent/50 px-2 py-2 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-background/45 hover:shadow-black/60 sm:w-fit sm:px-6 sm:py-3">
          <nav className="scrollbar-none flex items-center gap-2 overflow-x-auto text-sm whitespace-nowrap sm:gap-6">
            {sections.map((id) => (
              <Button
                key={id}
                onClick={() => {
                  navigate({ hash: id, viewTransition: true });
                }}
                variant="ghost"
                className={cn(
                  `shrink-0 rounded-full px-3 py-2 font-medium tracking-tight capitalize transition-all duration-200`,
                  {
                    "bg-accent text-accent-foreground": active === id,
                  },
                )}
              >
                {id}
              </Button>
            ))}
          </nav>
          <ThemeToggleButton />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
