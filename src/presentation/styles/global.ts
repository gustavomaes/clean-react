import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    /* change to p.theme.background */
    background-color: ${theme.colors.background};
  }
`
