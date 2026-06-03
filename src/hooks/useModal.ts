import { useState, useCallback } from 'react'
import type { Project } from '../types'

export function useModal() {
  const [selected, setSelected] = useState<Project | null>(null)
  const open = useCallback((project: Project) => setSelected(project), [])
  const close = useCallback(() => setSelected(null), [])
  return { selected, open, close }
}
