import { Link } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { statusLabels } from '../labels'
import { API_URL } from '../services/api'
import type { Task } from '../types'

export function TaskListPage() {
  const { data: tasks, loading, error } = useFetch<Task[]>(`${API_URL}/tasks`)

  if (loading) return <p>Chargement des tâches…</p>
  if (error) return <p>Impossible de charger les tâches : {error.message}</p>

  return (
    <>
      <h1>Liste des tâches</h1>
      {tasks?.length === 0 ? (
        <p>Aucune tâche pour le moment.</p>
      ) : (
        <ul>
          {tasks?.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.title}</Link>
              {' — '}
              {statusLabels[task.status]}
              {' — '}
              {task.dueDate ?? 'sans échéance'}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}