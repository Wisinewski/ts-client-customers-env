import { BadRequestError } from './../../../domain/errors/bad-request-error'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { Customer, CustomerParams } from '@/domain/models/customer/customer'
import { AddCustomer } from '@/domain/usecases/add-customer'

export class RemoteAddCustomer implements AddCustomer {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async add (customerParams: CustomerParams): Promise<Customer> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: customerParams
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.badRequest: throw new BadRequestError()
      default: return null
    }
  }
}
