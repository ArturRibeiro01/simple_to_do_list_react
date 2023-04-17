import { TitleContainer, TitleContent, TitleQtd } from './styles'

interface TitleQtdProps {
  quantity: number
}

export default function Title({ quantity }: TitleQtdProps) {
  return (
    <TitleContainer>
      {quantity > 0 ? (
        <TitleContent>
          Você tem<TitleQtd>{quantity || 0}</TitleQtd> tarefas Criadas{' '}
        </TitleContent>
      ) : (
        <TitleContent>
          Você ainda<TitleQtd> não possui</TitleQtd> nenhuma tarefa
        </TitleContent>
      )}
    </TitleContainer>
  )
}
