import { atom, useRecoilState } from 'recoil'
import { Asset } from 'react-native-image-picker'

export const uploaderStatus = atom<Asset[] | null>({
  key: 'storage',
  default: null,
})

export const useUploaderState = () => {
  const [uploaderState, setUploaderState] = useRecoilState(uploaderStatus)

  return {
    uploaderState,
    setUploaderState,
  }
}
