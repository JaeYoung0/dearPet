import React from 'react'
import Avatar from '@/components/Avatar'
import { Pressable, View } from 'react-native'
import * as S from './MyFeed.style'
import { useMeState } from '@/modules/user/atoms'
import useCustomNavi from '@/hooks/useCustomNavi'
import MyIcons from '@/components/MyIcons'
import Tabs from './components/Tabs'
import Header from '@/components/Header'
import Layout from '@/components/Layout'

function MyFeed() {
  const { me } = useMeState()

  const navigation = useCustomNavi()

  // const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)

  // 여기서 refetch되면 re-render됨
  // useRefreshOnFocus(refetch)

  return (
    <Layout style={{ padding: 0 }}>
      <View style={{ flex: 1 }}>
        <S.BgImg source={require('@assets/images/post_bg2.jpeg')} />
        <View style={{ padding: 15, paddingBottom: 0 }}>
          <Header
            Icons={[
              <Pressable
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 44,
                  height: 44,
                }}
                onPress={() => navigation.navigate('WritePost', {})}
              >
                <View style={{ width: 24, height: 24 }}>
                  <MyIcons name='SquarePlus' stretch />
                </View>
              </Pressable>,

              <Pressable
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 44,
                  height: 44,
                }}
              >
                <View style={{ width: 24, height: 24 }}>
                  <MyIcons name='Hamburger' stretch />
                </View>
              </Pressable>,
            ]}
          />
        </View>

        <View style={{ alignItems: 'center', marginBottom: 0 }}>
          <Avatar />
        </View>

        <View style={{ marginBottom: 30 }}>
          <S.DisplayName>{me?.displayName}</S.DisplayName>

          <S.IntroductionText>{`나에게 조건없는 사랑을 알려준 우리 가족 로이.
12년간 나와 함께해줘서, 내 삶을 바꿔줘서 고마워.
언제나 내 마음속에 로이가 함께할거야.
잊지 않을거야. 약속할게. 사랑해.`}</S.IntroductionText>
        </View>

        <Tabs />
      </View>
    </Layout>
  )
}

export default MyFeed
