import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SkillDots from '../components/sections/Skills/SkillDots'
import SkillGroup from '../components/sections/Skills/SkillGroup'

describe('SkillDots', () => {
  it('renders correct number of dots', () => {
    const { container } = render(<SkillDots level={3} />)
    const dots = container.querySelectorAll('.dot')
    expect(dots).toHaveLength(5)
  })

  it('marks correct number of dots as on', () => {
    const { container } = render(<SkillDots level={3} />)
    const onDots = container.querySelectorAll('.dot.on')
    expect(onDots).toHaveLength(3)
  })
})

describe('SkillGroup', () => {
  it('renders category label and all skills', () => {
    const cat = {
      label: 'FRONTEND',
      skills: [
        { name: 'TypeScript', level: 4 },
        { name: 'Python', level: 3 },
      ],
    }
    render(<SkillGroup {...cat} />)
    expect(screen.getByText('FRONTEND')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })
})
