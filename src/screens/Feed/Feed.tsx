import SofiaText from '@/components/SofiaText'
import React, { useRef } from 'react'
import { useWindowDimensions, Pressable, Alert } from 'react-native'
import Layout from '@/components/Layout'
import Carousel from 'react-native-snap-carousel'
import * as S from './Feed.style'
import { horizontalScale, verticalScale } from '@/utils/adjustSize'
import { Source } from 'react-native-fast-image'

type MessageItem = {
  id: number
  imgUrl: Source
}

const DATA: MessageItem[] = [
  {
    id: 1,
    imgUrl: require('@assets/images/message/message_1.png'),
  },
  {
    id: 2,
    imgUrl: require('@assets/images/message/message_2.png'),
  },
  {
    id: 3,
    imgUrl: require('@assets/images/message/message_3.png'),
  },
  {
    id: 4,
    imgUrl: require('@assets/images/message/message_4.png'),
  },
  {
    id: 5,
    imgUrl: require('@assets/images/message/message_5.png'),
  },
  {
    id: 6,
    imgUrl: require('@assets/images/message/message_6.png'),
  },
  {
    id: 7,
    imgUrl: require('@assets/images/message/message_7.png'),
  },
  {
    id: 8,
    imgUrl: require('@assets/images/message/message_8.png'),
  },
  {
    id: 9,
    imgUrl: require('@assets/images/message/message_9.png'),
  },
  {
    id: 10,
    imgUrl: require('@assets/images/message/message_10.png'),
  },
  {
    id: 11,
    imgUrl: require('@assets/images/message/message_11.png'),
  },
  {
    id: 12,
    imgUrl: require('@assets/images/message/message_12.png'),
  },
]

function Feed() {
  const { width } = useWindowDimensions()
  const carouselRef = useRef<Carousel<any> | null>(null)

  const handlePress = (index: number) => {
    Alert.alert(`${index}`)
    carouselRef.current?.snapToItem(index)
  }

  const renderItem = ({ item, index }: { item: MessageItem; index: number }) => {
    return (
      <Pressable onPress={() => handlePress(index)}>
        <S.MessageImg source={DATA[Number(index)]?.imgUrl} />
      </Pressable>
    )
  }

  return (
    <Layout style={{ backgroundColor: '#13141a', padding: 0 }}>
      <SofiaText weight={600} style={{ color: '#fff', fontSize: 18, padding: 20 }}>{`치유의 시간 >`}</SofiaText>
      <Carousel
        ref={carouselRef}
        data={DATA}
        itemWidth={horizontalScale(150)}
        itemHeight={verticalScale(229)}
        sliderWidth={width}
        sliderHeight={width}
        hasParallaxImages={true}
        renderItem={renderItem}
      />
    </Layout>
  )
}

export default Feed
