import SofiaText from '@/components/SofiaText'
import React, { useRef } from 'react'
import { useWindowDimensions, Pressable, Alert, View } from 'react-native'
import Layout from '@/components/Layout'
import Carousel from 'react-native-snap-carousel'
import * as S from './FeedBase.style'
import { horizontalScale, verticalScale } from '@/utils/adjustSize'
import useCustomNavi from '@/hooks/useCustomNavi'

import { MessageItem, HealingGuideItem, FEED_HEALING_DATA } from '@/navigation/Feed/data'

function HealingProcess() {
  const { width } = useWindowDimensions()
  const carouselRef = useRef<Carousel<any> | null>(null)
  const navigation = useCustomNavi()
  const handlePress = (index: number) => {
    navigation.navigate('HealingGuide', { healingId: index })
  }

  const renderItem = ({ item, index }: { item: MessageItem; index: number }) => {
    return (
      <Pressable onPress={() => handlePress(index)}>
        <S.MessageImg source={FEED_HEALING_DATA[Number(index)]?.imgUrl} />
      </Pressable>
    )
  }

  return (
    <View>
      <SofiaText
        weight={600}
        style={{ color: '#fff', fontSize: 18, padding: 20, paddingBottom: 0 }}
      >{`치유의 시간 >`}</SofiaText>
      <Carousel
        enableSnap={false}
        activeSlideAlignment='start'
        containerCustomStyle={{ padding: 20 }}
        ref={carouselRef}
        data={FEED_HEALING_DATA}
        itemWidth={horizontalScale(150)}
        itemHeight={verticalScale(229)}
        sliderWidth={width}
        hasParallaxImages={true}
        renderItem={renderItem}
      />
    </View>
  )
}

function LetterFeed() {
  return (
    <View>
      <SofiaText weight={600} style={{ color: '#fff', fontSize: 18, padding: 20 }}>{`새로 도착한 편지 >`}</SofiaText>
    </View>
  )
}

function Feed() {
  return (
    <Layout style={{ backgroundColor: '#13141a', padding: 0 }}>
      <HealingProcess />
      <LetterFeed />
    </Layout>
  )
}

export default Feed
