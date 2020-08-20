import { SaveAccessToken } from '@/domain/usecases/save-access-token'
import { SetStorage } from '@/data/protocols/cache/set-storage'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (private readonly setStorageSpy: SetStorage) {}
  async save (accessToken: string): Promise<void> {
    await this.setStorageSpy.set('accessToken', accessToken)
  }
}
