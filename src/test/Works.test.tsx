import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Works from '../components/sections/Works'
import { projects } from '../data/projects'

describe('Works', () => {
  it('links every project title to its url and shows its care text', () => {
    render(<Works />)
    for (const p of projects) {
      expect(screen.getByRole('link', { name: p.title })).toHaveAttribute('href', p.url)
      expect(screen.getByText(p.care)).toBeInTheDocument()
    }
  })
})
