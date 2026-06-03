export type Accent = 'yellow' | 'green' | 'purple'

export interface Project {
  id: string
  title: string
  description: string
  detail: string
  tags: string[]
  accent: Accent
  githubUrl?: string
  demoUrl?: string
}

export interface Skill {
  name: string
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}
