import { BooleanFieldValidation } from '@/validation/validators/boolean-field/boolean-field-validation'
import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  boolean (): ValidationBuilder {
    this.validations.push(new BooleanFieldValidation(this.fieldName))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
