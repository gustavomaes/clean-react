import { ValidationComposite } from './validation-composite'
import { FieldValidationSpy } from '../test/mock-field-validation'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const MakeSut = (): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field')
  ]
  const sut = new ValidationComposite(fieldValidationsSpy)

  return {
    sut,
    fieldValidationsSpy
  }
}
describe('ValidationComposite', () => {
  test('should return error if any validation fails  ', () => {
    const { sut, fieldValidationsSpy } = MakeSut()
    fieldValidationsSpy[0].error = new Error('first_message')
    fieldValidationsSpy[1].error = new Error('second_message')
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_message')
  })
})
