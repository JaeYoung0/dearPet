import firestore from '@react-native-firebase/firestore'
import { CreatePostDto } from './dto'
import { PostModel } from './model'

const postsCollection = firestore().collection<PostModel>('Posts')

export function createPost(payload: CreatePostDto) {
  const { title, content, user } = payload
  return postsCollection.add({
    user,
    title,
    content,
    createdAt: firestore.FieldValue.serverTimestamp(),
  })
}
