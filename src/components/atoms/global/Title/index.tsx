import { TitleContainer, TitleContent, TitleQtd } from './styles'

interface TitleQtdProps {
  quantity: number
}

export default function Title({ quantity }: TitleQtdProps) {
  return (
    <TitleContainer>
      <TitleContent>
        Você tem<TitleQtd>{quantity || 0}</TitleQtd> tarefas Criadas{' '}
      </TitleContent>
    </TitleContainer>
  )
}
