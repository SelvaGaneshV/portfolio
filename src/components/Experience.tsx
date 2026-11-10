import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
type ResponsibilityItem = {
  content: string;
  className: string;
};

interface Company {
  name: string;
  link: string;
  icon?: string;
}

type ResponsibilityType = (ResponsibilityItem | string)[][];

type ExperienceType = {
  postion: string;
  from: string;
  to: string;
  company: Company;
  responsibilty: ResponsibilityType;
};

const highlight = (content: string): ResponsibilityItem => ({
  content,
  className:
    "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
});

const EXP: ExperienceType[] = [
  {
    postion: "Software Development Engineer",
    from: "Aug 2026",
    to: "Present",
    company: {
      link: "https://aggtechnology.in/",
      name: "AGG Technology Private Limited",
    },
    responsibilty: [
      [
        "Developing a multi-sport tournament management platform across ",
        highlight("four TypeScript applications"),
        " — a NestJS backend, two Next.js web apps, and an Expo/React Native mobile app — covering live scoring, registrations, auctions, and leaderboards.",
      ],
      [
        "Hardened authentication platform-wide with global JWT, tournament-role, and rate-limiting guard chains across ",
        highlight("35 NestJS controllers"),
        ", adding single-use refresh-token rotation and cross-tab token refresh via Web Locks and BroadcastChannel.",
      ],
      [
        "Architected an external developer API of ",
        highlight("31 REST endpoints"),
        " with SHA-256-hashed keys, path/method scopes, monthly quotas, and usage metering — validated by 57 Jest tests and external-only OpenAPI documentation.",
      ],
      [
        "Eliminated concurrent score-write races across four sport engines with TypeORM transactions and ",
        highlight("11 pessimistic row locks"),
        ", replacing 1-second polling with per-match timers over a singleton Socket.IO gateway.",
      ],
      [
        "Delivered tournament registration end-to-end — a NestJS cart service, a Next.js wizard with DUPR OAuth autofill and PDF receipts, and a React Native checkout — backed by a ",
        highlight("391-line PostgreSQL recursive CTE"),
        " that deduplicates players across three identity schemes.",
      ],
      [
        "Engineered an ",
        highlight("offline-capable React Native data layer"),
        " with TanStack Query persistence, a typed axios client over 41 REST endpoints, and Socket.IO-driven live-score cache invalidation across a 48-route app.",
      ],
      [
        "Built a real-time cricket and pickleball auction platform — a ",
        highlight("three.js WebGL arena"),
        ", public LED stage, and organizer console wired to 9 WebSocket events with an 8-second bid watchdog.",
      ],
      [
        "Shipped tournament email broadcasting with recipient dedupe, HTML sanitization, and chunked SMTP delivery, alongside a ",
        highlight("config-driven leaderboard engine with 18 ranking criteria"),
        ".",
      ],
    ],
  },
  {
    postion: "Software Engineer",
    from: "Oct 2023",
    to: "Apr 2026",
    company: {
      link: "https://toruslowcode.com/",
      name: "Torus Innovations",
    },
    responsibilty: [
      [
        "Core contributor to the ",
        {
          content: "next-generation Torus Low Code Platform",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", an AI-enabled, event-driven application development platform used by ",
        {
          content: "GSS Tech Group",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " to build and deploy banking and payment solutions for ",
        {
          content: "financial institutions across the UAE, Kenya, and 10+ countries",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ".",
      ],
      [
        "Built the platform's ",
        {
          content: "entire frontend",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", enabling users to visually design applications across ",
        {
          content: "multiple fabric types",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " (UI, Data, Process, API, and Integration fabrics), each containing domain-specific sub-fabrics with independently managed artifacts and custom handling logic.",
      ],
      [
        "Developed the platform's ",
        {
          content: "WYSIWYG layout editor",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " with ",
        {
          content: "drag-and-drop",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", ",
        {
          content: "resize",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", ",
        {
          content: "alignment guides",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " and ",
        {
          content: "nested grouping",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", used to build 10+ production screens for client banking applications.",
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
          content: "process flows and event bindings",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", enabling dynamic runtime interactions in generated applications.",
      ],
      [
        "Implemented ",
        {
          content: "graph-processing algorithms",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " including circular dependency detection, cross-node validation, and nested mutation handling, ",
        {
          content: "eliminating invalid execution states",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " across the workflow engine.",
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
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " and reduce manual integration work.",
      ],
      [
        "Designed a ",
        {
          content: "schema-driven plugin system",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " allowing administrators to define new workflow node types via ",
        {
          content: "JSON schema uploads",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", consumed by a ",
        {
          content: "dynamic JSON editor",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " with custom input types like ",
        {
          content: "dropdowns",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        ", ",
        {
          content: "icon search",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " and ",
        {
          content: "file upload",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " — enabling runtime extensibility without frontend redeployment.",
      ],
      [
        "Built ",
        {
          content: "real-time multi-user collaboration",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " with Socket.IO, implementing ",
        {
          content: "artifact-level locking",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " across 20+ concurrently edited artifacts, enabling conflict-free editing across all fabric types.",
      ],
      [
        "Designed and delivered ",
        {
          content: "multi-tenant artifact persistence",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " with strict tenant isolation, ",
        {
          content: "authentication",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " and ",
        {
          content: "authorization",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " safeguards.",
      ],
      [
        "Authored and maintained ",
        {
          content: "35+ RESTful APIs",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " with NestJS for artifact management, workflow orchestration, ",
        {
          content: "dynamic validation",
          className:
            "text-primary font-semibold hover:text-primary/80 hover:underline transition-colors duration-150",
        },
        " and cross-system integrations.",
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
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="mx-auto flex max-w-5xl flex-col gap-6 px-4">
      <div className="text-start">
        <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
      </div>

      <div className="flex w-full flex-col gap-4">
        {EXP.map((experience, idx) => (
          <ExperienceBlock key={idx} {...experience} />
        ))}
      </div>
    </section>
  );
}

function ExperienceBlock(block: ExperienceType) {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <CardTitle className="mb-2 text-xl sm:text-2xl">{block.postion}</CardTitle>

            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <a
                href={block.company.link}
                className="font-medium text-muted-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {block.company.name}
              </a>
            </div>
          </div>

          <Badge variant="secondary" className="flex w-fit items-center gap-2">
            <Calendar className="h-3 w-3" />
            {block.from} – {block.to}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-4 sm:pt-6">
        <h3 className="mb-3 text-xs font-semibold tracking-wide uppercase sm:text-sm">
          Key Responsibilities
        </h3>

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
