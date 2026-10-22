import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

export function TaskDetailPage() {
  const { t } = useTranslation()
  const { id } = useParams()

  return <h1>{t('tasks.detailTitle', { id })}</h1>
}