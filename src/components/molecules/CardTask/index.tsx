import { ReactNode } from 'react'
import { CardTaskContainer } from './styles'
import Subtitle from '../../atoms/global/Subtitle'

interface CardTaskProps {
  children: ReactNode
}

export default function CardTask({ children }: CardTaskProps) {
  return (
    <CardTaskContainer>
      <Subtitle status={'Tarefas Criadas'} />
      {children}
    </CardTaskContainer>
  )
}
