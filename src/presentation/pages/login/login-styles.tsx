import styled, { createGlobalStyle } from 'styled-components'

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Subtitle = styled.h1`
  color: #560027;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`

type ButtonProps = {
  marginTop?: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: #880e4f;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  line-height: 60px;
  ${p => p.marginTop && 'margin-top: 32px'};
  &:hover {
    opacity: 0.9;
  };
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  align-self: center;
  box-shadow: 0 1px 3px -1px #000;
`

export const Link = styled.span`
  text-align: center;
  color: #880e4f;
  text-transform: lowercase;
  margin-top: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 32px;  */
  align-items: center;
`

export const Error = styled.span`
  margin-top: 32px;
  color: #bc477b;
`
