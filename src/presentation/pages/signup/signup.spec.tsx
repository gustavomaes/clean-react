import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import theme from '@/presentation/styles/theme'
import { ThemeProvider } from 'styled-components'
import Signup from './signup'
import { Helper } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <ThemeProvider theme={theme}>
      <Signup />
    </ThemeProvider>
  )
  return {
    sut
  }
}

describe('Signup Component', () => {
  test('should start with initial state', () => {
    const { sut } = makeSut()
    const validationError = 'Campo obrigatório'
    Helper.testChieldCount(sut, 'error-container', 0)
    Helper.testButtonIsDisable(sut, true, 'submit')
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', validationError)
    Helper.testStatusForField(sut, 'password', validationError)
    Helper.testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})
