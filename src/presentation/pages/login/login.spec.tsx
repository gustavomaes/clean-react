import React from 'react'
import faker from 'faker'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, RenderResult, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Login } from '@/presentation/pages'
import theme from '@/presentation/styles/theme'
import { ValidationStub, AuthenticationSpy, SaveAccessTokenMock } from '@/presentation/components/test'
import { InvalidCredationsError } from '@/domain/errors'

type SutTypes = {
  sut: RenderResult
  authenticationSpy: AuthenticationSpy
  saveAccessTokenMock: SaveAccessTokenMock
}

type SutParms = {
  validationError: string
}

const history = createMemoryHistory({ initialEntries: ['/login'] })
const makeSut = (params?: SutParms): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const saveAccessTokenMock = new SaveAccessTokenMock()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Login
          validation={validationStub}
          authentication={authenticationSpy}
          saveAccessToken={saveAccessTokenMock}
        />
      </ThemeProvider>
    </Router>
  )

  return {
    sut,
    authenticationSpy,
    saveAccessTokenMock
  }
}

const simulateValidSubmit = async (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password()
): Promise<void> => {
  const { getByTestId } = sut
  populateEmailField(sut, email)
  populatePasswordField(sut, password)
  const form = getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

const populateEmailField = (
  sut: RenderResult,
  email = faker.internet.email()
): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, { target: { value: email } })
}

const populatePasswordField = (
  sut: RenderResult,
  password = faker.internet.password()
): void => {
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, { target: { value: password } })
}

const testStatusForField = (
  sut: RenderResult,
  testId: string,
  validationError?: string
): void => {
  const emailStatus = sut.getByTestId(testId)
  expect(emailStatus.title).toBe(validationError || 'Campo preenchido corretamente.')
  expect(emailStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

const testErrorContainerChieldCount = (sut: RenderResult, count: number): void => {
  const errorContainer = sut.getByTestId('error-container')
  expect(errorContainer.childElementCount).toBe(count)
}

const testElementExists = (sut: RenderResult, fieldName: string): void => {
  const element = sut.getByTestId(fieldName)
  expect(element).toBeTruthy()
}

const testElementText = (sut: RenderResult, fieldName: string, text: string): void => {
  const element = sut.getByTestId(fieldName)
  expect(element.textContent).toBe(text)
}

const testButtonIsDisable = (sut: RenderResult, isDisable: boolean, fieldNamer: string): void => {
  const button = sut.getByTestId(fieldNamer) as HTMLButtonElement
  expect(button.disabled).toBe(isDisable)
}

describe('Login Component', () => {
  afterEach(cleanup)

  test('should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    testErrorContainerChieldCount(sut, 0)
    testButtonIsDisable(sut, true, 'submit')
    testStatusForField(sut, 'email-status', validationError)
    testStatusForField(sut, 'password-status', validationError)
  })

  test('should sho w email error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateEmailField(sut)
    testStatusForField(sut, 'email-status', validationError)
  })

  test('should show password error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populatePasswordField(sut)
    testStatusForField(sut, 'password-status', validationError)
  })

  test('should show valid email state if validation succeed', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    testStatusForField(sut, 'email-status')
  })

  test('should show valid password state if validation succeed', () => {
    const { sut } = makeSut()
    populatePasswordField(sut)
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    testStatusForField(sut, 'password-status')
  })

  test('should enable submit button if form is valid', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    populatePasswordField(sut)
    testButtonIsDisable(sut, false, 'submit')
  })

  test('should show spinner when submit', async () => {
    const { sut } = makeSut()
    await simulateValidSubmit(sut)
    testElementExists(sut, 'spinner')
  })

  test('should call authentication when click in button an form has correct values', async () => {
    const { sut, authenticationSpy } = makeSut()
    const email = faker.internet.email()
    const password = faker.internet.password()
    await simulateValidSubmit(sut, email, password)
    expect(authenticationSpy.params).toEqual({ email, password })
  })

  test('should call Authentication only once', async () => {
    const { sut, authenticationSpy } = makeSut()
    await simulateValidSubmit(sut)
    await simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toBe(1)
  })

  test('should not call Authentication if form is invalid', async () => {
    const validationError = faker.random.words()
    const { sut, authenticationSpy } = makeSut({ validationError })
    await simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toBe(0)
  })

  test('Should present error if Authentication fails', async () => {
    const { sut, authenticationSpy } = makeSut()
    const error = new InvalidCredationsError()
    jest.spyOn(authenticationSpy, 'auth').mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    testErrorContainerChieldCount(sut, 1)
    testElementText(sut, 'main-error', error.message)
  })

  test('Should call SaveAccessToken on success', async () => {
    const { sut, authenticationSpy, saveAccessTokenMock } = makeSut()
    await simulateValidSubmit(sut)
    expect(saveAccessTokenMock.accessToken).toBe(authenticationSpy.account.accessToken)
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/')
  })

  test('Should present error if SaveAccessToken fails', async () => {
    const { sut, saveAccessTokenMock } = makeSut()
    const error = new InvalidCredationsError()
    jest.spyOn(saveAccessTokenMock, 'save').mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    testErrorContainerChieldCount(sut, 1)
    testElementText(sut, 'main-error', error.message)
  })

  test('Should go to signup page', () => {
    const { sut } = makeSut()
    const signup = sut.getByTestId('signup')
    fireEvent.click(signup)
    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe('/signup')
  })
})
