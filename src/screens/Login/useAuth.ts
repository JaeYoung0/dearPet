import React, { useEffect } from 'react'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { GOOGLE_CLIENT_ID } from '@env'
import auth from '@react-native-firebase/auth'
import { useRecoilState } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import { UserModel } from '@/server/users/model'
import * as UserService from '@/server/users/service'
import { handleSignInError } from './errorHandler'

const useAuth = () => {
  const [me, setMe] = useRecoilState(userStatus)

  async function googleLogin() {
    try {
      const { idToken } = await GoogleSignin.signIn()

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const UserCredential = await auth().signInWithCredential(googleCredential)
      const googleAuthUser = UserCredential.user
      console.log('@@googleAuthUser', googleAuthUser)

      const { uid, displayName, photoURL, phoneNumber, email } = googleAuthUser
      const foundUser = (await UserService.getUser(uid)) as UserModel

      if (!foundUser) {
        await UserService.createUser({
          licenseId: uid,
          displayName: displayName ?? '',
          photoURL: photoURL ?? '',
          phoneNumber: photoURL ?? '',
          email: email ?? '',
        })
        setMe({
          licenseId: uid,
          displayName: displayName ?? '',
          photoURL: photoURL ?? '',
          email: email ?? '',
          phoneNumber: phoneNumber ?? '',
        })
      } else {
        setMe(foundUser)
      }
    } catch (error) {
      handleSignInError(error)
    }
  }

  const socialLogin = {
    google: googleLogin,
    kakao: () => {},
    naver: () => {},
    apple: () => {},
  } as const

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_CLIENT_ID,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    })
  }, [])

  return { me, socialLogin }
}

export default useAuth
