interface Props {
  href: string
  label: string
  isActive: boolean
  onClick: () => void
}

export default function NavLink({ href, label, isActive, onClick }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-sm transition-colors ${
        isActive ? 'text-accent-yellow' : 'text-white/60 hover:text-white'
      }`}
    >
      {label}
    </a>
  )
}
