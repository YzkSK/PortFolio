export default function HeroText() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fi on">
      <div className="hero-badge">FRONTEND / MOBILE ENGINEER</div>
      <h1 className="hero-name">佐藤 康樹</h1>
      <div className="hero-divider">
        <span className="hero-tagline">アイデアを、動くものに変える。</span>
      </div>
      <p className="hero-desc">
        大学でコンピュータサイエンスを学びながら、<br />
        Webフロントエンド・モバイルアプリの設計と<br />
        開発に情熱を注いでいます。
      </p>
      <div className="hero-ctas">
        <a
          href="#works"
          className="btn-g"
          onClick={(e) => { e.preventDefault(); scrollTo('works') }}
        >
          制作実績を見る
        </a>
        <a
          href="https://github.com/YzkSK"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-out"
        >
          GitHub を開く ↗
        </a>
      </div>
    </div>
  )
}
