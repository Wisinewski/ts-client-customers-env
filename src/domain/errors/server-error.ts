export class ServerError extends Error {
  constructor () {
    super('Error interno na API')
    this.name = 'ServerError'
  }
}
