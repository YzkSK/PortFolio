import { motion } from 'framer-motion'
import { scaleIn } from '../../../motion/variants'
import type { Project } from '../../../types'

interface Props {
  project: Project
  onClose: () => void
}

const ACCENT_TEXT: Record<string, string> = {
  yellow: 'text-accent-yellow',
  green: 'text-accent-green',
  purple: 'text-accent-purple',
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-8 pointer-events-none"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="pointer-events-auto bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-lg w-full">
        <div className="flex justify-between items-start mb-6">
          <h3 className={`text-xl font-bold ${ACCENT_TEXT[project.accent]}`}>
            {project.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-white/40 hover:text-white text-2xl leading-none transition-colors"
          >
            ×
          </button>
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-6">{project.detail}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-white/10 rounded px-2 py-1 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
