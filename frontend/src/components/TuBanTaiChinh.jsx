// frontend/src/components/TuBanTaiChinh.jsx
const OLIGO_FEATURES = [
  { icon: '🕸️', title: 'Chế độ tham dự', desc: 'Nắm cổ phiếu khống chế công ty mẹ → kiểm soát hàng loạt công ty con.' },
  { icon: '🔒', title: 'Chế độ bí mật', desc: 'Che giấu thông tin thực sự thông qua báo cáo tài chính phức tạp.' },
  { icon: '🏛️', title: 'Chi phối Nhà nước', desc: 'Đưa người vào bộ máy nhà nước, tài trợ chính đảng, lobby chính sách.' },
  { icon: '📰', title: 'Kiểm soát Truyền thông', desc: 'Sở hữu báo, truyền hình, mạng xã hội để định hướng dư luận.' },
  { icon: '⚖️', title: 'Lũng đoạn Tư pháp', desc: 'Thuê luật sư giỏi, tác động lên hệ thống pháp luật có lợi cho mình.' },
  { icon: '🌍', title: 'Phạm vi Toàn cầu', desc: 'Hoạt động xuyên biên giới, khai thác chênh lệch thuế và lao động.' },
]

export default function TuBanTaiChinh() {
  return (
    <section id="tu-ban" className="section section--alt">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--blue">Đặc điểm 2</span>
          <h2 className="section__title">Tư Bản Tài Chính &amp; Đầu Sỏ Tài Chính</h2>
          <p className="section__desc">
            Sự kết hợp giữa tư bản ngân hàng và tư bản công nghiệp tạo ra{' '}
            <strong>tư bản tài chính</strong> — lực lượng thống trị nền kinh tế tư bản.
          </p>
        </header>

        {/* Formation diagram */}
        <div className="fin-diagram" data-reveal data-delay="100">
          <div className="fin-box fin-box--bank">
            <div className="fin-box-icon">🏦</div>
            <h3>Tư Bản Ngân Hàng ĐQ</h3>
            <ul>
              <li>Kiểm soát vốn lớn</li>
              <li>Cho vay + đầu tư</li>
              <li>Mua cổ phiếu CN</li>
            </ul>
          </div>

          <div className="fin-merge">
            <div className="merge-sym">+</div>
            <div className="merge-arrow">⇄</div>
            <p>Dung hợp &amp; thâm nhập lẫn nhau</p>
          </div>

          <div className="fin-box fin-box--industry">
            <div className="fin-box-icon">🏭</div>
            <h3>Tư Bản Công Nghiệp ĐQ</h3>
            <ul>
              <li>Kiểm soát SX lớn</li>
              <li>Gửi tiền vào ngân hàng</li>
              <li>Cần vốn tín dụng</li>
            </ul>
          </div>
        </div>

        <div className="fin-result" data-reveal data-delay="200">
          <div className="fin-result-icon">💎</div>
          <div>
            <h3>→ Tư Bản Tài Chính</h3>
            <p>Thực thể kinh tế thống nhất, chi phối toàn bộ nền kinh tế TBCN</p>
          </div>
        </div>

        {/* Image */}
        <div className="fin-image-wrap" data-reveal data-delay="250">
          <img
            src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=900&q=80&fit=crop"
            alt="Tòa nhà ngân hàng hiện đại"
            loading="lazy"
          />
          <p className="img-caption">Hệ thống ngân hàng — xương sống của tư bản tài chính</p>
        </div>

        {/* Oligarchy section */}
        <div className="oligo-section">
          <h3 className="oligo-title" data-reveal data-delay="300">
            🕸️ Đầu Sỏ Tài Chính — Tầng lớp thống trị
          </h3>
          <p className="oligo-desc" data-reveal data-delay="350">
            Đầu sỏ tài chính là nhóm nhỏ tư sản lớn nhất nắm tư bản tài chính, 
            thống trị toàn bộ đời sống kinh tế và chính trị của xã hội tư bản.
          </p>

          <div className="oligo-grid">
            {OLIGO_FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="oligo-card"
                data-reveal
                data-delay={`${i * 80 + 380}`}
              >
                <div className="oligo-card-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
