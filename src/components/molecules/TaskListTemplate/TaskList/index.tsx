import { ReactNode } from 'react'
import {
  ContainerTasks,
  Separator,
  SummaryContainerTasks,
  TasksQuantity,
} from './styles'
import Subtitle from '../../../atoms/global/Subtitle'

interface TaskListProps {
  subtitleStatus:
    | 'Tarefas Pendentes'
    | 'Tarefas em andamento'
    | 'Tarefas concluídas'
    | 'Tarefas Canceladas'
    | 'Tarefas Filtradas'
  quantitytasks: number
  children: ReactNode
  category: 'pending' | 'in_progress' | 'completed'
}

export default function TaskList({
  subtitleStatus,
  children,
  quantitytasks,
  category,
}: TaskListProps) {
  return (
    <>
      <SummaryContainerTasks>
        <Subtitle status={subtitleStatus} />
        <TasksQuantity category={category}>{quantitytasks || 0}</TasksQuantity>
      </SummaryContainerTasks>

      <ContainerTasks>{children}</ContainerTasks>

      <Separator />
    </>
  )
}
