// src/styles/global.ts
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    color-scheme: light;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: ${theme.typography.fontFamily};
  }

  body {
    background-color: ${theme.color.background.soft};
    color: ${theme.color.content.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Reset focos */
  *:focus-visible {
    outline: 2px solid ${theme.color.border.focused};
    outline-offset: 2px;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }
`;
