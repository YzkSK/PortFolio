import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../components/layout/Header'

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />)
    expect(screen.getAllByText('佐藤 康樹')[0]).toBeInTheDocument()
  })

  it('renders nav links in desktop nav', () => {
    render(<Header />)
    const nav = document.querySelector('.nav-links')!
    expect(nav.textContent).toContain('Works')
    expect(nav.textContent).toContain('Skills')
    expect(nav.textContent).toContain('Education')
    expect(nav.textContent).toContain('Contact')
  })
})
