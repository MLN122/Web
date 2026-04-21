// frontend/src/components/XuatKhauTuBan.jsx
const NEW_MANIFESTATIONS = [
  {
    num: '①',
    icon: '🌍',
    title: 'Tích tụ tư bản — Công ty xuyên quốc gia (TNC)',
    color: '#7C5CBF',
    bg: '#F0EAFF',
    items: [
      'Xuất hiện các TNC bên cạnh doanh nghiệp vừa và nhỏ',
      'Apple, Amazon có chi nhánh, nhà máy và thị trường trải dài toàn cầu',
      'Doanh thu một số TNC lớn hơn GDP nhiều quốc gia',
      'Quyền lực kinh tế vượt xa quyền lực nhà nước đơn lẻ',
    ],
    example: 'Apple có vốn hóa lớn hơn GDP của phần lớn các quốc gia trên thế giới.',
  },
  {
    num: '②',
    icon: '📈',
    title: 'Tư bản tài chính — Mở rộng sang lĩnh vực mới',
    color: '#D63384',
    bg: '#FFF0F7',
    items: [
      'Mở rộng sang chứng khoán, giải trí, thể thao và dịch vụ quân sự',
      'Quỹ đầu tư BlackRock, Vanguard nắm cổ phần chi phối hầu hết tập đoàn lớn',
      'Từ Disney, y tế đến công nghệ — tất cả đều có cùng cổ đông lớn',
      'Quyền lực tài chính xuyên ngành và xuyên biên giới',
    ],
    example: 'BlackRock quản lý tài sản >10 nghìn tỷ USD — lớn hơn GDP Trung Quốc.',
  },
  {
    num: '③',
    icon: '💰',
    title: 'Xuất khẩu tư bản — Hình thức mới',
    color: '#06D6A0',
    bg: '#F0FFF8',
    items: [
      'Chủ yếu là các nước tư bản phát triển xuất khẩu tư bản lẫn nhau',
      'Kết hợp xuất khẩu hàng hoá + xuất khẩu tư bản, đề cao cùng có lợi',
      'Tập đoàn Nhật Bản mua lại bất động sản và công ty tại Mỹ (và ngược lại)',
      'FDI gắn với chuyển giao công nghệ và ràng buộc thương mại',
    ],
    example: 'Vốn FDI toàn cầu đạt >1,3 nghìn tỷ USD/năm — phần lớn giữa các nước phát triển với nhau.',
  },
  {
    num: '④',
    icon: '🗺️',
    title: 'Phân chia thị trường — "Biên giới mềm"',
    color: '#FF6B35',
    bg: '#FFF5F0',
    items: [
      'Toàn cầu hoá và khu vực hoá thay thế chiếm đóng lãnh thổ trực tiếp',
      '"Chiến lược biên giới mềm" và bành trướng biên giới kinh tế',
      'Mỹ dùng đồng USD và hệ thống SWIFT làm công cụ kiểm soát dòng vốn',
      'Áp đặt trừng phạt kinh tế thay thế chiến tranh quân sự truyền thống',
    ],
    example: 'Lệnh trừng phạt SWIFT ngắt kết nối tài chính toàn cầu của Nga (2022) — vũ khí "biên giới mềm" mạnh nhất.',
  },
]

const HISTORICAL_ROLE = [
  {
    side: 'positive',
    icon: '✅',
    title: 'Vai trò Tích cực',
    badgeCls: 'tl-badge--mint',
    points: [
      'Thúc đẩy lực lượng sản xuất phát triển vượt bậc',
      'Thực hiện xã hội hoá sản xuất và chuyển sang nền sản xuất hiện đại',
      '4 Cuộc Cách mạng Công nghiệp tạo ra khối tài sản khổng lồ',
    ],
    highlight: 'Dưới CNTB, khoa học kỹ thuật phát triển hơn tổng tất cả các thời kỳ trước cộng lại.',
  },
  {
    side: 'negative',
    icon: '⚠️',
    title: 'Giới hạn Lịch sử',
    badgeCls: 'tl-badge--pink',
    points: [
      'Sản xuất vì lợi ích của thiểu số giai cấp tư sản',
      'Gây ra chiến tranh, xung đột, tranh giành tài nguyên',
      'Làm sâu sắc hố ngăn cách giàu nghèo trong và giữa các quốc gia',
    ],
    highlight: '1% người giàu nhất nắm tài sản lớn hơn 50% dân số thế giới cộng lại — bất bình đẳng tột cùng.',
  },
]

export default function XuatKhauTuBan() {
  return (
    <section id="xuat-khau" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--yellow">Phần 5 &amp; 6</span>
          <h2 className="section__title">Biểu hiện Mới &amp; Vai trò Lịch sử của CNTB</h2>
          <p className="section__desc">
            Độc quyền ngày nay mang diện mạo mới — từ TNC, tài chính toàn cầu đến
            "biên giới mềm". Đồng thời, CNTB có vai trò tích cực nhưng cũng có
            giới hạn lịch sử không thể vượt qua.
          </p>
        </header>

        {/* Minh họạ ảnh AI */}
        <div className="section-illus" data-reveal>
          <div className="section-illus__wrap" style={{ aspectRatio: 'auto', height: 'auto' }}>
            <img
              src="/p5.jpg"
              alt="Biểu hiện mới của độc quyền — minh họa do AI tạo ra"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'unset', filter: 'none', transform: 'none' }}
              loading="lazy"
            />
            <span className="section-illus__ai-badge">🤖 Ảnh do AI tạo ra</span>
          </div>
          <p className="section-illus__caption">
            Hình ảnh minh họa: Những biểu hiện mới của độc quyền xuyên quốc gia trong kỷ nguyên số — do AI tạo ra
          </p>
        </div>

        {/* 4 new manifestations */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.5rem' }}>
          5 Những biểu hiện mới của Độc quyền ngày nay
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
                <span className="tl-highlight-icon">📌</span>
                <em style={{ fontSize: '0.82rem' }}>{f.example}</em>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-section illustration */}
        <div className="section-illus" data-reveal style={{ margin: '2.5rem 0' }}>
          <div className="section-illus__wrap">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=80&fit=crop"
              alt="Cảng container quốc tế — minh họa xuất khẩu tư bản và thương mại toàn cầu"
              className="section-illus__img"
              loading="lazy"
            />
            <span className="section-illus__ai-badge"></span>
          </div>
          <p className="section-illus__caption">
            Hình ảnh minh họa: Cảng container quốc tế — biểu tượng dòng chảy tư bản xuyên quốc gia và phân công lao động thế giới.
          </p>
        </div>

        {/* Historical role */}
        <h3 className="sub-heading" data-reveal style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>
          6 Vai trò Lịch sử của Chủ nghĩa Tư bản
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
                  <span className="tl-highlight-icon">💡</span>
                  <em>{r.highlight}</em>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final callout */}
        <div className="xk-callout" data-reveal data-delay="400" style={{ marginTop: '2rem' }}>
          <div className="xk-callout-icon">🏁</div>
          <div>
            <strong>Kết luận:</strong> CNTB đã hoàn thành sứ mệnh lịch sử thúc đẩy lực lượng sản xuất phát triển,
            nhưng quan hệ sản xuất tư bản chủ nghĩa ngày càng trở thành <em>xiềng xích</em> kìm hãm lực lượng sản xuất
            và giải phóng con người — tiền đề khách quan cho sự thay thế của xã hội cao hơn.
          </div>
        </div>
      </div>
    </section>
  )
}
