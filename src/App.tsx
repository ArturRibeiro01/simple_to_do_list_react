import { TasksProvider } from './contexts/TaskContext'
import HomePage from './pages/Home'
import { globalStyles } from './styles/global'

globalStyles()

function App() {
  return (
    <TasksProvider>
      <HomePage />
    </TasksProvider>
  )
}

export default App
