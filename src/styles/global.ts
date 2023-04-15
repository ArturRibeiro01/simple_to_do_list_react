import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$white',
  },

  'body, input, textarea, button': {
    fontFamily: 'Montserrat , sans-serif',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },
})
