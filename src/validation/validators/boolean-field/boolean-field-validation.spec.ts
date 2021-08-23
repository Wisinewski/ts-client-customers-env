import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { BooleanFieldValidation } from './boolean-field-validation'

describe('BooleanFieldValidation', () => {
  test('should return error if value is not boolean', () => {
    const sut = new BooleanFieldValidation('ci')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
