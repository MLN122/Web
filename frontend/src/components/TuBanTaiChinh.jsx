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
  { icon: '➡️', text: 'Chiều 1: Đại diện ĐQ → đảm nhận cương vị quan trọng trong chính phủ' },
  { icon: '⬅️', text: 'Chiều 2: Quan chức rời chính trường → "cài" vào HĐQT các tập đoàn lớn' },
  { icon: '📋', text: 'Mục đích: xây dựng đường lối kinh tế & chính trị có lợi cho tầng lớp ĐQ' },
  { icon: '💰', text: 'Hệ quả: đảm bảo hoạt động nhà nước mang lại lợi ích cho tư bản độc quyền' },
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
          4.2 Đặc điểm nổi bật: Sự kết hợp về Nhân sự
        </h3>
        <div className="fin-diagram" data-reveal data-delay="100" style={{ marginBottom: '1.5rem' }}>
          <div className="fin-box fin-box--bank">
            <div className="fin-box-icon">🏭</div>
            <h3>Tổ chức Độc quyền</h3>
            <ul>
              <li>Đại diện ĐQ → cương vị quan trọng trong chính phủ</li>
              <li>Chi phối hoạch định đường lối kinh tế &amp; chính trị</li>
              <li>Liên đoàn CN Ý, Đức, Anh gắn kết chặt với chính phủ</li>
            </ul>
          </div>
          <div className="fin-merge">
            <div className="merge-sym">⇄</div>
            <div className="merge-arrow">"Cánh cửa xoay" 2 chiều</div>
            <p>Thâm nhập &amp; chi phối chính sách</p>
          </div>
          <div className="fin-box fin-box--industry">
            <div className="fin-box-icon">🏛️</div>
            <h3>Bộ máy Nhà nước</h3>
            <ul>
              <li>Quan chức rời chính trường → HĐQT tập đoàn lớn</li>
              <li>Đảm bảo nhà nước phục vụ lợi ích tư bản ĐQ</li>
              <li>Chính phủ vận hành như "công ty cổ phần TBCN"</li>
            </ul>
          </div>
        </div>
        <div className="oligo-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '1.5rem' }}>
          {REVOLVING_DOOR.map((r, i) => (
            <div key={i} className="oligo-card" data-reveal data-delay={`${i * 80}`}>
              <div className="oligo-card-icon">{r.icon}</div>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
        <div className="xk-callout" data-reveal style={{ marginBottom: '0.75rem' }}>
          <div className="xk-callout-icon">🔄</div>
          <div>
            <strong>Ví dụ điển hình — "Revolving door" (Mỹ):</strong> Cựu tướng lĩnh quân đội hoặc
            quan chức Lầu Năm Góc thường chuyển sang làm thành viên HĐQT tập đoàn vũ khí như
            Lockheed Martin hay Raytheon.
          </div>
        </div>
        <div className="xk-callout" data-reveal style={{ marginBottom: '2.5rem' }}>
          <div className="xk-callout-icon">🌍</div>
          <div>
            <strong>Châu Âu:</strong> Liên đoàn Công nghiệp Italia, Tổ chức Liên hợp Công nghệ Đức,
            Liên đoàn Công thương Anh đều có sự gắn kết chặt chẽ với chính phủ.
            Biểu hiện mới: thể chế đa nguyên; cơ chế thỏa hiệp giữa các nhóm lợi ích;
            chính phủ nghị viện vận hành như <em>"công ty cổ phần tư bản chủ nghĩa"</em>.
          </div>
        </div>

        {/* 4.3 Sở hữu Nhà nước */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.3 Đặc điểm nổi bật: Sở hữu Nhà nước &amp; Chức năng
        </h3>
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '1.5rem' }}>
          <div className="intro-card intro-card--blue" data-reveal data-delay="0">
            <div className="card-icon-wrap icon-wrap--blue"><span>🏗️</span></div>
            <h3>Hạ tầng &amp; Mở rộng sản xuất</h3>
            <p>Hình thành dưới dạng DNNN trong lĩnh vực kết cấu hạ tầng để hỗ trợ tư bản ĐQ tư nhân;
              tạo lập địa bàn rộng lớn cho sự phát triển của CNTB.</p>
            <div className="tl-highlight" style={{ marginTop: '0.75rem' }}>
              <span className="tl-highlight-icon">📌</span>
              <em>Đường sắt, viễn thông, NASA — nhà nước đầu tư vì tư nhân thấy rủi ro cao.</em>
            </div>
          </div>
          <div className="intro-card intro-card--blue" data-reveal data-delay="100">
            <div className="card-icon-wrap icon-wrap--blue"><span>🔄</span></div>
            <h3>Điều tiết luồng tư bản</h3>
            <p>Giải phóng nguồn tư bản khỏi những ngành ít lãi, chuyển dịch sang ngành có hiệu quả
              kinh tế cao hơn; làm chỗ dựa kinh tế cho điều tiết nhà nước.</p>
            <div className="tl-highlight" style={{ marginTop: '0.75rem' }}>
              <span className="tl-highlight-icon">📌</span>
              <em>Nhà nước quốc hữu hóa than, luyện kim thua lỗ → tư bản chuyển vốn sang công nghệ cao, viễn thông.</em>
            </div>
          </div>
        </div>

        {/* 4.4 Công cụ điều tiết */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.4 Sự điều tiết kinh tế của Nhà nước tư sản
        </h3>
        <div className="xk-callout" data-reveal style={{ marginBottom: '1.25rem' }}>
          <div className="xk-callout-icon">📖</div>
          <div>
            <strong>Bản chất (V.I. Lênin):</strong> Sự tập trung hóa và quốc tế hóa sản xuất ở quy mô lớn
            thúc bách các nước phải thực hiện điều tiết xã hội đối với sản xuất và phân phối
            để duy trì sự tồn tại và thích nghi của hệ thống.
          </div>
        </div>
        <div className="oligo-grid" style={{ marginBottom: '1.5rem' }}>
          {TOOLS.map((t, i) => (
            <div key={t.title} className="oligo-card" data-reveal data-delay={`${i * 80}`}>
              <div className="oligo-card-icon">{t.icon}</div>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="fin-result" data-reveal data-delay="350" style={{ marginTop: '1rem' }}>
          <div className="fin-result-icon">⚖️</div>
          <div>
            <h3>Biểu hiện mới ngày nay</h3>
            <p>Chính phủ vận hành như <em>"công ty cổ phần tư bản chủ nghĩa"</em> tối ưu hóa phục vụ
              lợi ích độc quyền; chi tiêu ngân sách bị giới lập pháp giám sát chặt chẽ hơn;
              các chính sách kinh tế chủ yếu: chống khủng hoảng chu kỳ, chống lạm phát,
              thúc đẩy tăng trưởng, xoa dịu mâu thuẫn giai cấp, kinh tế đối ngoại.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

