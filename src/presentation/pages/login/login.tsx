import React, { useState } from 'react'
import {
  Container,
  Form,
  Button,
  Subtitle,
  Link
} from './login-styles'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false
  })

  const [errorState] = useState({
    mainError: '',
    email: 'Campo obrigatório',
    password: 'Campo obrigatório'
  })

  return (
    <Container>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
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
