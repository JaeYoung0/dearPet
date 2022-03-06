import React from 'react'
import { Pressable, ActivityIndicator } from 'react-native'
import * as S from './Avatar.style'
import useAvatar from './useAvatar'
import { userStatus } from '@/modules/user/atoms'
import { useRecoilValue } from 'recoil'
import LoadingIndicator from '../LoadingIndicator'
function Avatar() {
  const me = useRecoilValue(userStatus)

  const { onSelectImage, isUploading } = useAvatar()

  if (!me) return <LoadingIndicator />

  return (
    <Pressable onPress={onSelectImage}>
      {isUploading ? <ActivityIndicator style={{ top: 75 }} /> : <S.Img source={{ uri: me.photoURL }} />}
    </Pressable>
  )
}

export default Avatar
