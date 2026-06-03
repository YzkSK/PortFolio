import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SkillBadge from '../components/sections/Skills/SkillBadge'
import SkillGroup from '../components/sections/Skills/SkillGroup'

describe('SkillBadge', () => {
  it('renders skill name', () => {
    render(<SkillBadge name="TypeScript" />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})

describe('SkillGroup', () => {
  it('renders category label and all skills', () => {
    const cat = {
      label: 'Languages',
      skills: [{ name: 'TypeScript' }, { name: 'Python' }],
    }
    render(<SkillGroup {...cat} />)
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })
})
