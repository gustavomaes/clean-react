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
  test('should not render Spinner and Error on start', () => {
    const { getByTestId } = render(renderComponent())
    const errorContainer = getByTestId('error-container')
    console.log(errorContainer)
    expect(errorContainer.childElementCount).toBe(0)
  })
})
