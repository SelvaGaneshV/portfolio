import { MapPin } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'TailwindCSS',
  'Reactflow',
  'Zustand',
  'React aria components',
  'Shadcn',
  'Vite',
  'Tanstack Router',
  'Tanstack Start',
  'React Query',
  'React Native',
  'Nest.js',
  'Drizzle',
  'SQLite',
  'Redis',
  'Socket.io',
  'Lodash',
  'Microservices',
]

function About() {
  return (
    <section id={'about'} className="px-4 w-5xl flex  flex-col  gap-4   ">
      <div className="grid  w-full grid-cols-5 gap-10 border-b py-6  ">
        <div className="text-start col-span-3">
          <h1 className="sm:text-2xl md:text-4xl">Selva Ganesh</h1>
          <p className="leading-tight text-muted-foreground ">
            Junior Software Engineer
          </p>
        </div>
        <div className="text-start col-span-4">
          <p className="text-base text-justify leading-7">
            Hi, I'm a developer 👨‍💻 working on a low-code platform at{' '}
            <b>Torus Innovations</b>. I love building things that make life
            easier and more fun 🚀.
          </p>
          <br />
          <p className="text-base text-justify leading-7">
            When I'm not coding, you'll usually find me vibing to music 🎵 or
            gaming 🎮.
          </p>
          <div className="text-start col-span-3 flex gap-1 text-sm text-accent-foreground/60  items-center ">
            <MapPin className="text-accent-foreground/60" size={'0.875rem'} />{' '}
            Tirunelveli, Tamil Nadu,India
          </div>
        </div>

        <div className="col-span-1 row-start-1 col-start-5 overflow-hidden rounded-md">
          <img
            className=" w-full h-full grayscale-100 hover:grayscale-0 transition-all duration-200 hover:scale-110"
            src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="col-span-5 flex flex-row gap-2">
          <Button>{"Let's work together"}</Button>
          <Button variant={'outline'}>Download CV</Button>
        </div>
      </div>
      <div className=" text-start flex flex-col gap-4 py-6 border-b">
        <h4 className="text-l font-bold">Specilized in</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant={'outline'}
              className="p-2 hover:bg-accent-foreground hover:text-accent "
            >
              {skill}{' '}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
