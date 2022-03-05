import firestore from '@react-native-firebase/firestore'
import { UserModel } from './model'
import { CreateUserDto, UpdateUserPhotoUrlDto } from './dto'

const usersCollection = firestore().collection<UserModel>('Users')

export function createUser(command: CreateUserDto) {
  const { licenseId } = command
  return usersCollection.doc(licenseId).set(command)
}

export async function getUser(id: string) {
  const doc = await usersCollection.doc(id).get()

  return doc.data()
}

export function updateUserPhotoUrl(command: UpdateUserPhotoUrlDto) {
  const { licenseId, photoURL } = command

  usersCollection.doc(licenseId).update({
    photoURL,
  })
}
