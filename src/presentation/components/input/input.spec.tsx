import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import faker from 'faker'
import Context from '@/presentation/contexts/form/form-context'
import Input from './input'
import { ThemeProvider } from 'styled-components'
import theme from '@/presentation/styles/theme'

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ state: {} }}>
        <Input name={fieldName}/>
      </Context.Provider>
    </ThemeProvider>
  )
}
describe('Input Component', () => {
  test('should begin with readonly', () => {
    const fieldName = faker.database.column()
    const { getByTestId } = makeSut(fieldName)
    const input = getByTestId(fieldName) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('should remove readonly on focus', () => {
    const fieldName = faker.database.column()
    const { getByTestId } = makeSut(fieldName)
    const input = getByTestId(fieldName) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
