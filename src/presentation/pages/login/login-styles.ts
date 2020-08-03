import styled from 'styled-components'

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
