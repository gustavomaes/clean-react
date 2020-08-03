import React from 'react'
import { Container, Error } from './form-status-styles'
import Spinner from '../spinner/spinner'

const FormStatus: React.FC = () => (
  <Container>
    <Spinner marginTop />
    <Error>erro</Error>
  </Container>
)

export default FormStatus
