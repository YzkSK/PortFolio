import type { SkillCategory } from '../types'

export const skillColumns: [SkillCategory[], SkillCategory[]] = [
  [
    {
      label: 'FRONTEND',
      skills: [
        { name: 'HTML / CSS', level: 5 },
        { name: 'JavaScript / TypeScript', level: 4 },
        { name: 'React', level: 4 },
        { name: 'Next.js', level: 3 },
        { name: 'Tailwind CSS', level: 3 },
      ],
    },
    {
      label: 'MOBILE',
      skills: [
        { name: 'Flutter', level: 4 },
        { name: 'Android', level: 3 },
      ],
    },
  ],
  [
    {
      label: 'BACKEND / INFRA',
      skills: [
        { name: 'Node.js', level: 3 },
        { name: 'Firebase', level: 4 },
        { name: 'SQL / PostgreSQL', level: 3 },
        { name: 'Git / GitHub', level: 5 },
      ],
    },
  ],
]
