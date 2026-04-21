// frontend/src/components/PuzzleGame.jsx
import { useState, useCallback, useEffect } from 'react'

/* ── PUZZLE CONFIG ── */
const COLS = 5
const ROWS = 2
const TOTAL = COLS * ROWS // 10

/* ── QUESTIONS ── */
const QUESTIONS = [
  { q: 'Độc quyền được hiểu là gì?', choices: ['Sự liên kết giữa các doanh nghiệp nhỏ để chống lại các tập đoàn lớn.','Sự liên minh giữa các doanh nghiệp lớn nhằm thâu tóm sản xuất, tiêu thụ và áp đặt giá cả để thu lợi nhuận cao.','Một hình thức cạnh tranh tự do tuyệt đối trong nền kinh tế thị trường.','Việc nhà nước xóa bỏ hoàn toàn quyền sở hữu tư nhân trong sản xuất.'], correct: 1 },
  { q: 'Nguyên nhân chính dẫn đến sự hình thành của các tổ chức độc quyền là gì?', choices: ['Sự suy giảm của lực lượng sản xuất xã hội.','Sự phát triển của lực lượng sản xuất, tác động của cạnh tranh gay gắt và các cuộc khủng hoảng kinh tế.','Sự biến mất của hệ thống tín dụng và ngân hàng trên thế giới.','Do các doanh nghiệp tự nguyện chia sẻ lợi nhuận với người tiêu dùng.'], correct: 1 },
  { q: 'Mối quan hệ giữa cạnh tranh và độc quyền được mô tả như thế nào?', choices: ['Độc quyền sẽ tiêu diệt hoàn toàn các hình thức cạnh tranh.','Cạnh tranh và độc quyền là hai hiện tượng không bao giờ tồn tại song hành.','Độc quyền sinh ra từ cạnh tranh tự do nhưng không thủ tiêu cạnh tranh, trái lại làm cạnh tranh gay gắt hơn.','Độc quyền chỉ xuất hiện khi không còn bất kỳ sự cạnh tranh nào trên thị trường.'], correct: 2 },
  { q: 'Nguồn gốc của lợi nhuận độc quyền cao chủ yếu đến từ đâu?', choices: ['Do sự hỗ trợ hoàn toàn từ ngân sách của nhà nước.','Do máy móc tự động hóa hoàn toàn tạo ra giá trị mà không cần con người.','Lao động không công của công nhân ở xí nghiệp độc quyền và một phần giá trị thặng dư của những người sản xuất khác.','Chỉ từ việc mua rẻ nguyên liệu của các nước phát triển.'], correct: 2 },
  { q: 'Tổ chức độc quyền áp đặt giá cả như thế nào trên thị trường?', choices: ['Áp đặt giá thấp khi bán hàng hóa và giá cao khi mua nguyên liệu.','Áp đặt giá cả độc quyền cao khi bán hàng hóa và giá cả độc quyền thấp khi mua nguyên liệu.','Tuân thủ tuyệt đối quy luật cung cầu để xác định giá cả công bằng.','Để người tiêu dùng tự quyết định giá cả hàng hóa.'], correct: 1 },
  { q: 'Bản chất của độc quyền nhà nước trong chủ nghĩa tư bản là gì?', choices: ['Nhà nước hoàn toàn thay thế các tổ chức độc quyền tư nhân.','Sự kết hợp sức mạnh của độc quyền tư nhân với sức mạnh của nhà nước thành một cơ chế thống nhất.','Nhà nước giải tán các tập đoàn lớn để bảo vệ doanh nghiệp nhỏ.','Sự tách biệt hoàn toàn giữa lợi ích của nhà nước và các tổ chức độc quyền.'], correct: 1 },
  { q: 'Tư bản tài chính là kết quả của sự hợp nhất giữa hai yếu tố nào?', choices: ['Tư bản thương nghiệp và tư bản nông nghiệp.','Tư bản ngân hàng độc quyền và tư bản công nghiệp độc quyền.','Vốn của nhà nước và vốn hỗ trợ quốc tế.','Tư bản cho vay và tư bản giả trên thị trường chứng khoán.'], correct: 1 },
  { q: 'Hệ thống tài phiệt thống trị xã hội chủ yếu thông qua cơ chế nào?', choices: ['Chế độ quân chủ tập quyền.','"Chế độ tham dự" bằng cách mua cổ phiếu khống chế các công ty mẹ, con, cháu.','Chế độ phân phối sản phẩm trực tiếp cho người dân.','Việc trực tiếp đứng đầu tất cả các cơ quan hành chính của nhà nước.'], correct: 1 },
  { q: 'Mục đích chính của xuất khẩu tư bản là gì?', choices: ['Để giúp đỡ các nước nghèo phát triển kinh tế mà không cần lợi nhuận.','Chiếm đoạt giá trị thặng dư và các nguồn lợi nhuận khác tại các nước nhập khẩu tư bản.','Chỉ để giải quyết vấn đề ô nhiễm môi trường trong nước.','Nhằm mục đích từ thiện và quảng bá văn hóa quốc gia.'], correct: 1 },
  { q: 'V.I. Lênin đã khái quát bao nhiêu đặc điểm kinh tế cơ bản của độc quyền tư bản chủ nghĩa?', choices: ['3 đặc điểm.','4 đặc điểm.','5 đặc điểm.','6 đặc điểm.'], correct: 2 },
]

