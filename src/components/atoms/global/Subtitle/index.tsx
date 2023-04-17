import { SubtitleText } from './styles'

interface SubtitleProps {
  status: 'Tarefas Criadas' | 'Tarefas Completadas'
}

export default function Subtitle({ status }: SubtitleProps) {
  return <SubtitleText>{status}</SubtitleText>
}
