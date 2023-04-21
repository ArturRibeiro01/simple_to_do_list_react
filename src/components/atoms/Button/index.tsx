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
import { PlusCircle, XCircle } from 'phosphor-react'
import Subtitle from '../global/Subtitle'
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TasksContext } from '../../../contexts/TaskContext'

export default function NewTaskButton() {
  const [textcaptured, setTextCaptured] = useState('')

  const createNewTask = useContextSelector(TasksContext, (context) => {
    return context.createNewTask
  })

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
          <PlusCircle size={18} />
          Criar nova tarefa
        </DialogTriggerButton>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay />

        <DialogContent>
          <DialogTitle>
            <Subtitle status={'Criar Nova Task'} />
          </DialogTitle>

          <DialogDescription>
            Descreva sua tarefa no campo abaixo e clique no botão Criar task
            para criar a tarefa
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
