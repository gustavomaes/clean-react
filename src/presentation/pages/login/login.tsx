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

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <Container>
      <LoginHeader />
      <Context.Provider value={state}>
        <Form>
          <Subtitle>Login</Subtitle>
          <Input type="email" name="email" placeholder="Digite seu e-mail"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>
          <Button marginTop type="submit">Entrar</Button>
          <Link>Criar conta</Link>
          <FormStatus />
        </Form>
      </Context.Provider>
      <Footer />
    </Container>
  )
}

export default Login
