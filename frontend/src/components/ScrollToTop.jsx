// frontend/src/components/ScrollToTop.jsx
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`scroll-top${visible ? ' is-visible' : ''}`}
      onClick={onClick}
      aria-label="Về đầu trang"
      title="Về đầu trang"
    >
      ↑
    </button>
  )
}
