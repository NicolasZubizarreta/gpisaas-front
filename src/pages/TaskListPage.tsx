import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../services/api'
import type { Task } from '../types'

export function TaskListPage() {
  const { t } = useTranslation()
  const { data: tasks, loading, error } = useFetch<Task[]>(`${API_URL}/tasks`)

  if (loading) return <p>{t('tasks.loading')}</p>
  if (error) return <p>{t('tasks.error', { message: error.message })}</p>

  return (
    <>
      <h1>{t('tasks.title')}</h1>
      {tasks?.length === 0 ? (
        <p>{t('tasks.empty')}</p>
      ) : (
        <ul>
          {tasks?.map((task) => (
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