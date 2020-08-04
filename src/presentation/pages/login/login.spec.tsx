import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'
import { ThemeProvider } from 'styled-components'
import theme from '@/presentation/styles/theme'

const renderComponent: any = () => (
  <ThemeProvider theme={theme}>
    <Login />
  </ThemeProvider>
)

describe('Login Component', () => {
  test('should start with initial state', () => {
    const { getByTestId } = render(renderComponent())
    const errorContainer = getByTestId('error-container')
    expect(errorContainer.childElementCount).toBe(0)

    const submitButton = getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})
