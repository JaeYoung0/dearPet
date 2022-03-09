import React, { useEffect } from 'react'
import Avatar from '@/components/Avatar'
import { Alert, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as S from './MyFeed.style'

import { userStatus } from '@/modules/user/atoms'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import useCustomNavi from '@/hooks/useCustomNavi'
import useRefreshByUser from '@/hooks/useRefreshByUser'
import useRefreshOnFocus from '@/hooks/useRefreshOnFocus'
import MyIcons from '@/components/MyIcons'
import PostThumbnail from '@/components/PostThumbnail'
import usePosts from '@/modules/posts/usePosts'
import LoadingIndicator from '@/components/LoadingIndicator'

function MyFeed() {
  const me = useRecoilValue(userStatus)

  const navigation = useCustomNavi()

  const { data: myPosts, refetch, isLoading, isFetching, error } = usePosts()
  // const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)

  // 여기서 refetch되면 re-render됨
  // useRefreshOnFocus(refetch)

  if (isLoading || error) return <LoadingIndicator />

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222222', paddingTop: 50 }}>
      <Pressable
        style={{ position: 'absolute', top: 15, right: 55 }}
        onPress={() => navigation.navigate('WritePost', {})}
      >
        <MyIcons name='SquarePlus' />
      </Pressable>

      <Pressable style={{ position: 'absolute', top: 20, right: 25 }}>
        <MyIcons name='Hamburger' />
      </Pressable>

      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <Avatar />
      </View>

      <View style={{ marginBottom: 30 }}>
        <S.DisplayName>{me?.displayName}</S.DisplayName>
        <S.IntroductionText>{`나에게 조건없는 사랑을 알려준 우리 가족 로이.
12년간 나와 함께해줘서, 내 삶을 바꿔줘서 고마워.
언제나 내 마음속에 로이가 함께할거야.
잊지 않을거야. 약속할게. 사랑해.`}</S.IntroductionText>
      </View>

      <S.ScrollView style={{ padding: 20 }}>
        {myPosts?.map((item, idx) => (
          <Pressable onPress={() => navigation.navigate('PostCard', { postId: item.id })}>
            <PostThumbnail key={item.id} post={item} order={idx} />
          </Pressable>
        ))}
      </S.ScrollView>
    </SafeAreaView>
  )
}

export default MyFeed
