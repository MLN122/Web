// frontend/src/components/XuatKhauTuBan.jsx
const NEW_MANIFESTATIONS = [
  {
    num: 'â‘ ',
    icon: 'ðŸŒ',
    title: 'TÃ­ch tá»¥ tÆ° báº£n â€” CÃ´ng ty xuyÃªn quá»‘c gia (TNC)',
    color: '#7C5CBF',
    bg: '#F0EAFF',
    items: [
      'Xuáº¥t hiá»‡n cÃ¡c TNC bÃªn cáº¡nh doanh nghiá»‡p vá»«a vÃ  nhá»',
      'Apple, Amazon cÃ³ chi nhÃ¡nh, nhÃ  mÃ¡y vÃ  thá»‹ trÆ°á»ng tráº£i dÃ i toÃ n cáº§u',
      'Doanh thu má»™t sá»‘ TNC lá»›n hÆ¡n GDP nhiá»u quá»‘c gia',
      'Quyá»n lá»±c kinh táº¿ vÆ°á»£t xa quyá»n lá»±c nhÃ  nÆ°á»›c Ä‘Æ¡n láº»',
    ],
    example: 'Apple cÃ³ vá»‘n hÃ³a lá»›n hÆ¡n GDP cá»§a pháº§n lá»›n cÃ¡c quá»‘c gia trÃªn tháº¿ giá»›i.',
  },
  {
    num: 'â‘¡',
    icon: 'ðŸ“ˆ',
    title: 'TÆ° báº£n tÃ i chÃ­nh â€” Má»Ÿ rá»™ng sang lÄ©nh vá»±c má»›i',
    color: '#D63384',
    bg: '#FFF0F7',
    items: [
      'Má»Ÿ rá»™ng sang chá»©ng khoÃ¡n, giáº£i trÃ­, thá»ƒ thao vÃ  dá»‹ch vá»¥ quÃ¢n sá»±',
      'Quá»¹ Ä‘áº§u tÆ° BlackRock, Vanguard náº¯m cá»• pháº§n chi phá»‘i háº§u háº¿t táº­p Ä‘oÃ n lá»›n',
      'Tá»« Disney, y táº¿ Ä‘áº¿n cÃ´ng nghá»‡ â€” táº¥t cáº£ Ä‘á»u cÃ³ cÃ¹ng cá»• Ä‘Ã´ng lá»›n',
      'Quyá»n lá»±c tÃ i chÃ­nh xuyÃªn ngÃ nh vÃ  xuyÃªn biÃªn giá»›i',
    ],
    example: 'BlackRock quáº£n lÃ½ tÃ i sáº£n >10 nghÃ¬n tá»· USD â€” lá»›n hÆ¡n GDP Trung Quá»‘c.',
  },
  {
    num: 'â‘¢',
    icon: 'ðŸ’°',
    title: 'Xuáº¥t kháº©u tÆ° báº£n â€” HÃ¬nh thá»©c má»›i',
    color: '#06D6A0',
    bg: '#F0FFF8',
    items: [
      'Chá»§ yáº¿u lÃ  cÃ¡c nÆ°á»›c tÆ° báº£n phÃ¡t triá»ƒn xuáº¥t kháº©u tÆ° báº£n láº«n nhau',
      'Káº¿t há»£p xuáº¥t kháº©u hÃ ng hoÃ¡ + xuáº¥t kháº©u tÆ° báº£n, Ä‘á» cao cÃ¹ng cÃ³ lá»£i',
      'Táº­p Ä‘oÃ n Nháº­t Báº£n mua láº¡i báº¥t Ä‘á»™ng sáº£n vÃ  cÃ´ng ty táº¡i Má»¹ (vÃ  ngÆ°á»£c láº¡i)',
      'FDI gáº¯n vá»›i chuyá»ƒn giao cÃ´ng nghá»‡ vÃ  rÃ ng buá»™c thÆ°Æ¡ng máº¡i',
    ],
    example: 'Vá»‘n FDI toÃ n cáº§u Ä‘áº¡t >1,3 nghÃ¬n tá»· USD/nÄƒm â€” pháº§n lá»›n giá»¯a cÃ¡c nÆ°á»›c phÃ¡t triá»ƒn vá»›i nhau.',
  },
  {
    num: 'â‘£',
    icon: 'ðŸ—ºï¸',
    title: 'PhÃ¢n chia thá»‹ trÆ°á»ng â€” "BiÃªn giá»›i má»m"',
    color: '#FF6B35',
    bg: '#FFF5F0',
    items: [
      'ToÃ n cáº§u hoÃ¡ vÃ  khu vá»±c hoÃ¡ thay tháº¿ chiáº¿m Ä‘Ã³ng lÃ£nh thá»• trá»±c tiáº¿p',
      '"Chiáº¿n lÆ°á»£c biÃªn giá»›i má»m" vÃ  bÃ nh trÆ°á»›ng biÃªn giá»›i kinh táº¿',
      'Má»¹ dÃ¹ng Ä‘á»“ng USD vÃ  há»‡ thá»‘ng SWIFT lÃ m cÃ´ng cá»¥ kiá»ƒm soÃ¡t dÃ²ng vá»‘n',
      'Ãp Ä‘áº·t trá»«ng pháº¡t kinh táº¿ thay tháº¿ chiáº¿n tranh quÃ¢n sá»± truyá»n thá»‘ng',
    ],
    example: 'Lá»‡nh trá»«ng pháº¡t SWIFT ngáº¯t káº¿t ná»‘i tÃ i chÃ­nh toÃ n cáº§u cá»§a Nga (2022) â€” vÅ© khÃ­ "biÃªn giá»›i má»m" máº¡nh nháº¥t.',
  },
]

