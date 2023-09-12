import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  colors: {
    text: '#000',
    border: '#78716c',
    background: '#fff',
    chart: {
      primaryBar: '#2dbebb',
      secondaryBar: '#aaded1',
      primaryArea: '#d24a4f',
      secondaryArea: '#fd9a9d',
    },
    chip: {
      selectedBackground: '#e4f6f236',
      selectedBorder: '#61c0bf',
      selectedText: '#20908e',
      background: '#f7f7f7',
      border: '#dad6d1',
      text: '#939393',
    },
  },
} as const;

export const dark: DefaultTheme = {
  colors: {
    text: '#eee',
    border: '#eee',
    background: '#222831',
    chart: {
      primaryBar: '#00b3aa',
      secondaryBar: '#0e6969',
      primaryArea: '#c54e81',
      secondaryArea: '#ca5085',
    },
    chip: {
      selectedBackground: '#18e3e045',
      selectedBorder: '#18e3df',
      selectedText: '#18e3df',
      background: '#7f8b9523',
      border: '#afafaf',
      text: '#afafaf',
    },
  },
};
