import { NavLink, Outlet } from 'react-router'

export function Layout() {
  return (
    <>
      <header>
        <nav aria-label="Navigation principale">
          <NavLink to="/tasks">Tâches</NavLink>{' '}
          <NavLink to="/kanban">Kanban</NavLink>{' '}
          <NavLink to="/ideas">Idées</NavLink>{' '}
          <NavLink to="/my-todo">Ma to-do</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}