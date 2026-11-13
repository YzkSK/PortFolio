import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from '../components/sections/Skills'

describe('Skills', () => {
  it('renders the four group labels', () => {
    render(<Skills />)
    for (const label of ['Webフロント', 'モバイル', 'バックエンド', 'そのほか']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
