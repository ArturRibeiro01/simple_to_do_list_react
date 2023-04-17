import { Collapsible } from '@radix-ui/react-collapsible'
import { styled } from '@stitches/react'

export const ContainerCard = styled(Collapsible, {
  width: '350px',
  padding: '1rem',
  border: '1px solid',
  borderColor: '$purple',
  borderRadius: '8px',
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
})

export const BtnStatus = styled('button', {
  border: 'none',
  padding: '4px 8px',
  borderRadius: '12px',
})
