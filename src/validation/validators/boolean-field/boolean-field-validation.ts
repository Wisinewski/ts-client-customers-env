import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class BooleanFieldValidation implements FieldValidation {
  constructor (readonly field: any) {}

  validate (value: any): Error {
    return typeof value === 'boolean' ? null : new InvalidFieldError()
  }
}
