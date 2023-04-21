import { TitleContainer, TitleContent, TitleQtd } from './styles'

interface TitleQtdProps {
  quantity: number
}

export default function Title({ quantity }: TitleQtdProps) {
  return (
    <TitleContainer>
      {quantity > 0 ? (
        <TitleContent>
          Tarefas: <TitleQtd>{quantity || 0}</TitleQtd>
        </TitleContent>
      ) : (
        <TitleContent>Crie uma nova tarefa</TitleContent>
      )}
    </TitleContainer>
  )
}
