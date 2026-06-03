interface Props {
  src: string
  alt: string
}

export default function HeroAvatar({ src, alt }: Props) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-56 h-56 rounded-full border border-white/10 animate-pulse" />
      <img
        src={src}
        alt={alt}
        className="w-48 h-48 rounded-full object-cover bg-zinc-800"
      />
    </div>
  )
}
