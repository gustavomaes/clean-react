import React, { useContext } from 'react'
import { Container, InputField, Status } from './inpupt-styles'
import Context from '@/presentation/contexts/form/form-context'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<InputProps> = ({ type, name, placeholder }: InputProps) => {
  const { errorState } = useContext(Context)
  const error = errorState[name]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
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
        type={type}
        name={name}
        placeholder={placeholder}
        readOnly
        onFocus={enableInput}
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
