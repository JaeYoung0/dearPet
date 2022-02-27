import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { useRecoilState } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import { handleSignInError } from './helper'
import * as UserService from '@/server/users/service'
import { GOOGLE_CLIENT_ID } from '@env'

function Login() {
  const [me, setMe] = useRecoilState(userStatus)

  const signIn = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn()

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const UserCredential = await auth().signInWithCredential(googleCredential)
      const googleAuthUser = UserCredential.user
      console.log('@@googleAuthUser', googleAuthUser)

      const { uid, displayName, photoURL, phoneNumber, email } = googleAuthUser
      const foundUser = await UserService.getUser(uid)

      if (!foundUser) {
        await UserService.createUser({
          id: uid,
          displayName,
          photoURL,
          phoneNumber,
          email,
        })
        setMe({ id: uid, displayName: displayName ?? '', photoURL })
      } else {
        setMe(foundUser)
      }
    } catch (error) {
      handleSignInError(error)
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      // what API you want to access on behalf of the user, default is email and profile
      // scopes: ['email'],
      webClientId: GOOGLE_CLIENT_ID,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#30165B' }}>
      {!me && (
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      )}
    </SafeAreaView>
  )
}

export default Login
