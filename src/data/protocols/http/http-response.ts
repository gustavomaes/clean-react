export enum HttpStatusCode {
  ok = 200,
  unauthorized = 204,
  badRequest = 400,
  noContent = 401,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
