interface Props {
  src: string
  alt: string
}

export default function HeroAvatar({ src, alt }: Props) {
  return (
    <div className="profile-ring">
      <img src={src} alt={alt} />
    </div>
  )
}
