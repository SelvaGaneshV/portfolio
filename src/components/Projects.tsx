import { Github, Globe, Linkedin } from "lucide-react";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type LinksBlock = {
  link: string;
  title: string;
  icon: ReactNode;
};
type LinkType = LinksBlock[];

type ProjectBlockType = {
  title: string;
  content: string;
  icon?: string;
  tags?: string[];
  status?: string;
  links?: LinkType;
};

type ProjectsType = ProjectBlockType[];

const projects: ProjectsType = [
  {
    title: "Torus",

    content:
      "Enterprise-grade low-code platform for building web & mobile apps with no vendor lock-in. Sourcecode-available, citizen-scale development.",
    tags: [
      "React",
      "React flow",
      "WYSWYG",
      "Vite",
      "TypeScript",
      "NestJS",
      "Redis",
      "MongoDB",
    ],
    status: "Live",
    links: [
      {
        link: "https://toruslowcode.com/",
        title: "toruslowcode.com",
        icon: <Globe />,
      },
      {
        link: "https://www.linkedin.com/products/global-software-solutions-tvl-pvt-ltd--torus-low-code-platform/",
        title: "Torus LinkedIn",
        icon: <Linkedin />,
      },
    ],
  },

  {
    title: "ColorCraft Paint Visualizer",
    content:
      "Web app for visualizing paint colors on building regions with realistic texture preservation.",
    tags: ["React", "Canvas API", "Vercel"],
    status: "Live",
    links: [
      {
        link: "https://paint-visualizer-chi.vercel.app/",
        icon: <Globe />,
        title: "ColorCraft Paint Visualizer Website",
      },
      {
        link: `${import.meta.env.VITE_GITHUB_URL}paint-visualizer`,
        icon: <Github />,
        title: "repo",
      },
    ],
  },
  {
    title: "Vezal.db",
    content:
      "Visual database exploration with ER diagrams and table views. Built for developers who need to move fast.",
    tags: [
      "React",
      "TanStack Start",
      "Hono",
      "Postgres",
      "TypeScript",
      "Drizzle",
      "Turborepo",
    ],
    status: "In Progress",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-5xl flex-col gap-6 px-4"
    >
      <div className="text-start">
        <h2 className="text-2xl font-semibold sm:text-3xl">Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectBlock key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectBlock(section: ProjectBlockType) {
  return (
    <Card className="flex h-full w-full flex-col transition-all duration-200 hover:border-primary/40 hover:shadow-md">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            {section.icon && (
              <img
                src={section.icon}
                alt={`${section.title} logo`}
                className="h-6 w-6 rounded object-contain"
              />
            )}
            <CardTitle className="text-base font-semibold sm:text-lg">
              {section.title}
            </CardTitle>
          </div>
          {section.status && (
            <Badge variant="secondary" className="shrink-0 text-xs">
              {section.status}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {section.content}
        </p>
        {section.tags && section.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {section.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-2 py-0.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2">
        {section?.links?.map((linkItem, linkIdx) => (
          <Button
            key={linkIdx}
            variant="outline"
            size="icon"
            className="transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a
              href={linkItem.link}
              aria-label={linkItem.title}
              target="_blank"
              rel="noopener noreferrer"
              title={linkItem.title}
            >
              {linkItem.icon}
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}

export default Projects;
