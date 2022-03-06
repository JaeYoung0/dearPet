import { atom } from 'recoil'
import { Asset } from 'react-native-image-picker'

// storage까지 atom으로 관리할 필요가 딱히...
export const assetStatus = atom<Asset[] | null>({
  key: 'storage',
  default: null,
})
