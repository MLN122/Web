// frontend/src/components/DacDiem.jsx
const POSITIVES = [
  {
    icon: 'ðŸ”¬',
    title: 'ThÃºc Ä‘áº©y nghiÃªn cá»©u khoa há»c ká»¹ thuáº­t',
    desc: 'CÃ¡c táº­p Ä‘oÃ n lá»›n cÃ³ nguá»“n vá»‘n khá»•ng lá»“ Ä‘á»ƒ Ä‘áº§u tÆ° R&D, táº¡o ra nhá»¯ng Ä‘á»™t phÃ¡ cÃ´ng nghá»‡ thay Ä‘á»•i tháº¿ giá»›i.',
    example: 'Google, Microsoft rÃ³t hÃ ng tá»· USD nghiÃªn cá»©u TrÃ­ tuá»‡ nhÃ¢n táº¡o â€” Ä‘iá»u mÃ  doanh nghiá»‡p nhá» khÃ´ng thá»ƒ lÃ m.',
    badgeCls: 'tl-badge--mint',
  },
  {
    icon: 'âš¡',
    title: 'TÄƒng nÄƒng suáº¥t & nÄƒng lá»±c cáº¡nh tranh',
    desc: 'Sáº£n xuáº¥t quy mÃ´ lá»›n giáº£m chi phÃ­ Ä‘Æ¡n vá»‹, Ã¡p dá»¥ng cÃ´ng nghá»‡ tiÃªn tiáº¿n, nÃ¢ng cao hiá»‡u quáº£ toÃ n ná»n kinh táº¿.',
    example: 'DÃ¢y chuyá»n sáº£n xuáº¥t Ã´ tÃ´ Toyota Ã¡p dá»¥ng "Just-in-time" â€” chuáº©n má»±c toÃ n cáº§u vá» nÄƒng suáº¥t cÃ´ng nghiá»‡p.',
    badgeCls: 'tl-badge--blue',
  },
  {
    icon: 'ðŸ™ï¸',
    title: 'ThÃºc Ä‘áº©y kinh táº¿ phÃ¡t triá»ƒn hiá»‡n Ä‘áº¡i',
    desc: 'XÃ¢y dá»±ng háº¡ táº§ng quy mÃ´ lá»›n, kÃ©o theo sá»± phÃ¡t triá»ƒn cá»§a cÃ¡c ngÃ nh cÃ´ng nghiá»‡p phá»¥ trá»£ vÃ  dá»‹ch vá»¥.',
    example: 'DÆ°á»›i CNTB, tháº¿ giá»›i tráº£i qua 4 Cuá»™c CÃ¡ch máº¡ng cÃ´ng nghiá»‡p, táº¡o ra khá»‘i tÃ i sáº£n váº­t cháº¥t lá»›n hÆ¡n táº¥t cáº£ cÃ¡c thá»i ká»³ trÆ°á»›c cá»™ng láº¡i.',
    badgeCls: 'tl-badge--yellow',
  },
]

