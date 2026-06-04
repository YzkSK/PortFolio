import SkillGroup from './SkillGroup'
import { skillColumns } from '../../../data/skills'
import { useFadeIn } from '../../../hooks/useFadeIn'

export default function Skills() {
  const headRef = useFadeIn()
  const col1Ref = useFadeIn()
  const col2Ref = useFadeIn(0.15)

  return (
    <section id="skills" className="sec">
      <div className="container">
        <div className="sec-head fi" ref={headRef}>
          <div className="sec-num">02</div>
          <h2 className="sec-title"><mark>スキル</mark></h2>
        </div>
        <div className="skills-grid">
          <div className="fi" ref={col1Ref}>
            {skillColumns[0].map((cat) => (
              <SkillGroup key={cat.label} {...cat} />
            ))}
          </div>
          <div className="fi" ref={col2Ref}>
            {skillColumns[1].map((cat) => (
              <SkillGroup key={cat.label} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
