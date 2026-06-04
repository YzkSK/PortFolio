interface Props {
  level: number
  max?: number
}

export default function SkillDots({ level, max = 5 }: Props) {
  return (
    <div className="dots">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={`dot${i < level ? ' on' : ''}`} />
      ))}
    </div>
  )
}