const HISTORICAL_ROLE = [
  {
    side: 'positive',
    icon: 'âœ…',
    title: 'Vai trÃ² TÃ­ch cá»±c',
    badgeCls: 'tl-badge--mint',
    points: [
      'ThÃºc Ä‘áº©y lá»±c lÆ°á»£ng sáº£n xuáº¥t phÃ¡t triá»ƒn vÆ°á»£t báº­c',
      'Thá»±c hiá»‡n xÃ£ há»™i hoÃ¡ sáº£n xuáº¥t vÃ  chuyá»ƒn sang ná»n sáº£n xuáº¥t hiá»‡n Ä‘áº¡i',
      '4 Cuá»™c CÃ¡ch máº¡ng CÃ´ng nghiá»‡p táº¡o ra khá»‘i tÃ i sáº£n khá»•ng lá»“',
    ],
    highlight: 'DÆ°á»›i CNTB, khoa há»c ká»¹ thuáº­t phÃ¡t triá»ƒn hÆ¡n tá»•ng táº¥t cáº£ cÃ¡c thá»i ká»³ trÆ°á»›c cá»™ng láº¡i.',
  },
  {
    side: 'negative',
    icon: 'âš ï¸',
    title: 'Giá»›i háº¡n Lá»‹ch sá»­',
    badgeCls: 'tl-badge--pink',
    points: [
      'Sáº£n xuáº¥t vÃ¬ lá»£i Ã­ch cá»§a thiá»ƒu sá»‘ giai cáº¥p tÆ° sáº£n',
      'GÃ¢y ra chiáº¿n tranh, xung Ä‘á»™t, tranh giÃ nh tÃ i nguyÃªn',
      'LÃ m sÃ¢u sáº¯c há»‘ ngÄƒn cÃ¡ch giÃ u nghÃ¨o trong vÃ  giá»¯a cÃ¡c quá»‘c gia',
    ],
    highlight: '1% ngÆ°á»i giÃ u nháº¥t náº¯m tÃ i sáº£n lá»›n hÆ¡n 50% dÃ¢n sá»‘ tháº¿ giá»›i cá»™ng láº¡i â€” báº¥t bÃ¬nh Ä‘áº³ng tá»™t cÃ¹ng.',
  },
]

