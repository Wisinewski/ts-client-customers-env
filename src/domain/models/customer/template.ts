export type Template = {
  id: string
  name: string
  type: string
  ci?: string
  cd?: string
  vendor?: string
  lang: string
  version: string
  path: string
  tool: string
}

export type TemplateParams = Omit<Template, 'id'>
