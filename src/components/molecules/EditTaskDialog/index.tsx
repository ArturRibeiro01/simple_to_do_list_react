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
  IconButton,
  ButtonSend,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { PencilLine, XCircle } from 'phosphor-react'
import Subtitle from '../../atoms/global/Subtitle'
import { useContextSelector } from 'use-context-selector'
import { TasksContext } from '../../../contexts/TaskContext'
import { useState } from 'react'

interface EditTaskDialogTask {
  idCard: number
}

export default function EditTaskDialog({ idCard }: EditTaskDialogTask) {
  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  })

  const updateText = useContextSelector(TasksContext, (context) => {
    return context.updateText
  })

  const selectedItem = tasks.filter((task) => task.id === idCard)

  const [textcaptured, setTextCaptured] = useState(selectedItem[0].content)

  async function handleEditTask() {
    await updateText({
      id: selectedItem[0].id,
      content: textcaptured,
      status: selectedItem[0].status,
      createdAt: selectedItem[0].createdAt,
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

          <DialogDescription>Edite o texto da sua tarefa</DialogDescription>
          <TextArea onChange={(event) => setTextCaptured(event.target.value)}>
            {textcaptured}
          </TextArea>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Dialog.Close asChild className="close-dialog">
              {selectedItem[0].content === textcaptured ? null : (
                <ButtonSend onClick={handleEditTask}>
                  Enviar Alteração
                </ButtonSend>
              )}
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
