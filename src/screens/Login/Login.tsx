import React, { useEffect, useState } from 'react'
import { Alert, Pressable, View } from 'react-native'
import useAuth from './hooks/useAuth'
import * as S from './Login.style'
import MyIcons from '@/components/MyIcons'
import EmailLogin from './components/EmailLogin'
import LoginButton from './components/LoginButton'
import LoadingIndicator from '@/components/LoadingIndicator'
import Layout from '@/components/Layout'
import { useModals } from '@/modules/modals/atoms'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SofiaText from '@/components/SofiaText'

function Background() {
  return (
    <>
      <S.BackVideo source={require('@assets/videos/login_bg_new.mp4')} repeat resizeMode='cover' rate={0.3} />
      <S.Backdrop />
    </>
  )
}

function LoginScreen() {
  const [mainLogin, setMainLogin] = useState(true)
  const toggleScreen = () => setMainLogin(!mainLogin)
  const { me, isLoading, kakaoLogin, googleLogin } = useAuth()

  const { openModal, closeAll } = useModals()

  useEffect(() => {
    closeAll()
    openModal({
      type: 'BasicModal',
      title: 'wow',
      cancelText: 'canel',
      onCancel: closeAll,
      confirmText: '확인',
      onConfirm: () => {
        Alert.alert('확인')
        closeAll()
      },
    })
  }, [])

  if (me) return null

  if (isLoading) return <LoadingIndicator type='full' />

  if (mainLogin)
    return (
      <Layout>
        <Background />
        <View style={{ flex: 1, padding: 55, justifyContent: 'flex-end', paddingBottom: 100 }}>
          <LoginButton type='kakao' onClick={kakaoLogin} />
          <LoginButton type='etc' onClick={toggleScreen} />
        </View>
      </Layout>
    )

  return (
    <Layout style={{ padding: 55, justifyContent: 'center' }}>
      <Background />

      <Pressable style={{ position: 'absolute', top: 26, left: 26, zIndex: 100 }} onPress={toggleScreen}>
        <MyIcons name='Arrow' />
      </Pressable>

      <EmailLogin />

      <S.Divider />

      <LoginButton type='google' onClick={googleLogin} />
      <LoginButton
        type='apple'
        onClick={() => {
          Alert.alert('구현 중입니다.')
        }}
      />
      <S.TestButton
        activeOpacity={0.7}
        onPress={() => {
          openModal({
            type: 'BasicModal',
            title: '편지를 보내시겠어요?',
            // content: '어쩌고저쩌고 쏼라입니다.',
            cancelText: '취소',
            confirmText: '확인',
            onConfirm: closeAll,
          })
        }}
      >
        <SofiaText style={{ color: '#000' }}>Modal Test</SofiaText>
      </S.TestButton>
    </Layout>
  )
}

export default LoginScreen
