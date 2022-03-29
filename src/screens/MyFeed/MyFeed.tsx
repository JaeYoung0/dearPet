import React, { useState } from 'react'
import Avatar from '@/components/Avatar'
import { Pressable, View, Text } from 'react-native'
import * as S from './MyFeed.style'
import { useMeState } from '@/modules/user/atoms'
import useCustomNavi from '@/hooks/useCustomNavi'
import MyIcons from '@/components/MyIcons'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Posts from './components/Posts'
import TabProvider from '@/components/Tabs/TabContext'
import TabList from '@/components/Tabs/TabList'
import Tab from '@/components/Tabs/Tab'
import TabPanel from '@/components/Tabs/TabPanel'
import Comments from './components/Comments'
import usePosts from '@/modules/posts/usePosts'
import { ScrollView } from 'react-native-gesture-handler'

function MyFeedHeader() {
  const navigation = useCustomNavi()

  return (
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
          <View style={{ width: 22, height: 22 }}>
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
          <View style={{ width: 22, height: 22 }}>
            <MyIcons name='Hamburger' stretch />
          </View>
        </Pressable>,
      ]}
    />
  )
}

export function Profile() {
  const { me } = useMeState()

  return (
    <>
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
    </>
  )
}

export function FeedTabList() {
  const [value, setvalue] = useState('posts')
  console.log('@@value', value)

  return (
    <TabList
      onChange={(e, newValue) => {
        setvalue(newValue)
      }}
    >
      <Tab value='posts'>
        <View style={{ width: 25, height: 25 }}>
          <MyIcons name='Envelope' focused={value === 'posts'} stretch />
        </View>
      </Tab>
      <Tab value='comments'>
        <View style={{ width: 30, height: 30 }}>
          <MyIcons name='Flower' focused={value === 'comments'} stretch />
        </View>
      </Tab>
    </TabList>
  )
}

function MyFeed() {
  // const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)

  // 여기서 refetch되면 re-render됨
  // useRefreshOnFocus(refetch)

  const { data: myPosts, refetch, isLoading, isFetching, error } = usePosts()

  const [value, setvalue] = useState('posts')

  return (
    <Layout style={{ padding: 0 }}>
      <View style={{ flex: 1 }}>
        <S.BgImg source={require('@assets/images/post_bg2.jpeg')} />
        <View style={{ padding: 15, paddingBottom: 0 }}>
          <MyFeedHeader />
        </View>
        <View>
          <Profile />
        </View>

        <TabProvider initialValue={'posts'}>
          <FeedTabList />

          <TabPanel value='posts'>
            <Posts />
          </TabPanel>
          <TabPanel value='comments'>
            <Comments />
          </TabPanel>
        </TabProvider>
      </View>
    </Layout>
  )
}

export default MyFeed
