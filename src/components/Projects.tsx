import { useId } from 'react'
import { JSX } from 'react/jsx-runtime'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

type LinksBlock = {
  link: string
  title: string
  icon: JSX.Element
}
type LinkType = LinksBlock[]

type ProjectBlockType = {
  title: string
  content: string
  links: LinkType
}

type ProjectsType = ProjectBlockType[]

const projects: ProjectsType = [
  {
    title: 'Torus',
    content: 'This is a low code app',
    links: [
      {
        link: '',
        title: '',
        icon: <></>,
      },
    ],
  },
  {
    title: 'Torus',
    content: 'This is a low code app',
    links: [
      {
        link: '',
        title: '',
        icon: <></>,
      },
    ],
  },
  {
    title: 'Torus',
    content: 'This is a low code app',
    links: [
      {
        link: '',
        title: '',
        icon: <></>,
      },
    ],
  },
  {
    title: 'Torus',
    content: 'This is a low code app',
    links: [
      {
        link: '',
        title: '',
        icon: <></>,
      },
    ],
  },
]

function Projects() {
  return (
    <section id="projects" className="px-4 w-5xl grid grid-cols-5 gap-4  ">
      <div className="text-start col-span-3">
        <h1 className="text-2xl">Projects</h1>
      </div>
      <div className=" col-span-full grid grid-cols-3 gap-1">
        {projects.map((project) => (
          <ProjectBlock {...project} />
        ))}
      </div>
    </section>
  )
}

function ProjectBlock(section: ProjectBlockType) {
  const id = useId()
  return (
    <Card
      key={id}
      className=" rounded-none hover:border-primary/20 transition-colors duration-200"
    >
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {section.content}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          {section.links.map((linkItem, linkIdx) => (
            <Button
              key={linkIdx}
              variant="outline"
              size="icon"
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200"
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
  )
}

export default Projects
