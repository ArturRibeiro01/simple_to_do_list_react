import NewTaskButton from '../../atoms/Button'
import Title from '../../atoms/global/Title'
import { HeaderContainer, TitleAndModal } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <TitleAndModal>
        <Title quantity={12} />
        <NewTaskButton />
      </TitleAndModal>

      <div>2</div>
    </HeaderContainer>
  )
}
