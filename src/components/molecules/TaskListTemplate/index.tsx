import { useContextSelector } from 'use-context-selector'
import { TemplateContainer } from './styles'
import { TasksContext } from '../../../contexts/TaskContext'
import TaskList from './TaskList'

export default function TaskListTemplate() {
  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  })

  const pendindTasks = tasks.filter((task) => task.status === 'pending')
  const inprogressTaks = tasks.filter((task) => task.status === 'in_progress')
  const completedTasks = tasks.filter((task) => task.status === 'completed')

  console.log('pendentes', pendindTasks)
  console.log('em andamento', inprogressTaks)
  console.log('Completadas', completedTasks)

  return (
    <TemplateContainer>
      <TaskList subtitleStatus={'Tarefas Pendentes'} />
      {/* <CardTask>1</CardTask> */}
    </TemplateContainer>
  )
}
