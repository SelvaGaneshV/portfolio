import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "TailwindCSS",
  "Reactflow",
  "Zustand",
  "React aria components",
  "Shadcn",
  "Vite",
  "Tanstack Router",
  "Tanstack Start",
  "Tanstack Query",
  "Nest.js",
  "Hono",
  "Microservices",
  "Drizzle",
  "SQLite",
  "Redis",
  "Socket.io",
  "Lodash",
];

function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv_2026.pdf";
    link.download = "Selva_Ganesh_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10">
      {/* Top content */}
      <div className="grid grid-cols-1 gap-8 border-b py-6 md:grid-rows-6">
        {/* Heading */}
        <div className="col-span-1 text-start md:row-span-2">
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Selva Ganesh</h1>
          <p className="mt-2 leading-tight text-muted-foreground">Software Engineer</p>
        </div>

        <div className="col-span-1 text-start md:row-span-3">
          <p className="text-justify text-base leading-7">
            Hi, I'm a developer 👨‍💻 working on a low-code platform at <b>Torus Innovations</b>. I
            love building things that make life easier and more fun 🚀.
          </p>

          <br />

          <p className="text-justify text-base leading-7">
            When I'm not coding, you'll usually find me vibing to music 🎵 or gaming 🎮.
          </p>

          <div className="mt-3 flex items-center gap-1 text-sm text-accent-foreground/60">
            <MapPin size="0.875rem" />
            <span>Tirunelveli, Tamil Nadu,India</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:row-span-1">
          <Button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let’s work together
          </Button>

          <Button variant="outline" onClick={handleDownload}>
            Download CV
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-b py-6 text-start">
        <h4 className="text-lg font-bold">Specialized in</h4>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="px-3 py-1.5 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
