import React, { useState, useEffect } from 'react'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import {
  Container,
  Form,
  Button,
  Subtitle,
  LinkPage
} from './signup-styles'

type Props = {
  validation: Validation
}

const Signup: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    name: '',
    isLoading: false,
    nameError: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name)
    })
  }, [state.name])

  return (
    <Container>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
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
