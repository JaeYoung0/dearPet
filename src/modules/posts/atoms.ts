import { atom } from 'recoil'
import { PostModel } from '@/server/posts/model'
export const postsStatus = atom<PostModel[] | null>({
  key: 'posts',
  default: null,
})
