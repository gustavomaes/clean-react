import React from 'react'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Login from './login'
import theme from '@/presentation/styles/theme'
import { ValidationSpy } from '@/presentation/components/test'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(
    <ThemeProvider theme={theme}>
      <Login validation={validationSpy }/>
    </ThemeProvider>
  )

  return {
    sut, validationSpy
  }
}

describe('Login Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const { sut: { getByTestId } } = makeSut()
    const errorContainer = getByTestId('error-container')
    expect(errorContainer.childElementCount).toBe(0)

    const submitButton = getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailStatus = getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')

    const passwordStatus = getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })

  test('should call Validation with correct email', () => {
    const { sut: { getByTestId }, validationSpy } = makeSut()
    const emailInput = getByTestId('email')
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })
    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe(email)
  })

  test('should call Validation with correct password', () => {
    const { sut: { getByTestId }, validationSpy } = makeSut()
    const passwordInput = getByTestId('password')
    const password = faker.internet.password()
    fireEvent.input(passwordInput, { target: { value: password } })
    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe(password)
  })
})
