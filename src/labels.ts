import type { Status } from './types'

export const statusLabels: Record<Status, string> = {
  TODO: 'À faire',
  IN_PROGRESS: 'En cours',
  IN_REVIEW: 'En revue',
  DONE: 'Terminée',
}