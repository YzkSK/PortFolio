import { describe, it, expect } from 'vitest'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

describe('projects data', () => {
  it('each project has a before and after diff', () => {
    expect(projects.length).toBeGreaterThan(0)
    for (const p of projects) {
      expect(p.before.length).toBeGreaterThan(0)
      expect(p.after.length).toBeGreaterThan(0)
    }
  })
})

describe('skills data', () => {
  it('has groups that each list skills', () => {
    expect(skillGroups.length).toBeGreaterThan(0)
    for (const g of skillGroups) {
      expect(g.skills.length).toBeGreaterThan(0)
    }
  })
})
