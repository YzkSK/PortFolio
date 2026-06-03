import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Works from './components/sections/Works'

export default function App() {
  return (
    <div className="bg-bg text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
      </main>
    </div>
  )
}
