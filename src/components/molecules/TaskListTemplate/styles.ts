import { styled } from '@stitches/react'

export const TemplateContainer = styled('div', {
  marginTop: '2rem',
})

export const FilterContainer = styled('div', {
  marginBottom: '4rem',
})

export const FilterInput = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  position: 'relative',

  input: {
    width: '100%',
    maxWidth: '300px',
    padding: '0.4rem',
    paddingLeft: '2rem',
    background: 'transparent',
    borderRadius: 8,
  },

  svg: {
    position: 'absolute',
    left: '0.5rem',
    color: '$purple',
  },
})

export const TextAlert = styled('p', {
  color: '$purple',
  marginTop: '0.5rem',
})
