import { atom } from 'recoil'

export type User = {
  displayName: string
  email: string | null
  id: string
  phoneNumber: string | null
  photoURL: string
} | null

export const userStatus = atom<User>({
  key: 'user',
  default: null,
})
