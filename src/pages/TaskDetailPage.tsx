import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../services/api'
import type { Task } from '../types'

export function TaskDetailPage() {
  const { t } = useTranslation()
  const { id } = useParams()
  const { data: task, loading, error } = useFetch<Task>(`${API_URL}/tasks/${id}`)

  if (loading) return <p>{t('tasks.loading')}</p>
  if (error) {
    const isNotFound = error.message === 'HTTP 404'
    return <p>{isNotFound ? t('tasks.notFound') : t('tasks.error', { message: error.message })}</p>
  }

  return (
    <>
      <Link to="/tasks">{t('tasks.back')}</Link>
      <h1>{task?.title}</h1>
      <p>{task && t(`status.${task.status}`)}</p>
      <p>{task?.dueDate ?? t('tasks.noDueDate')}</p>
      <p>{task?.description}</p>
    </>
  )
}