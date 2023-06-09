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
  CollapsibleRoot,
  ContainerCard,
} from './styles'
import { CaretDown, CaretUp, Check, HourglassHigh, Trash } from 'phosphor-react'
import EditTaskDialog from '../../molecules/EditTaskDialog'
import {
  DivNull,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './tooltipStyles'

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
  const [open, setOpen] = useState(true)

  function textStatus(param: string) {
    switch (param) {
      case 'pending':
        return 'Tarefa Pendente'
      case 'in_progress':
        return 'Tarefa em andamento'
      case 'completed':
        return 'Tarefa Finalizada'
    }
  }

  return (
    <ContainerCard status={status}>
      <CollapsibleRoot open={open} onOpenChange={setOpen}>
        <CardHeader>
          <span>
            Criado em : &nbsp; {dateFormatter.format(new Date(createdDate))}
          </span>

          <Collapsible.Trigger asChild>
            <button>
              {open ? <CaretUp size={20} /> : <CaretDown size={20} />}
            </button>
          </Collapsible.Trigger>
        </CardHeader>

        <CardTitle status={status}>{task}</CardTitle>

        <Collapsible.Content>
          <CardContent>{task}</CardContent>
        </Collapsible.Content>
      </CollapsibleRoot>
      <CardFooter>
        <BtnStatus status={status}>{textStatus(status)}</BtnStatus>

        {status !== 'completed' ? (
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <DivNull>
                  <EditTaskDialog idCard={id} />
                </DivNull>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent sideOffset={5} icon="edit">
                  Editar texto da Tarefa
                  <TooltipArrow icon="edit" />
                </TooltipContent>
              </TooltipPortal>
            </TooltipRoot>
          </TooltipProvider>
        ) : null}

        <ActionContainer>
          {status !== 'completed' ? (
            <>
              {status !== 'in_progress' && (
                <TooltipProvider>
                  <TooltipRoot>
                    <TooltipTrigger asChild>
                      <BtnAction type="in_progress">
                        <HourglassHigh size={24} onClick={cardToProgress} />
                      </BtnAction>
                    </TooltipTrigger>
                    <TooltipPortal>
                      <TooltipContent sideOffset={5} icon="in_progress">
                        Iniciar Tarefa
                        <TooltipArrow icon="in_progress" />
                      </TooltipContent>
                    </TooltipPortal>
                  </TooltipRoot>
                </TooltipProvider>
              )}

              <TooltipProvider>
                <TooltipRoot>
                  <TooltipTrigger asChild>
                    <BtnAction type="check" onClick={cardToComplete}>
                      <Check size={24} />
                    </BtnAction>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent sideOffset={5} icon="check">
                      Concluir Tarefa
                      <TooltipArrow icon="check" />
                    </TooltipContent>
                  </TooltipPortal>
                </TooltipRoot>
              </TooltipProvider>
            </>
          ) : null}
          {status !== 'pending' ? (
            <TooltipProvider>
              <TooltipRoot>
                <TooltipTrigger asChild>
                  <BtnAction type="trash" onClick={deletetask}>
                    <Trash size={24} />
                  </BtnAction>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent sideOffset={5} icon="trash">
                    Deletar Tarefa
                    <TooltipArrow icon="trash" />
                  </TooltipContent>
                </TooltipPortal>
              </TooltipRoot>
            </TooltipProvider>
          ) : null}
        </ActionContainer>
      </CardFooter>
    </ContainerCard>
  )
}
