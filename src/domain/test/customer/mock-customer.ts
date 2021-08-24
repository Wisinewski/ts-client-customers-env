import faker from 'faker'
import { Customer, CustomerParams } from '@/domain/models/customer/customer'
import { mockGit } from './mock-git'
import { mockSonar } from '../customer/mock-sonar'
import { mockRemoteStates } from '../customer/mock-remote-state'
import { mockOutput } from '../customer/mock-output'
import { mockTemplates, mockTemplatesParams } from '../customer/mock-template'

export const mockCustomer = (): Customer => ({
  id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  templates: mockTemplates(),
  git: mockGit(),
  sonar: mockSonar(),
  remoteState: mockRemoteStates(),
  output: mockOutput()
})

export const mockCustomerParams = (): CustomerParams => ({
  name: faker.company.companyName(),
  templates: mockTemplatesParams(),
  git: mockGit(),
  sonar: mockSonar(),
  remoteState: mockRemoteStates(),
  output: mockOutput()
})

export const mockCustomers = (): Customer[] => [mockCustomer(), mockCustomer()]
