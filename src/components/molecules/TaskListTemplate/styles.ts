import { styled } from '@stitches/react'

export const TemplateContainer = styled('div', {
  marginTop: '2rem',
})

export const FilterContainer = styled('div', {
  marginBottom: '4px',
})

export const FilterInput = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '4rem',

  input: {
    width: '100%',
    maxWidth: '300px',
    padding: '0.4rem',
    paddingLeft: '2rem',
    background: 'transparent',
    borderRadius: 8,

    borderColor: '$purple',
  },

  svg: {
    color: '$purple',
    fontWeight: 'bold',
  },
})

export const TextAlert = styled('p', {
  color: '$purple',
  marginTop: '0.5rem',
})
