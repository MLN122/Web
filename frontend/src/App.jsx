import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GioiThieu from './components/GioiThieu'
import HinhThuc from './components/HinhThuc'
import DacDiem from './components/DacDiem'
import TuBanTaiChinh from './components/TuBanTaiChinh'
import XuatKhauTuBan from './components/XuatKhauTuBan'
import MemoryGame from './components/MemoryGame'
import Chatbox from './components/Chatbox'
import Footer from './components/Footer'

gsap.registerPlugin(Observer)

const SLIDES = [
  { id: 'slide-hero',      Comp: Hero },
  { id: 'slide-intro',     Comp: GioiThieu },
  { id: 'slide-hinh-thuc', Comp: HinhThuc },
  { id: 'slide-dac-diem',  Comp: DacDiem },
  { id: 'slide-tu-ban',    Comp: TuBanTaiChinh },
  { id: 'slide-xuat-khau', Comp: XuatKhauTuBan },
  { id: 'slide-minigame',  Comp: MemoryGame },
  { id: 'slide-footer',    Comp: Footer },
]

export default function App() {
  const animating = useRef(false)
  const currentIndex = useRef(-1)

  useEffect(() => {
    const slides  = gsap.utils.toArray('.section-slide')
    const outers  = gsap.utils.toArray('.gsap-outer')
    const inners  = gsap.utils.toArray('.gsap-inner')
    const bgs     = gsap.utils.toArray('.section-bg')
    const n       = slides.length
    const wrap    = gsap.utils.wrap(0, n)

    gsap.set(outers, { yPercent: 100 })
    gsap.set(inners, { yPercent: -100 })

    function revealSection(index) {
      slides[index].querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => {
        const delay = parseInt(el.dataset.delay || '0', 10)
        setTimeout(() => el.classList.add('revealed'), delay + 350)
      })
    }

    function gotoSection(index, direction) {
      index = wrap(index)
      animating.current = true
      const dFactor = direction === -1 ? -1 : 1

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => { animating.current = false },
      })

      if (currentIndex.current >= 0) {
        const ci = currentIndex.current
        gsap.set(slides[ci], { zIndex: 0 })
        tl.to(bgs[ci], { yPercent: -15 * dFactor })
          .set(slides[ci], { autoAlpha: 0 })
      }

      gsap.set(slides[index], { autoAlpha: 1, zIndex: 1 })
      tl.fromTo(
        [outers[index], inners[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0,
      )
      .fromTo(bgs[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

      currentIndex.current = index
      revealSection(index)
    }

    // Intercept all anchor clicks and map to slides
    const handleClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const target = document.querySelector(a.getAttribute('href'))
      if (!target) return
      const slide = target.closest('.section-slide')
      if (!slide) return
      const idx = slides.indexOf(slide)
      if (idx >= 0 && idx !== currentIndex.current) {
        e.preventDefault()
        e.stopPropagation()
        gotoSection(idx, idx > currentIndex.current ? 1 : -1)
      }
    }
    document.addEventListener('click', handleClick, true)

    const obs = Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => !animating.current && gotoSection(currentIndex.current - 1, -1),
      onUp:   () => !animating.current && gotoSection(currentIndex.current + 1, 1),
      tolerance: 10,
      preventDefault: true,
    })

    gotoSection(0, 1)

    return () => {
      obs.kill()
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {SLIDES.map(({ id, Comp }) => (
          <div key={id} className="section-slide">
            <div className="gsap-outer">
              <div className="gsap-inner">
                <div className="section-bg">
                  <Comp />
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Chatbox />
    </>
  )
}
