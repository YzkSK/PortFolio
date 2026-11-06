import { skillGroups } from '../../../data/skills'

export default function Skills() {
  return (
    <>
      <h2>直せる範囲</h2>
      <div className="can">
        {skillGroups.map(({ label, skills }) => (
          <div key={label}>
            <h3>{label}</h3>
            <p>{skills.join('、')}</p>
          </div>
        ))}
      </div>
    </>
  )
}
