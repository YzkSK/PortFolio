import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('useRevealOnScroll', () => {
  it('leaves elements finished when IntersectionObserver is unavailable', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.pending')).toBeNull()
  })
})
