const EDU_LIST = [
  {
    period: '2024年4月〜\n2028年3月（予定）',
    school: '武蔵野大学',
    dept: 'データサイエンス学部 データサイエンス学科',
    badge: '在学中',
  },
  {
    period: '2021年4月〜\n2024年3月',
    school: 'N高等学校',
    dept: '普通科',
    badge: '卒業',
  },
]

export default function Education() {
  return (
    <>
      <h2>学歴</h2>
      {EDU_LIST.map((item) => (
        <div className="edu" key={item.school}>
          <div className="edu-period">{item.period}</div>
          <div>
            <div className="edu-school">{item.school}</div>
            <span className="edu-dept">{item.dept}</span>
            <span className="edu-badge">{item.badge}</span>
          </div>
        </div>
      ))}
    </>
  )
}
