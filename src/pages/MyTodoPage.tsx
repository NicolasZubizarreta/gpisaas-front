import { useTranslation } from 'react-i18next'

export function MyTodoPage() {
  const { t } = useTranslation()

  return <h1>{t('myTodo.title')}</h1>
}