import { useContextSelector } from 'use-context-selector'
import {
  FilterContainer,
  FilterInput,
  TemplateContainer,
  TextAlert,
} from './styles'
import { TasksContext } from '../../../contexts/TaskContext'
import TaskList from './TaskList'
import Card from '../../atoms/Card'
import { useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

export default function TaskListTemplate() {
  const [filterText, setFilterText] = useState('')

  const tasks = useContextSelector(TasksContext, (context) => {
    return context.tasks
  })

  const pendingTasks = useContextSelector(TasksContext, (context) => {
    return context.pendindTasks
  })

  const currentTasks = useContextSelector(TasksContext, (context) => {
    return context.currentTasks
  })

  const completedTasks = useContextSelector(TasksContext, (context) => {
    return context.completedTasks
  })

  const deleteTask = useContextSelector(TasksContext, (context) => {
    return context.deleteTask
  })

  const updatetaskToProgress = useContextSelector(TasksContext, (context) => {
    return context.TasktoInProgress
  })

  async function handleDeleteTask(data: any) {
    const id = data
    await deleteTask(id)
  }

  async function handleTaskToProgress(data: any) {
    const selectedItem = data

    await updatetaskToProgress({
      id: selectedItem.id,
      status: selectedItem.status !== 'in_progress' ? 'in_progress' : 'pending',
      content: selectedItem.content,
      createdAt: selectedItem.createdAt,
    })
  }

  async function handleTaskToComplete(data: any) {
    const selectedItem = data
    await updatetaskToProgress({
      id: selectedItem.id,
      status: 'completed',
      content: selectedItem.content,
      createdAt: selectedItem.createdAt,
    })
  }

  const newArray = tasks.filter((param) => {
    return param.content.includes(filterText)
  })

  return (
    <TemplateContainer>
      <FilterContainer>
        <FilterInput>
          <MagnifyingGlass size={20} />
          <input
            type="text"
            onChange={(event) => setFilterText(event.target.value)}
          />
        </FilterInput>

        {filterText !== '' && newArray.length === 0 ? (
          <TextAlert>Não Foram encontrados resultados</TextAlert>
        ) : null}
      </FilterContainer>

      {newArray.length !== 0 && filterText !== '' ? (
        <>
          <TaskList
            subtitleStatus={'Tarefas Filtradas'}
            quantitytasks={newArray.length}
            category={'pending'}
          >
            {newArray.map((card: any) => (
              <Card
                key={card.id}
                id={card.id}
                createdDate={card.createdAt}
                task={card.content}
                status={card.status}
                deletetask={() => handleDeleteTask(card.id)}
                cardToProgress={() => handleTaskToProgress(card)}
                cardToComplete={() => handleTaskToComplete(card)}
              />
            ))}
          </TaskList>
        </>
      ) : null}

      {newArray.length === 0 ||
        (filterText === '' && (
          <>
            <TaskList
              subtitleStatus={'Tarefas Pendentes'}
              quantitytasks={pendingTasks.length}
              category={'pending'}
            >
              {pendingTasks.map((card: any) => (
                <Card
                  key={card.id}
                  id={card.id}
                  createdDate={card.createdAt}
                  task={card.content}
                  status={card.status}
                  deletetask={() => handleDeleteTask(card.id)}
                  cardToProgress={() => handleTaskToProgress(card)}
                  cardToComplete={() => handleTaskToComplete(card)}
                />
              ))}
            </TaskList>

            <TaskList
              subtitleStatus={'Tarefas em andamento'}
              quantitytasks={currentTasks.length}
              category={'in_progress'}
            >
              {currentTasks.map((card: any) => (
                <Card
                  id={card.id}
                  key={card.id}
                  createdDate={card.createdAt}
                  task={card.content}
                  deletetask={() => handleDeleteTask(card.id)}
                  status={card.status}
                  cardToProgress={() => handleTaskToProgress(card)}
                  cardToComplete={() => handleTaskToComplete(card)}
                />
              ))}
            </TaskList>

            <TaskList
              subtitleStatus={'Tarefas concluídas'}
              quantitytasks={completedTasks.length}
              category={'completed'}
            >
              {completedTasks.map((card: any) => (
                <Card
                  id={card.id}
                  key={card.id}
                  createdDate={card.createdAt}
                  task={card.content}
                  status={card.status}
                  deletetask={() => handleDeleteTask(card.id)}
                  cardToProgress={() => handleTaskToProgress(card.id)}
                  cardToComplete={() => handleTaskToComplete(card)}
                />
              ))}
            </TaskList>
          </>
        ))}
    </TemplateContainer>
  )
}
