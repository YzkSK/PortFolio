import { useLayoutEffect, type RefObject } from 'react'

/** 画面に入った要素から .pending を外して動かす。動きを減らす設定や IntersectionObserver がない環境では最初から完成した状態のまま */
export function useRevealOnScroll(root: RefObject<HTMLElement | null>, selector: string) {
  // 描画前に .pending を付けないと、見えている要素が一瞬完成状態で出てから戻る
  useLayoutEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        requestAnimationFrame(() => requestAnimationFrame(() => e.target.classList.remove('pending')))
        io.unobserve(e.target)
      }
    }, { rootMargin: '0px 0px -15% 0px' })
    root.current?.querySelectorAll(selector).forEach((el) => { el.classList.add('pending'); io.observe(el) })
    return () => io.disconnect()
  }, [root, selector])
}
