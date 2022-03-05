import React from 'react'
import { userStatus } from '@/modules/user/atoms'
import { useRecoilValue } from 'recoil'
import { Pressable, ActivityIndicator, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as S from './Avatar.style'
import useAvatar from './useAvatar'

function Avatar() {
  const me = useRecoilValue(userStatus)
  const { isUploading, onSelectImage } = useAvatar()

  if (!me) return <SafeAreaView style={{ flex: 1, backgroundColor: '#30165B' }}></SafeAreaView>

  return (
    <Pressable onPress={onSelectImage}>
      {isUploading ? <ActivityIndicator style={{ top: 75 }} /> : <S.Img source={{ uri: me.photoURL }} />}
    </Pressable>
  )
}

export default Avatar
