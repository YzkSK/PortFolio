import { useEffect, useRef } from 'react'

export function useFadeIn(delay = 0) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) el.style.transitionDelay = `${delay}s`

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('on')
          obs.disconnect()
        }
      },
      { rootMargin: '-80px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return ref as React.RefObject<any>
}
