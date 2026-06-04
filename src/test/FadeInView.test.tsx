import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FadeInView from '../motion/FadeInView'

describe('FadeInView', () => {
  it('renders children', () => {
    render(<FadeInView><p>hello</p></FadeInView>)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('accepts optional className', () => {
    const { container } = render(
      <FadeInView className="custom-class"><span>x</span></FadeInView>
    )
    expect(container.firstChild).toHaveClass('fi')
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
