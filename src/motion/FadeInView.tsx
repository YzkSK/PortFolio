import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from './variants'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeInView({ children, className, delay = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
