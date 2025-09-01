import { Link, useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'
const sections = ['about', 'experience', 'projects', 'contact']

function Navbar() {
  const [active, setActive] = useState('about')
  const { hash } = useLocation()
  useEffect(() => {
    if (!window) return
    const handleScroll = () => {
      let current = 'about'
      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id
          }
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  useEffect(() => {
    if (hash) {
      scrollToSection(hash)
    }
  }, [hash])

  return (
    <div className="  sticky top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-4 sm:px-6 sm:pt-8   ">
      <header className="w-full max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
        <div className="px-4 py-3 mx-auto transition-all duration-300 border bg-background/35 hover:bg-background/45  rounded-full shadow-2xl  backdrop-blur-2xl border-accent/50 sm:px-6 shadow-black/40 hover:shadow-black/60 w-fit  hover:border-accent">
          <nav className="flex items-center gap-6 text-sm">
            {sections.map((id) => (
              <Link
                key={id}
                to={'.'}
                hash={id}
                className={cn(
                  'transition-all capitalize duration-200 px-3 py-1.5 rounded-full font-medium tracking-tight backdrop-blur-sm  text-white ',
                  {
                    'bg-accent text-accent-foreground ': active === id,
                  },
                )}
              >
                {id}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