/* ── PIECE BACKGROUND STYLE ── */
function pieceStyle(index, unlocked) {
  const col = index % COLS
  const row = Math.floor(index / COLS)
  const bgX = `${(col / (COLS - 1)) * 100}%`
  const bgY = `${(row / (ROWS - 1)) * 100}%`
  if (!unlocked) return {}
  return {
    backgroundImage: "url('/CM-Thang-10-Nga.jpg')",
    backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
    backgroundPosition: `${bgX} ${bgY}`,
    backgroundRepeat: 'no-repeat',
  }
}

const INIT_PIECES = () => Array(TOTAL).fill('locked')

export default function PuzzleGame() {
  const [gameState, setGameState]           = useState('idle')
  const [pieces, setPieces]                 = useState(INIT_PIECES)
  const [activePiece, setActivePiece]       = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback]     = useState(false)
  const [revealModal, setRevealModal]       = useState(false)

  const unlockedCount = pieces.filter(s => s === 'unlocked').length
  const allUnlocked   = unlockedCount === TOTAL

  useEffect(() => {
    if (gameState === 'playing' && allUnlocked) {
      const t = setTimeout(() => { setGameState('finished'); setRevealModal(true) }, 800)
      return () => clearTimeout(t)
    }
  }, [pieces, gameState, allUnlocked])

  const startGame = useCallback(() => {
    setPieces(INIT_PIECES())
    setActivePiece(null)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setRevealModal(false)
    setGameState('playing')
  }, [])

  const handlePieceClick = useCallback((idx) => {
    if (pieces[idx] === 'unlocked') return
    if (activePiece === idx) return
    setActivePiece(idx)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }, [pieces, activePiece])

  const handleAnswer = useCallback((choiceIdx) => {
    if (showFeedback) return
    setSelectedAnswer(choiceIdx)
    setShowFeedback(true)
    const isCorrect = choiceIdx === QUESTIONS[activePiece].correct
    setPieces(prev => {
      const next = [...prev]
      next[activePiece] = isCorrect ? 'unlocked' : 'failed'
      return next
    })
  }, [showFeedback, activePiece])

  const closeQuestion = useCallback(() => {
    setActivePiece(null)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }, [])

  const retryPiece = useCallback(() => {
    setPieces(prev => {
      const next = [...prev]
      if (activePiece !== null && next[activePiece] === 'failed') next[activePiece] = 'locked'
      return next
    })
    setSelectedAnswer(null)
    setShowFeedback(false)
  }, [activePiece])

  const activeQ         = activePiece !== null ? QUESTIONS[activePiece] : null
  const isCorrectAnswer = showFeedback && activeQ && selectedAnswer === activeQ.correct

  return (
    <section id="puzzle-game" className="section section--puzzle">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--mint">Mini Game 🧩</span>
          <h2 className="section__title">Ghép Mảnh Toàn Cảnh</h2>
          <p className="section__desc">
            Nhấn vào từng mảnh 🔒 để trả lời câu hỏi. Trả lời đúng mở khóa mảnh và lộ dần bức hình bí ẩn!
          </p>
        </header>

        <div className="puzzle-wrapper">

          {gameState === 'idle' && (
            <div className="puzzle-start-screen" data-reveal>
              <div className="puzzle-mascot">🧩</div>
              <h3>Đoán ảnh bí ẩn qua câu hỏi!</h3>
              <p>Nhấn vào mảnh ghép bất kỳ — trả lời câu hỏi — mở khóa mảnh — lộ dần bức hình</p>
              <div className="puzzle-rules">
                <div className="puzzle-rule"><span>🖱️</span> Click mảnh để chọn câu hỏi</div>
                <div className="puzzle-rule"><span>✅</span> Đúng — mảnh mở khóa ngay</div>
                <div className="puzzle-rule"><span>🔁</span> Sai — vẫn thử lại được</div>
              </div>
              <div className="puzzle-preview-grid puzzle-preview-grid--teaser">
                {Array.from({ length: TOTAL }, (_, i) => (
                  <div key={i} className="puzzle-piece puzzle-piece--locked">
                    <span className="piece-q-num">{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="puzzle-start-btns">
                <button className="btn btn--game" onClick={startGame}>🧩 Bắt đầu ghép mảnh!</button>
              </div>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="puzzle-playing">
              <div className="puzzle-hud">
                <div className="puzzle-hud-stats">
                  <div className="puzzle-hud-stat">
                    <span className="hud-s-icon">🧩</span>
                    <span className="hud-s-val">{unlockedCount}/{TOTAL}</span>
                    <span className="hud-s-label">Đã mở</span>
                  </div>
                  <div className="puzzle-hud-stat">
                    <span className="hud-s-icon">🔒</span>
                    <span className="hud-s-val">{pieces.filter(s => s === 'locked').length}</span>
                    <span className="hud-s-label">Chưa làm</span>
                  </div>
                  <div className="puzzle-hud-stat">
                    <span className="hud-s-icon">🔁</span>
                    <span className="hud-s-val">{pieces.filter(s => s === 'failed').length}</span>
                    <span className="hud-s-label">Cần thử lại</span>
                  </div>
                </div>
                <div className="puzzle-hud-actions">
                  <button className="btn btn--finish-outline btn--sm" onClick={() => { setGameState('finished'); setRevealModal(true) }}>🏁 Kết thúc</button>
                </div>
              </div>

              <div className="puzzle-progress-bar">
                <div className="puzzle-progress-fill" style={{ width: `${(unlockedCount / TOTAL) * 100}%` }} />
              </div>

              <div className="puzzle-play-layout">
                <div className="puzzle-grid-area">
                  <p className="puzzle-grid-hint">
                    {activePiece !== null ? `Đang trả lời mảnh số ${activePiece + 1} →` : 'Nhấn vào mảnh để chọn câu hỏi'}
                  </p>
                  <div className="puzzle-main-grid">
                    {pieces.map((state, i) => (
                      <div
                        key={i}
                        className={['puzzle-main-piece', state === 'unlocked' ? 'piece--unlocked' : '', state === 'failed' ? 'piece--failed' : '', state === 'locked' ? 'piece--locked' : '', activePiece === i ? 'piece--active' : ''].filter(Boolean).join(' ')}
                        style={pieceStyle(i, state === 'unlocked')}
                        onClick={() => handlePieceClick(i)}
                        role={state !== 'unlocked' ? 'button' : undefined}
                        tabIndex={state !== 'unlocked' ? 0 : -1}
                        onKeyDown={e => e.key === 'Enter' && handlePieceClick(i)}
                      >
                        {state !== 'unlocked' && (
                          <div className="main-piece-overlay">
                            <span className="main-piece-num">{i + 1}</span>
                            <span className="main-piece-icon">{state === 'failed' ? '🔁' : '🔒'}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`puzzle-q-panel${activePiece !== null ? ' puzzle-q-panel--open' : ''}`}>
                  {activePiece === null ? (
                    <div className="puzzle-q-empty">
                      <div className="q-empty-icon">👈</div>
                      <p>Nhấn vào một mảnh ghép<br />để hiện câu hỏi tại đây</p>
                    </div>
                  ) : (
                    <div className="puzzle-q-card">
                      <div className="puzzle-q-card-header">
                        <span className="puzzle-q-number">Câu {activePiece + 1}</span>
                        <button className="puzzle-q-close" onClick={closeQuestion} aria-label="Đóng">✕</button>
                      </div>
                      <p className="puzzle-q-text">{activeQ.q}</p>
                      <div className="puzzle-choices">
                        {activeQ.choices.map((choice, idx) => {
                          let cls = 'puzzle-choice'
                          if (showFeedback && isCorrectAnswer) {
                            if (idx === activeQ.correct) cls += ' puzzle-choice--correct'
                          } else if (showFeedback && idx === selectedAnswer) {
                            cls += ' puzzle-choice--wrong'
                          } else if (selectedAnswer === idx) {
                            cls += ' puzzle-choice--selected'
                          }
                          return (
                            <button key={idx} className={cls} onClick={() => handleAnswer(idx)} disabled={showFeedback}>
                              <span className="choice-letter">{['A','B','C','D'][idx]}</span>
                              <span className="choice-text">{choice}</span>
                            </button>
                          )
                        })}
                      </div>
                      {showFeedback && (
                        <>
                          <div className={`puzzle-feedback${isCorrectAnswer ? ' puzzle-feedback--correct' : ' puzzle-feedback--wrong'}`}>
                            {isCorrectAnswer ? '🎉 Chính xác! Mảnh ghép đã được mở!' : '❌ Sai rồi! Bạn có thể thử lại câu này.'}
                          </div>
                          {isCorrectAnswer ? (
                            <button className="btn btn--puzzle-next" onClick={closeQuestion}>← Chọn mảnh khác</button>
                          ) : (
                            <div className="puzzle-retry-row">
                              <button className="btn btn--puzzle-retry" onClick={retryPiece}>🔁 Thử lại câu này</button>
                              <button className="btn btn--puzzle-next btn--outline-next" onClick={closeQuestion}>← Mảnh khác</button>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {gameState === 'finished' && (
            <div className="puzzle-result" data-reveal>
              <div className="puzzle-result-header">
                <div className="result-emoji">{allUnlocked ? '🏆' : unlockedCount >= 7 ? '🥈' : '🎯'}</div>
                <h3>{allUnlocked ? 'Xuất sắc! Bạn mở khóa tất cả mảnh ghép!' : `Bạn đã mở được ${unlockedCount} / ${TOTAL} mảnh!`}</h3>
                <p className="result-sub">{allUnlocked ? 'Tuyệt vời! Hình ảnh đã được ghép hoàn chỉnh!' : unlockedCount >= 7 ? 'Khá tốt! Hãy thử lại để mở đủ 10 mảnh!' : 'Hãy thử lại và trả lời đúng nhiều câu hơn!'}</p>
              </div>
              <div className={`puzzle-final-image${allUnlocked ? ' puzzle-final-image--complete' : ''}`}>
                <div className="puzzle-preview-grid puzzle-preview-grid--result">
                  {pieces.map((state, i) => (
                    <div key={i} className={`puzzle-piece${state === 'unlocked' ? ' puzzle-piece--unlocked' : ' puzzle-piece--locked'}`} style={pieceStyle(i, state === 'unlocked')}>
                      {state !== 'unlocked' && <span className="piece-lock">🔒</span>}
                    </div>
                  ))}
                </div>
                {allUnlocked && <div className="puzzle-complete-banner">🎊 Hình ảnh hoàn chỉnh! 🎊</div>}
              </div>
              <div className="puzzle-score-row">
                {pieces.map((state, i) => (
                  <div key={i} className={`score-dot${state === 'unlocked' ? ' score-dot--correct' : ' score-dot--wrong'}`} title={`Mảnh ${i + 1}: ${state === 'unlocked' ? 'Đúng' : 'Sai/Chưa làm'}`}>{i + 1}</div>
                ))}
              </div>
              <div className="puzzle-result-btns">
                <button className="btn btn--game" onClick={startGame}>🔄 Chơi lại</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {revealModal && (
        <div className="puzzle-reveal-backdrop" onClick={() => setRevealModal(false)}>
          <div className="puzzle-reveal-modal" onClick={e => e.stopPropagation()}>
            <button className="puzzle-reveal-close" onClick={() => setRevealModal(false)}>✕</button>
            <h3 className="puzzle-reveal-title">🖼️ Ảnh bí ẩn đầy đủ</h3>
            <img src="/CM-Thang-10-Nga.jpg" alt="Ảnh bí ẩn đầy đủ" className="puzzle-reveal-img" />
            <p className="puzzle-reveal-caption">Đây là bức hình bạn cần ghép! Hãy đoán xem đây là ảnh gì rồi quay lại trả lời câu hỏi nhé.</p>
            <button className="btn btn--game" onClick={() => setRevealModal(false)}>Đóng lại</button>
          </div>
        </div>
      )}
    </section>
  )
}
