import React from 'react'
import AddCustomer from '@/presentation/pages/add-customer/add-customer'
import { makeRemoteAddCustomer } from '@/main/factories/usecases/authentication/remote-add-customer-factory'
import { makeAddCustomerValidation } from './add-customer-validation-factory'

export const makeAddCustomer: React.FC = () => {
  return (
    <AddCustomer
      validation={makeAddCustomerValidation()}
      addCustomer={makeRemoteAddCustomer()}
    />
  )
}
