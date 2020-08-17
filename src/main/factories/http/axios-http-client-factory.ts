import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios.http-client'

export const makeAxiosHttpCLient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
