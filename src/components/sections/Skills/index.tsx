import FadeInView from '../../../motion/FadeInView'
import SkillGroup from './SkillGroup'
import { skillCategories } from '../../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-40 px-20">
      <FadeInView>
        <h2 className="text-xs text-accent-yellow tracking-[0.3em] uppercase mb-16">
          Skills
        </h2>
      </FadeInView>
      <div className="flex flex-col gap-10 max-w-2xl">
        {skillCategories.map((cat, i) => (
          <FadeInView key={cat.label} delay={i * 0.1}>
            <SkillGroup {...cat} />
          </FadeInView>
        ))}
      </div>
    </section>
  )
}
