import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, Image, View, Alert, Platform, Pressable, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth'
import { Button } from 'react-native'
import useCustomNavi from '@/hooks/useCustomNavi'
// vs react-native-gesture-handler
import { useRecoilState } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { launchImageLibrary } from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'

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
  const [avatarImg, setAvatarImg] = useState(me?.photoURL)
  const [isUploading, setIsUploading] = useState(false)

  if (!me) return <SafeAreaView style={{ flex: 1, backgroundColor: '#30165B' }}></SafeAreaView>

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      async (res) => {
        if (!res.assets) return

        setIsUploading(true)

        // 먼저 업로드
        const asset = res.assets[0]
        const ext = asset.fileName?.split('.').pop()
        const reference = storage().ref(`/images//profile/${me.id}.${ext}`)

        if (Platform.OS === 'android' && asset.base64) {
          await reference.putString(asset.base64, 'base64', {
            contentType: asset.type,
          })
        } else if (Platform.OS === 'ios' && asset.uri) {
          await reference.putFile(asset.uri)
        }

        // 아바타 이미지를 바꿔준다
        setAvatarImg(res.assets?.[0].uri ?? '')

        setIsUploading(false)
      }
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <Text>MyInfo</Text>

      <View>
        <Text style={styles.title}>You're Logged In</Text>
        <Pressable onPress={onSelectImage}>
          {isUploading ? (
            <View style={styles.image}>
              <ActivityIndicator style={{ top: 75 }} />
            </View>
          ) : (
            <Image source={{ uri: avatarImg }} style={styles.image} />
          )}
        </Pressable>
        <Text style={styles.text}>{me?.displayName}</Text>
        <Text style={styles.text}>{me?.email}</Text>
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
          AsyncStorage.clear()
          Alert.alert('스토리지를 비웠어요')
        }}
      />

      <View style={{ marginTop: 20 }} />
      <Button
        title='@saw/welcome'
        onPress={() => {
          AsyncStorage.getItem('@saw/welcome').then((res) => Alert.alert(res ?? 'null이라네'))
        }}
      />
    </SafeAreaView>
  )
}

export default MyInfo
