import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Tasks {
  id: number
  content: string
  status: 'pending' | 'in_progress' | 'completed'
  createdAt?: string
}

interface DeleteTask {
  id: string
}

interface TasksContextType {
  tasks: Tasks[]
  fetchTasks: () => void
  pendindTasks: object[]
  currentTasks: object[]
  completedTasks: object[]
  deleteTask: (data: DeleteTask) => Promise<void>
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

  const currentTasks = tasks
    .filter((task) => task.status === 'in_progress')
    .sort((a: any, b: any) => {
      return a.createdAt?.localeCompare(b.createdAt)
    })

  const completedTasks = tasks
    .filter((task) => task.status === 'completed')
    .sort((a: any, b: any) => {
      return a.createdAt?.localeCompare(b.createdAt)
    })

  const deleteTask = useCallback(async (data: DeleteTask) => {
    const id = data

    await api.delete(`tasks/${id}`)
    fetchTasks()
  }, [])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        fetchTasks,
        pendindTasks,
        currentTasks,
        completedTasks,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
