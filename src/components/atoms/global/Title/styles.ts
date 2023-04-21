import { styled } from '@stitches/react'

export const TitleContainer = styled('h2', {
  display: 'flex',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '$2xl',
  fontWeight: 'bold',
  letterSpacing: 0,
  margin: '0 auto',
  textAlign: 'center',
  marginBottom: '1rem',
})

export const TitleContent = styled(TitleContainer, {
  color: '$gray-800',
})

export const TitleQtd = styled(TitleContainer, {
  color: '$pink',
  padding: '0 8px',
})
