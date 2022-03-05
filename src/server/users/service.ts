import firestore from '@react-native-firebase/firestore'
import { UserModel } from './model'
import { CreateUserDto, UpdateUserPhotoUrlDto } from './dto'

const usersCollection = firestore().collection<UserModel>('Users')

export async function getUser(id: string) {
  const doc = await usersCollection.doc(id).get()

  return doc.data()
}

export function createUser(payload: CreateUserDto) {
  const { licenseId } = payload
  return usersCollection.doc(licenseId).set(payload)
}

export function updateUserPhotoUrl(payload: UpdateUserPhotoUrlDto) {
  const { licenseId, photoURL } = payload

  usersCollection.doc(licenseId).update({
    photoURL,
  })
}
