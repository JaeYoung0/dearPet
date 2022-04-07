import React, { useState } from 'react'
import { Pressable, View, Text, Alert } from 'react-native'
import * as S from './MyFeed.style'
import useCustomNavi from '@/hooks/useCustomNavi'
import MyIcons from '@/components/MyIcons'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import MyPosts from './components/MyPosts'
import TabProvider, { useTabContext } from '@/components/Tabs/TabContext'
import TabList from '@/components/Tabs/TabList'
import Tab from '@/components/Tabs/Tab'
import TabPanel from '@/components/Tabs/TabPanel'
import Comments from './components/Comments'
import AvatarBox from '@/components/AvatarBox'

function MyFeedHeader() {
  const navigation = useCustomNavi()
  const { tabValue } = useTabContext()

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
          onPress={() => {
            if (tabValue === 'posts') {
              navigation.navigate('PostCard', {})
            } else {
              Alert.alert('코멘트 추가는 준비 중입니다.')
            }
          }}
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

// export function Profile() {
//   const { me } = useMeState()

//   return (
//     <>
//       <View style={{ alignItems: 'center', marginBottom: 0 }}>
//         <Avatar />
//       </View>

//       <View style={{ marginBottom: 30 }}>
//         <S.DisplayName>{me?.displayName}</S.DisplayName>
//         <S.IntroductionText>{`나에게 조건없는 사랑을 알려준 우리 가족 로이.
// 12년간 나와 함께해줘서, 내 삶을 바꿔줘서 고마워.
// 언제나 내 마음속에 로이가 함께할거야.
// 잊지 않을거야. 약속할게. 사랑해.`}</S.IntroductionText>
//       </View>
//     </>
//   )
// }

export function FeedTabList() {
  const { tabValue, setTabValue } = useTabContext()

  return (
    <TabList
      onChange={(e, newValue) => {
        setTabValue(newValue)
      }}
    >
      <Tab value='posts'>
        <View style={{ width: 25, height: 25 }}>
          <MyIcons name='Envelope' focused={tabValue === 'posts'} stretch />
        </View>
      </Tab>
      <Tab value='comments'>
        <View style={{ width: 30, height: 30 }}>
          <MyIcons name='Flower' focused={tabValue === 'comments'} stretch />
        </View>
      </Tab>
    </TabList>
  )
}

function MyFeed() {
  return (
    <Layout style={{ padding: 0, backgroundColor: '#000000' }}>
      <TabProvider initialValue={'posts'}>
        <View style={{ padding: 15, paddingBottom: 0 }}>
          <MyFeedHeader />
        </View>
        <View style={{ marginBottom: 10, marginTop: -20 }}>
          <AvatarBox />
        </View>

        <FeedTabList />

        <TabPanel value='posts'>
          <MyPosts />
        </TabPanel>
        <TabPanel value='comments'>
          <Comments />
        </TabPanel>
      </TabProvider>
    </Layout>
  )
}

export default MyFeed
