import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      border: string;
      background: string;
      chart: {
        primaryBar: string;
        secondaryBar: string;
        primaryArea: string;
        secondaryArea: string;
      };
      chip: {
        selectedBackground: string;
        selectedBorder: string;
        selectedText: string;
        background: string;
        border: string;
        text: string;
      };
    };
  }
}
