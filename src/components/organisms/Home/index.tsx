import Template from '../../atoms/global/Template'
import Header from '../../molecules/Header'
import { TasksContext } from '../../../contexts/TaskContext'
import { useContextSelector } from 'use-context-selector'

export default function HomeOrganism() {
  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  })

  return (
    <Template>
      <Header />
      <pre>{JSON.stringify(tasks)}</pre>
    </Template>
  )
}
