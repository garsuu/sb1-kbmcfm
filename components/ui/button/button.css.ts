import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';
import { layers } from '@/styles/layers.css';

const base = style({
  '@layer': {
    [layers.componentsRecipe]: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radius.m,
      fontSize: theme.fontSize.m,
      fontWeight: '500',
      transition: 'all 0.2s',
      cursor: 'pointer',
      padding: `${theme.space[3]} ${theme.space[4]}`,
    },
  },
});

export const button = recipe({
  base,
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.color.primary.default,
        color: theme.color.text.white,
        ':hover': {
          backgroundColor: theme.color.primary.hover,
        },
      },
      secondary: {
        backgroundColor: theme.palette.neutral[20],
        color: theme.color.text.default,
        ':hover': {
          backgroundColor: theme.palette.neutral[30],
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: theme.color.text.default,
        ':hover': {
          backgroundColor: theme.palette.neutral[20],
        },
      },
    },
    size: {
      sm: {
        padding: `${theme.space[2]} ${theme.space[3]}`,
        fontSize: theme.fontSize.s,
      },
      md: {
        padding: `${theme.space[3]} ${theme.space[4]}`,
        fontSize: theme.fontSize.m,
      },
      lg: {
        padding: `${theme.space[4]} ${theme.space[6]}`,
        fontSize: theme.fontSize.l,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});