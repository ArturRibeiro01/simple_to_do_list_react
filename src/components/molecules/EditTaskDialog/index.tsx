import { DialogPortal } from '@radix-ui/react-dialog'
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogRoot,
  DialogTrigger,
  DialogTriggerButton,
  TextArea,
  // ButtonSend,
  IconButton,
  ButtonSend,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { PencilLine, XCircle } from 'phosphor-react'
import Subtitle from '../../atoms/global/Subtitle'

// interface EditTaskProps {
//   infoTask: any
// }

export default function EditTaskDialog() {
  async function handleEditTask() {}

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <DialogTriggerButton>
          <PencilLine size={24} />
        </DialogTriggerButton>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay />

        <DialogContent>
          <DialogTitle>
            <Subtitle status={'Editar Task'} />
          </DialogTitle>

          <DialogDescription>
            Corrija ou atualize o campo da sua task
          </DialogDescription>
          <TextArea
          // onChange={''}
          ></TextArea>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Dialog.Close asChild className="close-dialog">
              <ButtonSend onClick={handleEditTask}>Enviar Alteração</ButtonSend>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild className="close-dialog">
            <IconButton aria-label="Close">
              <XCircle size={28} />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}
