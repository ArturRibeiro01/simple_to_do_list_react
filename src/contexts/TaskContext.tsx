import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Tasks {
  id: number
  content: string
  status: 'pending' | 'in_progress' | 'completed'
  createdAt?: string
}

interface TasksContextType {
  tasks: Tasks[]
  fetchTasks: () => void
  pendindTasks: object[]
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Tasks[]>([])

  const fetchTasks = useCallback(async () => {
    const response = await api.get('/tasks', {
      params: {},
    })
    setTasks(response.data)
  }, [])

  const pendindTasks = tasks
    .filter((task) => task.status === 'pending')
    .sort((a: any, b: any) => {
      return a.createdAt?.localeCompare(b.createdAt)
    })

  // const inprogressTaks = tasks.filter((task) => task.status === 'in_progress')
  // const completedTasks = tasks.filter((task) => task.status === 'completed')

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        fetchTasks,
        pendindTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
