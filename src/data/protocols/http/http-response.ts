export enum HttpStatusCode {
  unathorized = 204,
  noContent = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
