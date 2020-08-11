import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFiedlError } from '@/validation/errors'

export class MinLenghtValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLenght: number) {}
  validate (value: string): Error {
    return new InvalidFiedlError()
  }
}
