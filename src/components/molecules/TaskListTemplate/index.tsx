import { useContextSelector } from 'use-context-selector'
import { TemplateContainer } from './styles'
import { TasksContext } from '../../../contexts/TaskContext'
import TaskList from './TaskList'
import Card from '../../atoms/Card'

export default function TaskListTemplate() {
  const pendingTasks = useContextSelector(TasksContext, (context) => {
    return context.pendindTasks
  })

  const currentTasks = useContextSelector(TasksContext, (context) => {
    return context.currentTasks
  })

  const completedTasks = useContextSelector(TasksContext, (context) => {
    return context.completedTasks
  })

  const deleteTask = useContextSelector(TasksContext, (context) => {
    return context.deleteTask
  })

  async function handleDeleteTask(data: any) {
    const id = data
    await deleteTask(id)
  }

  return (
    <TemplateContainer>
      <TaskList
        subtitleStatus={'Tarefas Pendentes'}
        quantitytasks={pendingTasks.length}
      >
        {pendingTasks.map((card: any) => (
          <Card
            key={card.id}
            id={card.id}
            createdDate={card.createdAt}
            task={card.content}
            status={card.status}
            deletetask={() => handleDeleteTask(card.id)}
          />
        ))}
      </TaskList>

      <TaskList
        subtitleStatus={'Tarefas em andamento'}
        quantitytasks={currentTasks.length}
      >
        {currentTasks.map((card: any) => (
          <Card
            id={card.id}
            key={card.id}
            createdDate={card.createdAt}
            task={card.content}
            deletetask={() => handleDeleteTask(card.id)}
            status={card.status}
          />
        ))}
      </TaskList>

      <TaskList
        subtitleStatus={'Tarefas concluídas'}
        quantitytasks={completedTasks.length}
      >
        {completedTasks.map((card: any) => (
          <Card
            id={card.id}
            key={card.id}
            createdDate={card.createdAt}
            task={card.content}
            status={card.status}
            deletetask={() => handleDeleteTask(card.id)}
          />
        ))}
      </TaskList>
    </TemplateContainer>
  )
}
