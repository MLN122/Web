// frontend/src/components/DacDiem.jsx
const POSITIVES = [
  {
    icon: '🔬',
    title: 'Thúc đẩy nghiên cứu khoa học kỹ thuật',
    desc: 'Các tập đoàn lớn có nguồn vốn khổng lồ để đầu tư R&D, tạo ra những đột phá công nghệ thay đổi thế giới.',
    example: 'Google, Microsoft rót hàng tỷ USD nghiên cứu Trí tuệ nhân tạo — điều mà doanh nghiệp nhỏ không thể làm.',
    badgeCls: 'tl-badge--mint',
  },
  {
    icon: '⚡',
    title: 'Tăng năng suất & năng lực cạnh tranh',
    desc: 'Sản xuất quy mô lớn giảm chi phí đơn vị, áp dụng công nghệ tiên tiến, nâng cao hiệu quả toàn nền kinh tế.',
    example: 'Dây chuyền sản xuất ô tô Toyota áp dụng "Just-in-time" — chuẩn mực toàn cầu về năng suất công nghiệp.',
    badgeCls: 'tl-badge--blue',
  },
  {
    icon: '🏙️',
    title: 'Thúc đẩy kinh tế phát triển hiện đại',
    desc: 'Xây dựng hạ tầng quy mô lớn, kéo theo sự phát triển của các ngành công nghiệp phụ trợ và dịch vụ.',
    example: 'Dưới CNTB, thế giới trải qua 4 Cuộc Cách mạng công nghiệp, tạo ra khối tài sản vật chất lớn hơn tất cả các thời kỳ trước cộng lại.',
    badgeCls: 'tl-badge--yellow',
  },
]

const NEGATIVES = [
  {
    icon: '💸',
    title: 'Thiệt hại cho người tiêu dùng',
    desc: 'Định giá độc quyền: mua thấp, bán cao, áp đặt giá không phản ánh chi phí thực tế.',
    example: 'Công ty dược phẩm độc quyền định giá thuốc đặc trị bệnh hiểm nghèo cao gấp hàng chục lần chi phí sản xuất.',
    badgeCls: 'tl-badge--purple',
  },
  {
    icon: '🔒',
    title: 'Kìm hãm tiến bộ kỹ thuật',
    desc: 'Mua lại và "chôn vùi" các sáng chế đột phá để duy trì vị thế độc quyền và bảo vệ lợi ích hiện tại.',
    example: 'Công ty dầu mỏ lớn từng mua và cất giấu bằng sáng chế xe điện để bảo vệ ngành công nghiệp xe động cơ đốt trong.',
    badgeCls: 'tl-badge--pink',
  },
  {
    icon: '📊',
    title: 'Gia tăng phân hóa giàu nghèo',
    desc: 'Lợi nhuận độc quyền tập trung vào tay thiểu số tư sản, mở rộng khoảng cách thu nhập trong xã hội.',
    example: '1% người giàu nhất thế giới nắm giữ lượng tài sản lớn hơn tổng tài sản của nhiều quốc gia cộng lại.',
    badgeCls: 'tl-badge--yellow',
  },
]

const COMPETITIONS = [
  {
    num: '①',
    title: 'Độc Quyền vs Ngoài Độc Quyền',
    icon: '🦁',
    side: 'left',
    badgeCls: 'tl-badge--purple',
    content: 'Các tổ chức độc quyền dùng sức mạnh kinh tế để chèn ép, chi phối hoặc thôn tính các đối thủ nhỏ lẻ hơn, duy trì vị thế thống trị thị trường.',
    highlight: 'Walmart ép giá nhà cung cấp & bán siêu rẻ → các cửa hàng tạp hóa địa phương phải đóng cửa.',
  },
  {
    num: '②',
    title: 'Giữa các Tổ chức Độc Quyền',
    icon: '⚔️',
    side: 'right',
    badgeCls: 'tl-badge--pink',
    content: 'Đối đầu giữa các "ông lớn" để giành thị trường, nguồn nguyên liệu và cơ hội đầu tư — lan rộng ra phạm vi toàn cầu giữa các TNC.',
    highlight: 'Apple vs Samsung tranh giành smartphone toàn cầu; Boeing vs Airbus tranh giành đơn hàng hàng không.',
  },
  {
    num: '③',
    title: 'Nội bộ Tổ chức Độc Quyền',
    icon: '🤼',
    side: 'left',
    badgeCls: 'tl-badge--mint',
    content: 'Ngay trong liên minh (Cartel, Syndicat, Trust), các thành viên vẫn cạnh tranh ngầm để giành lợi thế về sản lượng, thị trường và tỷ lệ phân chia lợi nhuận.',
    highlight: 'OPEC: dù có thỏa thuận, các quốc gia thành viên đôi khi lén khai thác vượt hạn ngạch để tối đa hóa lợi ích riêng.',
  },
]

