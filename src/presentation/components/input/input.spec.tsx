import React from 'react'
import { render } from '@testing-library/react'
import Context from '@/presentation/contexts/form/form-context'
import Input from './input'
import { ThemeProvider } from 'styled-components'
import theme from '@/presentation/styles/theme'

describe('Input Component', () => {
  test('should begin with readonly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ state: {} }}>
          <Input name="field"/>
        </Context.Provider>
      </ThemeProvider>
    )
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
