import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, Text, View } from 'react-native'
import useAuth from './hooks/useAuth'
import * as S from './Login.style'
import MyIcons from '@/components/MyIcons'
import EmailLogin from './components/EmailLogin'
import LoginButton from './components/LoginButton'
import LoadingIndicator from '@/components/LoadingIndicator'

function LoginScreen() {
  const [mainLogin, setMainLogin] = useState(true)
  const toggleScreen = () => setMainLogin(!mainLogin)
  const { me, isLoading, kakaoLogin, googleLogin } = useAuth()

  if (isLoading) return <LoadingIndicator type='full' />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.BackVideo source={require('@assets/videos/login_bg_new.mp4')} repeat resizeMode='cover' rate={0.3} />
      <S.Backdrop />

      {!me && !mainLogin && (
        <Pressable style={{ position: 'absolute', top: 25, left: 25 }} onPress={toggleScreen}>
          <MyIcons name='Arrow' />
        </Pressable>
      )}

      {!me && mainLogin && (
        <View style={{ flex: 1, padding: 55, justifyContent: 'flex-end', paddingBottom: 100 }}>
          <LoginButton type='kakao' onClick={kakaoLogin} />
          <LoginButton type='etc' onClick={toggleScreen} />
        </View>
      )}

      {!me && !mainLogin && (
        <View style={{ flex: 1, padding: 55, justifyContent: 'center' }}>
          <View>
            <EmailLogin />
          </View>
          <S.Divider />
          <View>
            <LoginButton type='google' onClick={googleLogin} />
            <LoginButton
              type='apple'
              onClick={() => {
                console.log('apple login')
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

export default LoginScreen
