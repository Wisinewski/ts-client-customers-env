import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { BooleanFieldValidation } from './boolean-field-validation'
import faker from 'faker'

describe('BooleanFieldValidation', () => {
  test('should return error if value is not boolean', () => {
    const sut = new BooleanFieldValidation('ci')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy if value is boolean', () => {
    const sut = new BooleanFieldValidation('ci')
    const error = sut.validate(faker.datatype.boolean())
    expect(error).toBeFalsy()
  })
})
