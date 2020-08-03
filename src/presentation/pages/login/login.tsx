import React from 'react'
import {
  GlobalStyle,
  Container,
  Form,
  Button,
  Subtitle,
  Link
} from './login-styles'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'

const Login: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <LoginHeader />
      <Form>
        <Subtitle>Login</Subtitle>
        <Input type="email" name="email" placeholder="Digite seu e-mail"/>
        <Input type="password" name="password" placeholder="Digite sua senha"/>
        <Button marginTop type="submit">Entrar</Button>
        <Link>Criar conta</Link>
        <FormStatus />
      </Form>
      <Footer />
    </Container>
  )
}

export default Login
