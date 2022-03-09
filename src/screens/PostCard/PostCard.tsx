import Header from '@/components/Header'
import MyIcons from '@/components/MyIcons'
import useCustomNavi from '@/hooks/useCustomNavi'
import usePosts from '@/modules/posts/usePosts'
import { useRoute, NavigatorScreenParams } from '@react-navigation/native'
import React, { useRef } from 'react'
import {
  Image,
  Pressable,
  Text,
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  TextBase,
  Dimensions,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RouteProps, ScreenParams } from '@/screens/type'
import * as S from './PostCard.style'
import { deletePost } from '@/server/posts/service'
import LoadingIndicator from '@/components/LoadingIndicator'
import useRefreshByUser from '@/hooks/useRefreshByUser'

function PostCard() {
  type WOW = NavigatorScreenParams<ScreenParams['PostCard']>

  const route = useRoute<RouteProps['PostCard']>()
  const postId = route.params.postId
  const { data: posts } = usePosts()
  const post = posts?.find((item) => item.id === postId)

  const animation = useRef(new Animated.Value(0)).current

  const openModal = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const closeModal = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const navi = useCustomNavi()

  const screenHeight = Dimensions.get('window').height

  const { refetch } = usePosts()
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)

  if (!post || isRefetchingByUser) return <LoadingIndicator />

  return (
    <S.ScreenContainer>
      <View style={{ marginBottom: 10 }}>
        <Header
          back
          title='편지보기'
          Icons={[
            <Pressable
              style={{ width: '100%' }}
              onPress={() => {
                openModal()
              }}
            >
              <MyIcons name='Hamburger' />
            </Pressable>,
          ]}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text>{post?.title}</Text>
        <Text>{post?.content}</Text>
        <Image style={{ width: 150, height: 150 }} source={{ uri: post?.photoURL[0] }} />
      </View>

      {/* FIXME: BottomModal로 뽑아내기, Bottom navigation 덮어버리게 수정하기 */}
      <S.Backdrop
        style={{
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 0.01],
                outputRange: [screenHeight, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
          opacity: animation.interpolate({
            inputRange: [0.01, 0.5],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        }}
      />
      <Animated.View
        style={{
          backgroundColor: '#FFF',
          marginHorizontal: 10,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          minHeight: 80,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,

          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0.01, 1],
                outputRange: [Dimensions.get('window').height, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <TouchableOpacity onPress={closeModal}>
          <Text style={{ fontSize: 20, color: '#000000' }}>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await deletePost({ postId: post.id })
            await refetchByUser()
            navi.goBack()
          }}
        >
          <Text style={{ fontSize: 20, color: '#c82424' }}>삭제하기</Text>
        </TouchableOpacity>
      </Animated.View>
    </S.ScreenContainer>
  )
}

export default PostCard
