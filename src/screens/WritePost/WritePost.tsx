import Header from '@/components/Header'
import MyIcons from '@/components/MyIcons'
import { createPost } from '@/server/posts/service'
import React, { useState, useCallback } from 'react'
import { Pressable, View, Keyboard } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { userStatus } from '@/modules/user/atoms'
import { useRecoilValue } from 'recoil'
import useCustomNavi from '@/hooks/useCustomNavi'
import usePosts from '@/modules/posts/usePosts'
import AssetUploader from '@/components/AssetUploader'
import { useUploaderState } from '@/modules/uploader/atom'
import useUploadImages from '@/hooks/useUploadImages'
import CustomText from '@/components/CustomText'
import Layout from '@/components/Layout'
import FastImage from 'react-native-fast-image'
import * as S from './WritePost.style'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, UseFormHandleSubmit } from 'react-hook-form'
import useAnimation from '@/hooks/useAnimation'
import LoadingIndicator from '@/components/LoadingIndicator'
import BasicModal from '@/components/Modals/BasicModal'
import OcticonsIcon from 'react-native-vector-icons/Octicons'

type FormValues = {
  title: string
  content: string
}

function WritePost() {
  const { setUploaderState, uploaderState } = useUploaderState()
  const { uploadImages } = useUploadImages({
    path: '/images/post',
  })

  const [isLoading, setIsLoading] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)

  const me = useRecoilValue(userStatus)
  const navigation = useCustomNavi()
  const { refetch } = usePosts()
  if (!me) return null

  const { ...methods } = useForm<FormValues>()

  const backSideTitle = methods.getValues('title')

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
      await createPost({ user: me, title, content, photoURL })
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

  const { goValueOf, animation } = useAnimation()
  const [rotation, setRotation] = useState(0)

  useFocusEffect(
    useCallback(() => {
      return () => setUploaderState(null)
    }, [])
  )

  if (isLoading) return <LoadingIndicator type='full' />
  return (
    <Layout style={{ padding: 15 }}>
      <View style={{ flex: 1 }}>
        <Header
          back
          title='편지쓰기'
          Icons={[
            <Pressable
              style={{
                width: 44,
                height: 44,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                goValueOf({ toValue: rotation + 1, duration: 500 })
                setRotation(rotation + 1)
                Keyboard.dismiss()
              }}
            >
              <MyIcons name='Rotation' />
            </Pressable>,

            <Pressable
              onPress={() => {
                setModalVisible(true)
              }}
              style={{
                width: 44,
                height: 44,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <OcticonsIcon name='paper-airplane' size={25} color='#fff' />
              {/* <MyIcons name='Comet' color='#fff' /> */}
            </Pressable>,
          ]}
        />

        <View style={{ flex: 1 }}>
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
                  <S.MetaText>Dear. 로이</S.MetaText>
                  <S.MetaText>01</S.MetaText>
                </S.MetaWrapper>

                <S.FormWrapper style={{ flex: 1 }}>
                  <S.TitleInput
                    name='title'
                    placeholder='제목을 입력해주세요.'
                    placeholderTextColor='#000000'
                    // rules={{ required: true }}
                  />
                  <S.ContentInput
                    name='content'
                    multiline
                    placeholder='내용을 입력해주세요.'
                    placeholderTextColor='#000000'
                    textAlignVertical='top'
                    // rules={{ required: true }}
                  />
                </S.FormWrapper>
              </S.LetterBody>
            </S.AnimatedView>

            {/* BackSide */}
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
                <View
                  style={{ flex: 5, borderColor: '#999999', borderWidth: 2, borderStyle: 'dashed', marginBottom: 10 }}
                >
                  <AssetUploader />
                </View>

                <View style={{ flex: 2 }}>
                  <S.MetaWrapper style={{ padding: 0, marginBottom: 10 }}>
                    <S.MetaText style={{ fontSize: 12 }}>로이에게 보내는 1번째 편지</S.MetaText>
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
        </View>

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

export default WritePost
