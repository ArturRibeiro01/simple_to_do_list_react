import { styled } from '@stitches/react'

import * as Dialog from '@radix-ui/react-dialog'

import { darken } from 'polished'

export const DialogRoot = styled(Dialog.Root, {})

export const DialogTrigger = styled(Dialog.DialogTrigger, {})

export const DialogTriggerButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  backgroundColor: '$purple',
  color: '$white',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  padding: '0.5rem 2rem',
  border: 0,
  borderRadius: 10,

  '&:hover': {
    background: darken(0.1, '#884CB2'),
  },
})
