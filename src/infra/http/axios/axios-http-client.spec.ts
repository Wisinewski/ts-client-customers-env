import { HttpPostParams } from '@/data/protocols/http/http-post-client'
import { AxiosHttpClient } from './axios-http-client'
import faker from 'faker'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

type SutTypes = {
  sut: AxiosHttpClient
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  return {
    sut
  }
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('should call axios with correct values', async () => {
    const { sut } = makeSut()
    const request = mockPostRequest()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
