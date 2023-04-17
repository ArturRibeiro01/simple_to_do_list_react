import { ContainerTasks } from './styles'
import Subtitle from '../../../atoms/global/Subtitle'
import Card from '../../../atoms/Card'

interface TaskListProps {
  subtitleStatus:
    | 'Tarefas Pendentes'
    | 'Tarefas em andamento'
    | 'Tarefas concluídas'
}

export default function TaskList({ subtitleStatus }: TaskListProps) {
  return (
    <>
      <Subtitle status={subtitleStatus} />
      <ContainerTasks>
        <Card />
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
      </ContainerTasks>
    </>
  )
}
