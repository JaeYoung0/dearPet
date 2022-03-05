import { UserModel } from '@/server/users/model'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
export type PostModel = {
  user: UserModel
  title: string
  content: string
  createdAt: FirebaseFirestoreTypes.FieldValue
}
