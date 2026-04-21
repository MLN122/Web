// frontend/src/components/Navbar.jsx
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#gioi-thieu', label: 'Khái Niệm' },
  { href: '#hinh-thuc',  label: 'Hình Thức' },
  { href: '#dac-diem',   label: 'Tác Động' },
  { href: '#tu-ban',     label: 'Độc Quyền Nhà Nước' },
  { href: '#xuat-khau',  label: 'Biểu Hiện Mới' },
]

function smoothScroll(href) {
  const el = document.querySelector(href)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    smoothScroll(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation">
      <div className="nav-inner">
        {/* Brand / Logo */}
        <a href="#hero" className="nav-brand" onClick={(e) => go(e, '#hero')}>
          <img src="/fpt.png" alt="FPT University" className="nav-logo" />
          <div className="nav-brand-text">
            <span className="brand-title">MLN122 — Nhóm 1</span>
            <span className="brand-sub">KTCT Mác-Lênin · Độc Quyền</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link" onClick={(e) => go(e, href)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#minigame"
              className="nav-link nav-cta"
              onClick={(e) => go(e, '#minigame')}
            >
              🎮 Lật Thẻ
            </a>
          </li>
          <li>
            <a
              href="#puzzle-game"
              className="nav-link nav-cta nav-cta--puzzle"
              onClick={(e) => go(e, '#puzzle-game')}
            >
              🧩 Ghép Mảnh
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
