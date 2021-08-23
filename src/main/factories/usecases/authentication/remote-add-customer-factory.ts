import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { RemoteAddCustomer } from '@/data/usecases/customer/remote-add-customer'
import { AddCustomer } from '@/domain/usecases/add-customer'

export const makeRemoteAddCustomer = (): AddCustomer => {
  return new RemoteAddCustomer(makeApiUrl(), makeAxiosHttpClient())
}
