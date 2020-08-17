import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/use-cases/authentication/remote-authentication-factory'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}