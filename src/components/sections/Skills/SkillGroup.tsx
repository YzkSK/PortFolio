import type { SkillCategory } from '../../../types'
import SkillBadge from './SkillBadge'

export default function SkillGroup({ label, skills }: SkillCategory) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-white/30 text-xs uppercase tracking-widest">{label}</span>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <SkillBadge key={s.name} name={s.name} />
        ))}
      </div>
    </div>
  )
}
