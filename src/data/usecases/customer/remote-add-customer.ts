import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { Customer, CustomerParams } from '@/domain/models/customer/customer'
import { AddCustomer } from '@/domain/usecases/add-customer'

export class RemoteAddCustomer implements AddCustomer {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async add (customerParams: CustomerParams): Promise<Customer> {
    await this.httpPostClient.post(this.url)
    return null
  }
}
