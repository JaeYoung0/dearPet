import { atom } from 'recoil'
import { UserModel } from '@/server/users/model'
import { useRecoilState } from 'recoil'

export const userStatus = atom<UserModel | null>({
  key: 'user',
  default: null,
})

export function useMeState() {
  const [me, setMe] = useRecoilState(userStatus)

  return { me, setMe }
}
