// frontend/src/components/TuBanTaiChinh.jsx
const CAUSES = [
  {
    icon: '⚙️',
    title: 'Phát triển LLSX & xã hội hóa',
    desc: 'Tích tụ và tập trung sản xuất đến quy mô lớn đòi hỏi điều tiết xã hội và kế hoạch hóa tập trung từ nhà nước để quản lý nền kinh tế.',
    example: 'Xây dựng đường sắt quốc gia, viễn thông, NASA — do nhà nước đầu tư vì tư nhân thấy rủi ro cao và lâu thu hồi vốn.',
  },
  {
    icon: '🏗️',
    title: 'Đầu tư hạ tầng & ngành mới',
    desc: 'Các lĩnh vực kết cấu hạ tầng đòi hỏi vốn lớn, thu hồi chậm, lợi nhuận ít — tư nhân không muốn hoặc không đủ khả năng đầu tư.',
    example: 'Nhà nước quốc hữu hóa ngành than, luyện kim thua lỗ để tư bản chuyển vốn sang công nghệ cao, viễn thông có lãi hơn.',
  },
  {
    icon: '🕊️',
    title: 'Xoa dịu mâu thuẫn giai cấp',
    desc: 'Nhà nước ĐQ ra đời để xoa dịu mâu thuẫn giữa tư sản và vô sản, tạo sức mạnh vật chất duy trì ổn định chính trị - xã hội.',
    example: 'Ban hành luật lao động, lương tối thiểu, gói trợ cấp thất nghiệp để ngăn chặn đình công và bạo loạn.',
  },
  {
    icon: '🌐',
    title: 'Quan hệ kinh tế đối ngoại',
    desc: 'Mở rộng QHKT đối ngoại, hỗ trợ bảo hộ tư bản trong nước và tạo môi trường quốc tế thuận lợi cho các hoạt động kinh tế.',
    example: 'Đàm phán hiệp định thương mại, áp thuế bảo hộ hàng nhập khẩu để bảo vệ ngành công nghiệp trong nước.',
  },
]

const REVOLVING_DOOR = [
  { icon: '🏭', text: 'Đại diện tổ chức ĐQ → Cương vị quan trọng trong chính phủ' },
  { icon: '🔄', text: 'Quan chức rời chính trường → HĐQT tập đoàn lớn ("cánh cửa xoay")' },
  { icon: '📋', text: 'Chi phối hoạch định đường lối kinh tế & chính trị' },
  { icon: '💰', text: 'Đảm bảo nhà nước phục vụ lợi ích tầng lớp tư bản độc quyền' },
]

const TOOLS = [
  { icon: '💰', title: 'Ngân sách & Thuế', desc: 'Đánh thuế cao hàng nhập khẩu bảo vệ ngành thép trong nước; chi ngân sách kích cầu.' },
  { icon: '🏦', title: 'Tiền tệ – Tín dụng', desc: 'Ngân hàng Trung ương tăng/giảm lãi suất để kiềm chế lạm phát và điều tiết tăng trưởng.' },
  { icon: '🏛️', title: 'Doanh nghiệp Nhà nước', desc: 'Nền tảng vật chất để điều tiết các quá trình kinh tế, hỗ trợ tư bản tư nhân.' },
  { icon: '📅', title: 'Kế hoạch hóa kinh tế', desc: 'Chương trình phát triển ngắn/dài hạn định hướng đầu tư và phân bổ nguồn lực.' },
]

export default function TuBanTaiChinh() {
  return (
    <section id="tu-ban" className="section section--alt">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--blue">Chương 4</span>
          <h2 className="section__title">Độc Quyền Nhà Nước trong CNTB</h2>
          <p className="section__desc">
            Nhà nước nắm giữ vị thế độc quyền, duy trì sức mạnh các tổ chức ĐQ tư nhân
            ở các lĩnh vực then chốt nhằm ổn định chế độ chính trị - xã hội.
          </p>
        </header>

        {/* Bản chất banner */}
        <div className="quote-banner" data-reveal data-delay="100">
          <div className="quote-icon">🏛️</div>
          <div className="quote-body">
            <p className="quote-text">
              Độc quyền nhà nước là kiểu độc quyền mà nhà nước nắm giữ vị thế độc quyền,
              kết hợp với sức mạnh các tổ chức ĐQ tư nhân ở các lĩnh vực then chốt
              để ổn định chế độ chính trị - xã hội tư bản chủ nghĩa.
            </p>
            <span className="quote-author">— Giáo trình KTCT Mác-Lênin, Bộ GD&ĐT</span>
          </div>
        </div>

        {/* 4 causes */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.1 Nguyên nhân hình thành
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
                <span className="tl-highlight-icon">📌</span>
                <em>{c.example}</em>
              </div>
            </div>
          ))}
        </div>

        {/* 4.2 Revolving door */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.2 Sự kết hợp về Nhân sự — "Cánh cửa xoay"
        </h3>
        <div className="fin-diagram" data-reveal data-delay="100" style={{ marginBottom: '1.5rem' }}>
          <div className="fin-box fin-box--bank">
            <div className="fin-box-icon">🏭</div>
            <h3>Tổ chức Độc quyền</h3>
            <ul>
              <li>Tập đoàn công nghiệp lớn</li>
              <li>Ngân hàng độc quyền</li>
              <li>Liên đoàn công nghiệp</li>
            </ul>
          </div>
          <div className="fin-merge">
            <div className="merge-sym">⇄</div>
            <div className="merge-arrow">Kết hợp nhân sự</div>
            <p>"Cánh cửa xoay" 2 chiều</p>
          </div>
          <div className="fin-box fin-box--industry">
            <div className="fin-box-icon">🏛️</div>
            <h3>Bộ máy Nhà nước</h3>
            <ul>
              <li>Chính phủ & Quốc hội</li>
              <li>Bộ Tài chính, Kinh tế</li>
              <li>Cơ quan quân sự</li>
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
          <div className="xk-callout-icon">🔄</div>
          <div>
            <strong>Ví dụ điển hình:</strong> Ở Mỹ, hiện tượng <em>"Revolving door"</em> — cựu tướng lĩnh
            quân đội hoặc quan chức Lầu Năm Góc thường chuyển sang làm thành viên HĐQT tập đoàn vũ khí
            như Lockheed Martin hay Raytheon. Ở châu Âu: Liên đoàn Công nghiệp Ý, Đức, Anh gắn kết chặt với chính phủ.
          </div>
        </div>

        {/* 4.3 & 4.4 Tools */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.3–4.4 Sở hữu Nhà nước &amp; Các công cụ điều tiết kinh tế
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
          <div className="fin-result-icon">⚖️</div>
          <div>
            <h3>Biểu hiện mới ngày nay</h3>
            <p>Thể chế đa nguyên phổ biến hơn; cơ chế thỏa hiệp giữa các nhóm lợi ích;
              chính phủ nghị viện tư sản hiện đại vận hành như một <em>"công ty cổ phần tư bản chủ nghĩa"</em>
              tối ưu hóa lợi ích độc quyền.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

