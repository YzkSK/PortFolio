import FadeInView from '../../../motion/FadeInView'
import AboutCard from './AboutCard'

const INFO = [
  { label: '名前', value: '佐藤 康樹' },
  { label: '所在地', value: '東京都' },
  { label: '専門', value: 'Frontend Development' },
  { label: '趣味', value: 'UI設計 / 音楽 / 読書' },
]

export default function About() {
  return (
    <section id="about" className="py-40 px-20">
      <FadeInView>
        <h2 className="text-xs text-accent-yellow tracking-[0.3em] uppercase mb-16">
          About
        </h2>
      </FadeInView>
      <div className="grid grid-cols-2 gap-24 max-w-4xl">
        <FadeInView delay={0.1}>
          <p className="text-white/50 leading-relaxed text-sm">
            フロントエンドエンジニアとして、使いやすく美しいUIの制作に取り組んでいます。
            ReactとTypeScriptを中心に、パフォーマンスとアクセシビリティを意識した開発を心がけています。
            デザインとエンジニアリングの境界を行き来しながら、細部にこだわったものづくりが好きです。
          </p>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="flex flex-col gap-7">
            {INFO.map((item) => (
              <AboutCard key={item.label} {...item} />
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