const NEGATIVES = [
  {
    icon: 'ðŸ’¸',
    title: 'Thiá»‡t háº¡i cho ngÆ°á»i tiÃªu dÃ¹ng',
    desc: 'Äá»‹nh giÃ¡ Ä‘á»™c quyá»n: mua tháº¥p, bÃ¡n cao, Ã¡p Ä‘áº·t giÃ¡ khÃ´ng pháº£n Ã¡nh chi phÃ­ thá»±c táº¿.',
    example: 'CÃ´ng ty dÆ°á»£c pháº©m Ä‘á»™c quyá»n Ä‘á»‹nh giÃ¡ thuá»‘c Ä‘áº·c trá»‹ bá»‡nh hiá»ƒm nghÃ¨o cao gáº¥p hÃ ng chá»¥c láº§n chi phÃ­ sáº£n xuáº¥t.',
    badgeCls: 'tl-badge--purple',
  },
  {
    icon: 'ðŸ”’',
    title: 'KÃ¬m hÃ£m tiáº¿n bá»™ ká»¹ thuáº­t',
    desc: 'Mua láº¡i vÃ  "chÃ´n vÃ¹i" cÃ¡c sÃ¡ng cháº¿ Ä‘á»™t phÃ¡ Ä‘á»ƒ duy trÃ¬ vá»‹ tháº¿ Ä‘á»™c quyá»n vÃ  báº£o vá»‡ lá»£i Ã­ch hiá»‡n táº¡i.',
    example: 'CÃ´ng ty dáº§u má» lá»›n tá»«ng mua vÃ  cáº¥t giáº¥u báº±ng sÃ¡ng cháº¿ xe Ä‘iá»‡n Ä‘á»ƒ báº£o vá»‡ ngÃ nh cÃ´ng nghiá»‡p xe Ä‘á»™ng cÆ¡ Ä‘á»‘t trong.',
    badgeCls: 'tl-badge--pink',
  },
  {
    icon: 'ðŸ“Š',
    title: 'Gia tÄƒng phÃ¢n hÃ³a giÃ u nghÃ¨o',
    desc: 'Lá»£i nhuáº­n Ä‘á»™c quyá»n táº­p trung vÃ o tay thiá»ƒu sá»‘ tÆ° sáº£n, má»Ÿ rá»™ng khoáº£ng cÃ¡ch thu nháº­p trong xÃ£ há»™i.',
    example: '1% ngÆ°á»i giÃ u nháº¥t tháº¿ giá»›i náº¯m giá»¯ lÆ°á»£ng tÃ i sáº£n lá»›n hÆ¡n tá»•ng tÃ i sáº£n cá»§a nhiá»u quá»‘c gia cá»™ng láº¡i.',
    badgeCls: 'tl-badge--yellow',
  },
]

const COMPETITIONS = [
  {
    num: 'â‘ ',
    title: 'ÄQ vs NgoÃ i Äá»™c Quyá»n',
    icon: 'ðŸ¦',
    side: 'left',
    badgeCls: 'tl-badge--purple',
    content: 'CÃ¡c tá»• chá»©c Ä‘á»™c quyá»n dÃ¹ng sá»©c máº¡nh kinh táº¿ Ä‘á»ƒ chÃ¨n Ã©p, chi phá»‘i hoáº·c thÃ´n tÃ­nh cÃ¡c Ä‘á»‘i thá»§ nhá» láº» hÆ¡n, duy trÃ¬ vá»‹ tháº¿ thá»‘ng trá»‹ thá»‹ trÆ°á»ng.',
    highlight: 'Walmart Ã©p giÃ¡ nhÃ  cung cáº¥p & bÃ¡n siÃªu ráº» â†’ cÃ¡c cá»­a hÃ ng táº¡p hÃ³a Ä‘á»‹a phÆ°Æ¡ng pháº£i Ä‘Ã³ng cá»­a.',
  },
  {
    num: 'â‘¡',
    title: 'Giá»¯a cÃ¡c Tá»• chá»©c ÄQ',
    icon: 'âš”ï¸',
    side: 'right',
    badgeCls: 'tl-badge--pink',
    content: 'Äá»‘i Ä‘áº§u giá»¯a cÃ¡c "Ã´ng lá»›n" Ä‘á»ƒ giÃ nh thá»‹ trÆ°á»ng, nguá»“n nguyÃªn liá»‡u vÃ  cÆ¡ há»™i Ä‘áº§u tÆ° â€” lan rá»™ng ra pháº¡m vi toÃ n cáº§u giá»¯a cÃ¡c TNC.',
    highlight: 'Apple vs Samsung tranh giÃ nh smartphone toÃ n cáº§u; Boeing vs Airbus tranh giÃ nh Ä‘Æ¡n hÃ ng hÃ ng khÃ´ng.',
  },
  {
    num: 'â‘¢',
    title: 'Ná»™i bá»™ Tá»• chá»©c ÄQ',
    icon: 'ðŸ¤¼',
    side: 'left',
    badgeCls: 'tl-badge--mint',
    content: 'Ngay trong liÃªn minh (Cartel, Syndicat, Trust), cÃ¡c thÃ nh viÃªn váº«n cáº¡nh tranh ngáº§m Ä‘á»ƒ giÃ nh lá»£i tháº¿ vá» sáº£n lÆ°á»£ng, thá»‹ trÆ°á»ng vÃ  tá»· lá»‡ phÃ¢n chia lá»£i nhuáº­n.',
    highlight: 'OPEC: dÃ¹ cÃ³ thá»a thuáº­n, cÃ¡c quá»‘c gia thÃ nh viÃªn Ä‘Ã´i khi lÃ©n khai thÃ¡c vÆ°á»£t háº¡n ngáº¡ch Ä‘á»ƒ tá»‘i Ä‘a hÃ³a lá»£i Ã­ch riÃªng.',
  },
]

