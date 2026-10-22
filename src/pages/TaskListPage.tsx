import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { FilterBar } from '../components/FilterBar'
import { useFetch } from '../hooks/useFetch'
import { useFilters } from '../hooks/useFilters'
import { API_URL } from '../services/api'
import type { Task } from '../types'
import { filterTasks } from '../utils/filterTasks'

export function TaskListPage() {
  const { t } = useTranslation()
  const filters = useFilters()
  const { data: tasks, loading, error } = useFetch<Task[]>(`${API_URL}/tasks`)

  if (loading) return <p>{t('tasks.loading')}</p>
  if (error) return <p>{t('tasks.error', { message: error.message })}</p>

  const filteredTasks = filterTasks(tasks ?? [], filters)

  return (
    <>
      <h1>{t('tasks.title')}</h1>
      <FilterBar />
      {filteredTasks.length === 0 ? (
        <p>{tasks?.length === 0 ? t('tasks.empty') : t('tasks.noMatch')}</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.title}</Link>
              {' — '}
              {t(`status.${task.status}`)}
              {' — '}
              {task.dueDate ?? t('tasks.noDueDate')}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}