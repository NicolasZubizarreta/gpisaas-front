import { useTranslation } from 'react-i18next'

export function IdeasPage() {
  const { t } = useTranslation()

  return <h1>{t('ideas.title')}</h1>
}