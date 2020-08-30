import React from 'react'
import faker from 'faker'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'
import theme from '@/presentation/styles/theme'
import { Helper, ValidationStub } from '@/presentation/test'
import Signup from './signup'

type SutTypes = {
  sut: RenderResult
}

type SutParms = {
  validationError: string
}

const makeSut = (params?: SutParms): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError

  const sut = render(
    <ThemeProvider theme={theme}>
      <Signup validation={validationStub}/>
    </ThemeProvider>
  )
  return {
    sut
  }
}

const populateField = (
  sut: RenderResult,
  fieldName: string,
  value = faker.random.word()
): void => {
  const input = sut.getByTestId(fieldName)
  fireEvent.input(input, { target: { value } })
}

describe('Signup Component', () => {
  afterEach(cleanup)

  test('should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.testChieldCount(sut, 'error-container', 0)
    Helper.testButtonIsDisable(sut, true, 'submit')
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', 'Campo obrigatório')
    Helper.testStatusForField(sut, 'password', 'Campo obrigatório')
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo obrigatório')
  })

  test('should show name error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut, 'name')
    Helper.testStatusForField(sut, 'name', validationError)
  })
})
