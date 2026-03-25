import { createFileRoute } from "@tanstack/react-router";
import About from "~/components/About";
import Contact from "~/components/Contact";
import Experience from "~/components/Experience";
import Navbar from "~/components/Navbar";
import Projects from "~/components/Projects";
import { Separator } from "~/components/ui/separator";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10">
      <Navbar />
      <About />
      <Separator className="max-w-5xl px-4" />
      <Experience />
      <Separator className="max-w-5xl px-4" />
      <Projects />
      <Separator className="max-w-5xl px-4" />
      <Contact />
    </main>
  );
}
