import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutCard from '../components/sections/About/AboutCard'

describe('AboutCard', () => {
  it('renders label and value', () => {
    render(<AboutCard label="所在地" value="東京都" />)
    expect(screen.getByText('所在地')).toBeInTheDocument()
    expect(screen.getByText('東京都')).toBeInTheDocument()
  })
})
