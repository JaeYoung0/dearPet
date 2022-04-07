import CustomText from '@/components/CustomText'
import ImageCard from '@/components/ImageCard'
import LoadingIndicator from '@/components/LoadingIndicator'
import useCustomNavi from '@/hooks/useCustomNavi'
import usePosts from '@/modules/posts/usePosts'
import { useMeState } from '@/modules/user/atoms'
import { PostModel } from '@/server/posts/model'
import React, { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function MyPosts() {
  const { me } = useMeState()
  const { data: myPosts, refetch, isLoading, isFetching, error } = usePosts(me?.licenseId)
  const navi = useCustomNavi()

  const renderPost = ({ item, index }: { item: PostModel; index: number }) => {
    return (
      <Pressable onPress={() => navi.navigate('PostCard', { postId: item.id })}>
        <ImageCard key={item.id} {...item} />
        {/* <PostThumbnail key={item.id} post={item} order={index} /> */}
      </Pressable>
    )
  }

  const handleLoadMore = () => {
    console.log('@@handleLoadMore')
  }

  if (isLoading || error) return <LoadingIndicator />

  if (myPosts?.length === 0)
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CustomText style={{ color: '#7E71F3', fontSize: 18, textAlign: 'center', marginBottom: 20, lineHeight: 20 }}>
          Letters to my pet
        </CustomText>
        <CustomText style={{ fontSize: 16, textAlign: 'center', lineHeight: 25 }}>
          {`별이 된 반려동물에게 아직 하고싶은 말이 남았나요?
미안함, 고마움, 사랑 그리고 잊지않겠다는 약속까지
편지로 남길 수 있는 공간입니다.
오른쪽 상단버튼을 눌러 편지를 써보세요.`}
        </CustomText>
      </View>
    )

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        numColumns={2}
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
        data={myPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
      />
    </View>
  )
}
