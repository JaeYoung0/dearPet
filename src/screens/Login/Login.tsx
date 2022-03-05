import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { useRecoilState } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import { UserModel } from '@/server/users/model'
import { handleSignInError } from './helper'
import * as UserService from '@/server/users/service'
import { GOOGLE_CLIENT_ID } from '@env'
import Video from 'react-native-video'
import { View } from 'react-native'
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

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_CLIENT_ID,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Video
        source={require('@assets/videos/login_bg.mp4')}
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%' }}
        repeat
        resizeMode='cover'
      />
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          backgroundColor: '#000000',
          opacity: 0.5,
        }}
      />
      {!me && (
        <>
          <View style={{ flex: 2 }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', opacity: 0.7 }}>
            <GoogleSigninButton
              style={{ width: 250, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  )
}

export default Login
