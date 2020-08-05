import React, { useContext } from 'react'
import { Container, Error } from './form-status-styles'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <Container data-testid="error-container">
      {isLoading && <Spinner marginTop />}
      {mainError && <Error>{mainError}</Error>}
    </Container>
  )
}

export default FormStatus
