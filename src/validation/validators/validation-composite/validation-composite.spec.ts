import { ValidationComposite } from './validation-composite'
import { FieldValidationSpy } from './../test/mock-field-validation'
import faker from 'faker'

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const field = faker.database.column()
    const errorText = faker.random.words()
    const fieldValidationSpy = new FieldValidationSpy(field)
    const fieldValidationSpy2 = new FieldValidationSpy(field)
    fieldValidationSpy2.error = new Error(errorText)
    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSpy2
    ])
    const error = sut.validate(field, faker.random.word())
    expect(error).toBe(errorText)
  })
})
