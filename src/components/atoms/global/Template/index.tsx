import React, { ReactNode } from 'react'
import { TemplateContainer } from './styles'

interface ChildrenProps {
  children?: ReactNode
}

export default function Template({ children }: ChildrenProps) {
  return <TemplateContainer>{children}</TemplateContainer>
}
