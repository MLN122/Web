// frontend/src/components/Hero.jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useCountUp } from '../hooks/useCountUp'

gsap.registerPlugin(SplitText)

const STATS = [
  { target: 5,  label: 'Đặc điểm CNTB ĐQ' },
  { target: 4,  label: 'Hình thức tổ chức' },
  { target: 2,  label: 'Hình thức xuất khẩu' },
  { target: 10, label: 'Câu hỏi kiến thức' },
]

const FLOAT_CARDS = [
  { cls: 'float-card--1', icon: '🏭', label: 'Tập trung SX & TB',    sub: 'Đặc điểm số 1', iconBg: 'rgba(255,107,53,0.35)' },
  { cls: 'float-card--2', icon: '🏦', label: 'Tư bản tài chính',     sub: 'Đặc điểm số 2', iconBg: 'rgba(0,212,255,0.3)' },
  { cls: 'float-card--3', icon: '✈️', label: 'Xuất khẩu tư bản',    sub: 'Đặc điểm số 3', iconBg: 'rgba(255,215,0,0.3)' },
  { cls: 'float-card--4', icon: '🌍', label: 'Phân chia kinh tế',    sub: 'Đặc điểm số 4', iconBg: 'rgba(255,20,147,0.3)' },
  { cls: 'float-card--5', icon: '🗺️', label: 'Phân chia lãnh thổ',  sub: 'Đặc điểm số 5', iconBg: 'rgba(0,255,136,0.3)' },
]

const PARTICLES = [
  { style: { width: 80,  height: 80,  top: '15%', left: '8%',  background: 'rgba(255,107,53,0.25)',  animationDelay: '0s' } },
  { style: { width: 120, height: 120, top: '60%', left: '3%',  background: 'rgba(255,215,0,0.18)',   animationDelay: '2s' } },
  { style: { width: 60,  height: 60,  top: '80%', left: '15%', background: 'rgba(0,212,255,0.2)',    animationDelay: '1s' } },
  { style: { width: 90,  height: 90,  top: '30%', right: '5%', background: 'rgba(255,20,147,0.15)',  animationDelay: '3s' } },
  { style: { width: 50,  height: 50,  top: '50%', left: '45%', background: 'rgba(0,255,136,0.15)',   animationDelay: '1.5s' } },
]

function StatItem({ target, label }) {
  const [count, ref] = useCountUp(target)
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-num">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    // ── Parallax background ──────────────────────────────
    const bg = bgRef.current
    let cleanupParallax = () => {}
    if (bg) {
      const fn = () => { bg.style.transform = `translateY(${window.pageYOffset * 0.4}px)` }
      window.addEventListener('scroll', fn, { passive: true })
      cleanupParallax = () => window.removeEventListener('scroll', fn)
    }

    // ── SplitText: hero title reveal (line mask) ─────────
    const titleEl = document.querySelector('.hero__title')
    if (titleEl) {
      gsap.set(titleEl, { opacity: 1 })
      SplitText.create(titleEl, {
        type: 'words,lines',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.lines, {
            yPercent: 108,
            duration: 0.85,
            stagger: 0.13,
            ease: 'expo.out',
            delay: 0.2,
          })
        },
      })
    }

    // ── Staggered entrance animations ────────────────────
    gsap.from('.hero__badge',      { opacity: 0, y: -18, duration: 0.55, delay: 0.05, ease: 'power2.out' })
    gsap.from('.hero__subtitle',   { opacity: 0, y: 22,  duration: 0.7,  delay: 0.8,  ease: 'power2.out' })
    gsap.from('.hero__cta',        { opacity: 0, y: 18,  duration: 0.6,  delay: 1.05, ease: 'power2.out' })
    gsap.from('.hero__stats',      { opacity: 0, y: 18,  duration: 0.6,  delay: 1.25, ease: 'power2.out' })
    gsap.from('.hero__orb',        { scale: 0.6, opacity: 0, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.55)' })
    gsap.from('.hero__illus-card', { opacity: 0, scale: 0.88, duration: 0.9, delay: 0.4, ease: 'power2.out' })
    gsap.from('.hero__float-card', { opacity: 0, x: 45, duration: 0.5, stagger: 0.1, delay: 1.0, ease: 'power2.out' })

    return cleanupParallax
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Parallax background image */}
      <div ref={bgRef} className="hero__parallax-bg" />
      <div className="hero__overlay" />

      {/* Aurora blobs */}
      <div className="hero__aurora" aria-hidden="true">
        <div className="aurora-blob aurora-blob--1" />
        <div className="aurora-blob aurora-blob--2" />
        <div className="aurora-blob aurora-blob--3" />
      </div>

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{ ...p.style, width: p.style.width, height: p.style.height }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="hero__content">
        {/* Left column */}
        <div className="hero__left">
          <div className="hero__badge">
            📖 Kinh Tế Chính Trị Mác-Lênin · Chương 5
          </div>

          <h1 className="hero__title">
            <span className="accent">Độc Quyền</span>
            <br />
            trong Chủ Nghĩa
            <br />
            Tư Bản
          </h1>

          <p className="hero__subtitle">
            Từ cạnh tranh tự do sang sự thống trị của các tổ chức độc quyền —
            khám phá bản chất, hình thức và tác động của độc quyền kinh tế.
          </p>

          <div className="hero__cta">
            <a href="#gioi-thieu" className="btn btn--primary" onClick={(e) => go(e, '#gioi-thieu')}>
              Khám phá nội dung ↓
            </a>
            <a href="#minigame" className="btn btn--outline hero__btn-ghost" onClick={(e) => go(e, '#minigame')}>
              🎮 Chơi Mini Game
            </a>
          </div>

          <div className="hero__stats">
            {STATS.map((s) => (
              <StatItem key={s.label} target={s.target} label={s.label} />
            ))}
          </div>
        </div>

        {/* Right column — illustration + 3D orbital scene */}
        <div className="hero__right" aria-hidden="true">

          {/* Illustrative image card — behind orbits */}
          {/* NOTE: Ảnh minh họa từ Unsplash – nên thay bằng ảnh AI tạo về chủ đề tư bản độc quyền */}
          <div className="hero__illus-card">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&fit=crop"
              alt="Thị trường tài chính toàn cầu — ảnh minh họa"
              className="hero__illus-img"
            />
            <div className="hero__illus-grad" />
          </div>

          <div className="hero__3d-scene">
            {/* Orbits */}
            <div className="hero__orbit hero__orbit--1">
              <div className="orbit-dot orbit-dot--1" />
            </div>
            <div className="hero__orbit hero__orbit--2">
              <div className="orbit-dot orbit-dot--2" />
            </div>
            {/* Center orb */}
            <div className="hero__orb">⚙️</div>
          </div>

          {/* Floating info cards */}
          {FLOAT_CARDS.map((fc) => (
            <div key={fc.label} className={`hero__float-card ${fc.cls}`}>
              <div className="float-icon" style={{ background: fc.iconBg }}>{fc.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.8rem' }}>{fc.label}</div>
                <div style={{ fontSize: '0.68rem', opacity: 0.7 }}>{fc.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll" aria-label="Cuộn xuống">
        <span>Cuộn xuống</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
