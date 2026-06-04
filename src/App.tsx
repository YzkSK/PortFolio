import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Works from './components/sections/Works'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  )
}
