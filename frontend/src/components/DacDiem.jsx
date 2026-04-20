// frontend/src/components/DacDiem.jsx
const FEATURES = [
  {
    num: '01',
    icon: '🏭',
    title: 'Tập trung sản xuất và tư bản dẫn đến độc quyền',
    badge: 'Nền tảng',
    badgeCls: 'tl-badge--purple',
    content:
      'Tự do cạnh tranh sinh ra tích tụ và tập trung sản xuất; đến giai đoạn nhất định thì dẫn tới độc quyền. Các tổ chức ĐQ kiểm soát phần lớn sản xuất và tiêu thụ một loại hàng hóa.',
    highlight: '"Cạnh tranh tự do đẻ ra tập trung SX, và sự tập trung này, khi phát triển tới một mức độ nhất định, dẫn tới độc quyền." — Lenin',
    side: 'left',
  },
  {
    num: '02',
    icon: '🏦',
    title: 'Tư bản tài chính và đầu sỏ tài chính',
    badge: 'Cốt lõi',
    badgeCls: 'tl-badge--pink',
    content:
      'Ngân hàng và công nghiệp kết hợp thành tư bản tài chính. Tầng lớp đầu sỏ tài chính dùng "chế độ tham dự" để kiểm soát nhiều tầng doanh nghiệp từ một nguồn vốn nhỏ.',
    highlight: 'Đầu sỏ TC chi phối cả kinh tế lẫn chính trị — nhà nước trở thành công cụ.',
    side: 'right',
  },
  {
    num: '03',
    icon: '✈️',
    title: 'Xuất khẩu tư bản có ý nghĩa đặc biệt quan trọng',
    badge: 'Mở rộng',
    badgeCls: 'tl-badge--mint',
    content:
      'Khác với xuất khẩu hàng hóa, xuất khẩu tư bản là đưa giá trị (tư bản) ra nước ngoài để thu lợi nhuận tại đó, qua đầu tư trực tiếp (FDI) hoặc cho vay.',
    highlight: 'Nước nhận đầu tư bị phụ thuộc kinh tế và chịu thiệt thòi về chuyển lợi nhuận.',
    side: 'left',
  },
  {
    num: '04',
    icon: '🌐',
    title: 'Phân chia thế giới về kinh tế giữa các tổ chức ĐQ',
    badge: 'Quốc tế',
    badgeCls: 'tl-badge--blue',
    content:
      'Các tổ chức ĐQ quốc tế phân chia thị trường thế giới, thỏa thuận chia sẻ vùng tiêu thụ, nguồn nguyên liệu và phạm vi đầu tư để tránh cạnh tranh phá giá.',
    highlight: 'Hình thành Cartel quốc tế, phân chia thị trường theo khả năng kinh tế.',
    side: 'right',
  },
  {
    num: '05',
    icon: '🗺️',
    title: 'Phân chia lãnh thổ thế giới đã hoàn thành',
    badge: 'Đỉnh cao',
    badgeCls: 'tl-badge--yellow',
    content:
      'Đến đầu TK XX, phân chia lãnh thổ thế giới giữa các cường quốc ĐQ về cơ bản đã hoàn thành. Đây là đặc điểm của CNTB giai đoạn đế quốc chủ nghĩa (Lenin).',
    highlight: 'Chiến tranh thế giới thứ nhất (1914–1918) nổ ra do mâu thuẫn phân chia lại thế giới.',
    side: 'left',
  },
]

export default function DacDiem() {
  return (
    <section id="dac-diem" className="section">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--mint">5 Đặc Điểm</span>
          <h2 className="section__title">5 Đặc Điểm Kinh Tế Cơ Bản</h2>
          <p className="section__desc">
            V.I. Lenin chỉ ra 5 đặc điểm kinh tế của CNTB độc quyền — còn gọi là
            chủ nghĩa đế quốc — giai đoạn tột cùng của chủ nghĩa tư bản.
          </p>
        </header>

        <div className="timeline">
          {FEATURES.map((f, i) => (
            <div
              key={f.num}
              className={`tl-item tl-item--${f.side}`}
              data-reveal
              data-delay={`${i * 120}`}
            >
              {/* Connector node */}
              <div className="tl-node">
                <div className={`tl-node-inner ${f.badgeCls}`}>
                  <span>{f.icon}</span>
                </div>
              </div>

              {/* Content card */}
              <div className="tl-card">
                <div className="tl-card-header">
                  <span className="tl-num">{f.num}</span>
                  <span className={`tl-badge ${f.badgeCls}`}>{f.badge}</span>
                </div>
                <h3 className="tl-title">{f.title}</h3>
                <p className="tl-detail">{f.content}</p>
                <div className="tl-highlight">
                  <span className="tl-highlight-icon">💡</span>
                  <em>{f.highlight}</em>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary row */}
        <div className="tl-summary" data-reveal>
          <div className="sum-chip">🏭 Tập trung SX</div>
          <div className="sum-equals">+</div>
          <div className="sum-chip">🏦 Tư bản TC</div>
          <div className="sum-equals">+</div>
          <div className="sum-chip">✈️ Xuất khẩu TB</div>
          <div className="sum-equals">+</div>
          <div className="sum-chip">🌐 Phân chia KT</div>
          <div className="sum-equals">+</div>
          <div className="sum-chip">🗺️ Phân chia lãnh thổ</div>
          <div className="sum-equals">=</div>
          <div className="sum-result">CNTB Đế Quốc 👑</div>
        </div>
      </div>
    </section>
  )
}
