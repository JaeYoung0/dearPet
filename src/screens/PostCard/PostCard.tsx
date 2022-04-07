import Header from '@/components/Header'
import MyIcons from '@/components/MyIcons'
import useCustomNavi from '@/hooks/useCustomNavi'
import usePosts from '@/modules/posts/usePosts'
import { useRoute } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import * as PostsService from '@/server/posts/service'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState, useCallback } from 'react'
import { Pressable, View, Keyboard, Dimensions, Alert } from 'react-native'
import useAnimation from '@/hooks/useAnimation'
import AssetUploader from '@/components/AssetUploader'
import { RouteProps } from '@/screens/type'
import * as S from './PostCard.style'
import { deletePost } from '@/server/posts/service'
import LoadingIndicator from '@/components/LoadingIndicator'
import useRefreshByUser from '@/hooks/useRefreshByUser'
import Layout from '@/components/Layout'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import BasicModal from '@/components/Modals/BasicModal'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, UseFormHandleSubmit } from 'react-hook-form'
import useUploadImages from '@/hooks/useUploadImages'
import { useUploaderState } from '@/modules/uploader/atom'
import { useMeState } from '@/modules/user/atoms'
import GestureRecognizer from 'react-native-swipe-gestures'

type FormValues = {
  title: string
  content: string
}

