import { BooleanFieldValidation } from '@/validation/validators/boolean-field/boolean-field-validation'
import { ValidationBuilder as sut } from './validation-builder'
import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return BooleanFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).boolean().build()
    expect(validations).toEqual([new BooleanFieldValidation(field)])
  })

  test('should return a list of validations', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().boolean().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new BooleanFieldValidation(field)
    ])
  })
})
