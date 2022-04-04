import SofiaText from '@/components/SofiaText'
import React from 'react'
import { View } from 'react-native'
import Layout from '@/components/Layout'
import Carousel from 'react-native-snap-carousel'
import * as S from './Feed.style'

type MessageItem = {
  id: number
  imgUrl: string
}

const DATA = [
  {
    id: 1,
    imgUrl: '@assets/images/message/message_1.png',
  },
  {
    id: 2,
    imgUrl: '@assets/images/message/message_2.png',
  },
  {
    id: 3,
    imgUrl: '@assets/images/message/message_3.png',
  },
  {
    id: 4,
    imgUrl: '@assets/images/message/message_4.png',
  },
  {
    id: 5,
    imgUrl: '@assets/images/message/message_5.png',
  },
  {
    id: 6,
    imgUrl: '@assets/images/message/message_6.png',
  },
  {
    id: 7,
    imgUrl: '@assets/images/message/message_7.png',
  },
  {
    id: 8,
    imgUrl: '@assets/images/message/message_8.png',
  },
  {
    id: 9,
    imgUrl: '@assets/images/message/message_9.png',
  },
  {
    id: 10,
    imgUrl: '@assets/images/message/message_10.png',
  },
  {
    id: 11,
    imgUrl: '@assets/images/message/message_11.png',
  },
  {
    id: 12,
    imgUrl: '@assets/images/message/message_12.png',
  },
]

function Feed() {
  return (
    <Layout style={{ backgroundColor: '#13141a' }}>
      <SofiaText weight={600} style={{ color: '#fff', fontSize: 18 }}>{`치유의 시간 >`}</SofiaText>
      <Carousel
        data={DATA}
        itemWidth={150}
        itemHeight={229}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 300, height: 300 }}>
              <S.MessageImg source={require('@assets/images/message/message_11.png')} />
            </View>
          )
        }}
      />
      {/* <Swiper
        loop={false}
        showsButtons={false}
        // dotStyle={styles.dot}
        // paginationStyle={{ bottom: 80 }}
      >
        <View style={{ width: '50%' }}>
          <S.MessageImg source={require('@assets/images/message/message_1.png')} />
        </View>
        <View style={{ width: '50%' }}>
          <S.MessageImg source={require('@assets/images/message/message_2.png')} />
        </View>
      </Swiper> */}
    </Layout>
  )
}

export default Feed
