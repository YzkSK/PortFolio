import { useFadeIn } from '../../../hooks/useFadeIn'
import type { Project } from '../../../data/projects'

interface Props {
  project: Project
  delay?: number
}

export default function ProjectCard({ project, delay = 0 }: Props) {
  const ref = useFadeIn(delay)

  const inner = (
    <>
      <div className="work-thumb" style={{ background: project.thumbBg }}>
        <span className="work-thumb-num">{project.num}</span>
      </div>
      <div className="work-body">
        <div className="work-cat">{project.category}</div>
        <div className="work-title">{project.title}</div>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </>
  )

  return project.url ? (
    <a
      className="work-card fi"
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  ) : (
    <div className="work-card fi" ref={ref}>
      {inner}
    </div>
  )
}