export default function DacDiem() {
  return (
    <section id="dac-diem" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--mint">Phần 3</span>
          <h2 className="section__title">Tác Động của Độc Quyền trong Kinh Tế Thị Trường</h2>
          <p className="section__desc">
            Độc quyền mang lại cả tác động tích cực lẫn tiêu cực cho nền kinh tế,
            đồng thời tạo ra ba trạng thái cạnh tranh đặc thù trong giai đoạn CNTB Độc Quyền.
          </p>
        </header>

        {/* Minh họạ ảnh AI */}
        <div className="section-illus" data-reveal>
          <div className="section-illus__wrap">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&fit=crop"
              alt="Khu tài chính đô thị — minh họạ tác động của độc quyền kinh tế"
              className="section-illus__img"
              loading="lazy"
            />
            <span className="section-illus__ai-badge">🤖 Minh họạ · AI MLN122</span>
          </div>
          <p className="section-illus__caption">
            Hình ảnh minh họạ: Trung tâm tài chính độc quyền — biểu tượng quyền lực kinh tế tập trung trong chủ nghĩa tư bản hiện đại.
          </p>
        </div>

        {/* 5 Đặc điểm của CNTB Độc Quyền — orbital visualization */}
        <div className="dac-diem-orbital" data-reveal data-delay="100">
          <div className="dac-diem-orbital__scene">
            <div className="hero__orbit hero__orbit--1">
              <div className="orbit-dot orbit-dot--1" />
            </div>
            <div className="hero__orbit hero__orbit--2">
              <div className="orbit-dot orbit-dot--2" />
            </div>
            <div className="hero__orb">⚙️</div>
          </div>
          <div className="dac-diem-orbital__cards">
            {[
              { icon: '🏭', num: 1, label: 'Tập trung sản xuất và tư bản',          color: '#C8853A' },
              { icon: '🏦', num: 2, label: 'Tư bản tài chính và đầu sỏ tài chính',  color: '#7A4521' },
              { icon: '✈️', num: 3, label: 'Xuất khẩu tư bản',                       color: '#C8853A' },
              { icon: '🌍', num: 4, label: 'Phân chia kinh tế thế giới',            color: '#7A4521' },
              { icon: '🗺️', num: 5, label: 'Phân chia lãnh thổ thế giới',          color: '#C8853A' },
            ].map((d) => (
              <div key={d.num} className="dac-orb-card">
                <div className="dac-orb-card__line" />
                <div className="dac-orb-icon" style={{ background: `${d.color}22`, color: d.color }}>{d.icon}</div>
                <div>
                  <div className="dac-orb-card__sub" style={{ color: d.color }}>Đặc điểm số {d.num}</div>
                  <div className="dac-orb-card__title">{d.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Positives */}
        <h3 className="sub-heading" data-reveal style={{ color: '#06D6A0', marginBottom: '1.25rem' }}>
          ✅ Tác động Tích cực
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
                <span className="tl-highlight-icon">📌</span>
                <em>{p.example}</em>
              </div>
            </div>
          ))}
        </div>

        {/* Negatives */}
        <h3 className="sub-heading" data-reveal style={{ color: '#FF6B35', marginBottom: '1.25rem' }}>
          ❌ Tác động Tiêu cực
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
                <span className="tl-highlight-icon">⚠️</span>
                <em>{n.example}</em>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-section illustration */}
        <div className="section-illus" data-reveal style={{ marginBottom: '2.5rem' }}>
          <div className="section-illus__wrap section-illus__wrap--fit">
            <img
              src="/p3.png"
              alt="Biểu đồ thị trường — minh họa tác động kinh tế của độc quyền"
              className="section-illus__img section-illus__img--contain"
              loading="lazy"
            />
            <span className="section-illus__ai-badge">🤖 Minh họa · AI </span>
          </div>
          <p className="section-illus__caption">
            Hình ảnh minh họa: Phân hóa thị trường — tác động tích cực và tiêu cực của độc quyền đến nền kinh tế thế giới.
          </p>
        </div>

        {/* 3 Competition types */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.5rem' }}>
          ⚡ Quan hệ Cạnh tranh trong Trạng thái Độc quyền
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
                  <span className="tl-highlight-icon">💡</span>
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
