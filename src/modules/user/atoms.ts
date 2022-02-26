import { atom } from 'recoil'

type User = any | null

export const userStatus = atom<User>({
  key: 'user',
  default: null,
})
