import { useMemo } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useFetch } from '../hooks/useFetch'
import { useFilters } from '../hooks/useFilters'
import { API_URL } from '../services/api'
import type { Task } from '../types'
import { filterTasks } from '../utils/filterTasks'

export function useFilteredTasks() {
  const filters = useFilters()
  const debouncedSearch = useDebounce(filters.search, 300)
  const { data: tasks, loading, error } = useFetch<Task[]>(`${API_URL}/tasks`)

  const { status, memberId } = filters
  const filteredTasks = useMemo(
    () => filterTasks(tasks ?? [], { status, memberId, search: debouncedSearch }),
    [tasks, status, memberId, debouncedSearch],
  )

  return { tasks, filteredTasks, loading, error }
}