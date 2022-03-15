import React, { useEffect, useCallback, useState } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { GOOGLE_CLIENT_ID } from '@env'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useMeState } from '@/modules/user/atoms'
import { UserModel } from '@/server/users/model'
import * as UserService from '@/server/users/service'
import { handleGoogleLoginError } from '../errorHandler'
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login as kakaoOAuthLogin,
  logout as kakaoOAuthLogout,
  unlink,
} from '@react-native-seoul/kakao-login'
import axios from 'axios'
import useAppleLogin from './useAppleLogin'
import { sleep } from '@/utils/sleep'

const customToken = async (snsId: string) => {
  const { data } = await axios.get<{ customToken: string }>(
    `https://asia-northeast3-noders-1.cloudfunctions.net/app/customToken/${snsId}`
  )
  return data.customToken
}

const useAuth = () => {
  const { me, setMe } = useMeState()
  const [isLoading, setIsLoading] = useState(false)

  async function findOrCreateUser(payload: Pick<FirebaseAuthTypes.User, 'uid' | 'displayName' | 'email' | 'photoURL'>) {
    const { uid, displayName, photoURL, email } = payload

    try {
      const foundUser = (await UserService.getUser(uid)) as UserModel

      if (!foundUser) {
        const command = {
          licenseId: uid,
          displayName: displayName ?? '',
          photoURL: photoURL ?? '',
          email: email ?? '',
        }
        await UserService.createUser(command)
        setMe(command)
      } else {
        setMe(foundUser)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_CLIENT_ID,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    })
  }, [])

  const googleLogin = useCallback(async () => {
    try {
      setIsLoading(true)
      const { idToken } = await GoogleSignin.signIn()

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const UserCredential = await auth().signInWithCredential(googleCredential)
      console.log('@@google user credential', UserCredential)

      const googleAuthUser = UserCredential.user

      const { uid, displayName, photoURL, email } = googleAuthUser
      findOrCreateUser({
        uid,
        displayName,
        photoURL,
        email,
      })
    } catch (error) {
      handleGoogleLoginError(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const kakaoLogin = useCallback(async () => {
    setIsLoading(true)

    try {
      await kakaoOAuthLogin()
      const kakaoProfile = (await getKakaoProfile()) as KakaoProfile
      const { profileImageUrl, email, nickname, id: kakaoId } = kakaoProfile
      const token = await customToken(`kakao:${kakaoId}`)
      const credential = await auth().signInWithCustomToken(token)
      const uid = credential.user.uid
      findOrCreateUser({
        uid,
        displayName: nickname,
        email,
        photoURL: profileImageUrl,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { me, isLoading, kakaoLogin, googleLogin }
}

export default useAuth
