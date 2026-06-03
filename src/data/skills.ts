import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'FastAPI' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'Vite' },
      { name: 'Vitest' },
      { name: 'GitHub Actions' },
      { name: 'Vercel' },
    ],
  },
]
