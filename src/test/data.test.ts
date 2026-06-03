import { describe, it, expect } from 'vitest'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'

describe('projects data', () => {
  it('has at least 1 project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })
  it('each project has required fields', () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.description).toBeTruthy()
      expect(['yellow', 'green', 'purple']).toContain(p.accent)
      expect(Array.isArray(p.tags)).toBe(true)
    }
  })
})

describe('skills data', () => {
  it('has at least 1 category', () => {
    expect(skillCategories.length).toBeGreaterThan(0)
  })
  it('each category has a label and skills', () => {
    for (const cat of skillCategories) {
      expect(cat.label).toBeTruthy()
      expect(cat.skills.length).toBeGreaterThan(0)
    }
  })
})
