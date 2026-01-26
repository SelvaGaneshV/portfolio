import { Briefcase, Calendar } from "lucide-react";
import { useId } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
type ResponsibilityItem = {
  content: string;
  className: string;
};
type ResponsibilityType = (ResponsibilityItem | string)[][];

type ExperienceType = {
  postion: string;
  from: string;
  to: string;
  company: string;
  responsibilty: ResponsibilityType;
};

const EXP: ExperienceType[] = [
  {
    postion: "Junior Software Engineer",
    from: "Oct,2023",
    to: "present",
    company: "Torus Innovations",
    responsibilty: [
      // [
      //   'Developed the frontend UI and core logic for a ',
      //   {
      //     content: 'drag-and-drop low-code platform',
      //     className:
      //       'text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150',
      //   },
      //   ', enabling dynamic layout creation, reliable ',
      //   {
      //     content: 'data saving',
      //     className:
      //       'text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150',
      //   },
      //   ' and robust ',
      //   {
      //     content: 'validation',
      //     className:
      //       'text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150',
      //   },
      //   '.',
      // ],
      [
        "Contributed to a ",
        {
          content: "WYSIWYG editor",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " with advanced capabilities such as ",
        {
          content: "resize",
          className:
            "text-foreground font-semibold hover:text-foreground/80 hover:underline transition-colors duration-150",
        },
        ", ",
        {
          content: "drag",
          className:
            "text-foreground font-semibold hover:text-foreground/80 hover:underline transition-colors duration-150",
        },
        " and ",
        {
          content: "nested grouping",
          className:
            "text-foreground font-semibold hover:text-foreground/80 hover:underline transition-colors duration-150",
        },
        " for rich web editing.",
      ],
      [
        "Integrated ",
        {
          content: "React Flow",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " to design and orchestrate ",
        {
          content: "process flows",
          className:
            "text-foreground font-semibold hover:text-foreground/80 hover:underline transition-colors duration-150",
        },
        " used by generated applications.",
      ],
      [
        "Implemented ",
        {
          content: "JSON mapping",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " between OpenAPI specifications to automate ",
        {
          content: "API generation",
          className:
            "text-foreground font-semibold hover:text-foreground/80 hover:underline transition-colors duration-150",
        },
        " and reduce manual integration work.",
      ],
      [
        "Created a ",
        {
          content: "dynamic JSON editor",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " supporting custom input types like ",
        {
          content: "dropdowns",
          className:
            "text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150",
        },
        ", ",
        {
          content: "icon search",
          className:
            "text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150",
        },
        " and ",
        {
          content: "file upload",
          className:
            "text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150",
        },
        ".",
      ],
      [
        "Implemented ",
        {
          content: "dynamic validation",
          className:
            "text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150",
        },
        " for nested user data structures using ",
        {
          content: "NestJS",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ".",
      ],
      [
        "Used ",
        {
          content: "Socket.IO",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " to implement ",
        {
          content: "artifact locking",
          className:
            "text-foreground font-semibold hover:text-foreground/80 hover:underline transition-colors duration-150",
        },
        ", preventing concurrent edit conflicts.",
      ],
      [
        "Designed and delivered ",
        {
          content: "multi-tenant artifact persistence",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " with strict tenant isolation and access controls.",
      ],
      [
        "Implemented security measures for ",
        {
          content: "multi-tenant users",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", including authentication and authorization safeguards.",
      ],
      [
        "Contributed to an in-platform ",
        {
          content: "Postman-like API testing tool",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " to validate and debug user-generated APIs.",
      ],
      [
        "Implemented event binding for UI elements via ",
        {
          content: "React Flow",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", enabling dynamic runtime interactions in generated apps.",
      ],
      [
        "Authored and maintained core backend APIs for artifact management — including ",
        {
          content: "fetching",
          className:
            "text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150",
        },
        ", ",
        {
          content: "saving",
          className:
            "text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150",
        },
        " and ",
        {
          content: "validation",
          className:
            "text-accent-foreground font-semibold hover:text-accent-foreground/80 hover:underline transition-colors duration-150",
        },
        " across tenants.",
      ],
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="grid w-5xl grid-cols-5 gap-4 px-4">
      <div className="col-span-3 text-start">
        <h1 className="text-2xl">Experience</h1>
      </div>
      <div className="col-span-full flex w-full flex-col items-start gap-1">
        {EXP.map((experience) => (
          <ExperienceBlock {...experience} />
        ))}
      </div>
    </section>
  );
}

function ExperienceBlock(block: ExperienceType) {
  const id = useId();
  return (
    <Card key={id} className="w-[80%] border-none transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="mb-2 text-2xl">{block.postion}</CardTitle>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-muted-foreground">{block.company}</span>
            </div>
          </div>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Calendar className="h-3 w-3" />
            {block.from} - {block.to}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">Key Responsibilities</h3>
        <ul className="space-y-3">
          {block.responsibilty.map((resp, respIdx) => (
            <li key={respIdx} className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {renderResponsibility(resp)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const renderResponsibility = (resp: (ResponsibilityItem | string)[]) => {
  return resp.map((item, idx) => {
    if (typeof item === "string") {
      return <span key={idx}>{item}</span>;
    }
    return (
      <span key={idx} className={item.className}>
        {item.content}
      </span>
    );
  });
};

export default Experience;
