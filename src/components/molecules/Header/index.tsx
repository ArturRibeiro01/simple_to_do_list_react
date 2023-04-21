import { useContextSelector } from 'use-context-selector'
import { TasksContext } from '../../../contexts/TaskContext'
import NewTaskButton from '../../atoms/Button'
import Title from '../../atoms/global/Title'
import { HeaderContainer, TitleAndModal } from './styles'

export default function Header() {
  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  })

  return (
    <HeaderContainer>
      <TitleAndModal>
        <Title quantity={tasks.length} />
        <NewTaskButton />
      </TitleAndModal>
    </HeaderContainer>
  )
}
