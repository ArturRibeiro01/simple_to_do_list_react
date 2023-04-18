import { ReactNode } from 'react'
import { ContainerTasks, SummaryContainerTasks, TasksQuantity } from './styles'
import Subtitle from '../../../atoms/global/Subtitle'

interface TaskListProps {
  subtitleStatus:
    | 'Tarefas Pendentes'
    | 'Tarefas em andamento'
    | 'Tarefas concluídas'
    | 'tarefas Canceladas'
  quantitytasks: number
  children: ReactNode
}

export default function TaskList({
  subtitleStatus,
  children,
  quantitytasks,
}: TaskListProps) {
  return (
    <>
      <SummaryContainerTasks>
        <Subtitle status={subtitleStatus} />
        <TasksQuantity>{quantitytasks || 0}</TasksQuantity>
      </SummaryContainerTasks>

      <ContainerTasks>{children}</ContainerTasks>
    </>
  )
}
