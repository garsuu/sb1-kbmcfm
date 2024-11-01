import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';
import { layers } from './layers.css';

globalStyle('*, *::before, *::after', {
  '@layer': {
    [layers.global]: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
  },
});

globalStyle('html, body', {
  '@layer': {
    [layers.global]: {
      height: '100%',
      width: '100%',
    },
  },
});

globalStyle('body', {
  '@layer': {
    [layers.global]: {
      fontFamily: theme.font.roboto,
      fontSize: theme.fontSize.m,
      lineHeight: theme.lineHeight.normal,
      color: theme.color.text.default,
      backgroundColor: theme.color.background.default,
    },
  },
});

createGlobalTheme(':root', theme, {
  font: {
    jp: 'var(--font-noto-sans-jp)',
    roboto: 'var(--font-roboto), var(--font-noto-sans-jp)',
  },
  fontSize: {
    xxxs: '10px',
    xxs: '11px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
  },
  lineHeight: {
    flat: '1.0',
    tight: '1.25',
    normal: '1.5',
    wide: '1.8',
  },
  space: {
    '0': '0',
    '0.5': '2px',
    '1': '4px',
    '1.5': '6px',
    '2': '8px',
    '2.5': '10px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '7': '28px',
    '8': '32px',
    '9': '36px',
    '10': '40px',
    '12': '48px',
    '16': '64px',
    '20': '80px',
    '24': '96px',
    '28': '112px',
    '32': '128px',
  },
  radius: {
    xs: '2px',
    s: '4px',
    m: '8px',
    l: '12px',
    xl: '16px',
    xxl: '24px',
    full: '9999px',
  },
  palette: {
    neutral: {
      10: '#FFFFFF',
      20: '#F8F9FA',
      30: '#E9ECEF',
      40: '#DEE2E6',
      50: '#CED4DA',
      60: '#ADB5BD',
      70: '#6C757D',
      80: '#495057',
      90: '#343A40',
      100: '#212121',
      white: '#FFFFFF',
      black: '#212121',
    },
    blue: {
      10: '#E6F3FF',
      20: '#CCE7FF',
      30: '#99CFFF',
      40: '#66B7FF',
      50: '#339FFF',
      60: '#168EFD',
      70: '#0070CC',
      80: '#005299',
      90: '#003366',
      100: '#001933',
    },
  },
  color: {
    text: {
      default: '#212121',
      subdued: '#6C757D',
      white: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      card: '#FFFFFF',
    },
    primary: {
      default: '#168EFD',
      hover: '#0070CC',
    },
    border: {
      default: '#E9ECEF',
    },
  },
});