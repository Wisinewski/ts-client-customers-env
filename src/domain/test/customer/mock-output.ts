import { Output } from '@/domain/models/customer/output'

import faker from 'faker'

export const mockOutput = (): Output => ({
  name: faker.name.jobTitle()
})
