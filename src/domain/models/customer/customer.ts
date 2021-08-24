import { Output } from './output'
import { RemoteState } from './remote-state'
import { Sonar } from './sonar'
import { Git } from './git'
import { Template, TemplateParams } from './template'

export type Customer = {
  id: string
  name: string
  templates: Template[]
  git: Git
  sonar: Sonar
  remoteState: RemoteState[]
  output: Output
}

export type CustomerParams = {
  name: string
  templates: TemplateParams[]
  git: Git
  sonar: Sonar
  remoteState: RemoteState[]
  output: Output
}
