import CustomText from '@/components/CustomText'
import LoadingIndicator from '@/components/LoadingIndicator'
import PostThumbnail from '@/components/PostThumbnail'
import useCustomNavi from '@/hooks/useCustomNavi'
import usePosts from '@/modules/posts/usePosts'
import { PostModel } from '@/server/posts/model'
import React from 'react'
import { View, Pressable, FlatList } from 'react-native'

export default function Posts() {
  const { data: myPosts, refetch, isLoading, isFetching, error } = usePosts()
  const navi = useCustomNavi()

  const handleLoadMore = () => {
    console.log('@@handleLoadMore')
  }

  if (isLoading || error) return <LoadingIndicator />

  if (myPosts?.length === 0)
    return (
      <View>
        <CustomText style={{ color: '#fff', fontSize: 14, textAlign: 'center', marginBottom: 20, lineHeight: 20 }}>
          우측 상단 플러스 버튼을 눌러 {'\n'}편지를 써 보세요.
        </CustomText>
        <CustomText style={{ color: '#888888', fontSize: 14, textAlign: 'center', lineHeight: 20 }}>
          49일간 매일 다른 테마가 주어집니다.{'\n'} 테마에 따른 내용을 쓰셔도 좋고, {'\n'}자유롭게 쓰셔도 좋습니다.
          {'\n'}
          하고싶은 말을 다 쓰고난 뒤에는{'\n'} 미안함과 슬픔 대신 {'\n'}고마움과 추억이 자리하길 바랍니다.
        </CustomText>
      </View>
    )

  const renderPost = ({ item, index }: { item: PostModel; index: number }) => {
    return (
      <Pressable onPress={() => navi.navigate('PostCard', { postId: item.id })}>
        <PostThumbnail key={item.id} post={item} order={index} />
      </Pressable>
    )
  }

  return (
    <View style={{ padding: 20, width: '100%', height: '100%' }}>
      <FlatList
        data={myPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
      />
    </View>
  )
}
