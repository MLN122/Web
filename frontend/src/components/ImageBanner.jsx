// frontend/src/components/ImageBanner.jsx
// NOTE: Ảnh minh họa từ Unsplash – khuyến nghị thay bằng ảnh AI tạo về chủ đề kinh tế tư bản

const BANNERS = [
  {
    id: 'banner-1',
    // After GioiThieu – before HinhThuc
    src: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1600&q=80&fit=crop',
    caption: 'Tổ hợp công nghiệp Krupp (Đức) – hình mẫu tập trung tư bản đầu thế kỷ XX',
    label: 'Minh họa: Tập trung sản xuất',
    accent: '#FF6B35',
    quote: '"Cạnh tranh tự do đẻ ra tập trung sản xuất, và sự tập trung này đến một mức độ nhất định sẽ dẫn tới độc quyền."',
    author: '— V.I. Lênin, Chủ nghĩa đế quốc',
  },
  {
    id: 'banner-2',
    // After HinhThuc – before DacDiem
    src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80&fit=crop',
    caption: 'Thị trường tài chính toàn cầu – biểu tượng của tư bản tài chính hiện đại',
    label: 'Minh họa: Tư bản tài chính',
    accent: '#00B4D8',
    quote: '"Tư bản tài chính là tư bản ngân hàng của một vài ngân hàng độc quyền lớn nhất, hợp nhất với tư bản của các liên minh độc quyền công nghiệp."',
    author: '— Rudolf Hilferding',
  },
  {
    id: 'banner-3',
    // After DacDiem – before TuBanTaiChinh
    src: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=1600&q=80&fit=crop',
    caption: 'Cảng container quốc tế – huyết mạch của xuất khẩu tư bản toàn cầu',
    label: 'Minh họa: Xuất khẩu tư bản',
    accent: '#06D6A0',
    quote: '"Xuất khẩu tư bản ảnh hưởng đến sự phát triển của chủ nghĩa tư bản ở các nước bị xuất khẩu tư bản vào, làm cho nó nhanh chóng hơn rất nhiều."',
    author: '— V.I. Lênin',
  },
]

export default function ImageBanner({ index }) {
  const b = BANNERS[index]
  if (!b) return null
  return (
    <div className="img-banner" id={b.id} data-reveal>
      <div className="img-banner__bg">
        <img src={b.src} alt={b.caption} className="img-banner__img" loading="lazy" />
        <div className="img-banner__overlay" style={{ '--accent': b.accent }} />
      </div>
      <div className="img-banner__content">
        <span className="img-banner__label" style={{ background: `${b.accent}22`, color: b.accent, borderColor: `${b.accent}55` }}>
          {b.label}
        </span>
        <blockquote className="img-banner__quote">
          <p>{b.quote}</p>
          <footer>{b.author}</footer>
        </blockquote>
        <p className="img-banner__caption">📷 {b.caption}</p>
      </div>
    </div>
  )
}
