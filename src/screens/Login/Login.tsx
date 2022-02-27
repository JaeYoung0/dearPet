import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import { handleSignInError } from './helper'

function Login() {
  const [me, setMe] = useRecoilState(userStatus)

  const signIn = async () => {
    try {
      // const { accessToken, idToken } = await GoogleSignin.signIn()
      const { idToken } = await GoogleSignin.signIn()

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const UserCredential = await auth().signInWithCredential(googleCredential)
      setMe(UserCredential.user)
    } catch (error) {
      handleSignInError(error)
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      // what API you want to access on behalf of the user, default is email and profile
      // scopes: ['email'],
      webClientId: '339439530207-4sfmt94t9sdad2d2u8p4gbe43pijfnok.apps.googleusercontent.com',
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
