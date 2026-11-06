import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Education from '../components/sections/Education'

describe('Education', () => {
  it('renders the title and both schools', () => {
    render(<Education />)
    expect(screen.getByText('学歴')).toBeInTheDocument()
    expect(screen.getByText('武蔵野大学')).toBeInTheDocument()
    expect(screen.getByText('N高等学校')).toBeInTheDocument()
  })
})
