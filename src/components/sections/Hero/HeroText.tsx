import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '../../../motion/variants'

export default function HeroText() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      <motion.span
        variants={fadeInUp}
        className="text-accent-yellow text-xs font-mono tracking-[0.3em] uppercase"
      >
        Portfolio
      </motion.span>
      <motion.h1
        variants={fadeInUp}
        className="text-7xl font-bold text-white leading-none tracking-tight"
      >
        <span>佐藤</span>
        <br />
        <span>康樹</span>
      </motion.h1>
      <motion.p variants={fadeInUp} className="text-accent-green text-lg">
        Frontend Developer
      </motion.p>
      <motion.p
        variants={fadeInUp}
        className="text-white/40 text-sm max-w-xs leading-relaxed"
      >
        Web技術を使ってユーザー体験を追求するフロントエンドエンジニア。
        ReactとTypeScriptを主軸に、美しく動くUIを制作しています。
      </motion.p>
    </motion.div>
  )
}
