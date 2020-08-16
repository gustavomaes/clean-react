import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/usecase/authentication/remote-authentication'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios.http-client'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthenticaiton = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])

  return (
    <Login
      authentication={remoteAuthenticaiton}
      validation={validationComposite}
    />
  )
}
