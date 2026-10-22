import { useParams } from 'react-router'

export function TaskDetailPage() {
  const { id } = useParams()
  return <h1>Fiche de la tâche {id}</h1>
}