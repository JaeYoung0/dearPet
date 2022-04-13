import useCustomNavi from '@/hooks/useCustomNavi'
import React, { useState } from 'react'
import { View, Text, Pressable, Alert } from 'react-native'
import * as S from './EmailLogin.style'
import auth from '@react-native-firebase/auth'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import Input from '@/components/Form/Input'
import { handleEmailLoginError } from '../../errorHandler'
import { yupResolver } from '@hookform/resolvers/yup'
import { emailLoginSchema } from '@/components/Form/schema'
import { useMeState } from '@/modules/user/atoms'
import useAuth from '../../hooks/useAuth'
import LoadingIndicator from '@/components/LoadingIndicator'

type FormValues = {
  email: string
  password: string
}

export default function EmailLogin() {
  const { ...methods } = useForm<FormValues>({
    resolver: yupResolver(emailLoginSchema),
  })

  const { emailLogin, setIsLoading, isLoading } = useAuth()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)
    try {
      const { email, password } = data
      const cred = await auth().signInWithEmailAndPassword(email, password)
      const user = cred.user
      console.log('@@user', cred.user.uid)

      const isEmailVerified = cred.user.emailVerified
      if (!isEmailVerified) {
        return Alert.alert(`${user.email}로 발송된 인증용 메일을 확인해주세요.`)
      } else {
        emailLogin(user.uid)
      }
    } catch (error) {
      handleEmailLoginError(error)
    } finally {
      setIsLoading(false)
    }
  }
  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    console.log('@@onError', errors)
  }

  const navi = useCustomNavi()

  if (isLoading) return <LoadingIndicator type='full' />

  return (
    <>
      <S.Container>
        <FormProvider {...methods}>
          <Input name='email' label='이메일' placeholder='이메일을 입력해주세요.' keyboardType='email-address' />
          <View style={{ marginBottom: 20 }} />
          <Input name='password' label='비밀번호' placeholder='비밀번호를 입력해주세요.' secureTextEntry />
        </FormProvider>
      </S.Container>

      <S.LoginTouchable onPress={methods.handleSubmit(onSubmit, onError)}>
        <S.LoginText weight={500}>로그인</S.LoginText>
      </S.LoginTouchable>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <S.BottomText>비밀번호를 잊으셨나요?</S.BottomText>
        <Pressable
          onPress={() => {
            navi.navigate('SignUp', {})
          }}
        >
          <S.BottomText>회원가입</S.BottomText>
        </Pressable>
      </View>
    </>
  )
}
