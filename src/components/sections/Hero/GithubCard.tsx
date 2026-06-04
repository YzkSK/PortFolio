export default function GithubCard() {
  return (
    <div className="gh-card">
      <div className="gh-hd">
        <span className="gh-lbl">GITHUB CONTRIBUTIONS</span>
      </div>
      <img
        src="https://ghchart.rshah.org/YzkSK"
        alt="GitHub contributions chart"
        className="gh-chart"
      />
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
