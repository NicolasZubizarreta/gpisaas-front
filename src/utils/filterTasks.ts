import type { Filters } from '../context/filtersReducer'
import type { Task } from '../types'

export function filterTasks(tasks: Task[], filters: Filters) {
  const search = filters.search.trim().toLowerCase()

  return tasks.filter(
    (task) =>
      (filters.status === 'ALL' || task.status === filters.status) &&
      (filters.memberId === null || task.memberId === filters.memberId) &&
      (search === '' || task.title.toLowerCase().includes(search)),
  )
}