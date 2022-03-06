import { UserModel } from '@/server/users/model'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
export type PostModel = {
  id: string
  user: UserModel
  title: string
  content: string
  createdAt: FirebaseFirestoreTypes.FieldValue
  photoURL: string[]

  // firestore 복합색인도 타입에 추가
  ['user.licenseId']?: string
}
