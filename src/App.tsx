import { Navigate, Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { PageFicheTache } from './pages/PageFicheTache'
import { PageIdees } from './pages/PageIdees'
import { PageKanban } from './pages/PageKanban'
import { PageListeTaches } from './pages/PageListeTaches'
import { PageMaTodo } from './pages/PageMaTodo'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/taches" replace />} />
        <Route path="taches" element={<PageListeTaches />} />
        <Route path="taches/:id" element={<PageFicheTache />} />
        <Route path="kanban" element={<PageKanban />} />
        <Route path="idees" element={<PageIdees />} />
        <Route path="ma-todo" element={<PageMaTodo />} />
      </Route>
    </Routes>
  )
}

export default App