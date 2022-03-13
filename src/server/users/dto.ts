import { UserModel } from './model'

export type CreateUserDto = UserModel & {}

export type UpdateUserPhotoUrlDto = Pick<UserModel, 'licenseId' | 'photoURL'>
