import { atom } from 'recoil'
import { StorageData } from './type'

// storage까지 atom으로 관리할 필요가 딱히...
export const AsyncStorageStatus = atom<StorageData<any>>({
  key: 'storage',
  default: null,
})
