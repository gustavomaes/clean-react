import { RemoteAuthentication } from '@/data/usecase/authentication/remote-authentication'
import { makeAxiosHttpCLient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { Authentication } from '@/domain/usecases'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpCLient())
}
