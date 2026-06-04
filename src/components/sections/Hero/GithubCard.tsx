import { useMemo } from 'react'

const WEEKS = 24
const DAYS = 7
const TOTAL = WEEKS * DAYS

const LEVELS = [
  '#ebedf0',
  '#c6e48b',
  '#7bc96f',
  '#239a3b',
  '#196127',
]

function randomLevel() {
  const r = Math.random()
  if (r < 0.35) return 0
  if (r < 0.55) return 1
  if (r < 0.75) return 2
  if (r < 0.90) return 3
  return 4
}

export default function GithubCard() {
  const cells = useMemo(() => Array.from({ length: TOTAL }, () => randomLevel()), [])

  return (
    <div className="gh-card">
      <div className="gh-hd">
        <span className="gh-lbl">GITHUB CONTRIBUTIONS</span>
        <span className="gh-yr">2024</span>
      </div>
      <div className="gh-grid">
        {cells.map((level, i) => (
          <div
            key={i}
            className="gh-cell"
            style={{ background: LEVELS[level] }}
          />
        ))}
      </div>
      <div className="gh-stats">
        <div className="gh-stat">
          <div className="gh-val">841</div>
          <div className="gh-key">contributions</div>
        </div>
        <div className="gh-stat">
          <div className="gh-val">22</div>
          <div className="gh-key">repos</div>
        </div>
        <div className="gh-stat">
          <div className="gh-val">2 yr</div>
          <div className="gh-key">経験</div>
        </div>
      </div>
    </div>
  )
}
