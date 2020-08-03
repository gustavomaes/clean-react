import React, { memo } from 'react'
import { Container, Title } from './login-header-styles'
import Logo from '../logo/logo'

const LoginHeader: React.FC = () => (
  <Container>
    <Logo />
    <Title>4Dev - Enquetes</Title>
  </Container>
)

export default memo(LoginHeader)
