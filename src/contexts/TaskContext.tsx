import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Tasks {
  id: number
  content: string
  status: 'pending' | 'in_progress' | 'completed'
  createdAt?: string
}

interface CreateTaskProps {
  content: string
  status: string
}

interface UpdateTextTaskProps {
  id: number
  status: string
  content: string
  createdAt?: string
}

interface DeleteTask {
  id: string
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
  updateText: (data: UpdateTextTaskProps) => Promise<void>
  deleteTask: (data: DeleteTask) => Promise<void>
  TasktoInProgress: (data: TasktoInProgressProps) => Promise<void>
  filterTask: any
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

  const filterTask = useCallback(
    async (param: any) => {
      tasks.filter((task) => task.content === param)
    },
    [tasks],
  )

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

  const createNewTask = useCallback(
    async (data: CreateTaskProps) => {
      const { content, status } = data
      await api.post('tasks', {
        content,
        status,
        createdAt: new Date(),
      })
      fetchTasks()
    },
    [fetchTasks],
  )

  const updateText = useCallback(
    async (data: UpdateTextTaskProps) => {
      const { id, content, status, createdAt } = data
      await api.put(`tasks/${id}`, {
        content,
        status,
        createdAt,
      })
      fetchTasks()
    },
    [fetchTasks],
  )

  const deleteTask = useCallback(
    async (data: DeleteTask) => {
      const id = data
      await api.delete(`tasks/${id}`)
      fetchTasks()
    },
    [fetchTasks],
  )

  const TasktoInProgress = useCallback(
    async (data: TasktoInProgressProps) => {
      const { id, status, content, createdAt } = data
      await api.put(`tasks/${id}`, {
        status,
        content,
        createdAt,
      })
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
        updateText,
        filterTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
