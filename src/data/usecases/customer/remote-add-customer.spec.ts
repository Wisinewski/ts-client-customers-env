import { NameInUseError } from '@/domain/errors/name-in-use-error'
import { ServerError } from '@/domain/errors/server-error'
import { NotFoundError } from '@/domain/errors/not-found-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { mockCustomerParams, mockCustomer } from '@/domain/test/customer/mock-customer'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import { RemoteAddCustomer } from './remote-add-customer'
import faker from 'faker'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { Customer, CustomerParams } from '@/domain/models/customer/customer'

type SutTypes = {
  sut: RemoteAddCustomer
  httpPostClientSpy: HttpPostClientSpy<CustomerParams, Customer>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<CustomerParams, Customer>()
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

  test('should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const customer = mockCustomerParams()
    await sut.add(customer)
    expect(httpPostClientSpy.body).toBe(customer)
  })

  test('should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.add(mockCustomerParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('should throw NotFoundError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.add(mockCustomerParams())
    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('should throw NameInUseError if HttpPostClient returns 409', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.conflict
    }
    const customer = mockCustomerParams()
    const promise = sut.add(customer)
    await expect(promise).rejects.toThrow(new NameInUseError(customer.name))
  })

  test('should throw NotFoundError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.add(mockCustomerParams())
    await expect(promise).rejects.toThrow(new ServerError())
  })

  test('should return a customer if HttpPostClient returns 201', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockCustomer()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.created,
      body: httpResult
    }
    const customer = await sut.add(mockCustomerParams())
    expect(customer).toEqual(httpResult)
  })
})
