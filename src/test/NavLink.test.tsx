import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import NavLink from '../components/layout/NavLink'

describe('NavLink', () => {
  it('renders label', () => {
    render(<NavLink href="#about" label="About" isActive={false} onClick={() => {}} />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('calls onClick on click', async () => {
    const onClick = vi.fn()
    render(<NavLink href="#about" label="About" isActive={false} onClick={onClick} />)
    await userEvent.click(screen.getByText('About'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('applies active style when isActive', () => {
    render(<NavLink href="#about" label="About" isActive={true} onClick={() => {}} />)
    expect(screen.getByText('About')).toHaveClass('text-accent-yellow')
  })
})
