import { NavLink, Outlet } from 'react-router'

export function Layout() {
  return (
    <>
      <header>
        <nav aria-label="Navigation principale">
          <NavLink to="/taches">Tâches</NavLink>{' '}
          <NavLink to="/kanban">Kanban</NavLink>{' '}
          <NavLink to="/idees">Idées</NavLink>{' '}
          <NavLink to="/ma-todo">Ma to-do</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}