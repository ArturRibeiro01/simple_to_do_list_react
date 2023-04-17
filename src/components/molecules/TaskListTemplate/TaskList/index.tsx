import { ReactNode } from 'react'
import { ContainerTasks } from './styles'
import Subtitle from '../../../atoms/global/Subtitle'

interface TaskListProps {
  subtitleStatus:
    | 'Tarefas Pendentes'
    | 'Tarefas em andamento'
    | 'Tarefas concluídas'
    | 'tarefas Canceladas'
  children: ReactNode
}

export default function TaskList({ subtitleStatus, children }: TaskListProps) {
  return (
    <>
      <Subtitle status={subtitleStatus} />
      <ContainerTasks>{children}</ContainerTasks>
    </>
  )
}
