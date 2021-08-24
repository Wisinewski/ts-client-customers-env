export type Template = {
  id: string
  name: string
  type: string
  ci?: boolean
  cd?: boolean
  vendor?: string
  lang: string
  version: string
  path: string
  tool: string
}

export type TemplateParams = Omit<Template, 'id'>
