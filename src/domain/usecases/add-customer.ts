import { Customer, CustomerParams } from '@/domain/models/customer/customer'

export interface AddCustomer {
  add (customerParams: CustomerParams): Promise<Customer>
}
