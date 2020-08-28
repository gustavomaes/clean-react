import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import theme from '@/presentation/styles/theme'
import { ThemeProvider } from 'styled-components'
import Signup from './signup'

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

const testChieldCount = (sut: RenderResult, fieldName: string, count: number): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

const testButtonIsDisable = (sut: RenderResult, isDisabled: boolean, fieldName: string): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Campo preenchido corretamente.')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

describe('Signup Component', () => {
  test('should start with initial state', () => {
    const { sut } = makeSut()
    const validationError = 'Campo obrigatório'
    testChieldCount(sut, 'error-container', 0)
    testButtonIsDisable(sut, true, 'submit')
    // testStatusForField(sut, 'name', validationError)
    testStatusForField(sut, 'email', validationError)
    // testStatusForField(sut, 'password', validationError)
    // testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})
