import { useEffect } from 'react'
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
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  // Global scroll-reveal: elements with [data-reveal] animate in; [data-delay] adds stagger (ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = parseInt(entry.target.dataset.delay || '0', 10)
              setTimeout(() => entry.target.classList.add('revealed'), delay)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
      )
      document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GioiThieu />
        <HinhThuc />
        <DacDiem />
        <TuBanTaiChinh />
        <XuatKhauTuBan />
        <MemoryGame />
      </main>
      <Footer />
      <Chatbox />
      <ScrollToTop />
    </>
  )
}
