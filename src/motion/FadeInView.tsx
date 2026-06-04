import { useFadeIn } from '../hooks/useFadeIn'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeInView({ children, className, delay = 0 }: Props) {
  const ref = useFadeIn(delay)
  return (
    <div ref={ref} className={`fi${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
