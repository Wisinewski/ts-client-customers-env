import { RemoteState } from '@/domain/models/customer/remote-state'
import faker from 'faker'

export const mockRemoteStates = (): RemoteState[] => [
  mockRemoteState(),
  mockRemoteState()
]

const mockRemoteState = (): RemoteState => ({
  businessUnit: faker.commerce.department(),
  environment: faker.lorem.word(),
  vendor: faker.company.companySuffix(),
  region: faker.random.locale(),
  type: faker.name.jobType(),
  name: faker.name.jobTitle()
})
