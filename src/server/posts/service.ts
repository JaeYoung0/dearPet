import firestore from '@react-native-firebase/firestore'
import { CreatePostDto } from './dto'
import { PostModel } from './model'

const postsCollection = firestore().collection<PostModel | Omit<PostModel, 'id'>>('Posts')

export async function allPosts(licenseId?: string) {
  let query = postsCollection.orderBy('createdAt', 'desc')

  if (licenseId) {
    query = query.where('user.licenseId', '==', licenseId)
  }
  const snapShot = await query.get()
  const posts = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return posts
}

export function createPost(payload: CreatePostDto) {
  const { title, content, user } = payload
  return postsCollection.add({
    user,
    title,
    content,
    createdAt: firestore.FieldValue.serverTimestamp(),
  })
}
