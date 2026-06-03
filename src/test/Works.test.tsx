import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import ProjectCard from '../components/sections/Works/ProjectCard'
import ProjectModal from '../components/sections/Works/ProjectModal'
import { projects } from '../data/projects'

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    render(<ProjectCard project={projects[0]} onClick={() => {}} />)
    expect(screen.getByText(projects[0].title)).toBeInTheDocument()
    expect(screen.getByText(projects[0].description)).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<ProjectCard project={projects[0]} onClick={onClick} />)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })
})

describe('ProjectModal', () => {
  it('renders project detail and tags', () => {
    render(<ProjectModal project={projects[0]} onClose={() => {}} />)
    expect(screen.getByText(projects[0].title)).toBeInTheDocument()
    expect(screen.getByText(projects[0].detail)).toBeInTheDocument()
  })

  it('calls onClose when × is clicked', async () => {
    const onClose = vi.fn()
    render(<ProjectModal project={projects[0]} onClose={onClose} />)
    await userEvent.click(screen.getByRole('button', { name: '×' }))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
