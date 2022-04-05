import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as S from './LoadingIndicator.style'
// FIXME: 강아지 발자국

type Props = {
  type?: 'basic' | 'full'
}

export default function LoadingIndicator({ type = 'basic' }: Props) {
  if (type === 'basic')
    return (
      <S.BasicWrapper>
        <ActivityIndicator size='large' />
      </S.BasicWrapper>
    )

  if (type === 'full')
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <S.BackgroundImg source={require('@assets/images/loading_bg.png')} />

        <S.ContentWrapper>
          <S.PetwingsGif source={require('@assets/images/petwings.gif')} />
          <S.Text>Loading ...</S.Text>
        </S.ContentWrapper>
      </SafeAreaView>
    )

  return null
}
