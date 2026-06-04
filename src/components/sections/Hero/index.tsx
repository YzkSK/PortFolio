import HeroText from './HeroText'
import HeroAvatar from './HeroAvatar'
import GithubCard from './GithubCard'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-blob" />
      <div className="container">
        <div className="hero-inner">
          <HeroText />
          <div className="hero-right fi on" style={{ transitionDelay: '.18s' }}>
            <HeroAvatar src="/Profile.jpg" alt="佐藤 康樹" />
            <GithubCard />
          </div>
        </div>
      </div>
    </section>
  )
}
