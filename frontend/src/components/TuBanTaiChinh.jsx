// frontend/src/components/TuBanTaiChinh.jsx
const CAUSES = [
  {
    icon: 'âš™ï¸',
    title: 'PhÃ¡t triá»ƒn LLSX & xÃ£ há»™i hÃ³a',
    desc: 'TÃ­ch tá»¥ vÃ  táº­p trung sáº£n xuáº¥t Ä‘áº¿n quy mÃ´ lá»›n Ä‘Ã²i há»i Ä‘iá»u tiáº¿t xÃ£ há»™i vÃ  káº¿ hoáº¡ch hÃ³a táº­p trung tá»« nhÃ  nÆ°á»›c Ä‘á»ƒ quáº£n lÃ½ ná»n kinh táº¿.',
    example: 'XÃ¢y dá»±ng Ä‘Æ°á»ng sáº¯t quá»‘c gia, viá»…n thÃ´ng, NASA â€” do nhÃ  nÆ°á»›c Ä‘áº§u tÆ° vÃ¬ tÆ° nhÃ¢n tháº¥y rá»§i ro cao vÃ  lÃ¢u thu há»“i vá»‘n.',
  },
  {
    icon: 'ðŸ—ï¸',
    title: 'Äáº§u tÆ° háº¡ táº§ng & ngÃ nh má»›i',
    desc: 'CÃ¡c lÄ©nh vá»±c káº¿t cáº¥u háº¡ táº§ng Ä‘Ã²i há»i vá»‘n lá»›n, thu há»“i cháº­m, lá»£i nhuáº­n Ã­t â€” tÆ° nhÃ¢n khÃ´ng muá»‘n hoáº·c khÃ´ng Ä‘á»§ kháº£ nÄƒng Ä‘áº§u tÆ°.',
    example: 'NhÃ  nÆ°á»›c quá»‘c há»¯u hÃ³a ngÃ nh than, luyá»‡n kim thua lá»— Ä‘á»ƒ tÆ° báº£n chuyá»ƒn vá»‘n sang cÃ´ng nghá»‡ cao, viá»…n thÃ´ng cÃ³ lÃ£i hÆ¡n.',
  },
  {
    icon: 'ðŸ•Šï¸',
    title: 'Xoa dá»‹u mÃ¢u thuáº«n giai cáº¥p',
    desc: 'NhÃ  nÆ°á»›c ÄQ ra Ä‘á»i Ä‘á»ƒ xoa dá»‹u mÃ¢u thuáº«n giá»¯a tÆ° sáº£n vÃ  vÃ´ sáº£n, táº¡o sá»©c máº¡nh váº­t cháº¥t duy trÃ¬ á»•n Ä‘á»‹nh chÃ­nh trá»‹ - xÃ£ há»™i.',
    example: 'Ban hÃ nh luáº­t lao Ä‘á»™ng, lÆ°Æ¡ng tá»‘i thiá»ƒu, gÃ³i trá»£ cáº¥p tháº¥t nghiá»‡p Ä‘á»ƒ ngÄƒn cháº·n Ä‘Ã¬nh cÃ´ng vÃ  báº¡o loáº¡n.',
  },
  {
    icon: 'ðŸŒ',
    title: 'Quan há»‡ kinh táº¿ Ä‘á»‘i ngoáº¡i',
    desc: 'Má»Ÿ rá»™ng QHKT Ä‘á»‘i ngoáº¡i, há»— trá»£ báº£o há»™ tÆ° báº£n trong nÆ°á»›c vÃ  táº¡o mÃ´i trÆ°á»ng quá»‘c táº¿ thuáº­n lá»£i cho cÃ¡c hoáº¡t Ä‘á»™ng kinh táº¿.',
    example: 'ÄÃ m phÃ¡n hiá»‡p Ä‘á»‹nh thÆ°Æ¡ng máº¡i, Ã¡p thuáº¿ báº£o há»™ hÃ ng nháº­p kháº©u Ä‘á»ƒ báº£o vá»‡ ngÃ nh cÃ´ng nghiá»‡p trong nÆ°á»›c.',
  },
]

