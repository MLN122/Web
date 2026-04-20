// frontend/src/components/GioiThieu.jsx
const CAUSES = [
  {
    cls: 'intro-card--purple',
    iconCls: 'icon-wrap--purple',
    icon: 'âš™ï¸',
    title: 'PhÃ¡t triá»ƒn lá»±c lÆ°á»£ng sáº£n xuáº¥t',
    desc: 'Tiáº¿n bá»™ khoa há»c - ká»¹ thuáº­t thÃºc Ä‘áº©y hÃ¬nh thÃ nh cÃ¡c xÃ­ nghiá»‡p lá»›n Ä‘Ã²i há»i nguá»“n vá»‘n khá»•ng lá»“ mÃ  chá»‰ táº­p Ä‘oÃ n lá»›n má»›i Ä‘Ã¡p á»©ng Ä‘Æ°á»£c.',
    example: 'ÄÆ°á»ng sáº¯t & mÃ¡y mÃ³c cÃ´ng nghiá»‡p náº·ng cuá»‘i TK 19 â†’ cÃ¡c xÃ­ nghiá»‡p nhá» khÃ´ng cáº¡nh tranh ná»•i, nhÆ°á»ng chá»— cho táº­p Ä‘oÃ n khá»•ng lá»“.',
  },
  {
    cls: 'intro-card--pink',
    iconCls: 'icon-wrap--pink',
    icon: 'âš”ï¸',
    title: 'Cáº¡nh tranh gay gáº¯t',
    desc: 'Cáº¡nh tranh khiáº¿n doanh nghiá»‡p nhá» bá»‹ loáº¡i bá» hoáº·c há»£p nháº¥t vá»›i nhau, hÃ¬nh thÃ nh cÃ¡c doanh nghiá»‡p lá»›n ngÃ y cÃ ng Ã­t vá» sá»‘ lÆ°á»£ng.',
    example: 'ThÆ°Æ¡ng máº¡i Ä‘iá»‡n tá»­: cáº¡nh tranh giÃ¡ & logistics khá»‘c liá»‡t khiáº¿n sÃ n nhá» phÃ¡ sáº£n, cuá»‘i cÃ¹ng chá»‰ cÃ²n Amazon thá»‘ng trá»‹.',
  },
  {
    cls: 'intro-card--mint',
    iconCls: 'icon-wrap--mint',
    icon: 'ðŸ’¥',
    title: 'Khá»§ng hoáº£ng kinh táº¿',
    desc: 'Khá»§ng hoáº£ng buá»™c doanh nghiá»‡p táº­p trung sáº£n xuáº¥t; há»‡ thá»‘ng tÃ­n dá»¥ng táº¡o Ä‘iá»u kiá»‡n cho quÃ¡ trÃ¬nh tÃ­ch tá»¥ tÆ° báº£n nhanh chÃ³ng.',
    example: 'Khá»§ng hoáº£ng 2008: ngÃ¢n hÃ ng nhá» phÃ¡ sáº£n hoáº·c bá»‹ JPMorgan, Bank of America thÃ¢u tÃ³m â€” Ä‘á»™c quyá»n ngÃ nh ngÃ¢n hÃ ng tÄƒng máº¡nh.',
  },
]

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&fit=crop',
    alt: 'Thá»‹ trÆ°á»ng tÃ i chÃ­nh OPEC',
    caption: 'OPEC â€” liÃªn minh Ä‘á»™c quyá»n dáº§u má» kiá»ƒm soÃ¡t ~40% sáº£n lÆ°á»£ng tháº¿ giá»›i',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&fit=crop',
    alt: 'Táº­p Ä‘oÃ n cÃ´ng nghiá»‡p lá»›n',
    caption: 'Táº­p trung tÆ° báº£n â†’ hÃ¬nh thÃ nh cÃ¡c tá»• chá»©c Ä‘á»™c quyá»n',
  },
]

