import { Customer, CustomerParams } from '@/domain/models/customer/customer'
import { mockCustomer } from '@/domain/test/customer/mock-customer'
import { AddCustomer } from '@/domain/usecases/add-customer'

export class AddCustomerSpy implements AddCustomer {
  customerParams: CustomerParams
  result: Customer = mockCustomer()
  async add (customerParams: CustomerParams): Promise<Customer> {
    this.customerParams = customerParams
    return this.result
  }
}
