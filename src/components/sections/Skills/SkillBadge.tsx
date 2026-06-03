interface Props {
  name: string
}

export default function SkillBadge({ name }: Props) {
  return (
    <span className="text-xs text-white/50 border border-white/10 rounded px-3 py-1.5 hover:border-white/30 hover:text-white/80 transition-colors cursor-default">
      {name}
    </span>
  )
}
