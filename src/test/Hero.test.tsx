import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../components/sections/Hero'

describe('Hero', () => {
  it('shows the deleted and inserted headline lines', () => {
    render(<Hero />)
    expect(screen.getByText('我慢する').closest('del')).not.toBeNull()
    expect(screen.getByText('作り直す').closest('ins')).not.toBeNull()
  })

  it('renders the photo with alt text', () => {
    render(<Hero />)
    expect(screen.getByAltText('佐藤 康樹の写真')).toBeInTheDocument()
  })
})
