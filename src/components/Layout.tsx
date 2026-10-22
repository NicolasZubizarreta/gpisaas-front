import { useTranslation } from 'react-i18next'
import { NavLink, Outlet } from 'react-router'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Layout() {
  const { t } = useTranslation()

  return (
    <>
      <header>
        <nav aria-label={t('nav.label')}>
          <NavLink to="/tasks">{t('nav.tasks')}</NavLink>{' '}
          <NavLink to="/kanban">{t('nav.kanban')}</NavLink>{' '}
          <NavLink to="/ideas">{t('nav.ideas')}</NavLink>{' '}
          <NavLink to="/my-todo">{t('nav.myTodo')}</NavLink>
        </nav>
        <LanguageSwitcher />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}