export default function DacDiem() {
  return (
    <section id="dac-diem" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--mint">ChÆ°Æ¡ng 3</span>
          <h2 className="section__title">TÃ¡c Äá»™ng cá»§a Äá»™c Quyá»n trong Kinh Táº¿ Thá»‹ TrÆ°á»ng</h2>
          <p className="section__desc">
            Äá»™c quyá»n mang láº¡i cáº£ tÃ¡c Ä‘á»™ng tÃ­ch cá»±c láº«n tiÃªu cá»±c cho ná»n kinh táº¿,
            Ä‘á»“ng thá»i táº¡o ra ba tráº¡ng thÃ¡i cáº¡nh tranh Ä‘áº·c thÃ¹ trong giai Ä‘oáº¡n CNTB ÄQ.
          </p>
        </header>

        {/* Positives */}
        <h3 className="sub-heading" data-reveal style={{ color: '#06D6A0', marginBottom: '1.25rem' }}>
          âœ… TÃ¡c Ä‘á»™ng TÃ­ch cá»±c
        </h3>
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '2.5rem' }} data-reveal>
          {POSITIVES.map((p, i) => (
            <div key={p.title} className="intro-card intro-card--mint" data-reveal data-delay={`${i * 100}`}>
              <div className="card-icon-wrap icon-wrap--mint">
                <span role="img" aria-label={p.title}>{p.icon}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tl-highlight" style={{ marginTop: '0.75rem' }}>
                <span className="tl-highlight-icon">ðŸ“Œ</span>
                <em>{p.example}</em>
              </div>
            </div>
          ))}
        </div>

        {/* Negatives */}
        <h3 className="sub-heading" data-reveal style={{ color: '#FF6B35', marginBottom: '1.25rem' }}>
          âŒ TÃ¡c Ä‘á»™ng TiÃªu cá»±c
        </h3>
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '3rem' }} data-reveal>
          {NEGATIVES.map((n, i) => (
            <div key={n.title} className="intro-card intro-card--pink" data-reveal data-delay={`${i * 100}`}>
              <div className="card-icon-wrap icon-wrap--pink">
                <span role="img" aria-label={n.title}>{n.icon}</span>
              </div>
              <h3>{n.title}</h3>
              <p>{n.desc}</p>
              <div className="tl-highlight" style={{ marginTop: '0.75rem' }}>
                <span className="tl-highlight-icon">âš ï¸</span>
                <em>{n.example}</em>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Competition types */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.5rem' }}>
          âš¡ Quan há»‡ Cáº¡nh tranh trong Tráº¡ng thÃ¡i Äá»™c quyá»n
        </h3>
        <div className="timeline">
          {COMPETITIONS.map((c, i) => (
            <div
              key={c.num}
              className={`tl-item tl-item--${c.side}`}
              data-reveal
              data-delay={`${i * 120}`}
            >
              <div className="tl-node">
                <div className={`tl-node-inner ${c.badgeCls}`}>
                  <span>{c.icon}</span>
                </div>
              </div>
              <div className="tl-card">
                <div className="tl-card-header">
                  <span className="tl-num">{c.num}</span>
                  <span className={`tl-badge ${c.badgeCls}`}>{c.title}</span>
                </div>
                <p className="tl-detail">{c.content}</p>
                <div className="tl-highlight">
                  <span className="tl-highlight-icon">ðŸ’¡</span>
                  <em>{c.highlight}</em>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
