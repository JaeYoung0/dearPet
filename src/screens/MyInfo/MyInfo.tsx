import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth'
import { Button } from 'react-native'
import useCustomNavi from '@/hooks/useCustomNavi'
// vs react-native-gesture-handler
import { useRecoilState } from 'recoil'
import { userStatus } from '@/modules/user/atoms'

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

function MyInfo() {
  const [user, setUser] = useRecoilState(userStatus)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Text>MyInfo</Text>

      {user && (
        <View>
          <Text style={styles.title}>You're Logged In</Text>
          <Image source={{ uri: user?.photoURL ?? '' }} style={styles.image} />
          <Text style={styles.text}>{user?.displayName}</Text>
          <Text style={styles.text}>{user?.email}</Text>
          <View style={{ marginTop: 20 }} />
        </View>
      )}

      <View style={{ marginTop: 20 }} />

      <Button
        title='로그아웃'
        onPress={() => {
          if (auth().currentUser) {
            auth().signOut()
            setUser(null)
          }
        }}
      />
    </SafeAreaView>
  )
}

export default MyInfo
