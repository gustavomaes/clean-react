import { createGlobalStyle } from 'styled-components'

// white: #fff,
// black: #000,
// background: #f2f2f2,
// primary: #880e4f,
// primaryDark: #560027,
// primaryLight: #bc477b

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
    background-color: #f2f2f2;
  }
`
