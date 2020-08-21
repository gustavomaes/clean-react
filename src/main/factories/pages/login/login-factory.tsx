import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/use-cases/authentication/remote-authentication-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/use-cases/save-access-token/local-save-access-token-factory'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
