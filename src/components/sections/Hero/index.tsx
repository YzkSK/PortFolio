import HeroText from './HeroText'
import HeroAvatar from './HeroAvatar'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-20 gap-24">
      <div className="flex-1">
        <HeroText />
      </div>
      <div className="flex-shrink-0">
        <HeroAvatar src="/avatar.jpg" alt="佐藤 康樹" />
      </div>
    </section>
  )
}
