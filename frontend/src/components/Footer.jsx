// frontend/src/components/Footer.jsx
const FOOTER_LINKS = [
   { href: '#gioi-thieu', label: 'Khái Niệm' },
  { href: '#hinh-thuc',  label: 'Hình Thức' },
  { href: '#dac-diem',   label: 'Tác Động' },
  { href: '#tu-ban',     label: 'Độc Quyền Nhà Nước' },
  { href: '#xuat-khau',  label: 'Biểu Hiện Mới' },
]

const MEMBERS = [
  'Nguyễn Thanh Tài - SE183560',
  'Vũ Ngọc Phương Linh - SE182577',
  'Nguyễn Văn Mạnh - SE184068',
  'Thái Nhật Minh Quân - SS180085',
  'Lê Đại Phúc - SE182078',
  'Nguyễn Hiểu Linh - SE193246'
]

function go(e, href) {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner footer-shell">
        <div className="footer-grid">
          <section className="footer-card footer-card--brand">
            <div className="footer-brand">
              <img src="/fpt.png" alt="FPT University" className="footer-logo" />
              <div className="footer-brand-text">
                <strong>MLN122 - Nhóm 1</strong>
                <span>Kinh tế Chính trị Mác - Lênin</span>
              </div>
            </div>
            <p className="footer-desc">
              Chuyên đề: Độc quyền trong chủ nghĩa tư bản. Website trình bày kiến thức học phần theo hướng trực quan, tương tác và dễ ôn tập.
            </p>
            <div className="footer-tag-row">
              <span className="footer-tag">FPT University</span>
              <span className="footer-tag">Spring 2026</span>
              <span className="footer-tag">MLN122</span>
            </div>
          </section>

          <section className="footer-card">
            <h4 className="footer-col-title">Mục nội dung</h4>
            <ul className="footer-nav">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={(e) => go(e, href)}>{label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-card">
            <h4 className="footer-col-title">Thành viên nhóm</h4>
            <ul className="footer-members">
              {MEMBERS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} MLN122 Nhóm 1 · Trường Đại học FPT
          </p>
          <div className="footer-credits">
            <span>Tài liệu:</span>
            <a href="https://www.marxists.org/archive/lenin/works/1916/imp-hsc/" target="_blank" rel="noopener noreferrer">Lenin - CNTB độc quyền</a>
            <span>|</span>
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
