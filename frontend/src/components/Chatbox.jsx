// frontend/src/components/Chatbox.jsx
import { useState, useRef, useEffect } from 'react'

const SUGGESTIONS = [
  'Độc quyền là gì?',
  'Cartel khác Trust thế nào?',
  '5 đặc điểm CNTB Độc Quyền',
  'Xuất khẩu tư bản là gì?',
]

function escapeHtml(str) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

/** Convert markdown-like Claude output to safe HTML */
function toSafeHtml(text) {
  let s = escapeHtml(text)
  // Bold: **text** → <strong>text</strong>
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  // Italic: *text* or _text_
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>')
  s = s.replace(/_(.+?)_/g, '<em>$1</em>')
  // Numbered list: lines starting with 1. 2. etc.
  s = s.replace(/^(\d+)\.\s+(.+)$/gm, '<li>$1. $2</li>')
  // Bullet list: lines starting with - or •
  s = s.replace(/^[-•]\s+(.+)$/gm, '<li>$1</li>')
  // Wrap consecutive <li> in <ul>
  s = s.replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
  // Newlines → <br/>
  s = s.replace(/\n/g, '<br/>')
  // Clean up <br/> inside <ul>/<li>
  s = s.replace(/<br\/>(<\/?[ul|li])/g, '$1')
  return s
}

function now() {
  return new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
}

export default function Chatbox() {
  const [open, setOpen] = useState(false)
  const [sessionId, setSessionId] = useState(() => localStorage.getItem('mln122_chat_session') || '')
  const [aiOnline, setAiOnline] = useState(null) // null=checking, true=online, false=offline
  const [msgs, setMsgs] = useState([
    {
      id: 0,
      role: 'bot',
      html: '👋 Xin chào! Mình là <strong>AI MLN122</strong> — trợ lý học tập về phần Độc Quyền KTCT Mác-Lênin.<br/><br/>Bạn muốn hỏi gì về nội dung bài học?',
      time: now(),
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [badge, setBadge] = useState(1) // unread indicator
  const msgEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  useEffect(() => {
    if (sessionId) localStorage.setItem('mln122_chat_session', sessionId)
  }, [sessionId])

  // Wake up HF Space when chatbox first opens
  useEffect(() => {
    if (!open || aiOnline !== null) return
    setAiOnline(null)
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: '__ping__', sessionId: '' }),
    })
      .then((r) => r.json())
      .then((d) => setAiOnline(d.source === 'ai'))
      .catch(() => setAiOnline(false))
  }, [open])

  const send = async (text) => {
    const q = (text || input).trim()
    if (!q || typing) return
    setInput('')
    setBadge(0)

    setMsgs((prev) => [
      ...prev,
      { id: Date.now(), role: 'user', html: toSafeHtml(q), time: now() },
    ])

    setTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, sessionId }),
      })

      if (!res.ok) throw new Error('Chat API failed')

      const data = await res.json()
      if (data.sessionId) setSessionId(data.sessionId)
      if (data.source === 'ai') setAiOnline(true)
      else if (data.source === 'fallback') setAiOnline(false)

      setMsgs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'bot',
          html: toSafeHtml(data.reply || 'Mình chưa nhận được phản hồi từ AI.'),
          time: now(),
        },
      ])
    } catch {
      setMsgs((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'bot',
          html: '⚠️ Chưa kết nối được AI backend. Bạn kiểm tra lại BE_AI đang chạy và thử lại nhé.',
          time: now(),
        },
      ])
    } finally {
      setTyping(false)
    }
  }

  const handleOpen = () => {
    setOpen((o) => !o)
    setBadge(0)
    setTimeout(() => inputRef.current?.focus(), 300)
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        className={`chat-toggle${open ? ' is-open' : ''}`}
        onClick={handleOpen}
        aria-label={open ? 'Đóng chat' : 'Mở chat'}
      >
        {open ? '✕' : '💬'}
        {!open && badge > 0 && <span className="chat-badge">{badge}</span>}
      </button>

      {/* Chat panel */}
      <div className={`chatbox${open ? ' is-open' : ''}`} role="dialog" aria-label="Chatbot học tập">
        {/* Header */}
        <div className="chat-header">
          <div className="chat-avatar">🤖</div>
          <div className="chat-header-info">
            <div className="chat-header-name">AI MLN122</div>
            <div className={`chat-header-status${aiOnline === false ? ' status--fallback' : ''}`}>
              {aiOnline === null ? '○ Đang kết nối...' : aiOnline ? '● AI Claude · Trực tuyến' : '● Chế độ cơ bản'}
            </div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Đóng">✕</button>
        </div>

        {/* Messages */}
        <div className="chat-messages" role="log" aria-live="polite">
          {msgs.map((m) => (
            <div key={m.id} className={`chat-msg msg-${m.role}`}>
              {m.role === 'bot' && <div className="msg-avatar">🤖</div>}
              <div>
                <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: m.html }} />
                <div className="msg-time">{m.time}</div>
              </div>
            </div>
          ))}
          {typing && (
            <div className="chat-msg msg-bot">
              <div className="msg-avatar">🤖</div>
              <div className="typing-bubble">
                <span className="dot" /><span className="dot" /><span className="dot" />
              </div>
            </div>
          )}
          <div ref={msgEndRef} />
        </div>

        {/* Quick suggestions */}
        <div className="chat-suggestions">
          {SUGGESTIONS.map((s) => (
            <button key={s} className="sugg-btn" onClick={() => send(s)}>
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="chat-input-row">
          <input
            ref={inputRef}
            className="chat-input"
            placeholder="Nhập câu hỏi của bạn…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            maxLength={200}
            aria-label="Nhập câu hỏi"
          />
          <button className="chat-send" onClick={() => send()} aria-label="Gửi">
            ➤
          </button>
        </div>
      </div>
    </>
  )
}
