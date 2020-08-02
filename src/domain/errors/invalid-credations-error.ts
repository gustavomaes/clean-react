export class InvalidCredationsError extends Error {
  constructor () {
    super('Credenciais inválidas')
    this.name = 'InvalidCredationsError'
  }
}
