import React from 'react'
import { Pressable, ActivityIndicator, View } from 'react-native'
import * as S from './Avatar.style'
import useAvatar from './useAvatar'
import { userStatus } from '@/modules/user/atoms'
import { useRecoilValue } from 'recoil'
import LoadingIndicator from '../LoadingIndicator'
import { css } from '@emotion/native'

interface Props {
  size?: 'lg' | 'sm'
}

// FIXME: Avatar에 타인의 정보도 들어갈 수 있다.
function Avatar({ size = 'lg' }: Props) {
  const frameSize = {
    width: size === 'lg' ? 150 : 100,
    height: size === 'lg' ? 150 : 100,
  }

  const imgSize = {
    width: size === 'lg' ? 100 : 75,
    height: size === 'lg' ? 100 : 75,
  }

  const me = useRecoilValue(userStatus)

  const { onSelectImage, isUploading } = useAvatar()

  if (!me) return <LoadingIndicator />

  return (
    <Pressable onPress={onSelectImage}>
      {isUploading ? (
        <ActivityIndicator style={{ top: 75 }} />
      ) : (
        <View>
          <S.Frame source={require('@assets/images/frame.png')}>
            {me.photoURL ? (
              <S.Img
                source={{ uri: me.photoURL }}
                // FIXME: 적용안됨
                //  style={{ width: `${imgSize.width}`, height: `${imgSize.height}` }}
              />
            ) : (
              <S.PlanetImg source={require('@assets/images/planet.png')} />
            )}
          </S.Frame>
        </View>
      )}
    </Pressable>
  )
}

export default Avatar
