import { Link } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { libellesStatut } from '../libelles'
import { API_URL } from '../services/api'
import type { Tache } from '../types'

export function PageListeTaches() {
  const { data: taches, loading, error } = useFetch<Tache[]>(`${API_URL}/taches`)

  if (loading) return <p>Chargement des tâches…</p>
  if (error) return <p>Impossible de charger les tâches : {error.message}</p>

  return (
    <>
      <h1>Liste des tâches</h1>
      {taches?.length === 0 ? (
        <p>Aucune tâche pour le moment.</p>
      ) : (
        <ul>
          {taches?.map((tache) => (
            <li key={tache.id}>
              <Link to={`/taches/${tache.id}`}>{tache.titre}</Link>
              {' — '}
              {libellesStatut[tache.statut]}
              {' — '}
              {tache.echeance ?? 'sans échéance'}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}