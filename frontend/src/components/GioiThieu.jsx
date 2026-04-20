// frontend/src/components/GioiThieu.jsx
const INTRO_CARDS = [
  {
    cls: 'intro-card--purple',
    iconCls: 'icon-wrap--purple',
    icon: '📈',
    title: 'Tập trung sản xuất',
    desc: 'Cạnh tranh gay gắt → doanh nghiệp nhỏ bị thôn tính → sản xuất tập trung vào tay ít người.',
  },
  {
    cls: 'intro-card--pink',
    iconCls: 'icon-wrap--pink',
    icon: '🏛️',
    title: 'Tích tụ tư bản',
    desc: 'Nhờ lợi nhuận tích lũy và tín dụng, các nhà TB lớn không ngừng mở rộng quy mô tư bản.',
  },
  {
    cls: 'intro-card--mint',
    iconCls: 'icon-wrap--mint',
    icon: '🔬',
    title: 'Tiến bộ kỹ thuật',
    desc: 'Máy móc hiện đại đẩy chi phí đầu tư lên cao, chỉ doanh nghiệp lớn mới đủ sức cạnh tranh.',
  },
  {
    cls: 'intro-card--blue',
    iconCls: 'icon-wrap--blue',
    icon: '🌐',
    title: 'Toàn cầu hóa kinh tế',
    desc: 'Thị trường mở rộng ra toàn cầu tạo ra áp lực cạnh tranh chưa từng có, thúc đẩy liên kết.',
  },
]

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&fit=crop',
    alt: 'Trung tâm tài chính hiện đại',
    caption: 'Các tập đoàn hiện đại kiểm soát nền kinh tế',
  },
  {
    src: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=600&q=80&fit=crop',
    alt: 'Nhà máy công nghiệp',
    caption: 'Tập trung sản xuất quy mô lớn',
  },
]

export default function GioiThieu() {
  return (
    <section id="gioi-thieu" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--purple">Mở đầu</span>
          <h2 className="section__title">Độc Quyền là gì?</h2>
          <p className="section__desc">
            Cuối thế kỷ XIX — đầu thế kỷ XX, cạnh tranh tự do dẫn đến sự tập trung sản xuất và tư bản
            đến mức hình thành <strong>độc quyền</strong> — xu hướng kinh tế tất yếu của CNTB.
          </p>
        </header>

        {/* Definition banner */}
        <div className="quote-banner" data-reveal data-delay="200">
          <div className="quote-icon">"</div>
          <div className="quote-body">
            <p className="quote-text">
              Độc quyền là sự liên minh của những nhà tư bản lớn nắm trong tay phần lớn
              việc sản xuất và tiêu thụ một loại hàng hóa nào đó.
            </p>
            <span className="quote-author">— V.I. Lenin, <em>Chủ nghĩa đế quốc — giai đoạn tột cùng của CNTB</em></span>
          </div>
        </div>

        {/* 4 cause cards */}
        <div className="intro-grid">
          {INTRO_CARDS.map((c, i) => (
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
            </div>
          ))}
        </div>

        {/* Key points list + images */}
        <div className="intro-split" data-reveal>
          <div className="intro-text-block">
            <h3 className="sub-heading">Đặc trưng cơ bản của độc quyền</h3>
            <ul className="styled-list">
              <li>
                <span className="list-icon list-icon--purple">①</span>
                Kiểm soát nguồn nguyên liệu và kỹ thuật
              </li>
              <li>
                <span className="list-icon list-icon--pink">②</span>
                Áp đặt <strong>giá cả độc quyền</strong> — mua thấp, bán cao
              </li>
              <li>
                <span className="list-icon list-icon--mint">③</span>
                Thu lợi nhuận độc quyền cao hơn lợi nhuận bình quân
              </li>
              <li>
                <span className="list-icon list-icon--blue">④</span>
                Loại bỏ hoặc thôn tính đối thủ cạnh tranh
              </li>
              <li>
                <span className="list-icon list-icon--purple">⑤</span>
                Chi phối chính sách kinh tế và nhà nước
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
