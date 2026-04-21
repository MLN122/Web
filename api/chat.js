// api/chat.js — Vercel Serverless Function (Node.js)
// POST /api/chat  { message: string, sessionId?: string }  →  { reply: string, sessionId: string }

const BE_AI_BASE_URL = process.env.BE_AI_BASE_URL || process.env.BACKEND_AI_URL || 'http://127.0.0.1:8000'

const knowledgeBase = [
  {
    keys: ['độc quyền là gì', 'định nghĩa độc quyền', 'độc quyền nghĩa là'],
    response:
      'Độc quyền là sự liên minh của những nhà tư bản lớn nắm trong tay phần lớn việc sản xuất và tiêu thụ một số loại hàng hóa, có khả năng định ra giá cả độc quyền nhằm thu lợi nhuận độc quyền cao. (Lenin, 1916)',
  },
  {
    keys: ['cartel', 'các-ten', 'cacten'],
    response:
      'Cartel (Các-ten) là hình thức tổ chức độc quyền ở mức liên kết thấp nhất: các doanh nghiệp ký thỏa thuận về giá cả, phân chia thị trường, sản lượng — nhưng vẫn giữ độc lập về sản xuất và kinh doanh. Ví dụ: OPEC hoạt động theo nguyên tắc giống Cartel.',
  },
  {
    keys: ['syndicat', 'xanh-di-ca', 'xanhđica'],
    response:
      'Syndicat (Xanh-đi-ca) là hình thức liên kết trung bình: các thành viên thống nhất mua nguyên liệu và bán thành phẩm qua một văn phòng chung, nhưng sản xuất vẫn độc lập tại từng xí nghiệp.',
  },
  {
    keys: ['trust', 'tờ-rớt', 'tơrot'],
    response:
      'Trust (Tờ-rớt) là hình thức liên kết chặt chẽ: các nhà tư bản giao toàn bộ tư bản và quản lý cho một ban quản trị chung, trở thành cổ đông. Mất hoàn toàn tính độc lập về sản xuất lẫn kinh doanh. Ví dụ: Standard Oil Trust của Rockefeller.',
  },
  {
    keys: ['concern', 'công-xéc-nơ', 'conglom'],
    response:
      'Concern (Công-xéc-nơ) là hình thức liên kết cao nhất: liên minh độc quyền đa ngành gồm nhiều trust, syndicat thuộc nhiều lĩnh vực (công nghiệp, thương mại, ngân hàng, bảo hiểm), gắn với ngân hàng lớn. Ví dụ: Samsung Group, Mitsubishi.',
  },
  {
    keys: ['tư bản tài chính', 'tu ban tai chinh', 'vốn tài chính'],
    response:
      'Tư bản tài chính là tư bản của một số ít tập đoàn ngân hàng độc quyền lớn, trong đó tư bản ngân hàng và tư bản công nghiệp thâm nhập, dung hợp vào nhau (đặc điểm 2 của CNTB độc quyền theo Lenin).',
  },
  {
    keys: ['đầu sỏ tài chính', 'dau so tai chinh', 'oligarch'],
    response:
      'Đầu sỏ tài chính là tầng lớp tư sản độc quyền lớn nắm trong tay tư bản tài chính, thống trị kinh tế và chính trị. Họ dùng "chế độ tham dự" (nắm cổ phiếu khống chế) và "chế độ bí mật" để kiểm soát hàng loạt công ty.',
  },
  {
    keys: ['xuất khẩu tư bản', 'xuat khau tu ban', 'fdi', 'đầu tư nước ngoài'],
    response:
      'Xuất khẩu tư bản là đưa giá trị (tư bản) ra nước ngoài để thu lợi nhuận — khác với xuất khẩu hàng hóa. Có 2 hình thức: ① Trực tiếp (FDI – xây nhà máy, mua công ty nước ngoài) và ② Gián tiếp (cho vay, mua trái phiếu, cổ phiếu). Đây là đặc điểm thứ 3 của CNTB độc quyền.',
  },
  {
    keys: ['5 đặc điểm', 'nam dac diem', 'đặc điểm cntb', 'đặc trưng'],
    response:
      '5 đặc điểm kinh tế của CNTB độc quyền (Lenin): ① Tập trung sản xuất → độc quyền, ② Tư bản tài chính & đầu sỏ TC, ③ Xuất khẩu tư bản nổi bật, ④ Phân chia thế giới về kinh tế giữa các tập đoàn, ⑤ Phân chia lãnh thổ thế giới đã hoàn thành.',
  },
  {
    keys: ['lợi nhuận độc quyền', 'loi nhuan doc quyen', 'siêu lợi nhuận'],
    response:
      'Lợi nhuận độc quyền là lợi nhuận thu được cao hơn lợi nhuận bình quân, do tổ chức độc quyền đặt ra giá cả độc quyền (mua thấp hơn và bán cao hơn giá trị). Nguồn gốc: từ giá trị thặng dư của công nhân và bóc lột các nước kém phát triển.',
  },
  {
    keys: ['cạnh tranh', 'canh tranh', 'tự do cạnh tranh'],
    response:
      'Trong CNTB, cạnh tranh tự do dẫn đến tập trung sản xuất → hình thành độc quyền. Nhưng độc quyền không xóa bỏ cạnh tranh — cạnh tranh độc quyền ác liệt hơn, với quy mô lớn hơn: giữa các tổ chức độc quyền với nhau, giữa độc quyền với ngoài độc quyền.',
  },
]

