import React from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth'
import { Button } from 'react-native'
// vs react-native-gesture-handler
import { useRecoilState } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
  const [me, setMe] = useRecoilState(userStatus)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Text>MyInfo</Text>

      <View>
        <Text style={styles.title}>You're Logged In</Text>
        <View style={{ marginTop: 20 }} />
      </View>

      <View style={{ marginTop: 20 }} />
      <Button
        title='로그아웃'
        onPress={async () => {
          try {
            await auth().signOut()
            setMe(null)
          } catch (err) {
            console.error(err)
          }
        }}
      />

      <View style={{ marginTop: 20 }} />
      <Button
        title='clear async storage'
        onPress={() => {
          void AsyncStorage.clear()
          Alert.alert('스토리지를 비웠어요')
        }}
      />

      <View style={{ marginTop: 20 }} />
      <Button
        title='@saw/welcome'
        onPress={() => {
          void AsyncStorage.getItem('@saw/welcome').then((res) => Alert.alert(res ?? 'null이라네'))
        }}
      />
    </SafeAreaView>
  )
}

export default MyInfo
