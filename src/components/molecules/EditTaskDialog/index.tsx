import { useState } from 'react'
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
  ButtonSend,
  IconButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { PencilLine, XCircle } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TasksContext } from '../../../contexts/TaskContext'
import Subtitle from '../../atoms/global/Subtitle'

interface EditTaskProps {
  infoTask: any
}

export default function EditTaskDialog(infoTask: EditTaskProps) {
  const [textcaptured, setTextCaptured] = useState('')

  const createNewTask = useContextSelector(TasksContext, (context) => {
    return context.createNewTask
  })
  console.log('infotask', infoTask)

  console.log('textcaptured', textcaptured)

  async function handleNewTask() {
    await createNewTask({
      content: textcaptured,
      status: 'pending',
    })
  }

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

          <TextArea onChange={(event) => setTextCaptured(event.target.value)} />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Dialog.Close asChild className="close-dialog">
              <ButtonSend onClick={handleNewTask}>Criar nova tarefa</ButtonSend>
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
