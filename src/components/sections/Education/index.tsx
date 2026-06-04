import { useFadeIn } from '../../../hooks/useFadeIn'

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
  const headRef = useFadeIn()

  return (
    <section id="education" className="sec">
      <div className="container">
        <div className="sec-head fi" ref={headRef}>
          <div className="sec-num">03</div>
          <h2 className="sec-title"><mark>学歴</mark></h2>
        </div>
        <div className="edu-list">
          {EDU_LIST.map((item, i) => (
            <EduRow key={item.school} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EduRow({ item, delay }: { item: typeof EDU_LIST[0]; delay: number }) {
  const ref = useFadeIn(delay)
  return (
    <div className="edu-row fi" ref={ref}>
      <div className="edu-period">
        {item.period.split('\n').map((line, i) => (
          <span key={i}>{line}{i === 0 && <br />}</span>
        ))}
      </div>
      <div>
        <div className="edu-school">{item.school}</div>
        <div className="edu-dept">{item.dept}</div>
        <span className="edu-badge">{item.badge}</span>
      </div>
    </div>
  )
}
