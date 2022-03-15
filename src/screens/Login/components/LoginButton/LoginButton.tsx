import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '@/screens/Login/hooks/useAuth'
import * as S from './LoginButton.style'

type LoginButtonProps = {
  type: 'kakao' | 'naver' | 'google' | 'apple' | 'etc'
  onClick: () => Promise<void> | void
}

export default function LoginButton({ type, onClick }: LoginButtonProps) {
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
        onPress={onClick}
      >
        {type === 'kakao' && <S.Logo source={require('@assets/images/kakao.png')} />}
        {type === 'naver' && <S.Logo source={require('@assets/images/naver.png')} />}
        {type === 'google' && <S.Logo source={require('@assets/images/google.png')} />}
        {type === 'apple' && <S.Logo source={require('@assets/images/apple.png')} />}
        <S.LogoText weight={500}>{text[type]}</S.LogoText>
      </S.LoginTouchable>
    </View>
  )
}
