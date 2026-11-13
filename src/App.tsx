import { useRef } from 'react'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Works from './components/sections/Works'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

export default function App() {
  const main = useRef<HTMLElement>(null)
  useRevealOnScroll(main, '.hero, .work, h2, .can')
  return (
    <main className="page" ref={main}>
      <div className="slip">佐藤 康樹 ポートフォリオ</div>
      <Hero />
      <Works />
      <Skills />
      <Education />
      <Footer />
    </main>
  )
}
