// frontend/src/components/MemoryGame.jsx
import { useState, useEffect, useCallback } from 'react'
import { GAME_PAIRS } from '../data/gameCards'

/* Shuffle array (Fisher-Yates) */
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildDeck() {
  return shuffle(
    GAME_PAIRS.flatMap((p) => [
      { uid: `${p.id}-A`, pairId: p.id, type: 'term', content: p.term,  icon: p.icon, color: p.color, bg: p.bg },
      { uid: `${p.id}-B`, pairId: p.id, type: 'desc', content: p.desc, icon: p.icon, color: p.color, bg: p.bg },
    ])
  )
}

function formatTime(s) {
  const m = Math.floor(s / 60)
  return `${m > 0 ? `${m}m ` : ''}${s % 60}s`
}

function getRank(moves, seconds) {
  if (moves <= 12 && seconds <= 60) return { label: '⭐⭐⭐ Xuất Sắc!',   cls: 'rank--gold' }
  if (moves <= 18 && seconds <= 120) return { label: '⭐⭐ Giỏi!',        cls: 'rank--silver' }
  return { label: '⭐ Hoàn thành!', cls: 'rank--bronze' }
}

export default function MemoryGame() {
  const [gameState, setGameState] = useState('idle') // idle | playing | won
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])        // array of uid (max 2)
  const [matched, setMatched] = useState(new Set())  // set of pairId
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [locked, setLocked] = useState(false)

  /* Timer */
  useEffect(() => {
    if (gameState !== 'playing') return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [gameState])

  const startGame = useCallback(() => {
    setCards(buildDeck())
    setFlipped([])
    setMatched(new Set())
    setMoves(0)
    setSeconds(0)
    setLocked(false)
    setGameState('playing')
  }, [])

  const handleCard = useCallback(
    (uid, pairId) => {
      if (locked) return
      if (matched.has(pairId)) return
      if (flipped.includes(uid)) return
      if (flipped.length === 1 && flipped[0] === uid) return

      const newFlipped = [...flipped, uid]
      setFlipped(newFlipped)

      if (newFlipped.length === 2) {
        setMoves((m) => m + 1)
        setLocked(true)

        const [uid1, uid2] = newFlipped
        const c1 = cards.find((c) => c.uid === uid1)
        const c2 = cards.find((c) => c.uid === uid2)

        if (c1.pairId === c2.pairId) {
          // MATCH
          const newMatched = new Set([...matched, c1.pairId])
          setMatched(newMatched)
          setFlipped([])
          setLocked(false)
          if (newMatched.size === GAME_PAIRS.length) {
            setTimeout(() => setGameState('won'), 400)
          }
        } else {
          // NO MATCH — flip back after 1s
          setTimeout(() => {
            setFlipped([])
            setLocked(false)
          }, 1100)
        }
      }
    },
    [locked, matched, flipped, cards]
  )

  const rank = gameState === 'won' ? getRank(moves, seconds) : null

  return (
    <section id="minigame" className="section section--game">
      <div className="section__container">
        <header className="section__header" data-reveal>
          <span className="section__badge badge--purple">Mini Game 🎮</span>
          <h2 className="section__title">Lật Thẻ Ký Ức</h2>
          <p className="section__desc">
            Ghép đúng khái niệm với mô tả tương ứng. Càng ít lượt lật, điểm càng cao!
          </p>
        </header>

        <div className="memory-wrapper">
          {/* ── START SCREEN ── */}
          {gameState === 'idle' && (
            <div className="game-start-screen">
              <div className="game-mascot">🧠</div>
              <h3>Sẵn sàng thử thách?</h3>
              <p>16 thẻ · 8 cặp khái niệm · 3D flip</p>
              <div className="game-rules">
                <div className="game-rule"><span className="rule-icon">👆</span> Click thẻ để lật</div>
                <div className="game-rule"><span className="rule-icon">🔍</span> Tìm cặp khái niệm – mô tả</div>
                <div className="game-rule"><span className="rule-icon">⏱️</span> Càng nhanh càng giỏi</div>
                <div className="game-rule"><span className="rule-icon">🏆</span> Ít lượt = điểm cao hơn</div>
              </div>
              <button className="btn btn--game" onClick={startGame}>
                🎮 Bắt đầu chơi!
              </button>
            </div>
          )}

          {/* ── PLAYING ── */}
          {gameState === 'playing' && (
            <>
              {/* HUD */}
              <div className="memory-hud">
                <div className="hud-stat">
                  <span className="hud-icon">🔄</span>
                  <span className="hud-val">{moves}</span>
                  <span className="hud-label">Lượt lật</span>
                </div>
                <div className="hud-stat">
                  <span className="hud-icon">✅</span>
                  <span className="hud-val">{matched.size}/{GAME_PAIRS.length}</span>
                  <span className="hud-label">Đã ghép</span>
                </div>
                <div className="hud-stat">
                  <span className="hud-icon">⏱️</span>
                  <span className="hud-val">{formatTime(seconds)}</span>
                  <span className="hud-label">Thời gian</span>
                </div>
                <button className="hud-reset" onClick={startGame} title="Chơi lại">↺</button>
              </div>

              {/* Progress bar */}
              <div className="memory-progress">
                <div
                  className="memory-progress-fill"
                  style={{ width: `${(matched.size / GAME_PAIRS.length) * 100}%` }}
                />
              </div>

              {/* Card grid */}
              <div className="memory-grid">
                {cards.map((card, index) => {
                  const isFlipped  = flipped.includes(card.uid)
                  const isMatched  = matched.has(card.pairId)
                  const faceUp     = isFlipped || isMatched

                  return (
                    <div
                      key={card.uid}
                      className={`mem-card${faceUp ? ' is-flipped' : ''}${isMatched ? ' is-matched' : ''}${locked && !faceUp ? ' disabled' : ''}`}
                      style={{ '--card-color': card.color, '--card-bg': card.bg }}
                      onClick={() => handleCard(card.uid, card.pairId)}
                      role="button"
                      aria-label={faceUp ? card.content : 'Thẻ úp'}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleCard(card.uid, card.pairId)}
                    >
                      <div className="mem-card-inner">
                        {/* Face DOWN */}
                        <div className="mem-face mem-face--front">
                          <span className="mem-card-index">{index + 1}</span>
                          <div className="card-back-icon">?</div>
                          <div className="card-back-logo">🎓</div>
                        </div>

                        {/* Face UP */}
                        <div className="mem-face mem-face--back">
                          <span className="mem-card-index mem-card-index--back">{index + 1}</span>
                          <div className="card-icon">{card.icon}</div>
                          <div className="card-content">
                            <div className={`card-type ${card.type === 'term' ? 'type-term' : 'type-desc'}`}>
                              {card.type === 'term' ? 'Khái niệm' : 'Mô tả'}
                            </div>
                            <div className="card-text">{card.content}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Matched pairs display */}
              {matched.size > 0 && (
                <div className="matched-pairs">
                  <strong>✅ Đã ghép:</strong>
                  {[...matched].map((pid) => {
                    const pair = GAME_PAIRS.find((p) => p.id === pid)
                    return (
                      <span key={pid} className="matched-pair-tag" style={{ background: pair.bg, borderColor: pair.color, color: pair.color }}>
                        {pair.icon} {pair.term}
                      </span>
                    )
                  })}
                </div>
              )}
            </>
          )}

          {/* ── WIN SCREEN ── */}
          {gameState === 'won' && (
            <div className="game-win-screen">
              <div className="win-trophy">🏆</div>
              <h3 className="win-title">Xuất Sắc! Bạn đã ghép tất cả!</h3>
              <div className="win-stats">
                <div className="win-stat-item">
                  <div className="win-stat-val">{moves}</div>
                  <div className="win-stat-label">Lượt lật</div>
                </div>
                <div className="win-stat-item">
                  <div className="win-stat-val">{formatTime(seconds)}</div>
                  <div className="win-stat-label">Thời gian</div>
                </div>
                <div className="win-stat-item">
                  <div className="win-stat-val">{GAME_PAIRS.length}/{GAME_PAIRS.length}</div>
                  <div className="win-stat-label">Cặp ghép</div>
                </div>
              </div>
              <div className={`win-rank ${rank.cls}`}>{rank.label}</div>
              <p className="win-instruction">
                Bạn đã ôn tập {GAME_PAIRS.length} khái niệm về Độc Quyền trong KTCT Mác-Lênin!
              </p>
              <button className="btn btn--game" onClick={startGame}>
                🔄 Chơi lại
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
