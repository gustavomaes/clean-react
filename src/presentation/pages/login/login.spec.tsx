import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Login from './login'
import { ThemeProvider } from 'styled-components'
import theme from '@/presentation/styles/theme'

const renderComponent: any = () => (
  <ThemeProvider theme={theme}>
    <Login />
  </ThemeProvider>
)

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(renderComponent())

  return {
    sut
  }
}

describe('Login Component', () => {
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
})
