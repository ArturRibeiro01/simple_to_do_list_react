import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import {
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
    >
      <CardHeader>
        {/* <span>{dateFormatter.format(createdDate)}</span> */}
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
        <PencilLine size={24} />
        <div>
          {/* <div>btn andamento</div> */}
          <Check size={24} />
          <Trash size={24} />
        </div>
      </CardFooter>
    </ContainerCard>
  )
}
