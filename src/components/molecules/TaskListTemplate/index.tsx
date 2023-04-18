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

  const updatetaskToProgress = useContextSelector(TasksContext, (context) => {
    return context.TasktoInProgress
  })

  async function handleDeleteTask(data: any) {
    const id = data
    await deleteTask(id)
  }

  async function handleTaskToProgress(data: any) {
    const selectedItem = data

    console.log('handleTasktoProgress', selectedItem)

    await updatetaskToProgress({
      id: selectedItem.id,
      status: selectedItem.status !== 'in_progress' ? 'in_progress' : 'pending',
      content: selectedItem.content,
      createdAt: selectedItem.createdAt,
    })
  }

  async function handleTaskToComplete(data: any) {
    const selectedItem = data
    await updatetaskToProgress({
      id: selectedItem.id,
      status: 'completed',
      content: selectedItem.content,
      createdAt: selectedItem.createdAt,
    })
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
            deletetask={() => handleDeleteTask(card)}
            cardToProgress={() => handleTaskToProgress(card)}
            cardToComplete={() => handleTaskToComplete(card)}
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
            cardToProgress={() => handleTaskToProgress(card)}
            cardToComplete={() => handleTaskToComplete(card)}
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
            cardToProgress={() => handleTaskToProgress(card.id)}
            cardToComplete={() => handleTaskToComplete(card)}
          />
        ))}
      </TaskList>
    </TemplateContainer>
  )
}
