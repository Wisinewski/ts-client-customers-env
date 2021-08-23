import React from 'react'
import { RemoteAddCustomer } from '@/data/usecases/customer/remote-add-customer'
import { AxiosHttpClient } from '@/infra/http/axios/axios-http-client'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'
import AddCustomer from '@/presentation/pages/add-customer/add-customer'

export const makeAddCustomer: React.FC = () => {
  const url = 'http://localhost:3001/dev/customers'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAddCustomer = new RemoteAddCustomer(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
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
  ])
  return (
    <AddCustomer
      validation={validationComposite}
      addCustomer={remoteAddCustomer}
    />
  )
}
