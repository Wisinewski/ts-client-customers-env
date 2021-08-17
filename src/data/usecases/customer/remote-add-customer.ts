import { ServerError } from '@/domain/errors/server-error'
import { NotFoundError } from '@/domain/errors/not-found-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { Customer, CustomerParams } from '@/domain/models/customer/customer'
import { AddCustomer } from '@/domain/usecases/add-customer'

export class RemoteAddCustomer implements AddCustomer {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<CustomerParams, Customer>
  ) {}

  async add (customerParams: CustomerParams): Promise<Customer> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: customerParams
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.created: return httpResponse.body
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.serverError: throw new ServerError()
      default: throw new UnexpectedError()
    }
  }
}
