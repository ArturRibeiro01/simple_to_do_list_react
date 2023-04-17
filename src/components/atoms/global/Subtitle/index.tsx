import { ReactNode } from 'react'
import { SubtitleText } from './styles'

interface SubtitleProps {
  status: ReactNode
}

export default function Subtitle({ status }: SubtitleProps) {
  return <SubtitleText>{status}</SubtitleText>
}
