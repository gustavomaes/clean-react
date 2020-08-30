import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Subtitle = styled.h1`
  color: ${p => p.theme.colors.primaryDark};
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`

type ButtonProps = {
  marginTop?: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border-radius: 8px;
  font-size: 16px;
  border: none;
  line-height: 60px;
  ${p => p.marginTop && 'margin-top: 32px'};
  &:hover {
    opacity: 0.9;
  };
  &:disabled {
    background-color: ${p => p.theme.colors.disabledBackground};
    color: ${p => p.theme.colors.disabledColor};
    &:hover {
      opacity: 1;
    };
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: ${p => p.theme.colors.white};
  padding: 40px;
  border-radius: 8px;
  align-self: center;
  box-shadow: 0 1px 3px -1px #000;
`

export const LinkPage = styled.span`
  text-align: center;
  color: ${p => p.theme.colors.primary};
  text-transform: lowercase;
  margin-top: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