export default function GioiThieu() {
  return (
    <section id="gioi-thieu" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--purple">ChÆ°Æ¡ng 1</span>
          <h2 className="section__title">KhÃ¡i niá»‡m &amp; NguyÃªn nhÃ¢n hÃ¬nh thÃ nh Äá»™c quyá»n</h2>
          <p className="section__desc">
            Cuá»‘i TK XIX â€” Ä‘áº§u TK XX, cáº¡nh tranh tá»± do táº¥t yáº¿u dáº«n tá»›i táº­p trung sáº£n xuáº¥t vÃ  tÆ° báº£n,
            hÃ¬nh thÃ nh <strong>Ä‘á»™c quyá»n</strong> â€” xu hÆ°á»›ng kinh táº¿ cá»§a CNTB giai Ä‘oáº¡n má»›i.
          </p>
        </header>

        {/* Definition banner */}
        <div className="quote-banner" data-reveal data-delay="200">
          <div className="quote-icon">"</div>
          <div className="quote-body">
            <p className="quote-text">
              Äá»™c quyá»n lÃ  sá»± liÃªn minh giá»¯a cÃ¡c doanh nghiá»‡p lá»›n, cÃ³ kháº£ nÄƒng thÃ¢u tÃ³m
              viá»‡c sáº£n xuáº¥t vÃ  tiÃªu thá»¥ má»™t sá»‘ loáº¡i hÃ ng hoÃ¡, Ä‘á»‹nh ra giÃ¡ cáº£ Ä‘á»™c quyá»n
              nháº±m thu lá»£i nhuáº­n Ä‘á»™c quyá»n cao.
            </p>
            <span className="quote-author">â€” V.I. Lenin, <em>Chá»§ nghÄ©a Ä‘áº¿ quá»‘c â€” giai Ä‘oáº¡n tá»™t cÃ¹ng cá»§a CNTB</em></span>
          </div>
        </div>

        {/* OPEC example callout */}
        <div className="xk-callout" data-reveal data-delay="250" style={{ marginBottom: '2.5rem' }}>
          <div className="xk-callout-icon">ðŸ›¢ï¸</div>
          <div>
            <strong>VÃ­ dá»¥ Ä‘iá»ƒn hÃ¬nh â€” OPEC:</strong> Tá»• chá»©c cÃ¡c nÆ°á»›c xuáº¥t kháº©u dáº§u má» lÃ  dáº¡ng liÃªn minh
            Ä‘á»™c quyá»n kiá»ƒm soÃ¡t sáº£n lÆ°á»£ng dáº§u bÃ¡n ra toÃ n cáº§u, tá»« Ä‘Ã³ Ä‘á»‹nh giÃ¡ dáº§u trÃªn thá»‹ trÆ°á»ng
            quá»‘c táº¿ Ä‘á»ƒ thu lá»£i nhuáº­n cao.
          </div>
        </div>

        {/* 3 cause cards */}
        <h3 className="sub-heading" style={{ marginBottom: '1.5rem' }} data-reveal>
          3 NguyÃªn nhÃ¢n hÃ¬nh thÃ nh Äá»™c quyá»n
        </h3>
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {CAUSES.map((c, i) => (
            <div
              key={c.title}
              className={`intro-card ${c.cls}`}
              data-reveal
              data-delay={`${(i + 1) * 100}`}
            >
              <div className={`card-icon-wrap ${c.iconCls}`}>
                <span role="img" aria-label={c.title}>{c.icon}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="tl-highlight" style={{ marginTop: '0.75rem' }}>
                <span className="tl-highlight-icon">ðŸ“Œ</span>
                <em>{c.example}</em>
              </div>
            </div>
          ))}
        </div>

        {/* Key points list + images */}
        <div className="intro-split" data-reveal>
          <div className="intro-text-block">
            <h3 className="sub-heading">Äáº·c trÆ°ng cÆ¡ báº£n cá»§a Ä‘á»™c quyá»n</h3>
            <ul className="styled-list">
              <li>
                <span className="list-icon list-icon--purple">â‘ </span>
                ThÃ¢u tÃ³m viá»‡c sáº£n xuáº¥t &amp; tiÃªu thá»¥ hÃ ng hoÃ¡
              </li>
              <li>
                <span className="list-icon list-icon--pink">â‘¡</span>
                Äá»‹nh ra <strong>giÃ¡ cáº£ Ä‘á»™c quyá»n</strong> â€” mua tháº¥p, bÃ¡n cao
              </li>
              <li>
                <span className="list-icon list-icon--mint">â‘¢</span>
                Thu <strong>lá»£i nhuáº­n Ä‘á»™c quyá»n cao</strong> hÆ¡n lá»£i nhuáº­n bÃ¬nh quÃ¢n
              </li>
              <li>
                <span className="list-icon list-icon--blue">â‘£</span>
                Loáº¡i bá» hoáº·c thÃ´n tÃ­nh Ä‘á»‘i thá»§ cáº¡nh tranh
              </li>
              <li>
                <span className="list-icon list-icon--purple">â‘¤</span>
                Chi phá»‘i chÃ­nh sÃ¡ch kinh táº¿ vÃ  bá»™ mÃ¡y nhÃ  nÆ°á»›c
              </li>
            </ul>
          </div>
          <div className="img-showcase">
            {IMAGES.map((img) => (
              <div className="img-wrap" key={img.alt}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <p className="img-caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

