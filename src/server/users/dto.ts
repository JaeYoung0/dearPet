export type CreateUserDto = {
  licenseId: string
  displayName: string
  email: string
  phoneNumber: string
  photoURL: string
}

export type UpdateUserPhotoUrlDto = {
  licenseId: string
  photoURL: string
}
