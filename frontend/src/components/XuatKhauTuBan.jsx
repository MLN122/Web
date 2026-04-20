// frontend/src/components/XuatKhauTuBan.jsx
const FORMS = [
  {
    num: '①',
    icon: '🏗️',
    title: 'Xuất khẩu trực tiếp (FDI)',
    items: [
      'Xây nhà máy, cơ sở sản xuất ở nước ngoài',
      'Mua lại hoặc thâu tóm doanh nghiệp nước ngoài',
      'Kiểm soát trực tiếp hoạt động kinh doanh',
      'Thu lợi nhuận từ giá trị thặng dư lao động địa phương',
    ],
    color: '#7C5CBF',
    bg: '#F0EAFF',
  },
  {
    num: '②',
    icon: '💸',
    title: 'Xuất khẩu gián tiếp',
    items: [
      'Cho vay quốc tế — thu lãi suất cao',
      'Mua trái phiếu chính phủ nước ngoài',
      'Đầu tư vào cổ phiếu, chứng khoán',
      'Viện trợ kinh tế kèm ràng buộc chính trị',
    ],
    color: '#D63384',
    bg: '#FFF0F7',
  },
]

const OLD_VS_NEW = [
  { label: 'Xuất khẩu hàng hóa', era: 'CNTB Tự do cạnh tranh', icon: '📦', cls: 'xk-col--old' },
  { label: 'Xuất khẩu tư bản', era: 'CNTB Độc quyền', icon: '💰', cls: 'xk-col--new' },
]

export default function XuatKhauTuBan() {
  return (
    <section id="xuat-khau" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--yellow">Đặc điểm 3</span>
          <h2 className="section__title">Xuất Khẩu Tư Bản</h2>
          <p className="section__desc">
            Giai đoạn độc quyền nảy sinh nhu cầu đưa <strong>"tư bản thừa"</strong> ra nước ngoài,
            không chỉ hàng hóa — đây là bước ngoặt so với CNTB tự do cạnh tranh.
          </p>
        </header>

        {/* Old vs New comparison */}
        <div className="xk-compare" data-reveal data-delay="100">
          {OLD_VS_NEW.map((item) => (
            <div key={item.label} className={`xk-col ${item.cls}`}>
              <div className="xk-header">
                <div className="xk-icon">{item.icon}</div>
                <div className="xk-era-label">{item.era}</div>
              </div>
              <div className="xk-col-label">{item.label}</div>
              <p className="xk-col-desc">
                {item.cls === 'xk-col--old'
                  ? 'Bán sản phẩm hàng hóa sản xuất trong nước ra thị trường thế giới. Thu lợi nhuận từ thương mại.'
                  : 'Đưa tư bản (tiền, máy móc, công nghệ) ra đầu tư ở nước ngoài. Thu lợi nhuận từ bóc lột lao động địa phương.'}
              </p>
            </div>
          ))}
          <div className="xk-vs">≠</div>
        </div>

        {/* 2 forms side by side */}
        <div className="xk-forms" data-reveal data-delay="200">
          {FORMS.map((f, i) => (
            <div
              key={f.title}
              className="xk-form-card"
              style={{ '--form-color': f.color, '--form-bg': f.bg }}
              data-reveal
              data-delay={`${i * 120 + 220}`}
            >
              <div className="form-num">{f.num}</div>
              <div className="form-icon">{f.icon}</div>
              <h3 className="form-title">{f.title}</h3>
              <ul className="form-list">
                {f.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="xk-image-wrap" data-reveal data-delay="350">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80&fit=crop"
            alt="Cảng container quốc tế — xuất khẩu tư bản"
            loading="lazy"
          />
          <p className="img-caption">Xuất khẩu tư bản gắn liền với mạng lưới cảng và logistics toàn cầu</p>
        </div>

        {/* Callout */}
        <div className="xk-callout" data-reveal data-delay="400">
          <div className="xk-callout-icon">⚠️</div>
          <div>
            <strong>Hậu quả đối với nước nhận đầu tư:</strong> Bị phụ thuộc kinh tế, lợi nhuận bị chuyển ra nước ngoài,
            tài nguyên bị khai thác cạn kiệt. Nhưng cũng tiếp nhận được vốn, kỹ thuật và tạo việc làm — mâu thuẫn hai mặt.
          </div>
        </div>
      </div>
    </section>
  )
}
