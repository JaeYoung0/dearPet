import firestore from '@react-native-firebase/firestore'
import { CreateUserDto } from './model'

// "users" table
const usersCollection = firestore().collection('Users')

export function createUser(command: CreateUserDto) {
  const { id } = command
  return usersCollection.doc(id).set(command)
}

export async function getUser(id: string) {
  const doc = await usersCollection.doc(id).get()

  return doc.data()
}
