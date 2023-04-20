import { styled } from '@stitches/react'

export const TemplateContainer = styled('div', {
  marginTop: '4rem',
})

export const FilterContainer = styled('div', {
  marginBottom: '2rem',

  input: {
    width: '100%',
    maxWidth: '300px',
    padding: '0.5rem',
  },
})

export const TextAlert = styled('p', {
  color: '$purple',
  marginTop: '0.5rem',
})
