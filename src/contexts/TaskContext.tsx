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

interface CreateTaskProps {
  content: string
  status: string
}

interface TasktoInProgressProps {
  id: number
  status: string
  content: string
  createdAt?: string
}

interface TasksContextType {
  tasks: Tasks[]
  fetchTasks: () => void
  pendindTasks: object[]
  currentTasks: object[]
  completedTasks: object[]
  createNewTask: (data: CreateTaskProps) => Promise<void>
  deleteTask: (data: DeleteTask) => Promise<void>
  TasktoInProgress: (data: TasktoInProgressProps) => Promise<void>
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

  // Criar uma nova task
  const createNewTask = useCallback(async (data: CreateTaskProps) => {
    const { content, status } = data

    // const response =
    await api.post('tasks', {
      content,
      status,
      createdAt: new Date(),
    })
    // setTasks((state) => [response.data, ...state])
    fetchTasks()
  }, [])

  // DeleteTask
  const deleteTask = useCallback(
    async (data: DeleteTask) => {
      const id = data

      await api.delete(`tasks/${id}`)
      fetchTasks()
    },
    [fetchTasks],
  )

  // Atualiza o status de um item
  const TasktoInProgress = useCallback(
    async (data: TasktoInProgressProps) => {
      const { id, status, content, createdAt } = data
      const response = await api.put(`tasks/${id}`, {
        status,
        content,
        createdAt,
      })
      console.log(response)
      fetchTasks()
    },
    [fetchTasks],
  )

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
        createNewTask,
        deleteTask,
        TasktoInProgress,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
