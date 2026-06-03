import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Alpha',
    description: 'ReactとNode.jsで構築したフルスタックWebアプリ。リアルタイムデータ同期に対応。',
    detail:
      'TypeScriptで型安全なAPIを設計し、WebSocketによるリアルタイム更新を実装。CI/CDはGitHub Actionsで自動化。',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    accent: 'green',
    githubUrl: 'https://github.com/yourusername/project-alpha',
    demoUrl: 'https://project-alpha.example.com',
  },
  {
    id: 'project-2',
    title: 'Project Beta',
    description: 'モバイルファーストで設計したデザインシステム。コンポーネントライブラリを含む。',
    detail:
      'Storybookでコンポーネントカタログを整備。アクセシビリティスコアLighthouse 100を達成。',
    tags: ['React', 'Tailwind CSS', 'Storybook'],
    accent: 'yellow',
    githubUrl: 'https://github.com/yourusername/project-beta',
  },
  {
    id: 'project-3',
    title: 'Project Gamma',
    description: 'AI APIを活用したテキスト変換ツール。PythonバックエンドとReactフロントエンド。',
    detail:
      'FastAPIでストリーミングレスポンスを実装。Vercelへのデプロイでゼロコールドスタートを実現。',
    tags: ['Python', 'FastAPI', 'React', 'Vercel'],
    accent: 'purple',
    githubUrl: 'https://github.com/yourusername/project-gamma',
    demoUrl: 'https://project-gamma.example.com',
  },
]
