import { RenderResult } from '@testing-library/react'

export const testChieldCount = (sut: RenderResult, fieldName: string, count: number): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

export const testButtonIsDisable = (sut: RenderResult, isDisabled: boolean, fieldName: string): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

export const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Campo preenchido corretamente.')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}
