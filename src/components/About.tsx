import { Badge } from './ui/badge'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind',
  'Reactflow',
  'Zustand',
  'Shadcn',
  'React aria components',
  'Next.js',
  'Tanstack Router',
  'Tanstack Start',
  'Vite',
  'React Native',
  'Nest.js',
  'Redis',
  'React Query',
  'Lodash',
]

function About() {
  return (
    <section
      id={'about'}
      className="px-4 w-5xl grid grid-cols-5 gap-4 border-b space-y-8  "
    >
      <div className="text-start col-span-3">
        <h1 className="sm:text-2xl md:text-4xl">Selva Ganesh</h1>
        <p className="leading-tight text-muted-foreground ">
          Junior Software Engineer
        </p>
      </div>
      <div className="text-start col-span-3">
        <p className="text-base leading-7">
          Hey 👋 I'm a developer, a gamer. Currently building low-code paltform
          at <b>Torus Innovations</b>.
        </p>
      </div>
      <div className="text-start col-span-3">
        <p className="text-base leading-7">
          Hey 👋 I'm a developer, a gamer. Currently building low-code paltform
          at <b>Torus Innovations</b>.
        </p>
      </div>
      <div className="col-span-5 text-start ">
        <h4 className="text-1xl">Specilized in</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              variant={'outline'}
              className="p-2 hover:bg-accent-foreground hover:text-accent "
            >
              {skill}{' '}
            </Badge>
          ))}
        </div>
      </div>

      <div className="col-span-1 row-start-1 col-start-5 overflow-hidden rounded-md">
        <img
          className=" w-full h-full grayscale-100 hover:grayscale-0 transition-all duration-200 hover:scale-110"
          src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  )
}

export default About
