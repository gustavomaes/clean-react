import { InvalidFiedlError } from '@/validation/errors'
import { MinLenghtValidation } from './min-length-validation'

test('MinLenghtValidation', () => {
  describe('should return error if value lenght is less that prop value', () => {
    const sut = new MinLenghtValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFiedlError())
  })

  describe('should return falsy if value is valid', () => {
    const sut = new MinLenghtValidation('field', 5)
    const error = sut.validate('123456')
    expect(error).toBeFalsy()
  })
})
