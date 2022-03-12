import useCustomNavi from '@/hooks/useCustomNavi'
import React from 'react'
import { View, Text, Pressable, Alert } from 'react-native'
import * as S from './EmailLogin.style'
import auth from '@react-native-firebase/auth'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import Input from '@/components/Form/Input'
import { handleEmailLoginError } from '../../errorHandler'
import { yupResolver } from '@hookform/resolvers/yup'
import { emailLoginSchema } from '@/components/Form/schema'

type FormValues = {
  email: string
  password: string
}

export default function EmailLogin() {
  const { ...methods } = useForm<FormValues>({
    resolver: yupResolver(emailLoginSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const { email, password } = data
      const cred = await auth().signInWithEmailAndPassword(email, password)
      const user = cred.user
      console.log('@@user', cred.user)
      const isEmailVerified = cred.user.emailVerified
      if (!isEmailVerified) {
        return Alert.alert(`${user.email}로 발송된 인증용 메일을 확인해주세요.`)
      }
    } catch (error) {
      handleEmailLoginError(error)
    }
  }
  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    console.log('@@onError', errors)
  }

  const navi = useCustomNavi()
  return (
    <>
      <S.Container>
        <FormProvider {...methods}>
          <Input name='email' label='Email' placeholder='이메일을 입력해주세요.' keyboardType='email-address' />
          <Input name='password' label='비밀번호' placeholder='비밀번호를 입력해주세요.' secureTextEntry />
        </FormProvider>
      </S.Container>

      <S.LoginTouchable onPress={methods.handleSubmit(onSubmit, onError)}>
        <S.LoginText>로그인</S.LoginText>
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
