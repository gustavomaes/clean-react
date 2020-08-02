export class UnexpectedError extends Error {
  constructor () {
    super('Tente novamente')
    this.name = 'UnexpectedError'
  }
}
