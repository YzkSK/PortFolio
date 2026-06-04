export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}
