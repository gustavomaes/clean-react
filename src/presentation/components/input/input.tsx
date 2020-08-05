import React, { useContext } from 'react'
import { Container, InputField, Status } from './inpupt-styles'
import Context from '@/presentation/contexts/form/form-context'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<InputProps> = ({ type, name, placeholder }: InputProps) => {
  const { state, setState } = useContext(Context)
  const error = state[`${name}Error`]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => {
    return '🔴'
  }
  const getTitle = (): string => {
    return error
  }

  return (
    <Container>
      <InputField
        data-testid={name}
        type={type}
        name={name}
        placeholder={placeholder}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
      <Status
        data-testid={`${name}-status`}
        title={getTitle()}
      >
        {getStatus()}
      </Status>
    </Container>
  )
}

export default Input
