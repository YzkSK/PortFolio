import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Works from './components/sections/Works'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'

export default function App() {
  return (
    <main className="page">
      <div className="slip">佐藤 康樹 ポートフォリオ</div>
      <Hero />
      <Works />
      <Skills />
      <Education />
      <Footer />
    </main>
  )
}
