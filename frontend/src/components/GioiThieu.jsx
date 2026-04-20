// frontend/src/components/GioiThieu.jsx
const CAUSES = [
  {
    cls: 'intro-card--purple',
    iconCls: 'icon-wrap--purple',
    icon: '⚙️',
    title: 'Phát triển lực lượng sản xuất',
    desc: 'Tiến bộ khoa học - kỹ thuật thúc đẩy hình thành các xí nghiệp lớn đòi hỏi nguồn vốn khổng lồ mà chỉ tập đoàn lớn mới đáp ứng được.',
    example: 'Đường sắt & máy móc công nghiệp nặng cuối TK 19 → các xí nghiệp nhỏ không cạnh tranh nổi, nhường chỗ cho tập đoàn khổng lồ.',
  },
  {
    cls: 'intro-card--pink',
    iconCls: 'icon-wrap--pink',
    icon: '⚔️',
    title: 'Cạnh tranh gay gắt',
    desc: 'Cạnh tranh khiến doanh nghiệp nhỏ bị loại bỏ hoặc hợp nhất với nhau, hình thành các doanh nghiệp lớn ngày càng ít về số lượng.',
    example: 'Thương mại điện tử: cạnh tranh giá & logistics khốc liệt khiến sàn nhỏ phá sản, cuối cùng chỉ còn Amazon thống trị.',
  },
  {
    cls: 'intro-card--mint',
    iconCls: 'icon-wrap--mint',
    icon: '💥',
    title: 'Khủng hoảng kinh tế',
    desc: 'Khủng hoảng buộc doanh nghiệp tập trung sản xuất; hệ thống tín dụng tạo điều kiện cho quá trình tích tụ tư bản nhanh chóng.',
    example: 'Khủng hoảng 2008: ngân hàng nhỏ phá sản hoặc bị JPMorgan, Bank of America thâu tóm — độc quyền ngành ngân hàng tăng mạnh.',
  },
]

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&fit=crop',
    alt: 'Thị trường tài chính OPEC',
    caption: 'OPEC — liên minh độc quyền dầu mỏ kiểm soát ~40% sản lượng thế giới',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&fit=crop',
    alt: 'Tập đoàn công nghiệp lớn',
    caption: 'Tập trung tư bản → hình thành các tổ chức độc quyền',
  },
]

export default function GioiThieu() {
  return (
    <section id="gioi-thieu" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--purple">Chương 1</span>
          <h2 className="section__title">Khái niệm &amp; Nguyên nhân hình thành Độc quyền</h2>
          <p className="section__desc">
            Cuối TK XIX — đầu TK XX, cạnh tranh tự do tất yếu dẫn tới tập trung sản xuất và tư bản,
            hình thành <strong>độc quyền</strong> — xu hướng kinh tế của CNTB giai đoạn mới.
          </p>
        </header>

        {/* Definition banner */}
        <div className="quote-banner" data-reveal data-delay="200">
          <div className="quote-icon">"</div>
          <div className="quote-body">
            <p className="quote-text">
              Độc quyền là sự liên minh giữa các doanh nghiệp lớn, có khả năng thâu tóm
              việc sản xuất và tiêu thụ một số loại hàng hoá, định ra giá cả độc quyền
              nhằm thu lợi nhuận độc quyền cao.
            </p>
            <span className="quote-author">— V.I. Lenin, <em>Chủ nghĩa đế quốc — giai đoạn tột cùng của CNTB</em></span>
          </div>
        </div>

        {/* OPEC example callout */}
        <div className="xk-callout" data-reveal data-delay="250" style={{ marginBottom: '2.5rem' }}>
          <div className="xk-callout-icon">🛢️</div>
          <div>
            <strong>Ví dụ điển hình — OPEC:</strong> Tổ chức các nước xuất khẩu dầu mỏ là dạng liên minh
            độc quyền kiểm soát sản lượng dầu bán ra toàn cầu, từ đó định giá dầu trên thị trường
            quốc tế để thu lợi nhuận cao.
          </div>
        </div>

        {/* 3 cause cards */}
        <h3 className="sub-heading" style={{ marginBottom: '1.5rem' }} data-reveal>
          3 Nguyên nhân hình thành Độc quyền
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
                <span className="tl-highlight-icon">📌</span>
                <em>{c.example}</em>
              </div>
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
                Thâu tóm việc sản xuất &amp; tiêu thụ hàng hoá
              </li>
              <li>
                <span className="list-icon list-icon--pink">②</span>
                Định ra <strong>giá cả độc quyền</strong> — mua thấp, bán cao
              </li>
              <li>
                <span className="list-icon list-icon--mint">③</span>
                Thu <strong>lợi nhuận độc quyền cao</strong> hơn lợi nhuận bình quân
              </li>
              <li>
                <span className="list-icon list-icon--blue">④</span>
                Loại bỏ hoặc thôn tính đối thủ cạnh tranh
              </li>
              <li>
                <span className="list-icon list-icon--purple">⑤</span>
                Chi phối chính sách kinh tế và bộ máy nhà nước
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

