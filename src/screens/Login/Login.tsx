import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Alert, ScrollView, Button } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'

function Login() {
  const [loggedIn, setloggedIn] = useState(false)
  const [userInfo, setuserInfo] = useState<any>([])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const { accessToken, idToken } = await GoogleSignin.signIn()
      setloggedIn(true)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Cancel')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress')
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE')
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  const signOut = async () => {
    try {
      await GoogleSignin.signOut()
      setuserInfo({ user: null }) // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '924063339949-66e2h9so3anat3onieq5edph7uq8rh6q.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#30165B' }}>
      {!loggedIn && (
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      )}

      {loggedIn && <Button onPress={signOut} title='LogOut' color='red'></Button>}
    </SafeAreaView>
  )
}

export default Login