function PostCard() {
  const navigation = useCustomNavi()

  const { me } = useMeState()
  const route = useRoute<RouteProps['PostCard']>()
  const postId = route.params.postId

  const { data: posts } = usePosts()
  const post = posts?.find((item) => item.id === postId)

  const [mode, setMode] = useState<'read' | 'edit'>(() => (post ? 'read' : 'edit'))
  const [modalVisible, setModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { setUploaderState, uploaderState } = useUploaderState()

  const { uploadImages } = useUploadImages({
    path: '/images/post',
  })
  const { ...methods } = useForm<FormValues>()
  const backSideTitle = methods.getValues('title')

  const { goValueOf, animation } = useAnimation()

  // FIXME: Modal 분리
  // const animation = useRef(new Animated.Value(0)).current

  // const openModal = () => {
  //   Animated.timing(animation, {
  //     toValue: 1,
  //     duration: 300,
  //     useNativeDriver: true,
  //   }).start()
  // }

  // const closeModal = () => {
  //   Animated.timing(animation, {
  //     toValue: 0,
  //     duration: 300,
  //     useNativeDriver: true,
  //   }).start()
  // }

  const navi = useCustomNavi()

  const screenHeight = Dimensions.get('window').height

  const { refetch } = usePosts()
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)

  const [rotation, setRotation] = useState(0)

  const flipLetterPaper = (direction: 'right' | 'left') => {
    if (direction === 'right') {
      goValueOf({ toValue: rotation + 1, duration: 500 })
      setRotation(rotation + 1)
    } else if (direction === 'left') {
      goValueOf({ toValue: rotation - 1, duration: 500 })
      setRotation(rotation - 1)
    }

    Keyboard.dismiss()
  }

  useFocusEffect(
    useCallback(() => {
      methods.setValue('title', post?.title ?? '')
      methods.setValue('content', post?.content ?? '')
      flipLetterPaper('right')

      return () => {
        setUploaderState(null)
      }
    }, [])
  )

  if (!me) return null

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)
    try {
      const photoURL = await uploadImages()

      const { title, content } = data

      if (!photoURL) return
      if (!title) {
        return methods.setError('title', { message: '제목을 공백으로 제출할 수 없습니다.' })
      }
      if (!content) {
        return methods.setError('content', { message: '내용을 공백으로 제출할 수 없습니다.' })
      }
      await PostsService.createPost({ user: me, title, content, photoURL })
      setUploaderState(null)
      await refetch()
      navigation.goBack()
    } catch (error) {
      console.error('@@onSubmit error', error)
    } finally {
      setIsLoading(false)
    }
  }

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    console.log('@@errors', errors)
  }

  const swipeFromLeftOpen = () => {
    Alert.alert('Swipe from left')
  }
  const swipeFromRightOpen = () => {
    Alert.alert('Swipe from right')
  }

  if (isLoading || isRefetchingByUser) return <LoadingIndicator type={isLoading ? 'full' : 'basic'} />

  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 10 }}>
          <Header
            back
            title={mode === 'read' ? '편지보기' : '편지작성'}
            Icons={[
              <Pressable
                onPress={() => {
                  if (mode === 'read') {
                    setMode('edit')
                  } else {
                    setModalVisible(true)
                  }
                }}
                style={{
                  width: 44,
                  height: 44,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {mode === 'read' && <FontAwesomeIcon name='pencil-square-o' size={25} color='#fff' />}
                {mode === 'edit' && <OcticonsIcon name='paper-airplane' size={25} color='#fff' />}
              </Pressable>,

              <Pressable
                style={{
                  width: 44,
                  height: 44,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  // openModal()
                }}
              >
                <View style={{ width: 24, height: 24 }}>
                  <MyIcons name='Hamburger' stretch />
                </View>
              </Pressable>,
            ]}
          />
        </View>

        <GestureRecognizer
          style={{ flex: 1 }}
          onSwipeRight={() => {
            flipLetterPaper('right')
          }}
          onSwipeLeft={() => {
            flipLetterPaper('left')
          }}
        >
          <FormProvider {...methods}>
            {/* FrontSide */}
            <S.AnimatedView
              style={{
                transform: [
                  {
                    rotateY: animation.interpolate({
                      inputRange: [rotation, rotation + 1],
                      outputRange: [`${rotation * 180}deg`, `${(rotation + 1) * 180}deg`],
                    }),
                  },
                ],
                zIndex: rotation % 2 === 0 ? 1 : 0,
              }}
            >
              <S.LetterBg source={require('@assets/images/letter_bg.png')} />
              <S.LetterBody>
                <S.MetaWrapper>
                  <S.MetaText>Dear. {me?.displayName}</S.MetaText>
                  {/* FIXME: 몇번째로 작성한 post인지? */}
                  <S.MetaText>01</S.MetaText>
                </S.MetaWrapper>

                <S.FormWrapper style={{ flex: 1 }}>
                  <S.TitleInput
                    name='title'
                    placeholder='제목을 입력해주세요.'
                    placeholderTextColor='#000000'
                    editable={mode === 'edit' ? true : false}
                  />
                  <S.ContentInput
                    name='content'
                    multiline
                    placeholder='내용을 입력해주세요.'
                    placeholderTextColor='#000000'
                    textAlignVertical='top'
                    editable={mode === 'edit' ? true : false}
                  />
                </S.FormWrapper>
              </S.LetterBody>
            </S.AnimatedView>

            {/* BackSide 편지 뒷면 */}
            <S.AnimatedView
              style={{
                transform: [
                  {
                    rotateY: animation.interpolate({
                      inputRange: [rotation, rotation + 1],
                      outputRange: [`${(rotation + 1) * 180}deg`, `${(rotation + 2) * 180}deg`],
                    }),
                  },
                ],
              }}
            >
              <S.LetterBg source={require('@assets/images/letter_bg.png')} />
              <S.LetterBody style={{ padding: 25, paddingTop: 30 }}>
                {post?.photoURL[0] ? (
                  <View style={{ flex: 5 }}>
                    <FastImage style={{ width: '100%', height: '100%' }} source={{ uri: post?.photoURL[0] }} />
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 5,
                      borderColor: '#999999',
                      borderWidth: 2,
                      borderStyle: 'dashed',
                      marginBottom: 10,
                    }}
                  >
                    <AssetUploader />
                  </View>
                )}

                <View style={{ flex: 2 }}>
                  <S.MetaWrapper style={{ padding: 0, marginBottom: 10 }}>
                    <S.MetaText style={{ fontSize: 12 }}>{me?.displayName}에게 보내는 1번째 편지</S.MetaText>
                    <S.MetaText style={{ fontSize: 12 }}>2022/03/16</S.MetaText>
                  </S.MetaWrapper>

                  <S.BackSideTitle>{backSideTitle}</S.BackSideTitle>
                </View>
              </S.LetterBody>
              <View style={{ position: 'absolute', bottom: 10, right: 10, width: 120, height: 100 }}>
                <MyIcons name='Stamp' stretch />
              </View>
            </S.AnimatedView>
          </FormProvider>
        </GestureRecognizer>

        {/* FIXME: BottomModal로 뽑아내기, Bottom navigation 덮어버리게 수정하기 */}
        {/* <S.Backdrop
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
        </Animated.View> */}

        <BasicModal
          visible={modalVisible}
          content={`편지를 보낼까요 ?`}
          cancelText='취소'
          onCancel={() => {
            setModalVisible(false)
          }}
          confirmText='전송'
          onConfirm={() => {
            setModalVisible(false)

            methods.handleSubmit(onSubmit, onError)()
          }}
        />
      </View>
    </Layout>
  )
}

export default PostCard
