import { Sonar } from '@/domain/models/customer/sonar'
import faker from 'faker'

export const mockSonar = (): Sonar => ({
  host: faker.internet.url(),
  token: faker.internet.password()
})
