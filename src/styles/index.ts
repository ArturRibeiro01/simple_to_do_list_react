import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  theme,
  css,
  keyframes,
  prefix,
  createTheme,
  getCssText,
  reset,
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',

      pink: '#F3477A',
      purple: '#884CB2',
      orange: '#F2994A',
      'orange-light': '#fbe0c8',
      blue: '#56CCF2',
      'blue-light': '#cceffb',
      red: '#EB5757',
      'red-light': '#f9cccc',
      green: '#27AE60',
      'green-light': '#b6eece',
      'gray-100': '#E0E0E0',
      'gray-300': '#BDBDBD',
      'gray-800': '#1D262C',
    },

    fontSizes: {
      '3xs': '0.688', // 11px
      '2xs': '0.75rem', // 12px
      xs: '0.875rem', // 14px
      md: '1.125rem', // 18px
      '2xl': '2.25rem', // 36px
    },
  },
})
