import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
const sections = ["about", "experience", "projects", "contact"];

function Navbar() {
  const { hash } = useLocation();
  const navigate = useNavigate({ from: "/" });
  const [active, setActive] = useState(hash || "about");
  useEffect(() => {
    if (!window) return;
    const handleScroll = () => {
      let current = "about";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // const scrollToSection = (id: string) => {
  //   const section = document.getElementById(id)
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' })
  //     setActive(id)
  //   }
  // }
  // useEffect(() => {
  //   if (hash) {
  //     scrollToSection(hash)
  //   }
  // }, [hash])

  return (
    <div className="sticky top-0 right-0 left-0 z-50 flex justify-center px-4 pt-4 pb-4 sm:px-6 sm:pt-8">
      <header className="w-full max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
        <div className="mx-auto w-fit rounded-full border border-accent/50 bg-background/35 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-300 hover:border-accent hover:bg-background/45 hover:shadow-black/60 sm:px-6">
          <nav className="flex items-center gap-6 text-sm">
            {sections.map((id) => (
              <Button
                key={id}
                onClick={() => {
                  navigate({ hash: id, viewTransition: true });
                }}
                variant={"ghost"}
                className={cn(
                  "transition-all capitalize duration-200 px-3 py-1.5 rounded-full font-medium tracking-tight backdrop-blur-sm  text-white ",
                  {
                    "bg-accent text-accent-foreground ": active === id,
                  },
                )}
              >
                {id}
              </Button>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
