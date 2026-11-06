/** diff の1行分の文。文字列はそのまま、`{ mark }` は強調（<mark>）になる */
export type DiffText = Array<string | { mark: string }>

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}
