import { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'works', label: 'Works' },
] as const

const NAV_IDS = NAV_ITEMS.map((n) => n.id)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(NAV_IDS)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <span className="text-sm text-white/30 font-mono tracking-widest">佐藤 康樹</span>
      <nav className="flex gap-8">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            href={`#${item.id}`}
            label={item.label}
            isActive={activeId === item.id}
            onClick={() => scrollTo(item.id)}
          />
        ))}
      </nav>
    </header>
  )
}
