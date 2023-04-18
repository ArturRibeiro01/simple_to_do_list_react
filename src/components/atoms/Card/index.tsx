import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { dateFormatter } from '../../../utils/formatter'
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
import {
  CaretDown,
  CaretUp,
  Check,
  HourglassHigh,
  PencilLine,
  Trash,
} from 'phosphor-react'

interface CardProps {
  id: number
  createdDate: any
  task: string
  status: 'pending' | 'in_progress' | 'completed'
  deletetask: any
}

export default function Card({
  createdDate,
  task,
  status,
  deletetask,
}: CardProps) {
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
            <>
              <BtnAction type="in_progress">
                <HourglassHigh size={24} />
              </BtnAction>

              <BtnAction type="check">
                <Check size={24} />
              </BtnAction>
            </>
          ) : null}

          <BtnAction type="trash" onClick={deletetask}>
            <Trash size={24} />
          </BtnAction>
        </ActionContainer>
      </CardFooter>
    </ContainerCard>
  )
}
