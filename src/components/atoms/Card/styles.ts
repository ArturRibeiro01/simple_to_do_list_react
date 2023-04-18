import { Collapsible } from '@radix-ui/react-collapsible'
import { styled } from '@stitches/react'

export const ContainerCard = styled(Collapsible, {
  width: '350px',
  padding: '1rem',
  border: '1px solid',
  borderColor: '$purple',
  borderRadius: '8px',
  position: 'relative',

  variants: {
    status: {
      pending: {
        backgroundColor: '$orange-light',
      },

      in_progress: {
        backgroundColor: '$blue-light',
      },

      completed: {
        backgroundColor: '$green-light',
      },
    },
  },
})

export const CardHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',

  span: {
    fontSize: '11px',
    color: 'gray-300',
  },

  button: {
    background: 'transparent',
    border: 'none',

    svg: {
      color: '$pink',
      fontWeight: 'bold',
    },
  },
})

export const CardTitle = styled('p', {
  fontSize: '$md',
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif',

  maxWidth: '20ch',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '$gray-800',
  marginBottom: '0.5rem',
})

export const CardContent = styled('p', {
  fontSize: '$xs',
  fontFamily: 'Poppins, sans-serif',
  marginBottom: '1rem',
  color: '$gray-800',
})

export const CardFooter = styled('p', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  bottom: 0,
})

export const BtnStatus = styled('button', {
  border: 'none',
  padding: '4px 8px',
  borderRadius: '12px',
  cursor: 'not-allowed',

  variants: {
    status: {
      pending: {
        backgroundColor: '$orange-light',
        color: '$orange',
        border: '1px solid ',
        // '&:hover': {
        //   backgroundColor: 'darkviolet',
        // },
      },

      in_progress: {
        backgroundColor: '$blue-light',
        color: '$blue',
        border: '1px solid ',
      },

      completed: {
        backgroundColor: '$green-light',
        color: '$green',
        border: '1px solid ',
      },
    },
  },
})

export const ActionContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const BtnAction = styled('button', {
  border: 0,
  background: 'transparent',

  variants: {
    type: {
      edit: {
        color: '$blue',
      },

      in_progress: {},

      check: {
        color: '$green',
      },

      trash: {
        color: '$red',
      },
    },
  },
})
