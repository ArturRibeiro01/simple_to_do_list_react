import { styled } from '@stitches/react'

export const SummaryContainerTasks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
})

export const ContainerTasks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'normal',
  alignContent: 'stretch',
  gap: '2rem',
  // border: '1px solid #eee',
  margin: '1rem 0',
})

export const TasksQuantity = styled('p', {
  fontSize: 18,
  fontWeight: 'bold',
  color: '$purple',
})
