import { UserModel } from '@/server/users/model'

export type CreatePostDto = {
  user: UserModel
  title: string
  content: string
  photoURL: string[]
}
