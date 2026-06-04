import ProjectCard from './ProjectCard'
import { projects } from '../../../data/projects'
import { useFadeIn } from '../../../hooks/useFadeIn'

export default function Works() {
  const headRef = useFadeIn()

  return (
    <section id="works" className="sec">
      <div className="container">
        <div className="sec-head fi" ref={headRef}>
          <div className="sec-num">01</div>
          <h2 className="sec-title"><mark>制作実績</mark></h2>
        </div>
        <div className="works-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
