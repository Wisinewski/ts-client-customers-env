import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldError } from '../../errors/required-field-error'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: any) {}

  validate (value: any): Error {
    return value ? null : new RequiredFieldError()
  }
}
