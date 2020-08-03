import React from 'react'
import { Container, InputField, Status } from './inpupt-styles'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<InputProps> = ({ type, name, placeholder }: InputProps) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <Container>
      <InputField
        type={type}
        name={name}
        placeholder={placeholder}
        readOnly
        onFocus={enableInput}
      />
      <Status>🔴</Status>
    </Container>
  )
}

export default Input
