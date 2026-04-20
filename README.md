# 📚 Chương Độc Quyền — Kinh Tế Chính Trị Mác-Lênin

**Nhóm 1 · MLN122 · Fall 2026**

Trang web sáng tạo trình bày chương **Độc Quyền** trong giáo trình Kinh Tế Chính Trị Mác-Lênin.

---

## 🌟 Tính Năng

| Tính năng | Mô tả |
|-----------|-------|
| 🎨 Pastel UI | Giao diện tươi sáng tone màu pastel |
| 📖 Nội dung đầy đủ | Định nghĩa, hình thức tổ chức, 5 đặc điểm, tư bản tài chính, xuất khẩu tư bản |
| 🎮 Mini Game | Quiz 10 câu hỏi, đếm ngược 30 giây/câu, tính điểm |
| 🤖 AI Chatbox | Trả lời câu hỏi về chương Độc Quyền (delay 5–10 giây thực tế) |
| 📱 Responsive | Tương thích mọi thiết bị |
| ♿ A11y | Hỗ trợ aria-labels, keyboard navigation |

---

## 🗂️ Cấu Trúc File

```
/
├── index.html      ← Trang chính
├── style.css       ← Giao diện pastel
├── app.js          ← Logic: mini game + AI chatbox + animations
├── vercel.json     ← Cấu hình Vercel
└── README.md
```

---

## 🚀 Deploy lên Vercel (3 bước)

### Cách 1: Từ GitHub (Khuyến nghị)

1. **Tạo repository GitHub**
   ```
   git init
   git add .
   git commit -m "feat: Độc Quyền website - Nhóm 1 MLN122"
   git remote add origin https://github.com/YOUR_USERNAME/doc-quyen-ktct.git
   git push -u origin main
   ```

2. **Kết nối Vercel**
   - Truy cập [vercel.com](https://vercel.com) → Sign up / Login
   - Click **"Add New Project"**
   - Chọn repository vừa tạo
   - Click **"Deploy"** (không cần cấu hình thêm)

3. **Done!** Vercel tự động deploy và cấp URL dạng `ten-project.vercel.app`

### Cách 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Cách 3: Drag & Drop

1. Truy cập [vercel.com/new](https://vercel.com/new)
2. Kéo thả toàn bộ folder vào trang
3. Deploy!

---

## 🎮 Mini Game

- **10 câu hỏi** về chương Độc Quyền
- **30 giây** mỗi câu (trả lời sớm = điểm cao hơn)
- **Giải thích** sau mỗi câu trả lời
- **Tổng điểm tối đa**: ~130 điểm (tùy tốc độ trả lời)

---

## 🤖 AI Chatbox

Trả lời câu hỏi về:
- Độc quyền là gì?
- Cartel, Syndicat, Trust, Concern
- Tư bản tài chính & đầu sỏ tài chính
- Xuất khẩu tư bản
- 5 đặc điểm CNTB độc quyền
- Lợi nhuận và giá cả độc quyền

> Thời gian phản hồi: 5–10 giây (giả lập AI)

---

## 🖼️ Nguồn Hình Ảnh

| Hình ảnh | Nguồn | Tác giả |
|----------|-------|---------|
| Nhà máy công nghiệp | [Unsplash](https://unsplash.com/photos/1565728744382) | Ant Rozetsky |
| Thị trường tài chính | [Unsplash](https://unsplash.com/photos/1611974789855) | Maxim Hopman |
| Tòa nhà ngân hàng | [Unsplash](https://unsplash.com/photos/1560472354) | Sung Jin Cho |
| Bản đồ thế giới | [Unsplash](https://unsplash.com/photos/1526628953301) | Joey Csunyo |
| Sơ đồ & illustrations | CSS thuần, không phụ thuộc bên ngoài | Nhóm 1 tự thiết kế |

Tất cả ảnh Unsplash được cấp phép **miễn phí thương mại** theo [Unsplash License](https://unsplash.com/license).

---

## 📖 Nội Dung Học Thuật

Dựa trên: **Giáo trình Kinh Tế Chính Trị Mác-Lênin** (Bộ GD&ĐT, 2021), Chương 5.

Tham khảo thêm:
- Lenin, V.I. *Chủ nghĩa đế quốc, giai đoạn tột cùng của CNTB* (1916)
- Giáo trình KTCT Mác-Lênin — NXB Chính trị Quốc gia Sự thật

---

© 2026 Nhóm 1 · MLN122 · Trang web giáo dục, không vì mục đích thương mại.
