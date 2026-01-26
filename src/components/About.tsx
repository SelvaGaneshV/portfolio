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
  return (
    <section id={"about"} className="flex w-5xl flex-col gap-4 px-4">
      <div className="grid w-full grid-cols-5 gap-10 border-b py-6">
        <div className="col-span-3 text-start">
          <h1 className="sm:text-2xl md:text-4xl">Selva Ganesh</h1>
          <p className="leading-tight text-muted-foreground">Full Stack Developer</p>
        </div>
        <div className="col-span-4 text-start">
          <p className="text-justify text-base leading-7">
            Hi, I'm a developer 👨‍💻 working on a low-code platform at <b>Torus Innovations</b>. I
            love building things that make life easier and more fun 🚀.
          </p>
          <br />
          <p className="text-justify text-base leading-7">
            When I'm not coding, you'll usually find me vibing to music 🎵 or gaming 🎮.
          </p>
          <div className="col-span-3 flex items-center gap-1 text-start text-sm text-accent-foreground/60">
            <MapPin className="text-accent-foreground/60" size={"0.875rem"} /> Tirunelveli, Tamil
            Nadu,India
          </div>
        </div>

        {/* <div className="col-span-1 row-start-1 col-start-5 overflow-hidden rounded-md">
          <img
            className=" w-full h-full grayscale-100 hover:grayscale-0 transition-all duration-200 hover:scale-110"
            src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div> */}
        <div className="col-span-5 flex flex-row gap-2">
          <Button>{"Let's work together"}</Button>
          <Button variant={"outline"}>Download CV</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-b py-6 text-start">
        <h4 className="text-l font-bold">Specilized in</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant={"outline"}
              className="p-2 hover:bg-accent-foreground hover:text-accent"
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
