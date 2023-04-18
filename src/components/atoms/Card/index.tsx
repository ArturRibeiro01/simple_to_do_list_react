import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import {
  ActionContainer,
  BtnAction,
  BtnStatus,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ContainerCard,
} from './styles'
import { CaretDown, CaretUp, Check, PencilLine, Trash } from 'phosphor-react'
import { dateFormatter } from '../../../utils/formatter'

interface CardProps {
  createdDate: any
  task: string
  status: 'pending' | 'in_progress' | 'completed'
}

export default function Card({ createdDate, task, status }: CardProps) {
  const [open, setOpen] = useState(false)

  return (
    <ContainerCard
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
      status={status}
    >
      <CardHeader>
        <span>{dateFormatter.format(new Date(createdDate))}</span>

        <Collapsible.Trigger asChild>
          <button>
            {open ? <CaretUp size={20} /> : <CaretDown size={20} />}
          </button>
        </Collapsible.Trigger>
      </CardHeader>

      <CardTitle>{task}</CardTitle>

      <Collapsible.Content>
        <CardContent>{task}</CardContent>
      </Collapsible.Content>

      <CardFooter>
        <BtnStatus status={status}>{status}</BtnStatus>

        {status !== 'completed' ? (
          <BtnAction type="edit">
            <PencilLine size={24} />
          </BtnAction>
        ) : null}

        <ActionContainer>
          {status !== 'completed' ? (
            <BtnAction type="check">
              <Check size={24} />
            </BtnAction>
          ) : null}

          {/* <BtnAction type="check">
            <Check size={24} />
          </BtnAction> */}

          <BtnAction type="trash">
            <Trash size={24} />
          </BtnAction>
        </ActionContainer>
      </CardFooter>
    </ContainerCard>
  )
}
