import SofiaText from '@/components/SofiaText'
import React, { useRef } from 'react'
import { useWindowDimensions, Pressable, Alert, View } from 'react-native'
import Layout from '@/components/Layout'
import Carousel from 'react-native-snap-carousel'
import * as S from './FeedBase.style'
import { horizontalScale, verticalScale } from '@/utils/adjustSize'
import useCustomNavi from '@/hooks/useCustomNavi'
import { FlatList } from 'react-native-gesture-handler'
import { PostModel } from '@/server/posts/model'
import ImageCard from '@/components/ImageCard'

import { MessageItem, FEED_HEALING_DATA } from '@/navigation/Feed/data'
import usePosts from '@/modules/posts/usePosts'

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
  const navigation = useCustomNavi()

  const { data: allPosts, refetch, isLoading, isFetching, error } = usePosts()

  const renderPost = ({ item, index }: { item: PostModel; index: number }) => {
    return (
      <Pressable onPress={() => navigation.navigate('PostCard', { postId: item.id })}>
        <ImageCard key={item.id} {...item} />
      </Pressable>
    )
  }

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <HealingProcess />
            <SofiaText
              weight={600}
              style={{ color: '#fff', fontSize: 18, padding: 20, paddingBottom: 0 }}
            >{`새로 도착한 편지 >`}</SofiaText>
          </>
        }
        numColumns={2}
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
        data={allPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={1}
      />
    </View>
  )
}

function Feed() {
  return (
    <Layout style={{ backgroundColor: '#13141a', padding: 0 }}>
      <LetterFeed />
    </Layout>
  )
}

export default Feed
