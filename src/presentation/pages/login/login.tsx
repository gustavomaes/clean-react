import React from 'react'
import {
  GlobalStyle,
  Container,
  Form,
  Input,
  Button,
  Subtitle,
  InputWrapper,
  Status,
  Link,
  ErrorWrapper,
  Error
} from './login-styles'
import Spinner from '@/presentation/components/spinner/spinner'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'

const Login: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <LoginHeader />
      <Form>
        <Subtitle>Login</Subtitle>
        <InputWrapper>
          <Input type="email" name="email" placeholder="Digite seu e-mail"/>
          <Status>🔴</Status>
        </InputWrapper>
        <InputWrapper>
          <Input type="password" name="password" placeholder="Digite sua senha"/>
          <Status>🔴</Status>
        </InputWrapper>
        <Button marginTop type="submit">Entrar</Button>
        <Link>Criar conta</Link>
        <ErrorWrapper>
          <Spinner marginTop />
          <Error>erro</Error>
        </ErrorWrapper>
      </Form>
      <Footer />
    </Container>
  )
}

export default Login
