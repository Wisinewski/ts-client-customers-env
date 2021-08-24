export interface FieldValidation {
  field: any
  validate (value: any): Error
}
