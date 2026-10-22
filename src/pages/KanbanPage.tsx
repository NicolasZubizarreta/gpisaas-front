import { useTranslation } from 'react-i18next'

export function KanbanPage() {
  const { t } = useTranslation()

  return <h1>{t('kanban.title')}</h1>
}