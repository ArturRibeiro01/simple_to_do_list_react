import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Tasks {
  id: number
  content: string
  status: 'pending' | 'in_progress' | 'completed'
  createdAt: string
}

interface TasksContextType {
  tasks: Tasks[]
  fetchTasks: () => void
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Tasks[]>([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = useCallback(async () => {
    const response = await api.get('/tasks', {
      params: {},
    })
    setTasks(response.data)
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, fetchTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
