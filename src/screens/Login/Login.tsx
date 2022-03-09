import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, Text, View } from 'react-native'
import useAuth from './useAuth'
import * as S from './Login.style'
import MyIcons from '@/components/MyIcons'

function Login() {
  const [mainLogin, setMainLogin] = useState(true)
  const toggle = () => setMainLogin(!mainLogin)
  const { me } = useAuth()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.BackVideo source={require('@assets/videos/login_bg.mp4')} repeat resizeMode='cover' />
      <S.Backdrop />

      {!me && !mainLogin && (
        <Pressable style={{ position: 'absolute', top: 30, left: 30 }} onPress={toggle}>
          <MyIcons name='Arrow' />
        </Pressable>
      )}

      {!me && mainLogin && (
        <View style={{ flex: 1, padding: 55, justifyContent: 'flex-end' }}>
          <LoginButton type='kakao' />
          <LoginButton type='etc' toggle={toggle} />
        </View>
      )}

      {!me && !mainLogin && (
        <View style={{ flex: 1, padding: 55, justifyContent: 'center' }}>
          <View>
            <PhoneNumberLogin />
          </View>

          <S.Divider />

          <View>
            <LoginButton type='naver' />
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
    <View style={{ alignItems: 'center', marginBottom: 15 }}>
      <S.LoginTouchable
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

function PhoneNumberLogin() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <S.PhoneLoginLabel>휴대폰 번호</S.PhoneLoginLabel>
      <S.PhoneLoginInput
        placeholderTextColor='#B9B9B9'
        placeholder='휴대폰 번호를 입력해주세요.'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <S.PhoneLoginLabel>비밀번호</S.PhoneLoginLabel>
      <S.PhoneLoginInput
        placeholderTextColor='#B9B9B9'
        placeholder='비밀번호를 입력해주세요.'
        value={password}
        onChangeText={setPassword}
      />

      <S.PhoneLoginTouchable>
        <Text>로그인</Text>
      </S.PhoneLoginTouchable>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>비밀번호를 잊으셨나요?</Text>
        <Text>회원가입</Text>
      </View>
    </>
  )
}

export default Login
