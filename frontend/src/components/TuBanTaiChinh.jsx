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
  {
    icon: '➡️',
    label: 'Chiều thứ nhất',
    text: 'Các nhà tư bản độc quyền hoặc đại diện của họ trực tiếp đảm nhận các cương vị quan trọng trong chính phủ.',
  },
  {
    icon: '⬅️',
    label: 'Chiều thứ hai',
    text: 'Các quan chức nhà nước sau khi rời chính trường thường được "cài" vào các ban quản trị của các tập đoàn lớn.',
  },
  {
    icon: '📋',
    label: 'Xây dựng đường lối',
    text: 'Tác động trực tiếp đến việc hoạch định đường lối kinh tế và chính trị theo hướng có lợi cho tầng lớp tư bản độc quyền.',
  },
  {
    icon: '💰',
    label: 'Lợi ích giai cấp',
    text: 'Đảm bảo hoạt động của nhà nước mang lại lợi ích tối đa cho tầng lớp tư bản độc quyền.',
  },
]

const TOOLS = [
  {
    icon: '💰',
    title: 'Ngân sách và Thuế',
    desc: 'Công cụ tài chính trực tiếp. Ví dụ: đánh thuế cao hàng nhập khẩu để bảo vệ ngành thép trong nước.',
  },
  {
    icon: '🏦',
    title: 'Hệ thống tiền tệ – tín dụng',
    desc: 'Điều tiết lưu thông tiền tệ. Ví dụ: Ngân hàng Trung ương tăng hoặc giảm lãi suất để kiềm chế lạm phát.',
  },
  {
    icon: '🏛️',
    title: 'Doanh nghiệp nhà nước',
    desc: 'Là nền tảng vật chất để nhà nước điều tiết các quá trình kinh tế, phục vụ lợi ích của tầng lớp độc quyền.',
  },
  {
    icon: '📅',
    title: 'Kế hoạch hóa kinh tế',
    desc: 'Chương trình phát triển ngắn hạn và dài hạn giúp định hướng đầu tư và phân bổ nguồn lực trong nền kinh tế.',
  },
]

const POLICIES = [
  { icon: '📉', title: 'Chống khủng hoảng và lạm phát', desc: 'Ứng phó với khủng hoảng chu kỳ của chủ nghĩa tư bản; kiềm chế lạm phát thông qua chính sách tiền tệ và tài khóa.' },
  { icon: '📈', title: 'Thúc đẩy tăng trưởng kinh tế', desc: 'Kích thích đầu tư, tiêu dùng và xuất khẩu để duy trì tốc độ tăng trưởng của nền kinh tế tư bản chủ nghĩa.' },
  { icon: '🕊️', title: 'Chính sách xã hội', desc: 'Xoa dịu mâu thuẫn giai cấp giữa tư sản và vô sản thông qua các chính sách phúc lợi, bảo hiểm xã hội, lương tối thiểu.' },
  { icon: '🌐', title: 'Kinh tế đối ngoại', desc: 'Mở rộng quan hệ quốc tế, ký kết hiệp định thương mại và bảo hộ tư bản trong nước trước cạnh tranh nước ngoài.' },
]

