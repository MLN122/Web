// frontend/src/hooks/useParallax.js
import { useEffect, useRef } from 'react'

/**
 * Parallax scroll effect — element moves at a fraction of scroll speed.
 * @param {number} speed - 0=no effect, 0.5=half scroll speed (default), negative=opposite
 */
export function useParallax(speed = 0.45) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      el.style.transform = `translateY(${scrolled * speed}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}
