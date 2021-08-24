import { Git } from '@/domain/models/customer/git'
import faker from 'faker'

export const mockGit = (): Git => ({
  user: faker.internet.userName(),
  pass: faker.internet.password()
})
