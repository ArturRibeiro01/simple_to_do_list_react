import { SubtitleText } from './styles'

interface SubtitleProps {
  status: 'iniciado' | 'Completo'
}

export default function Subtitle({ status }: SubtitleProps) {
  return <SubtitleText>{status}</SubtitleText>
}
