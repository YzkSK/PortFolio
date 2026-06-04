export interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  thumbBg: string
  num: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'YzkApps',
    category: 'WEB APPLICATION',
    tags: ['TypeScript', 'React', 'Firebase', 'Gemini API'],
    thumbBg: 'linear-gradient(140deg,#e8f5ee,#a8d5b5)',
    num: '01',
    url: 'https://github.com/YzkSK/YzkApps',
  },
  {
    id: 'project-2',
    title: 'classroom remaked',
    category: 'MOBILE APP',
    tags: ['Flutter', 'Dart', 'Firebase'],
    thumbBg: 'linear-gradient(140deg,#ede7f6,#ce93d8)',
    num: '02',
    url: 'https://github.com/YzkSK/classroom_remaked',
  },
  {
    id: 'project-3',
    title: 'Discord Bot',
    category: 'BOT / TOOL',
    tags: ['TypeScript', 'Discord.js', 'Docker'],
    thumbBg: 'linear-gradient(140deg,#e8eaf6,#9fa8da)',
    num: '03',
    url: 'https://github.com/YzkSK/discord-bot',
  },
]
