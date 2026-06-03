import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useModal } from '../hooks/useModal'
import { projects } from '../data/projects'

describe('useModal', () => {
  it('starts with no selection', () => {
    const { result } = renderHook(() => useModal())
    expect(result.current.selected).toBeNull()
  })

  it('opens with a project', () => {
    const { result } = renderHook(() => useModal())
    act(() => result.current.open(projects[0]))
    expect(result.current.selected?.id).toBe(projects[0].id)
  })

  it('closes and clears selection', () => {
    const { result } = renderHook(() => useModal())
    act(() => result.current.open(projects[0]))
    act(() => result.current.close())
    expect(result.current.selected).toBeNull()
  })
})
