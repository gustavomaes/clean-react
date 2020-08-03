import React from 'react'
import { Container, InputField, Status } from './inpupt-styles'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<InputProps> = ({ type, name, placeholder }: InputProps) => (
  <Container>
    <InputField type={type} name={name} placeholder={placeholder}/>
    <Status>🔴</Status>
  </Container>
)

export default Input
