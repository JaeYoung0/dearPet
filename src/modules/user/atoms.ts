import { atom } from 'recoil'
import { UserModel } from '@/server/users/model'

export const userStatus = atom<UserModel | null>({
  key: 'user',
  default: null,
})
