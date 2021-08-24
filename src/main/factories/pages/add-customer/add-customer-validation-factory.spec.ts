import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'
import { makeAddCustomerValidation } from './add-customer-validation-factory'

describe('AddCustomerValidationFactory', () => {
  test('should make ValidationComposite with correct validations', () => {
    const composite = makeAddCustomerValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('name').required().build(),
      ...ValidationBuilder.field('templateName').required().build(),
      ...ValidationBuilder.field('templateType').required().build(),
      ...ValidationBuilder.field('templateCi').boolean().build(),
      ...ValidationBuilder.field('templateCd').boolean().build(),
      ...ValidationBuilder.field('templateLang').required().build(),
      ...ValidationBuilder.field('templateVersion').required().build(),
      ...ValidationBuilder.field('templatePath').required().build(),
      ...ValidationBuilder.field('templateTool').required().build(),
      ...ValidationBuilder.field('gitUser').required().build(),
      ...ValidationBuilder.field('gitPassword').required().build(),
      ...ValidationBuilder.field('sonarHost').required().build(),
      ...ValidationBuilder.field('sonarToken').required().build(),
      ...ValidationBuilder.field('remoteStateVendor').required().build(),
      ...ValidationBuilder.field('remoteStateRegion').required().build(),
      ...ValidationBuilder.field('remoteStateType').required().build(),
      ...ValidationBuilder.field('remoteStateName').required().build(),
      ...ValidationBuilder.field('outputName').required().build()
    ]))
  })
})
