export type UserModel = {
  licenseId: string
  displayName: string
  email: string
  photoURL: string

  // 회원가입 이후 추가할 데이터
  starDate?: string
  message?: string
}
