import React, { useContext } from 'react'
import { Container, Error } from './form-status-styles'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <Container data-testid="error-container">
      {isLoading && <Spinner marginTop />}
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  )
}

export default FormStatus
