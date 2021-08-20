import { Customer, CustomerParams } from '@/domain/models/customer/customer'
import { mockCustomer } from '@/domain/test/customer/mock-customer'
import { AddCustomer } from '@/domain/usecases/add-customer'

export class AddCustomerSpy implements AddCustomer {
  customerParams: CustomerParams
  result: Customer = mockCustomer()
  callsCount: number = 0
  async add (customerParams: CustomerParams): Promise<Customer> {
    this.customerParams = customerParams
    this.callsCount++
    return this.result
  }
}
