import { ValidationComposite } from './validation-composite'
import { FieldValidationSpy } from './../test/mock-field-validation'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpies: FieldValidationSpy[]
}

const makeSut = (field: string): SutTypes => {
  const fieldValidationSpies = [
    new FieldValidationSpy(field),
    new FieldValidationSpy(field)
  ]
  const sut = ValidationComposite.build(fieldValidationSpies)
  return {
    sut,
    fieldValidationSpies
  }
}

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const field = faker.database.column()
    const { sut, fieldValidationSpies } = makeSut(field)
    const firstError = faker.random.words()
    fieldValidationSpies[0].error = new Error(firstError)
    fieldValidationSpies[1].error = new Error(faker.random.words())
    const error = sut.validate(field, faker.random.word())
    expect(error).toBe(firstError)
  })

  test('should return falsy if no one validation fails', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const error = sut.validate(field, faker.random.word())
    expect(error).toBeFalsy()
  })
})
