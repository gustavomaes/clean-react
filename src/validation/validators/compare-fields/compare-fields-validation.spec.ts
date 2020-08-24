import { CompareFieldsValidation } from './compare-fields-validation'
import { InvalidFiedlError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (valueToCompare): CompareFieldsValidation =>
  new CompareFieldsValidation(faker.database.column(), valueToCompare)

describe('CompareFieldsValidation', () => {
  test('should return erro if compare is invalid', () => {
    const sut = makeSut(faker.random.word())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFiedlError())
  })
})
