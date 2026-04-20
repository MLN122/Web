// frontend/src/components/Chatbox.jsx
import { useState, useRef, useEffect } from 'react'
import { knowledgeBase } from '../data/knowledgeBase'

const SUGGESTIONS = [
  'Độc quyền là gì?',
  'Cartel khác Trust thế nào?',
  '5 đặc điểm CNTB Độc Quyền',
  'Xuất khẩu tư bản là gì?',
]

function findAnswer(text) {
  const lower = text.toLowerCase()
  for (const kb of knowledgeBase) {
    if (kb.keys.some((k) => lower.includes(k))) {
      return kb.response
    }
  }
  return `🤔 Mình chưa có câu trả lời cho "<em>${text}</em>".<br/>Thử hỏi về: <strong>Cartel, Trust, Concern, Syndicat, Tư bản tài chính, Xuất khẩu tư bản</strong> hoặc <strong>5 đặc điểm CNTB độc quyền</strong>.`
}

function now() {
  return new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
}

export default function Chatbox() {
  const [open, setOpen] = useState(false)
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

  const send = (text) => {
    const q = (text || input).trim()
    if (!q) return
    setInput('')
    setBadge(0)

    setMsgs((prev) => [
      ...prev,
      { id: Date.now(), role: 'user', html: q, time: now() },
    ])

    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', html: findAnswer(q), time: now() },
      ])
    }, 900)
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
            <div className="chat-header-status">● Trực tuyến · Sẵn sàng</div>
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
