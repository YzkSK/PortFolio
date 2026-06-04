import { describe, it, expect } from 'vitest'
import { projects } from '../data/projects'
import { skillColumns } from '../data/skills'

describe('projects data', () => {
  it('has at least 1 project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })
  it('each project has required fields', () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.category).toBeTruthy()
      expect(Array.isArray(p.tags)).toBe(true)
    }
  })
})

describe('skills data', () => {
  it('has two columns', () => {
    expect(skillColumns).toHaveLength(2)
  })
  it('each column has at least 1 category', () => {
    for (const col of skillColumns) {
      expect(col.length).toBeGreaterThan(0)
    }
  })
  it('each category has a label and skills', () => {
    for (const col of skillColumns) {
      for (const cat of col) {
        expect(cat.label).toBeTruthy()
        expect(cat.skills.length).toBeGreaterThan(0)
      }
    }
  })
})
