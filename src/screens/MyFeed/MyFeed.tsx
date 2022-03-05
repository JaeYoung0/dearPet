import React from 'react'
import Avatar from '@/components/Avatar'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as S from './MyFeed.style'

import { userStatus } from '@/modules/user/atoms'
import { useRecoilValue } from 'recoil'
import useCustomNavi from '@/hooks/useCustomNavi'
import MyIcons from '@/components/MyIcons'

function MyFeed() {
  const me = useRecoilValue(userStatus)

  const navigation = useCustomNavi()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222222', paddingTop: 50 }}>
      <Pressable
        style={{ position: 'absolute', top: 15, right: 55 }}
        onPress={() => navigation.navigate('WriteLetter', {})}
      >
        <MyIcons name='SquarePlus' />
      </Pressable>

      <Pressable style={{ position: 'absolute', top: 20, right: 25 }}>
        <MyIcons name='Hamburger' />
      </Pressable>

      <View style={{ flex: 1, alignItems: 'center', marginBottom: 30 }}>
        <Avatar />
      </View>

      <View style={{ flex: 1 }}>
        <S.DisplayName>{me?.displayName}</S.DisplayName>
        <S.IntroductionText>{`나에게 조건없는 사랑을 알려준 우리 가족 로이.
12년간 나와 함께해줘서, 내 삶을 바꿔줘서 고마워.
언제나 내 마음속에 로이가 함께할거야.
잊지 않을거야. 약속할게. 사랑해.`}</S.IntroductionText>
      </View>

      <View style={{ flex: 3 }}></View>
    </SafeAreaView>
  )
}

export default MyFeed