const fallback = [
  'Câu hỏi thú vị! Bạn có thể hỏi về các hình thức độc quyền (Cartel, Trust, Concern), 5 đặc điểm CNTB độc quyền, tư bản tài chính, hay xuất khẩu tư bản nhé!',
  'Mình chưa có đủ thông tin để trả lời chính xác câu đó. Hãy thử hỏi về: độc quyền, Cartel, Syndicat, Trust, tư bản tài chính, hoặc 5 đặc điểm CNTB độc quyền!',
  'Chủ đề này nằm ngoài phạm vi giáo trình mình học rồi! Thử hỏi về Chương Độc Quyền trong KTCT Mác-Lênin nhé.',
]

function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim()
}

function findResponse(input) {
  const q = normalize(input)
  for (const entry of knowledgeBase) {
    for (const key of entry.keys) {
      if (q.includes(normalize(key))) {
        return entry.response
      }
    }
  }
  // Keyword partial match
  const words = q.split(/\s+/)
  for (const entry of knowledgeBase) {
    for (const key of entry.keys) {
      const keyWords = normalize(key).split(/\s+/)
      if (keyWords.some((kw) => words.includes(kw) && kw.length > 3)) {
        return entry.response
      }
    }
  }
  return fallback[Math.floor(Math.random() * fallback.length)]
}

export default function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, sessionId } = req.body ?? {}
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'message is required' })
  }

  // Sanitize: limit length to prevent abuse
  const sanitized = message.slice(0, 300)

  const callAI = async (msg, sid) => {
    const createSession = async () => {
      const sessionRes = await fetch(`${BE_AI_BASE_URL}/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      if (!sessionRes.ok) throw new Error('Cannot create AI session')
      const sessionData = await sessionRes.json()
      return sessionData.session_id
    }

    let currentSid = sid
    if (!currentSid) currentSid = await createSession()

    let chatRes = await fetch(`${BE_AI_BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg, session_id: currentSid }),
    })

    if (chatRes.status === 404) {
      currentSid = await createSession()
      chatRes = await fetch(`${BE_AI_BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, session_id: currentSid }),
      })
    }

    if (!chatRes.ok) throw new Error(`AI chat failed: ${chatRes.status}`)

    const data = await chatRes.json()
    return { reply: data.reply, sessionId: currentSid }
  }

  // Ping: wake up HF Space and report connectivity
  if (sanitized === '__ping__') {
    return callAI('Xin chào', sessionId || '')
      .then((_) => res.status(200).json({ reply: 'pong', source: 'ai', sessionId: sessionId || '' }))
      .catch(() => res.status(200).json({ reply: 'pong', source: 'fallback', sessionId: '' }))
  }

  callAI(sanitized, sessionId || '')
    .then((out) => res.status(200).json({ ...out, source: 'ai' }))
    .catch(() => {
      const reply = findResponse(sanitized)
      res.status(200).json({ reply, source: 'fallback', sessionId: sessionId || '' })
    })
}
