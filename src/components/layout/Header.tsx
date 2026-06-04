import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { id: 'works', label: 'Works' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
] as const

export default function Header() {
  const [mobOpen, setMobOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const mobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id)
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="nav-logo" href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            佐藤 康樹
          </a>
          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="hbg"
            id="hbg"
            aria-label="メニュー"
            onClick={() => setMobOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div ref={mobRef} className={`mob-menu${mobOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
