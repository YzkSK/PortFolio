import { DiffLine } from '../../Diff'

export default function Hero() {
  return (
    <section className="hero row">
      <div>
        <h1>
          <span className="diff">
            <DiffLine kind="del" text={['不便を見つけたら', { mark: '我慢する' }]} />
          </span>
          <span className="diff">
            <DiffLine kind="ins" text={['不便を見つけたら', { mark: '作り直す' }]} />
          </span>
        </h1>
        <p>
          データサイエンス学部で AI を学んでいます。中高の頃からコンピューターが好きで、授業で Web アプリを作ったのをきっかけにハッカソンに出るようになり、個人制作も増えていきました。身のまわりの不便をなくす道具を、自分だけが便利になって終わらないよう、使う人のことを先に考えて作っています。
        </p>
      </div>
      <div className="comment">
        <figure className="photo">
          <img src="/Profile.jpg" alt="佐藤 康樹の写真" />
        </figure>
        <b>佐藤 康樹</b>
        Web とモバイルのアプリを作っています。
      </div>
    </section>
  )
}
