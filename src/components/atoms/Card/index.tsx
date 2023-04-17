import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ContainerCard,
} from './styles'
import { CaretDown, CaretUp } from 'phosphor-react'

export default function Card() {
  const [open, setOpen] = useState(false)

  return (
    <ContainerCard
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <CardHeader>
        <span>data e hora da task</span>
        <Collapsible.Trigger asChild>
          <button>
            {open ? <CaretUp size={20} /> : <CaretDown size={20} />}
          </button>
        </Collapsible.Trigger>
      </CardHeader>

      <CardTitle>Hoje é um novo dia de um novo tempo que começou </CardTitle>

      <Collapsible.Content>
        <CardContent>
          Hoje é um novo dia de um novo tempo que começou Hoje a festa é sua,
          hoje a festa é nossa é de quem quiser, quem vier
        </CardContent>
      </Collapsible.Content>

      <CardFooter>
        <div>btn Status</div>
        <div>btn edit</div>
        <div>
          <div>btn andamento</div>
          <div>btn finalizar</div>
          <div>btn deletar</div>
        </div>
      </CardFooter>
    </ContainerCard>
  )
}
