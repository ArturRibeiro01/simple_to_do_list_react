import { useContextSelector } from 'use-context-selector'
import { TemplateContainer } from './styles'
import { TasksContext } from '../../../contexts/TaskContext'
import TaskList from './TaskList'
import Card from '../../atoms/Card'

export default function TaskListTemplate() {
  const pendingTasks = useContextSelector(TasksContext, (context) => {
    return context.pendindTasks
  })

  return (
    <TemplateContainer>
      <TaskList
        subtitleStatus={'Tarefas Pendentes'}
        quantitytasks={pendingTasks.length}
      >
        {pendingTasks.map((card: any) => (
          <Card
            key={card.id}
            createdDate={card.createdAt}
            task={card.content}
            status={card.status}
          />
        ))}
      </TaskList>
    </TemplateContainer>
  )
}