const REVOLVING_DOOR = [
  { icon: 'ðŸ­', text: 'Äáº¡i diá»‡n tá»• chá»©c ÄQ â†’ CÆ°Æ¡ng vá»‹ quan trá»ng trong chÃ­nh phá»§' },
  { icon: 'ðŸ”„', text: 'Quan chá»©c rá»i chÃ­nh trÆ°á»ng â†’ HÄQT táº­p Ä‘oÃ n lá»›n ("cÃ¡nh cá»­a xoay")' },
  { icon: 'ðŸ“‹', text: 'Chi phá»‘i hoáº¡ch Ä‘á»‹nh Ä‘Æ°á»ng lá»‘i kinh táº¿ & chÃ­nh trá»‹' },
  { icon: 'ðŸ’°', text: 'Äáº£m báº£o nhÃ  nÆ°á»›c phá»¥c vá»¥ lá»£i Ã­ch táº§ng lá»›p tÆ° báº£n Ä‘á»™c quyá»n' },
]

const TOOLS = [
  { icon: 'ðŸ’°', title: 'NgÃ¢n sÃ¡ch & Thuáº¿', desc: 'ÄÃ¡nh thuáº¿ cao hÃ ng nháº­p kháº©u báº£o vá»‡ ngÃ nh thÃ©p trong nÆ°á»›c; chi ngÃ¢n sÃ¡ch kÃ­ch cáº§u.' },
  { icon: 'ðŸ¦', title: 'Tiá»n tá»‡ â€“ TÃ­n dá»¥ng', desc: 'NgÃ¢n hÃ ng Trung Æ°Æ¡ng tÄƒng/giáº£m lÃ£i suáº¥t Ä‘á»ƒ kiá»m cháº¿ láº¡m phÃ¡t vÃ  Ä‘iá»u tiáº¿t tÄƒng trÆ°á»Ÿng.' },
  { icon: 'ðŸ›ï¸', title: 'Doanh nghiá»‡p NhÃ  nÆ°á»›c', desc: 'Ná»n táº£ng váº­t cháº¥t Ä‘á»ƒ Ä‘iá»u tiáº¿t cÃ¡c quÃ¡ trÃ¬nh kinh táº¿, há»— trá»£ tÆ° báº£n tÆ° nhÃ¢n.' },
  { icon: 'ðŸ“…', title: 'Káº¿ hoáº¡ch hÃ³a kinh táº¿', desc: 'ChÆ°Æ¡ng trÃ¬nh phÃ¡t triá»ƒn ngáº¯n/dÃ i háº¡n Ä‘á»‹nh hÆ°á»›ng Ä‘áº§u tÆ° vÃ  phÃ¢n bá»• nguá»“n lá»±c.' },
]

