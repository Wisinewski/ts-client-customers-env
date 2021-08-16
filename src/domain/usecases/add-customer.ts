import { Customer, CustomerParams } from './../models/customer/customer'

export interface AddCustomer {
  add (customerParams: CustomerParams): Promise<Customer>
}
