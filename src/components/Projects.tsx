import { Github, Globe, Linkedin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type LinksBlock = {
  link: string;
  title: string;
  icon: React.JSX.Element;
};
type LinkType = LinksBlock[];

type ProjectBlockType = {
  title: string;
  content: string;
  icon?: string;
  links?: LinkType;
};

type ProjectsType = ProjectBlockType[];

const projects: ProjectsType = [
  {
    title: "Torus",
    icon: "https://toruslowcode.com/wp-content/uploads/2023/03/logo-new.svg",
    content:
      "Torus Is A General Purpose, Enterprise Grade, Citizenscale Low Code Application Development Platform That Delivers No Lock In Sourcecode Available Beautiful Web & Mobile Application",
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
      "A web application for visualizing paint colors on building regions with somewhat realistic texture preservation.",
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
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10"
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold sm:text-3xl">Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project, idx) => (
          <ProjectBlock key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectBlock(section: ProjectBlockType) {
  return (
    <Card className="flex h-full w-full  flex-col   transition-colors duration-200 hover:border-primary/20">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <CardDescription className="text-sm leading-relaxed">
          {section.content}
        </CardDescription>
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
