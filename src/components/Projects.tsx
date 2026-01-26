import { useId } from "react";
import { JSX } from "react/jsx-runtime";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type LinksBlock = {
  link: string;
  title: string;
  icon: JSX.Element;
};
type LinkType = LinksBlock[];

type ProjectBlockType = {
  title: string;
  content: string;
  links: LinkType;
};

type ProjectsType = ProjectBlockType[];

const projects: ProjectsType = [
  {
    title: "Torus",
    content: "This is a low code app",
    links: [
      {
        link: "",
        title: "",
        icon: <></>,
      },
    ],
  },
  {
    title: "Torus",
    content: "This is a low code app",
    links: [
      {
        link: "",
        title: "",
        icon: <></>,
      },
    ],
  },
  {
    title: "Torus",
    content: "This is a low code app",
    links: [
      {
        link: "",
        title: "",
        icon: <></>,
      },
    ],
  },
  {
    title: "Torus",
    content: "This is a low code app",
    links: [
      {
        link: "",
        title: "",
        icon: <></>,
      },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="grid w-5xl grid-cols-5 gap-4 px-4">
      <div className="col-span-3 text-start">
        <h1 className="text-2xl">Projects</h1>
      </div>
      <div className="col-span-full grid grid-cols-3 gap-1">
        {projects.map((project) => (
          <ProjectBlock {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectBlock(section: ProjectBlockType) {
  const id = useId();
  return (
    <Card key={id} className="rounded-none transition-colors duration-200 hover:border-primary/20">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{section.content}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          {section.links.map((linkItem, linkIdx) => (
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
        </div>
      </CardContent>
    </Card>
  );
}

export default Projects;
