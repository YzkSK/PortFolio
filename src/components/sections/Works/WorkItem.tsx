import { DiffLine } from '../../Diff'
import type { Project } from '../../../types'

export default function WorkItem({ project }: { project: Project }) {
  return (
    <div className="work row">
      <div className="head">
        <h3>
          <a href={project.url} target="_blank" rel="noopener">{project.title}</a>
        </h3>
        <div className="meta">{project.tech.join('、')}{'　'}{project.year}</div>
      </div>
      <div className="diff">
        <DiffLine kind="del" text={project.before} />
        <DiffLine kind="ins" text={project.after} />
      </div>
      <p className="care"><b>ほかの人へ</b>{project.care}</p>
      <div className="comment">{project.note}</div>
    </div>
  )
}
