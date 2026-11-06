import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DiffLine } from '../components/Diff'

describe('DiffLine', () => {
  it('renders mark segments as <mark>', () => {
    render(<DiffLine kind="ins" text={['a', { mark: 'b' }]} />)
    expect(screen.getByText('b').tagName).toBe('MARK')
  })
})
