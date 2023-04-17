import { useContextSelector } from 'use-context-selector'
import { CreatedTasks } from './styles'
import { TasksContext } from '../../../contexts/TaskContext'

export default function TaskList() {
  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  })

  return (
    <CreatedTasks>
      <div>
        Lorem ipsum dolo vero aliquam quidem tio aperiam odit ducimus quidem,
        quasi porro nihil.
      </div>
      <div>Lorem ipsum dolo ve quidem, quasi porro nihil.</div>
      <div>
        Lorem ipsum dolo ve quidem, quasi porro nihildsdadsdsads adasddad
        adsadasdas dasdsadasdas dasdada.
      </div>
      <div>4</div>
      <div>5</div>
      <div>6</div>

      {/* <CardTask>1</CardTask> */}
    </CreatedTasks>
  )
}
