// frontend/src/components/Footer.jsx
const FOOTER_LINKS = [
  { href: '#gioi-thieu', label: 'Giới Thiệu' },
  { href: '#hinh-thuc',  label: 'Hình Thức ĐQ' },
  { href: '#dac-diem',   label: '5 Đặc Điểm' },
  { href: '#tu-ban',     label: 'Tư Bản TC' },
  { href: '#xuat-khau',  label: 'Xuất Khẩu TB' },
  { href: '#minigame',   label: '🎮 Mini Game' },
]

const MEMBERS = [
  'Nguyễn Văn A',
  'Trần Thị B',
  'Lê Văn C',
  'Phạm Thị D',
  'Hoàng Văn E',
]

function go(e, href) {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand column */}
          <div className="footer-brand">
            <img src="/fpt.png" alt="FPT University" className="footer-logo" />
            <div className="footer-brand-text">
              <strong>MLN122 — Nhóm 1</strong>
              <span>Kinh Tế Chính Trị Mác-Lênin</span>
            </div>
            <p className="footer-desc">
              Đề tài: Độc Quyền trong Chủ Nghĩa Tư Bản — Chương 5 KTCT Mác-Lênin.
              Website được xây dựng phục vụ học tập và nghiên cứu.
            </p>
          </div>

          {/* Nav links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Nội dung</h4>
            <ul className="footer-nav">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={(e) => go(e, href)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Members */}
          <div className="footer-col">
            <h4 className="footer-col-title">Thành viên nhóm</h4>
            <ul className="footer-members">
              {MEMBERS.map((m) => (
                <li key={m}>👤 {m}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 MLN122 Nhóm 1 · Trường Đại học FPT · Môn Kinh Tế Chính Trị Mác-Lênin
          </p>
          <div className="footer-credits">
            <span>Nguồn tham khảo:</span>
            <a href="https://www.marxists.org/archive/lenin/works/1916/imp-hsc/" target="_blank" rel="noopener noreferrer">Lenin · CNTB ĐQ</a>
            <span>·</span>
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash Images</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
