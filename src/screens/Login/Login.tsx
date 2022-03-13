import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, Text, View } from 'react-native'
import useAuth from './useAuth'
import * as S from './Login.style'
import MyIcons from '@/components/MyIcons'
import EmailLogin from './components/EmailLogin'

function LoginScreen() {
  const [mainLogin, setMainLogin] = useState(true)
  const toggle = () => setMainLogin(!mainLogin)
  const { me } = useAuth()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.BackVideo source={require('@assets/videos/login_bg_new.mp4')} repeat resizeMode='cover' rate={0.3} />
      <S.Backdrop />

      {/* {!me && !mainLogin && (
        <Pressable style={{ position: 'absolute', top: 30, left: 30 }} onPress={toggle}>
          <MyIcons name='Arrow' />
        </Pressable>
      )} */}

      {!me && !mainLogin && (
        <Pressable style={{ position: 'absolute', top: 25, left: 25 }} onPress={toggle}>
          <MyIcons name='Arrow' />
        </Pressable>
      )}

      {!me && mainLogin && (
        <View style={{ flex: 1, padding: 55, justifyContent: 'flex-end', paddingBottom: 100 }}>
          <LoginButton type='kakao' />
          <LoginButton type='etc' toggle={toggle} />
        </View>
      )}

      {!me && !mainLogin && (
        <View style={{ flex: 1, padding: 55, justifyContent: 'center' }}>
          <View>
            <EmailLogin />
          </View>

          <S.Divider />

          <View>
            <LoginButton type='google' />
            <LoginButton type='apple' />
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

type LoginButtonProps = {
  type: 'kakao' | 'naver' | 'google' | 'apple' | 'etc'
  toggle?: () => void
}

function LoginButton({ type, toggle }: LoginButtonProps) {
  const { socialLogin } = useAuth()

  const text = {
    kakao: '카카오로 시작하기',
    naver: '네이버로 시작하기',
    google: '구글로 시작하기',
    apple: '애플로 시작하기',
    etc: '다른방법으로 시작하기',
  }

  return (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <S.LoginTouchable
        activeOpacity={0.7}
        style={{ backgroundColor: type === 'kakao' ? '#F4DC34' : '#FFF' }}
        onPress={() => {
          if (type === 'etc') {
            toggle?.()
          } else {
            socialLogin[type]()
          }
        }}
      >
        {type === 'kakao' && <S.Logo source={require('@assets/images/kakao.png')} />}
        {type === 'naver' && <S.Logo source={require('@assets/images/naver.png')} />}
        {type === 'google' && <S.Logo source={require('@assets/images/google.png')} />}
        {type === 'apple' && <S.Logo source={require('@assets/images/apple.png')} />}
        <S.LogoText>{text[type]}</S.LogoText>
      </S.LoginTouchable>
    </View>
  )
}

export default LoginScreen
