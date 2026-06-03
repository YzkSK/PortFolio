interface Props {
  label: string
  value: string
}

export default function AboutCard({ label, value }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-white/30 text-xs uppercase tracking-widest">{label}</span>
      <span className="text-white/80 text-sm">{value}</span>
    </div>
  )
}
