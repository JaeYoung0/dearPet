import firestore from '@react-native-firebase/firestore'
import { CreatePostDto, DeletePostDto } from './dto'
import { PostModel } from './model'

const postsCollection = firestore().collection<PostModel | Omit<PostModel, 'id'>>('Posts')

export async function fetchPosts(licenseId?: string): Promise<PostModel[]> {
  let query = postsCollection.orderBy('createdAt', 'desc')

  console.log('@@licenseId', licenseId)

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
  const { title, content, user, photoURL } = payload
  return postsCollection.add({
    user,
    title,
    content,
    createdAt: firestore.FieldValue.serverTimestamp(),
    photoURL,
  })
}

export async function deletePost(payload: DeletePostDto) {
  const { postId } = payload
  const result = await postsCollection.doc(postId).delete()
  return result
}
