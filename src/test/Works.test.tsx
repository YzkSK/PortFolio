import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProjectCard from '../components/sections/Works/ProjectCard'
import { projects } from '../data/projects'

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={projects[0]} />)
    expect(screen.getByText(projects[0].title)).toBeInTheDocument()
  })

  it('renders project category', () => {
    render(<ProjectCard project={projects[0]} />)
    expect(screen.getByText(projects[0].category)).toBeInTheDocument()
  })

  it('renders all tags', () => {
    render(<ProjectCard project={projects[0]} />)
    projects[0].tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  })
})
