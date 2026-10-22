import { Navigate, Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { IdeasPage } from './pages/IdeasPage'
import { KanbanPage } from './pages/KanbanPage'
import { MyTodoPage } from './pages/MyTodoPage'
import { TaskDetailPage } from './pages/TaskDetailPage'
import { TaskListPage } from './pages/TaskListPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/tasks" replace />} />
        <Route path="tasks" element={<TaskListPage />} />
        <Route path="tasks/:id" element={<TaskDetailPage />} />
        <Route path="kanban" element={<KanbanPage />} />
        <Route path="ideas" element={<IdeasPage />} />
        <Route path="my-todo" element={<MyTodoPage />} />
      </Route>
    </Routes>
  )
}

export default App