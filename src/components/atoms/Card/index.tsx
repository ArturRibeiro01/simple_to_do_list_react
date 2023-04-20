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
import { CaretDown, CaretUp, Check, HourglassHigh, Trash } from 'phosphor-react'
import EditTaskDialog from '../../molecules/EditTaskDialog'

interface CardProps {
  id: number
  createdDate: any
  task: string
  status: 'pending' | 'in_progress' | 'completed'
  deletetask: any
  cardToProgress: any
  cardToComplete: () => void
}

export default function Card({
  id,
  createdDate,
  task,
  status,
  deletetask,
  cardToProgress,
  cardToComplete,
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

        {status !== 'completed' ? <EditTaskDialog idCard={id} /> : null}

        <ActionContainer>
          {status !== 'completed' ? (
            <>
              {status !== 'in_progress' && (
                <BtnAction type="in_progress">
                  <HourglassHigh size={24} onClick={cardToProgress} />
                </BtnAction>
              )}
              <BtnAction type="check" onClick={cardToComplete}>
                <Check size={24} />
              </BtnAction>
            </>
          ) : null}
          {status !== 'pending' ? (
            <BtnAction type="trash" onClick={deletetask}>
              <Trash size={24} />
            </BtnAction>
          ) : null}
        </ActionContainer>
      </CardFooter>
    </ContainerCard>
  )
}
