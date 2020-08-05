import React, { useState, useEffect } from 'react'
import {
  Container,
  Form,
  Button,
  Subtitle,
  Link
} from './login-styles'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    mainError: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório'
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  useEffect(() => {
    validation.validate({ password: state.password })
  }, [state.password])

  return (
    <Container>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <Form>
          <Subtitle>Login</Subtitle>
          <Input type="email" name="email" placeholder="Digite seu e-mail"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>
          <Button data-testid="submit-button" disabled marginTop type="submit">Entrar</Button>
          <Link>Criar conta</Link>
          <FormStatus />
        </Form>
      </Context.Provider>
      <Footer />
    </Container>
  )
}

export default Login
