import { createFileRoute } from '@tanstack/react-router'
import About from '~/components/About'
import Navbar from '~/components/Navbar'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="flex flex-col items-center justify-start gap-15 min-h-screen ">
      <Navbar />
      <About />
    </main>
  )
}
