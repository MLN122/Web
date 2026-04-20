// frontend/src/components/HinhThuc.jsx
import { Fragment, useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'

const THEMES = [
  { bg: 'linear-gradient(145deg, #FF6B35 0%, #F7431B 100%)', accent: '#FF6B35', accentBg: 'rgba(255,107,53,0.12)', glow: 'rgba(255,107,53,0.4)' },
  { bg: 'linear-gradient(145deg, #00B4D8 0%, #0090C0 100%)', accent: '#00B4D8', accentBg: 'rgba(0,180,216,0.12)', glow: 'rgba(0,180,216,0.4)' },
  { bg: 'linear-gradient(145deg, #06D6A0 0%, #04B887 100%)', accent: '#06D6A0', accentBg: 'rgba(6,214,160,0.12)', glow: 'rgba(6,214,160,0.4)' },
  { bg: 'linear-gradient(145deg, #FFB700 0%, #E09D00 100%)', accent: '#FFB700', accentBg: 'rgba(255,183,0,0.12)', glow: 'rgba(255,183,0,0.4)' },
  { bg: 'linear-gradient(145deg, #9B5DE5 0%, #7B3FC5 100%)', accent: '#9B5DE5', accentBg: 'rgba(155,93,229,0.12)', glow: 'rgba(155,93,229,0.4)' },
]

const FORMS = [
  {
    num: '01',
    icon: '🤝',
    vn: 'Cartel',
    phonetic: 'Các-ten',
    hint: 'Thỏa thuận · Lỏng lẻo nhất',
    desc: 'Liên minh về giá cả, phân chia thị trường và sản lượng. Các thành viên vẫn hoàn toàn độc lập về sản xuất và lưu thông. Liên kết lỏng lẻo, dễ tan vỡ.',
    features: ['Thỏa thuận giá cả & sản lượng', 'Phân chia thị trường', 'Sản xuất & KD vẫn độc lập', 'Dễ tan vỡ khi mâu thuẫn'],
    example: 'OPEC: phân chia hạn ngạch khai thác cho từng quốc gia thành viên để giữ giá dầu ở mức có lợi.',
  },
  {
    num: '02',
    icon: '🔗',
    vn: 'Syndicat',
    phonetic: 'Xinh-đi-ca',
    hint: 'Độc quyền lưu thông · Pháp',
    desc: 'Độc quyền về lưu thông (mua - bán). Các xí nghiệp vẫn độc lập về sản xuất nhưng mọi việc mua nguyên liệu và bán hàng đều thực hiện qua văn phòng chung. Từng phát triển nhất ở Pháp.',
    features: ['Văn phòng mua bán chung', 'Thống nhất giá bán & điều kiện', 'Sản xuất vẫn độc lập', 'Chia lợi nhuận theo sản lượng'],
    example: 'De Beers TK 20: độc quyền thu mua và phân phối kim cương thô toàn thế giới — các mỏ tự khai thác nhưng bán đều qua De Beers.',
  },
  {
    num: '03',
    icon: '🏢',
    vn: 'Trust',
    phonetic: 'Tơ-rớt',
    hint: 'Ban quản trị chung · Mỹ',
    desc: 'Thống nhất cả sản xuất và lưu thông dưới một hội đồng quản trị. Các nhà tư bản trở thành cổ đông thu lợi nhuận cổ phần. Mất hoàn toàn tính độc lập. Nước Mỹ là quê hương của Trust.',
    features: ['Ban quản trị thống nhất', 'Thành viên → Cổ đông', 'Mất độc lập SX & lưu thông', 'Chia lợi nhuận theo cổ phần'],
    example: 'Standard Oil Trust của Rockefeller: kiểm soát từ khai thác, lọc dầu, vận chuyển đến bán lẻ dầu mỏ tại Mỹ cuối TK 19.',
  },
  {
    num: '04',
    icon: '🏦',
    vn: 'Consortium',
    phonetic: 'Công-xoóc-xi-om',
    hint: 'Ngân hàng + Công nghiệp',
    desc: 'Hình thức đa ngành, liên kết giữa ngân hàng và công nghiệp để thực hiện các nghiệp vụ tài chính lớn. Ngân hàng nắm quyền chi phối toàn bộ hoạt động của liên minh.',
    features: ['Liên kết ngân hàng & công nghiệp', 'Tài trợ các dự án khổng lồ', 'Kiểm soát qua vốn tín dụng', 'Phạm vi quốc tế'],
    example: 'Các ngân hàng Morgan (Mỹ) liên kết với tập đoàn thép, đường sắt để tài trợ và kiểm soát các dự án hạ tầng khổng lồ.',
  },
  {
    num: '05',
    icon: '🌐',
    vn: 'Conglomerate',
    phonetic: 'Công-glomê-rết',
    hint: 'Đa ngành · Xuyên quốc gia · Hiện đại',
    desc: 'Hình thức độc quyền hiện đại, kết hợp hàng chục, hàng trăm công ty trong nhiều lĩnh vực hoàn toàn khác nhau, tạo thành các tập đoàn xuyên quốc gia khổng lồ.',
    features: ['Hàng trăm công ty con', 'Đa ngành hoàn toàn khác nhau', 'Xuyên quốc gia (TNC)', 'Doanh thu lớn hơn nhiều quốc gia'],
    example: 'Samsung (Hàn Quốc) và Mitsubishi (Nhật Bản): kinh doanh từ điện thoại, đóng tàu, ngân hàng, bảo hiểm đến hóa chất và bất động sản.',
  },
]

export default function HinhThuc() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const isAnimating = useRef(false)
  const deckOrder = useRef([0, 1, 2, 3, 4])
  const wrapperRefs = useRef([])
  const innerRefs = useRef([])

  function getDeckProps(pos) {
    return {
      x: pos * 14,
      y: pos * 10,
      scale: 1 - pos * 0.07,
      opacity: pos === 0 ? 1 : Math.max(0.08, 0.65 - pos * 0.2),
      zIndex: 10 - pos,
    }
  }

  useEffect(() => {
    deckOrder.current.forEach((cardIdx, pos) => {
      const el = wrapperRefs.current[cardIdx]
      if (el) gsap.set(el, getDeckProps(pos))
    })
  }, [])

  const navigate = useCallback((dir) => {
    if (isAnimating.current) return
    isAnimating.current = true

    const frontIdx = deckOrder.current[0]
    if (isFlipped && innerRefs.current[frontIdx]) {
      gsap.set(innerRefs.current[frontIdx], { rotateY: 0 })
    }
    setIsFlipped(false)

    const order = [...deckOrder.current]
    const n = FORMS.length
    const tl = gsap.timeline({ onComplete: () => { isAnimating.current = false } })

    if (dir === 'next') {
      const outEl = wrapperRefs.current[order[0]]
      tl.to(outEl, { x: -500, scale: 0.3, opacity: 0, duration: 0.5, ease: 'power3.in' })
      order.slice(1).forEach((cardIdx, idx) => {
        tl.to(wrapperRefs.current[cardIdx], { ...getDeckProps(idx), duration: 0.45, ease: 'power2.out' }, 0.08)
      })
      tl.call(() => {
        const newOrder = [...order.slice(1), order[0]]
        deckOrder.current = newOrder
        gsap.set(wrapperRefs.current[order[0]], { x: 0, ...getDeckProps(n - 1) })
        setActiveIdx(newOrder[0])
      })
    } else {
      const newFrontIdx = order[n - 1]
      const newFrontEl = wrapperRefs.current[newFrontIdx]
      gsap.set(newFrontEl, { x: 500, y: 0, scale: 0.3, opacity: 0, zIndex: 20 })
      order.slice(0, n - 1).forEach((cardIdx, idx) => {
        tl.to(wrapperRefs.current[cardIdx], { ...getDeckProps(idx + 1), duration: 0.45, ease: 'power2.inOut' }, 0)
      })
      tl.to(newFrontEl, { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 10, duration: 0.5, ease: 'power3.out' }, 0.06)
      tl.call(() => {
        const newOrder = [order[n - 1], ...order.slice(0, n - 1)]
        deckOrder.current = newOrder
        setActiveIdx(newOrder[0])
      })
    }
  }, [isFlipped])

  const handleFlip = useCallback(() => {
    if (isAnimating.current) return
    const frontIdx = deckOrder.current[0]
    const innerEl = innerRefs.current[frontIdx]
    if (!innerEl) return
    const next = !isFlipped
    setIsFlipped(next)
    gsap.to(innerEl, { rotateY: next ? 180 : 0, duration: 0.65, ease: 'power2.inOut' })
  }, [isFlipped])

  return (
    <section id="hinh-thuc" className="section section--alt">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--coral">Chương 2</span>
          <h2 className="section__title">5 Hình Thức Tổ Chức Độc Quyền</h2>
          <p className="section__desc">
            Các tổ chức độc quyền biến đổi từ thấp đến cao: từ thỏa thuận lỏng lẻo
            đến tập đoàn xuyên quốc gia. Nhấn thẻ để xem chi tiết.
          </p>
        </header>

        {/* Progression bar */}
        <div className="org-progression" data-reveal data-delay="100">
          {FORMS.map((f, i) => (
            <Fragment key={f.vn}>
              <div
                className={`prog-step ${activeIdx === i ? 'prog-step--active' : ''}`}
                style={{ '--step-color': THEMES[i].accent }}
              >
                <span className="prog-num">{f.num}</span>
                <span className="prog-label">{f.vn}</span>
              </div>
              {i < FORMS.length - 1 && <div className="prog-arrow">→</div>}
            </Fragment>
          ))}
        </div>

        {/* GSAP Carousel */}
        <div className="carousel-stage" data-reveal data-delay="200">
          <div className="carousel-deck">
            {FORMS.map((f, i) => {
              const theme = THEMES[i]
              return (
                <div
                  key={f.vn}
                  ref={el => { wrapperRefs.current[i] = el }}
                  className="carousel-card-wrapper"
                  onClick={handleFlip}
                >
                  <div
                    ref={el => { innerRefs.current[i] = el }}
                    className="carousel-card-inner"
                  >
                    {/* FRONT */}
                    <div className="carousel-face carousel-face--front" style={{ background: theme.bg, boxShadow: `0 28px 70px ${theme.glow}, 0 8px 24px rgba(0,0,0,0.2)` }}>
                      <div className="cf-num">{f.num}</div>
                      <div className="cf-deco cf-deco--1" />
                      <div className="cf-deco cf-deco--2" />
                      <div className="cf-body">
                        <div className="cf-icon">{f.icon}</div>
                        <div className="cf-vn">{f.vn}</div>
                        <div className="cf-phonetic">/{f.phonetic}/</div>
                        <div className="cf-hint-badge">{f.hint}</div>
                      </div>
                      <div className="cf-cta">👆 Nhấn để xem chi tiết</div>
                    </div>

                    {/* BACK */}
                    <div className="carousel-face carousel-face--back" style={{ '--card-accent': theme.accent }}>
                      <div className="cb-top-bar" style={{ background: theme.bg }} />
                      <div className="cb-content">
                        <div className="cb-badge" style={{ background: theme.accentBg, color: theme.accent }}>
                          {f.num} — {f.vn}
                        </div>
                        <div className="cb-title">{f.icon} {f.vn}</div>
                        <p className="cb-desc">{f.desc}</p>
                        <ul className="cb-features">
                          {f.features.map(ft => <li key={ft}>{ft}</li>)}
                        </ul>
                        <div className="cb-example"><span>📌</span> {f.example}</div>
                        <div className="cb-back-hint">👆 Nhấn để quay lại</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Nav */}
          <div className="carousel-nav">
            <button className="carousel-btn" onClick={() => navigate('prev')} aria-label="Thẻ trước">←</button>
            <div className="carousel-dots">
              {FORMS.map((_, i) => (
                <div key={i} className={`carousel-dot ${activeIdx === i ? 'carousel-dot--active' : ''}`} style={{ '--dot-color': THEMES[i].accent }} />
              ))}
            </div>
            <button className="carousel-btn" onClick={() => navigate('next')} aria-label="Thẻ tiếp theo">→</button>
          </div>

          <div className="carousel-label" style={{ color: THEMES[activeIdx].accent }}>
            {FORMS[activeIdx].num} / {FORMS[activeIdx].vn}
            <span className="carousel-label-sub"> — {isFlipped ? 'Chi tiết' : FORMS[activeIdx].hint}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
