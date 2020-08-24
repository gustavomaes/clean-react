import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFiedlError } from '@/validation/errors'

export class CompareFieldsValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly valueToCompare: string
  ) { }

  validate (value: string): Error {
    return new InvalidFiedlError()
  }
}
