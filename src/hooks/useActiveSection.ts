import { useEffect, useState } from "react";

export function useActiveSection(sections: string[], rootMargin = "-40% 0px -40% 0px") {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, rootMargin]);

  return active;
}
