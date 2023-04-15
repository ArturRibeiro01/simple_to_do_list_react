import { createStitches } from '@stitches/react'
import { lighten } from 'polished'

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
      blue: '#56CCF2',
      red: '#EB5757',
      green: '#27AE60',

      'gray-100': '#E0E0E0',
      'gray-300': '#BDBDBD',
      'gray-800': '#1D262C',

      'orange-light': lighten(0.8, '#F2994A'),
      'blue-light': lighten(0.8, '#56CCF2'),
      'red-light': lighten(0.8, '#EB5757'),
      'gray-light': lighten(0.8, '#27AE60'),
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