export default function TuBanTaiChinh() {
  return (
    <section id="tu-ban" className="section section--alt">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--blue">Phần 4</span>
          <h2 className="section__title">Độc Quyền Nhà Nước trong CNTB</h2>
          <p className="section__desc">
            Nhà nước nắm giữ vị thế độc quyền, duy trì sức mạnh các tổ chức ĐQ tư nhân
            ở các lĩnh vực then chốt nhằm ổn định chế độ chính trị - xã hội.
          </p>
        </header>

        {/* Minh họạ ảnh  */}
        <div className="section-illus" data-reveal style={{ marginTop: '2.5rem' }}>
          <div className="section-illus__wrap section-illus__wrap--fit">
            <img
              src="/bank.jpg"
              alt="Trụ sở ngân hàng nhà nước — minh họạ độc quyền nhà nước trong chủ nghĩa tư bản"
              className="section-illus__img section-illus__img--contain"
              loading="lazy"
            />
            <span className="section-illus__ai-badge">Ngân hàng trung ương Anh</span>
          </div>
          <p className="section-illus__caption">
            Hình ảnh minh họa: Ngân hàng trung ương và các tập đoàn độc quyền nhà nước — nền tảng của sự điều tiết kinh tế tư sản.
          </p>
        </div>

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

        {/* 4.2 */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.2 Đặc điểm nổi bật: Sự kết hợp về Nhân sự
        </h3>
        {/* Cơ chế 2 chiều */}
        <div className="fin-diagram" data-reveal data-delay="80" style={{ marginBottom: '1.5rem' }}>
          <div className="fin-box fin-box--bank">
            <div className="fin-box-icon">🏭</div>
            <h3>Tổ chức Độc quyền</h3>
            <ul>
              <li>Tập đoàn công nghiệp lớn</li>
              <li>Ngân hàng độc quyền</li>
              <li>Liên đoàn công nghiệp quốc gia</li>
            </ul>
          </div>
          <div className="fin-merge">
            <div className="merge-sym">⇄</div>
            <div className="merge-arrow">Kết hợp nhân sự hai chiều</div>
            <p>Thâm nhập và chi phối lẫn nhau</p>
          </div>
          <div className="fin-box fin-box--industry">
            <div className="fin-box-icon">🏛️</div>
            <h3>Bộ máy Nhà nước</h3>
            <ul>
              <li>Chính phủ và Quốc hội</li>
              <li>Bộ Tài chính, Bộ Kinh tế</li>
              <li>Cơ quan quân sự, quốc phòng</li>
            </ul>
          </div>
        </div>

        {/* 4 cơ chế cards */}
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '1.5rem' }}>
          {REVOLVING_DOOR.map((r, i) => (
            <div key={i} className="intro-card intro-card--blue" data-reveal data-delay={`${i * 90}`}>
              <div className="card-icon-wrap icon-wrap--blue">
                <span role="img">{r.icon}</span>
              </div>
              <h3>{r.label}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>

        {/* Ví dụ điển hình */}
        <div className="xk-callout" data-reveal style={{ marginBottom: '0.75rem' }}>
          <div className="xk-callout-icon">🇺🇸</div>
          <div>
            <strong>Ví dụ điển hình tại Mỹ — hiện tượng "Revolving door" (cánh cửa xoay):</strong>{' '}
            Cựu tướng lĩnh quân đội hoặc quan chức Lầu Năm Góc thường chuyển sang làm thành viên
            Hội đồng Quản trị của các tập đoàn vũ khí như Lockheed Martin hay Raytheon.
          </div>
        </div>
        <div className="xk-callout" data-reveal style={{ marginBottom: '0.75rem' }}>
          <div className="xk-callout-icon">🇪🇺</div>
          <div>
            <strong>Ví dụ tại châu Âu:</strong>{' '}
            Liên đoàn Công nghiệp Italia, Tổ chức Liên hợp Công nghệ Đức, Liên đoàn Công thương Anh
            đều có sự gắn kết chặt chẽ với chính phủ của nước mình.
          </div>
        </div>
        <div className="fin-result" data-reveal style={{ marginBottom: '2.5rem' }}>
          <div className="fin-result-icon">🆕</div>
          <div>
            <h3>Những biểu hiện mới ngày nay</h3>
            <p>
              Thể chế đa nguyên phổ biến hơn; xuất hiện cơ chế thỏa hiệp giữa các nhóm lợi ích;
              các chính phủ nghị viện tư sản hiện đại thậm chí được tổ chức và vận hành giống
              như một <em>"công ty cổ phần tư bản chủ nghĩa"</em>.
            </p>
          </div>
        </div>

        {/* Mid-section illustration */}
        <div className="section-illus" data-reveal style={{ marginTop: '2.5rem' }}>
          <div className="section-illus__wrap section-illus__wrap--fit">
            <img
              src='/p4.2.png'
              alt="Tòa nhà chính phủ — minh họa độc quyền nhà nước trong chủ nghĩa tư bản"
              className="section-illus__img section-illus__img--contain"
              loading="lazy"
            />
            <span className="section-illus__ai-badge">🤖 Minh họạ · AI MLN122</span>
          </div>
          <p className="section-illus__caption">
            Hình ảnh minh họa: Kiến trúc quyền lực nhà nước — biểu tượng sự kết hợp giữa bộ máy nhà nước và các tổ chức độc quyền tư nhân.
          </p>
        </div>

        {/* 4.3 Sở hữu Nhà nước */}
        <h3 className="sub-heading" data-reveal style={{ marginBottom: '1.25rem' }}>
          4.3 Đặc điểm nổi bật: Sở hữu Nhà nước và Chức năng
        </h3>
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(1, 1fr)', marginBottom: '1rem' }}>
          <div className="intro-card intro-card--blue" data-reveal data-delay="0">
            <div className="card-icon-wrap icon-wrap--blue"><span>🏗️</span></div>
            <h3>Hình thành và Mở rộng sản xuất tư bản chủ nghĩa</h3>
            <p>
              Sở hữu nhà nước hình thành dưới dạng doanh nghiệp nhà nước trong các lĩnh vực
              kết cấu hạ tầng nhằm hỗ trợ tư bản độc quyền tư nhân.
              Từ đó tạo lập và bảo đảm một địa bàn rộng lớn cho sự phát triển của chủ nghĩa tư bản.
            </p>
            <div className="tl-highlight" style={{ marginTop: '0.75rem' }}>
              <span className="tl-highlight-icon">📌</span>
              <em>Ví dụ: Xây dựng đường sắt quốc gia, hệ thống viễn thông, NASA — nhà nước đầu tư vì tư nhân thấy rủi ro quá cao và lâu thu hồi vốn.</em>
            </div>
          </div>
        </div>
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '1rem' }}>
          <div className="intro-card intro-card--blue" data-reveal data-delay="100">
            <div className="card-icon-wrap icon-wrap--blue"><span>🔄</span></div>
            <h3>Điều tiết luồng tư bản</h3>
            <p>
              Giải phóng nguồn tư bản của các tổ chức độc quyền khỏi những ngành kinh doanh ít
              lãi để chuyển dịch vào những ngành có hiệu quả kinh tế cao hơn.
            </p>
            <div className="tl-highlight" style={{ marginTop: '0.75rem' }}>
              <span className="tl-highlight-icon">📌</span>
              <em>Ví dụ: Nhà nước quốc hữu hóa các ngành khai thác than, luyện kim đang thua lỗ (cứu nhà tư bản khỏi phá sản), để tư bản chuyển vốn sang công nghệ cao và viễn thông có lãi hơn.</em>
            </div>
          </div>
          <div className="intro-card intro-card--blue" data-reveal data-delay="200">
            <div className="card-icon-wrap icon-wrap--blue"><span>⚖️</span></div>
            <h3>Chỗ dựa kinh tế cho điều tiết Nhà nước</h3>
            <p>
              Sở hữu nhà nước đóng vai trò là nền tảng vật chất để nhà nước điều tiết các quá
              trình kinh tế, phục vụ tối đa lợi ích của tầng lớp độc quyền.
            </p>
            <div className="tl-highlight" style={{ marginTop: '0.75rem' }}>
              <span className="tl-highlight-icon">📌</span>
              <em>Nhà nước nắm giữ các ngành xương sống để kiểm soát toàn bộ nền kinh tế và định hướng dòng vốn.</em>
            </div>
          </div>
        </div>

        {/* 4.4 Điều tiết kinh tế */}
        <h3 className="sub-heading" data-reveal style={{ marginTop: '1.5rem', marginBottom: '1.25rem' }}>
          4.4 Sự điều tiết kinh tế của Nhà nước tư sản
        </h3>
        <div className="quote-banner" data-reveal data-delay="80" style={{ marginBottom: '1.5rem' }}>
          <div className="quote-icon">📖</div>
          <div className="quote-body">
            <p className="quote-text">
              Sự tập trung hóa và quốc tế hóa sản xuất ở quy mô lớn thúc bách các nước phải
              thực hiện việc điều tiết xã hội đối với sản xuất và phân phối để duy trì sự
              tồn tại và thích nghi của hệ thống.
            </p>
            <span className="quote-author">— V.I. Lênin (Bản chất và yêu cầu khách quan)</span>
          </div>
        </div>

        <h4 data-reveal style={{ marginBottom: '0.75rem', color: 'var(--text-heading)', fontWeight: 700 }}>
          Các chính sách kinh tế chủ yếu
        </h4>
        <div className="intro-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '1.5rem' }}>
          {POLICIES.map((p, i) => (
            <div key={p.title} className="intro-card intro-card--blue" data-reveal data-delay={`${i * 80}`}>
              <div className="card-icon-wrap icon-wrap--blue"><span>{p.icon}</span></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <h4 data-reveal style={{ marginBottom: '0.75rem', color: 'var(--text-heading)', fontWeight: 700 }}>
          Các công cụ điều tiết chính
        </h4>
        <div className="oligo-grid" style={{ marginBottom: '1.5rem' }}>
          {TOOLS.map((t, i) => (
            <div key={t.title} className="oligo-card" data-reveal data-delay={`${i * 80}`}>
              <div className="oligo-card-icon">{t.icon}</div>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="fin-result" data-reveal data-delay="300" style={{ marginTop: '1rem' }}>
          <div className="fin-result-icon">🆕</div>
          <div>
            <h3>Biểu hiện mới ngày nay</h3>
            <p>
              Vai trò công cụ điều tiết có những biến đổi về mặt chính trị: chính phủ vận hành
              như <em>"công ty cổ phần tư bản chủ nghĩa"</em> nhằm tối ưu hóa phục vụ lợi ích
              độc quyền; chi tiêu ngân sách bị giới lập pháp giám sát chặt chẽ hơn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

