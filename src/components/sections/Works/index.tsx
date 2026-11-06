import WorkItem from './WorkItem'
import { projects } from '../../../data/projects'

export default function Works() {
  return (
    <>
      <h2>直したもの</h2>
      {projects.map((project) => (
        <WorkItem key={project.id} project={project} />
      ))}
    </>
  )
}
