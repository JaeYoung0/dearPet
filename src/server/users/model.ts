export type CreateUserDto = {
  id: string
  // FIXME: null이 아니라 랜덤하게 부여하도록 수정
  displayName: string | null
  photoURL: string | null
  email: string | null
  phoneNumber: string | null
}
