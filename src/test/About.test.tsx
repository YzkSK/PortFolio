import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Education from '../components/sections/Education'

describe('Education', () => {
  it('renders the section title', () => {
    render(<Education />)
    expect(screen.getByText('学歴')).toBeInTheDocument()
  })

  it('renders university entry', () => {
    render(<Education />)
    expect(screen.getByText('○○大学')).toBeInTheDocument()
  })

  it('renders high school entry', () => {
    render(<Education />)
    expect(screen.getByText('○○高等学校')).toBeInTheDocument()
  })
})