export default function XuatKhauTuBan() {
  return (
    <section id="xuat-khau" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--yellow">ChÆ°Æ¡ng 5 &amp; 6</span>
          <h2 className="section__title">Biá»ƒu hiá»‡n Má»›i &amp; Vai trÃ² Lá»‹ch sá»­ cá»§a CNTB</h2>
          <p className="section__desc">
            Äá»™c quyá»n ngÃ y nay mang diá»‡n máº¡o má»›i â€” tá»« TNC, tÃ i chÃ­nh toÃ n cáº§u Ä‘áº¿n
            "biÃªn giá»›i má»m". Äá»“ng thá»i, CNTB cÃ³ vai trÃ² tÃ­ch cá»±c nhÆ°ng cÅ©ng cÃ³
            giá»›i háº¡n lá»‹ch sá»­ khÃ´ng thá»ƒ vÆ°á»£t qua.
          </p>
        </header>

        {/* 4 new manifestations */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.5rem' }}>
          5 Nhá»¯ng biá»ƒu hiá»‡n má»›i cá»§a Äá»™c quyá»n ngÃ y nay
        </h3>
        <div className="xk-forms" data-reveal data-delay="100">
          {NEW_MANIFESTATIONS.map((f, i) => (
            <div
              key={f.title}
              className="xk-form-card"
              style={{ '--form-color': f.color, '--form-bg': f.bg }}
              data-reveal
              data-delay={`${i * 120 + 100}`}
            >
              <div className="form-num">{f.num}</div>
              <div className="form-icon">{f.icon}</div>
              <h3 className="form-title">{f.title}</h3>
              <ul className="form-list">
                {f.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tl-highlight" style={{ marginTop: '0.75rem', background: 'rgba(0,0,0,0.04)', borderRadius: '6px', padding: '0.5rem 0.75rem' }}>
                <span className="tl-highlight-icon">ðŸ“Œ</span>
                <em style={{ fontSize: '0.82rem' }}>{f.example}</em>
              </div>
            </div>
          ))}
        </div>

        {/* Historical role */}
        <h3 className="sub-heading" data-reveal style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>
          6 Vai trÃ² Lá»‹ch sá»­ cá»§a Chá»§ nghÄ©a TÆ° báº£n
        </h3>
        <div className="timeline">
          {HISTORICAL_ROLE.map((r, i) => (
            <div
              key={r.title}
              className={`tl-item tl-item--${i % 2 === 0 ? 'left' : 'right'}`}
              data-reveal
              data-delay={`${i * 150}`}
            >
              <div className="tl-node">
                <div className={`tl-node-inner ${r.badgeCls}`}>
                  <span>{r.icon}</span>
                </div>
              </div>
              <div className="tl-card">
                <div className="tl-card-header">
                  <span className={`tl-badge ${r.badgeCls}`}>{r.title}</span>
                </div>
                <ul className="styled-list" style={{ marginBottom: '0.75rem' }}>
                  {r.points.map((p) => (
                    <li key={p} style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>{p}</li>
                  ))}
                </ul>
                <div className="tl-highlight">
                  <span className="tl-highlight-icon">ðŸ’¡</span>
                  <em>{r.highlight}</em>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final callout */}
        <div className="xk-callout" data-reveal data-delay="400" style={{ marginTop: '2rem' }}>
          <div className="xk-callout-icon">ðŸ</div>
          <div>
            <strong>Káº¿t luáº­n:</strong> CNTB Ä‘Ã£ hoÃ n thÃ nh sá»© má»‡nh lá»‹ch sá»­ thÃºc Ä‘áº©y lá»±c lÆ°á»£ng sáº£n xuáº¥t phÃ¡t triá»ƒn,
            nhÆ°ng quan há»‡ sáº£n xuáº¥t tÆ° báº£n chá»§ nghÄ©a ngÃ y cÃ ng trá»Ÿ thÃ nh <em>xiá»ng xÃ­ch</em> kÃ¬m hÃ£m lá»±c lÆ°á»£ng sáº£n xuáº¥t
            vÃ  giáº£i phÃ³ng con ngÆ°á»i â€” tiá»n Ä‘á» khÃ¡ch quan cho sá»± thay tháº¿ cá»§a xÃ£ há»™i cao hÆ¡n.
          </div>
        </div>
      </div>
    </section>
  )
}
