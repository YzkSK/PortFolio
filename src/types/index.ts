/** diff の1行分の文。文字列はそのまま、`{ mark }` は強調（<mark>）になる */
export type DiffText = Array<string | { mark: string }>

export interface Project {
  id: string
  title: string
  url: string
  tech: string[]
  year: number
  before: DiffText
  after: DiffText
  care: string
  note: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}
