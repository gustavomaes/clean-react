import { EmailValidation } from './email-validation'
import { InvalidFiedlError } from '@/validation/errors'

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFiedlError())
  })
})
