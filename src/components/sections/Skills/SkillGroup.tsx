import SkillDots from './SkillDots'
import type { SkillCategory } from '../../../types'

export default function SkillGroup({ label, skills }: SkillCategory) {
  return (
    <div className="skill-group">
      <div className="skill-group-label">{label}</div>
      <div className="skill-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-row">
            <span className="skill-name">{skill.name}</span>
            <SkillDots level={skill.level} />
          </div>
        ))}
      </div>
    </div>
  )
}
