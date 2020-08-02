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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #880e4f;
  border-top: 40px solid #560027;
  align-items: center;
`

export const Image = styled.img`
  margin-top: 40px;
`

export const Title = styled.h1`
  color: white;
  margin: 16px 0 40px;
`

export const Subtitle = styled.h1`
  color: #560027;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`

export const Input = styled.input`
  border: 1px solid #bc477b;
  line-height: 40px;
  border-radius: 4px;
  padding: 0 40px 0 8px;
  &:focus {
    outline: #bc477b;
  };
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

export const InputWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;

  ${Input} {
    flex-grow: 1;
  };
`

export const Status = styled.span`
  position: absolute;
  right: 8px; 
  font-size: 12px;
  cursor: help;
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

export const Footer = styled.footer`
  background-color: #880e4f;
  height: 48px;
`
