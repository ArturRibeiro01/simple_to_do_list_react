import { styled } from '@stitches/react'

export const SummaryContainerTasks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
})

export const TasksQuantity = styled('p', {
  fontSize: 18,
  fontWeight: 'bold',
  variants: {
    category: {
      pending: {
        color: '$orange',
      },

      in_progress: {
        color: '$blue',
      },

      completed: {
        color: '$green',
      },
    },
  },
})

export const ContainerTasks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'normal',
  alignContent: 'stretch',
  gap: '2rem',
  margin: '1rem 0',
  marginBottom: '3rem',
})

export const Separator = styled('div', {
  border: '1px solid',
  borderColor: '#fcf9f7',
  marginBottom: '3rem',
})
