import faker from 'faker'
import { mockCustomerParams } from '@/domain/test/customer/mock-customer'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import { RemoteAddCustomer } from './remote-add-customer'

type SutTypes = {
  sut: RemoteAddCustomer
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAddCustomer(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAddCustomer', () => {
  test('should call HttpPostClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockCustomerParams())
    expect(httpPostClientSpy.url).toBe(url)
  })
})
