import { createFileRoute } from '@tanstack/react-router'
import About from '~/components/About'
import Experience from '~/components/Experience'
import Navbar from '~/components/Navbar'
import Projects from '~/components/Projects'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="flex flex-col items-center justify-start gap-15 min-h-screen ">
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </main>
  )
}
