import { useContextSelector } from 'use-context-selector'
import { TemplateContainer } from './styles'
import { TasksContext } from '../../../contexts/TaskContext'
import TaskList from './TaskList'
import Card from '../../atoms/Card'

export default function TaskListTemplate() {
  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  })

  const pendindTasks = tasks.filter((task) => task.status === 'pending')

  const inprogressTaks = tasks.filter((task) => task.status === 'in_progress')

  const completedTasks = tasks.filter((task) => task.status === 'completed')

  console.log('Pendentes', pendindTasks)
  console.log('Em andamento', inprogressTaks)
  console.log('Completo', completedTasks)

  return (
    <TemplateContainer>
      <TaskList subtitleStatus={'Tarefas Pendentes'}>
        {pendindTasks.map((card) => (
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
