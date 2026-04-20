// frontend/src/components/HinhThuc.jsx
import { Fragment } from 'react'
const FORMS = [
  {
    num: '01',
    icon: '🤝',
    vn: 'Cartel',
    phonetic: 'Các-ten',
    hint: 'Thỏa thuận · Lỏng lẻo nhất',
    accentClass: 'accent--purple',
    desc: 'Hình thức độc quyền thấp nhất, liên kết lỏng lẻo nhất. Các thành viên ký thỏa thuận về giá cả và phân chia thị trường, nhưng vẫn giữ hoàn toàn độc lập về sản xuất và kinh doanh.',
    features: ['Thỏa thuận giá cả', 'Phân chia thị trường', 'SX & KD vẫn độc lập', 'Dễ tan vỡ khi mâu thuẫn'],
    example: 'OPEC (tổ chức các nước xuất khẩu dầu mỏ)',
  },
  {
    num: '02',
    icon: '🔗',
    vn: 'Syndicat',
    phonetic: 'Xanh-đi-ca',
    hint: 'Văn phòng chung · Cao hơn Cartel',
    accentClass: 'accent--pink',
    desc: 'Cao hơn Cartel một bậc. Thành lập văn phòng mua bán chung để thống nhất giá bán và điều kiện giao hàng, nhưng sản xuất vẫn tiến hành độc lập tại mỗi xí nghiệp thành viên.',
    features: ['Văn phòng thương mại chung', 'Thống nhất giá bán', 'SX vẫn độc lập', 'Chia lợi nhuận theo SX'],
    example: 'Các syndicate than đá ở Đức đầu TK XX',
  },
  {
    num: '03',
    icon: '🏢',
    vn: 'Trust',
    phonetic: 'Tờ-rớt',
    hint: 'Ban quản trị chung · Chặt chẽ',
    accentClass: 'accent--mint',
    desc: 'Liên kết chặt chẽ. Các thành viên giao toàn bộ tư bản cho ban quản trị thống nhất và trở thành cổ đông. Mất hoàn toàn tính độc lập về cả sản xuất lẫn kinh doanh.',
    features: ['Ban quản trị thống nhất', 'Thành viên = Cổ đông', 'Mất độc lập SX & KD', 'Chia lợi nhuận theo CP'],
    example: 'Standard Oil Trust (Rockefeller, Mỹ)',
  },
  {
    num: '04',
    icon: '🌐',
    vn: 'Concern',
    phonetic: 'Công-xéc-nơ',
    hint: 'Đa ngành · Toàn cầu · Cao nhất',
    accentClass: 'accent--blue',
    desc: 'Hình thức liên kết cao nhất, bao gồm nhiều trust và syndicate, hoạt động đa ngành (công nghiệp, thương mại, ngân hàng, bảo hiểm), gắn chặt với ngân hàng lớn trên phạm vi quốc tế.',
    features: ['Đa ngành: CN + TM + NH', 'Nhiều Trust + Syndicat', 'Liên kết ngân hàng lớn', 'Phạm vi toàn cầu'],
    example: 'Samsung Group, Mitsubishi, GE',
  },
]

export default function HinhThuc() {
  return (
    <section id="hinh-thuc" className="section section--alt">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--pink">Hình thức tổ chức</span>
          <h2 className="section__title">4 Hình Thức Độc Quyền</h2>
          <p className="section__desc">
            Tổ chức độc quyền phát triển từ liên kết lỏng lẻo đến thống nhất toàn diện.
            Di chuột vào thẻ để xem chi tiết.
          </p>
        </header>

        {/* Progression indicator */}
        <div className="org-progression" data-reveal data-delay="100">
          {FORMS.map((f, i) => (
            <Fragment key={f.vn}>
              <div className="prog-step">
                <div className={`prog-dot ${f.accentClass}`}>{f.num}</div>
                <span className="prog-label">{f.vn}</span>
              </div>
              {i < FORMS.length - 1 && (
                <div className="prog-arrow">→</div>
              )}
            </Fragment>
          ))}
          <div className="prog-end">
            <span>🏆 Cao nhất</span>
          </div>
        </div>

        {/* 4 flip cards */}
        <div className="org-grid">
          {FORMS.map((f, i) => (
            <div
              key={f.vn}
              className="flip-scene"
              data-reveal
              data-delay={`${i * 100 + 150}`}
            >
              <div className="flip-card">
                {/* FRONT */}
                <div className={`flip-face flip-face--front ${f.accentClass}`}>
                  <div className="ff-num">{f.num}</div>
                  <div className="ff-icon">{f.icon}</div>
                  <div className="ff-vn">{f.vn}</div>
                  <div className="ff-phonetic">/{f.phonetic}/</div>
                  <div className="ff-hint">{f.hint}</div>
                  <div className="ff-cta">Di chuột để xem →</div>
                </div>

                {/* BACK */}
                <div className={`flip-face flip-face--back ${f.accentClass}-back`}>
                  <div className="ff-back-tag">{f.num} / {f.vn}</div>
                  <div className="ff-back-title">{f.icon} {f.vn}</div>
                  <p className="ff-back-desc">{f.desc}</p>
                  <ul className="ff-back-features">
                    {f.features.map((ft) => (
                      <li key={ft}>✓ {ft}</li>
                    ))}
                  </ul>
                  <div className="ff-example">
                    <span>📌 Ví dụ:</span> {f.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
