import React, { useState } from 'react'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import {
  Container,
  Form,
  Button,
  Subtitle,
  LinkPage
} from './signup-styles'

const Signup: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    nameError: 'Campo obrigatório',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  return (
    <Container>
      <LoginHeader />
      <Context.Provider value={{ state }}>
        <Form>
          <Subtitle>Criar conta</Subtitle>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <Button data-testid="submit" disabled marginTop type="submit">Entrar</Button>
          <LinkPage>Voltar Para Login</LinkPage>
          <FormStatus />
        </Form>
      </Context.Provider>
      <Footer />
    </Container>
  )
}

export default Signup
