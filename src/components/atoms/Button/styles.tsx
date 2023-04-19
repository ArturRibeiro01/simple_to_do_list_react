import { keyframes, styled } from '@stitches/react'

import * as Dialog from '@radix-ui/react-dialog'

import { darken, transparentize } from 'polished'

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

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: transparentize(0.3, '#534160'),
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(Dialog.Title, {})

export const DialogDescription = styled(Dialog.Description, {
  margin: '0.5rem 0',
  color: '$pink',
  fontSize: '$3xs',
})
export const TextArea = styled('textarea', {
  marginTop: '1rem',
  border: '1px solid',
  borderColor: '$purple',
  width: '100%',
  minHeight: '100px',
  padding: '0.5rem',
  fontSize: '1rem',
  '&:focus': { outline: 'none' },
  borderRadius: '8px',
})

export const ButtonSend = styled('button', {
  marginTop: '1rem',
  padding: '0.5rem 1rem',
  justifyContent: 'flex-end',
  backgroundColor: '$purple',
  border: 0,
  borderRadius: '4px',
  color: '$white',
  fontSize: '$xs',
})

// Close
export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$purple',
  position: 'absolute',
  top: 20,
  right: 20,
  cursor: 'pointer',

  '&:hover': { backgroundColor: '$purple', color: '$white' },
})
