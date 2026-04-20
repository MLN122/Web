// frontend/src/hooks/useCountUp.js
import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); observer.unobserve(el) }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || target === 0) return
    const step = duration / target
    let current = 0
    const timer = setInterval(() => {
      current++
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return [count, ref]
}
