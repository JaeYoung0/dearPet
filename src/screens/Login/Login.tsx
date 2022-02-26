import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Alert, ScrollView, Button, View, StyleSheet, Image } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import useCustomNavi from '@/hooks/useCustomNavi'
import { useSetRecoilState } from 'recoil'
import { userStatus } from '@/modules/user/atoms'

function Login() {
  const [loggedIn, setloggedIn] = useState(false)
  const navigation = useCustomNavi()
  const setUser = useSetRecoilState(userStatus)

  auth().onAuthStateChanged((user) => {
    if (user) {
      setloggedIn(true)
      setUser(user)
    } else {
      setloggedIn(false)
      setUser(null)
    }
  })

  const user = auth().currentUser

  const signIn = async () => {
    try {
      // const { accessToken, idToken } = await GoogleSignin.signIn()
      const { idToken } = await GoogleSignin.signIn()
      setloggedIn(true)

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      return auth().signInWithCredential(googleCredential)
    } catch (error) {
      Alert.alert('error')
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      //   Alert.alert('Cancel')
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   Alert.alert('Signin in progress')
      //   // operation (f.e. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   Alert.alert('PLAY_SERVICES_NOT_AVAILABLE')
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
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
      {!loggedIn && (
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      )}

      {loggedIn && (
        <View>
          <Text style={styles.title}>You're Logged In</Text>
          <Image source={{ uri: user?.photoURL ?? '' }} style={styles.image} />
          <Text style={styles.text}>{user?.displayName}</Text>
          <Text style={styles.text}>{user?.email}</Text>
          <View style={{ marginTop: 30 }}>
            <Button title='Sign out' onPress={() => auth().signOut()} />
          </View>
          <View style={{ marginBottom: 50 }} />
          <Button title='go to Space' onPress={() => navigation.navigate('Universe', {})} />
        </View>
      )}
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
    color: '#fff',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
})
