import { AnimatePresence } from 'framer-motion'
import FadeInView from '../../../motion/FadeInView'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import ModalBackdrop from './ModalBackdrop'
import { useModal } from '../../../hooks/useModal'
import { projects } from '../../../data/projects'

export default function Works() {
  const { selected, open, close } = useModal()

  return (
    <section id="works" className="py-40 px-20 pb-60">
      <FadeInView>
        <h2 className="text-xs text-accent-yellow tracking-[0.3em] uppercase mb-16">
          Works
        </h2>
      </FadeInView>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <FadeInView key={project.id} delay={i * 0.1}>
            <ProjectCard project={project} onClick={() => open(project)} />
          </FadeInView>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <>
            <ModalBackdrop onClick={close} />
            <ProjectModal project={selected} onClose={close} />
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
