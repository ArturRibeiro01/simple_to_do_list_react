import { styled, keyframes } from '@stitches/react'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})
export const TooltipRoot = styled(Tooltip.Root, {})
export const TooltipTrigger = styled(Tooltip.Trigger, {})
export const TooltipPortal = styled(Tooltip.Portal, {})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const DivNull = styled('div', {
  all: 'unset',
  width: 'fit-content',
  height: 'fit-content',
  display: 'flex',
  alignItems: 'baseline',
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: 4,
  padding: '8px 10px',
  fontSize: 11,
  lineHeight: 1,
  backgroundColor: 'white',
  border: '1px solid',
  fontWeight: 'bold',

  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },

  variants: {
    icon: {
      edit: {
        backgroundColor: '$purple',
        borderColor: '$white',
        color: '$white',
      },

      pending: {
        backgroundColor: '$orange-light',
        borderColor: '$orange',
      },

      in_progress: {
        backgroundColor: '$blue',
        borderColor: '$white',
        color: '$white',
      },

      check: {
        backgroundColor: '$green',
        borderColor: '$white',
        color: '$white',
      },
    },
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: 'white',

  variants: {
    icon: {
      edit: {
        fill: '$purple',
      },
      pending: {
        backgroundColor: '$orange-light',
        borderColor: '$orange',
      },

      in_progress: {
        fill: '$blue',
      },

      check: {
        fill: '$green',
      },
    },
  },
})
