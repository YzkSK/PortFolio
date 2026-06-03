import type { Project } from '../../../types'

interface Props {
  project: Project
  onClick: () => void
}

const ACCENT_BG: Record<string, string> = {
  yellow: 'bg-accent-yellow/20 group-hover:bg-accent-yellow/30',
  green: 'bg-accent-green/20 group-hover:bg-accent-green/30',
  purple: 'bg-accent-purple/20 group-hover:bg-accent-purple/30',
}

const ACCENT_TITLE: Record<string, string> = {
  yellow: 'group-hover:text-accent-yellow',
  green: 'group-hover:text-accent-green',
  purple: 'group-hover:text-accent-purple',
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group w-full bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div
        className={`h-20 transition-colors duration-300 ${ACCENT_BG[project.accent]}`}
      />
      <div className="p-6">
        <h3
          className={`text-white font-medium mb-2 transition-colors ${ACCENT_TITLE[project.accent]}`}
        >
          {project.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-white/25 border border-white/5 rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
