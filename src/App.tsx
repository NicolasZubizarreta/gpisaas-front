import { Navigate, Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { PageIdees } from './pages/PageIdees'
import { PageKanban } from './pages/PageKanban'
import { PageMaTodo } from './pages/PageMaTodo'
import { PageTache } from './pages/PageTache'
import { PageTaches } from './pages/PageTaches'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/taches" replace />} />
        <Route path="taches" element={<PageTaches />} />
        <Route path="taches/:id" element={<PageTache />} />
        <Route path="kanban" element={<PageKanban />} />
        <Route path="idees" element={<PageIdees />} />
        <Route path="ma-todo" element={<PageMaTodo />} />
      </Route>
    </Routes>
  )
}

export default App