import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeroText from '../components/sections/Hero/HeroText'
import HeroAvatar from '../components/sections/Hero/HeroAvatar'

describe('HeroText', () => {
  it('renders the name', () => {
    render(<HeroText />)
    expect(screen.getByText('佐藤 康樹')).toBeInTheDocument()
  })

  it('renders the badge', () => {
    render(<HeroText />)
    expect(screen.getByText('FRONTEND / MOBILE ENGINEER')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<HeroText />)
    expect(screen.getByText('アイデアを、動くものに変える。')).toBeInTheDocument()
  })
})

describe('HeroAvatar', () => {
  it('renders an img with alt text', () => {
    render(<HeroAvatar src="/avatar.jpg" alt="佐藤 康樹" />)
    expect(screen.getByAltText('佐藤 康樹')).toBeInTheDocument()
  })
})
