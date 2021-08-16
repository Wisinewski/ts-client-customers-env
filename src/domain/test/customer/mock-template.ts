import { Template, TemplateParams } from '@/domain/models/customer/template'
import faker from 'faker'

export const mockTemplates = (): Template[] => [mockTemplate(), mockTemplate()]

const mockTemplate = (): Template => ({
  id: faker.datatype.uuid(),
  name: faker.name.jobTitle(),
  type: faker.name.jobArea(),
  ci: faker.random.word(),
  cd: faker.random.word(),
  vendor: faker.company.companySuffix(),
  lang: faker.lorem.word(),
  version: faker.lorem.word(),
  path: faker.system.fileName(),
  tool: faker.name.jobTitle()
})

export const mockTemplatesParams = (): TemplateParams[] => [
  mockTemplateParams(),
  mockTemplateParams()
]

const mockTemplateParams = (): TemplateParams => ({
  name: faker.name.jobTitle(),
  type: faker.name.jobArea(),
  ci: faker.random.word(),
  cd: faker.random.word(),
  vendor: faker.company.companySuffix(),
  lang: faker.lorem.word(),
  version: faker.lorem.word(),
  path: faker.system.fileName(),
  tool: faker.name.jobTitle()
})
