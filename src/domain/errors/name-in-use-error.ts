export class NameInUseError extends Error {
  constructor (name: string) {
    super(`O nome ${name} já está em uso`)
    this.name = 'NameInUseError'
  }
}