export default function TuBanTaiChinh() {
  return (
    <section id="tu-ban" className="section section--alt">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--blue">ChÆ°Æ¡ng 4</span>
          <h2 className="section__title">Äá»™c Quyá»n NhÃ  NÆ°á»›c trong CNTB</h2>
          <p className="section__desc">
            NhÃ  nÆ°á»›c náº¯m giá»¯ vá»‹ tháº¿ Ä‘á»™c quyá»n, duy trÃ¬ sá»©c máº¡nh cÃ¡c tá»• chá»©c ÄQ tÆ° nhÃ¢n
            á»Ÿ cÃ¡c lÄ©nh vá»±c then chá»‘t nháº±m á»•n Ä‘á»‹nh cháº¿ Ä‘á»™ chÃ­nh trá»‹ - xÃ£ há»™i.
          </p>
        </header>

        {/* Báº£n cháº¥t banner */}
        <div className="quote-banner" data-reveal data-delay="100">
          <div className="quote-icon">ðŸ›ï¸</div>
          <div className="quote-body">
            <p className="quote-text">
              Äá»™c quyá»n nhÃ  nÆ°á»›c lÃ  kiá»ƒu Ä‘á»™c quyá»n mÃ  nhÃ  nÆ°á»›c náº¯m giá»¯ vá»‹ tháº¿ Ä‘á»™c quyá»n,
              káº¿t há»£p vá»›i sá»©c máº¡nh cÃ¡c tá»• chá»©c ÄQ tÆ° nhÃ¢n á»Ÿ cÃ¡c lÄ©nh vá»±c then chá»‘t
              Ä‘á»ƒ á»•n Ä‘á»‹nh cháº¿ Ä‘á»™ chÃ­nh trá»‹ - xÃ£ há»™i tÆ° báº£n chá»§ nghÄ©a.
            </p>
            <span className="quote-author">â€” GiÃ¡o trÃ¬nh KTCT MÃ¡c-LÃªnin, Bá»™ GD&ÄT</span>
          </div>
        </div>

        {/* 4 causes */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.1 NguyÃªn nhÃ¢n hÃ¬nh thÃ nh
        </h3>
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '2.5rem' }}>
          {CAUSES.map((c, i) => (
            <div key={c.title} className="intro-card intro-card--blue" data-reveal data-delay={`${i * 100}`}>
              <div className="card-icon-wrap icon-wrap--blue">
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

        {/* 4.2 Revolving door */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.2 Sá»± káº¿t há»£p vá» NhÃ¢n sá»± â€” "CÃ¡nh cá»­a xoay"
        </h3>
        <div className="fin-diagram" data-reveal data-delay="100" style={{ marginBottom: '1.5rem' }}>
          <div className="fin-box fin-box--bank">
            <div className="fin-box-icon">ðŸ­</div>
            <h3>Tá»• chá»©c Äá»™c quyá»n</h3>
            <ul>
              <li>Táº­p Ä‘oÃ n cÃ´ng nghiá»‡p lá»›n</li>
              <li>NgÃ¢n hÃ ng Ä‘á»™c quyá»n</li>
              <li>LiÃªn Ä‘oÃ n cÃ´ng nghiá»‡p</li>
            </ul>
          </div>
          <div className="fin-merge">
            <div className="merge-sym">â‡„</div>
            <div className="merge-arrow">Káº¿t há»£p nhÃ¢n sá»±</div>
            <p>"CÃ¡nh cá»­a xoay" 2 chiá»u</p>
          </div>
          <div className="fin-box fin-box--industry">
            <div className="fin-box-icon">ðŸ›ï¸</div>
            <h3>Bá»™ mÃ¡y NhÃ  nÆ°á»›c</h3>
            <ul>
              <li>ChÃ­nh phá»§ & Quá»‘c há»™i</li>
              <li>Bá»™ TÃ i chÃ­nh, Kinh táº¿</li>
              <li>CÆ¡ quan quÃ¢n sá»±</li>
            </ul>
          </div>
        </div>
        <div className="oligo-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '2.5rem' }}>
          {REVOLVING_DOOR.map((r, i) => (
            <div key={i} className="oligo-card" data-reveal data-delay={`${i * 80}`}>
              <div className="oligo-card-icon">{r.icon}</div>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
        <div className="xk-callout" data-reveal style={{ marginBottom: '2.5rem' }}>
          <div className="xk-callout-icon">ðŸ”„</div>
          <div>
            <strong>VÃ­ dá»¥ Ä‘iá»ƒn hÃ¬nh:</strong> á»ž Má»¹, hiá»‡n tÆ°á»£ng <em>"Revolving door"</em> â€” cá»±u tÆ°á»›ng lÄ©nh
            quÃ¢n Ä‘á»™i hoáº·c quan chá»©c Láº§u NÄƒm GÃ³c thÆ°á»ng chuyá»ƒn sang lÃ m thÃ nh viÃªn HÄQT táº­p Ä‘oÃ n vÅ© khÃ­
            nhÆ° Lockheed Martin hay Raytheon. á»ž chÃ¢u Ã‚u: LiÃªn Ä‘oÃ n CÃ´ng nghiá»‡p Ã, Äá»©c, Anh gáº¯n káº¿t cháº·t vá»›i chÃ­nh phá»§.
          </div>
        </div>

        {/* 4.3 & 4.4 Tools */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.3â€“4.4 Sá»Ÿ há»¯u NhÃ  nÆ°á»›c &amp; CÃ¡c cÃ´ng cá»¥ Ä‘iá»u tiáº¿t kinh táº¿
        </h3>
        <div className="oligo-grid">
          {TOOLS.map((t, i) => (
            <div key={t.title} className="oligo-card" data-reveal data-delay={`${i * 80}`}>
              <div className="oligo-card-icon">{t.icon}</div>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="fin-result" data-reveal data-delay="350" style={{ marginTop: '2rem' }}>
          <div className="fin-result-icon">âš–ï¸</div>
          <div>
            <h3>Biá»ƒu hiá»‡n má»›i ngÃ y nay</h3>
            <p>Thá»ƒ cháº¿ Ä‘a nguyÃªn phá»• biáº¿n hÆ¡n; cÆ¡ cháº¿ thá»a hiá»‡p giá»¯a cÃ¡c nhÃ³m lá»£i Ã­ch;
              chÃ­nh phá»§ nghá»‹ viá»‡n tÆ° sáº£n hiá»‡n Ä‘áº¡i váº­n hÃ nh nhÆ° má»™t <em>"cÃ´ng ty cá»• pháº§n tÆ° báº£n chá»§ nghÄ©a"</em>
              tá»‘i Æ°u hÃ³a lá»£i Ã­ch Ä‘á»™c quyá»n.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

