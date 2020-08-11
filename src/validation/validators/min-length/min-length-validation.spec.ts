import { InvalidFiedlError } from '@/validation/errors'
import { MinLenghtValidation } from './min-length-validation'
import faker from 'faker'

const makeSut = (): MinLenghtValidation =>
  new MinLenghtValidation(faker.database.column(), 5)

test('MinLenghtValidation', () => {
  describe('should return error if value lenght is less that prop value', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(3))
    expect(error).toEqual(new InvalidFiedlError())
  })

  describe('should return falsy if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
