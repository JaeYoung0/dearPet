import Layout from '@/components/Layout'
import React from 'react'
import { Alert, View } from 'react-native'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, UseFormHandleSubmit } from 'react-hook-form'
import Header from '@/components/Header'
import * as S from './SignUp.style'
import Input from '@/components/Form/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema } from '@/components/Form/schema'
import auth from '@react-native-firebase/auth'
import { isSignInError } from '../Login/errorHandler'

function SignUpHeader() {
  return <Header back title='회원가입' />
}

type FormValues = {
  displayName: string
  email: string
  password: string
  passwordCheck: string
}

function SignUp() {
  const { ...methods } = useForm<FormValues>({
    resolver: yupResolver(signUpSchema),
    // mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const { displayName, email, password } = data

      const credential = await auth().createUserWithEmailAndPassword(email, password)
      const createdUser = credential.user
      await auth().currentUser?.sendEmailVerification()
      Alert.alert('이메일에서 인증하시면 회원가입이 완료됩니다.')

      console.log('@@createdUser', createdUser)
    } catch (error) {
      if (isSignInError(error)) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!')
          Alert.alert('이미 사용하고 있는 이메일입니다!')
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!')
        }
      }

      console.error(error)
    }
  }
  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    console.log(errors)
  }

  return (
    <Layout>
      <View>
        <SignUpHeader />
        <S.Container style={{ padding: 20 }}>
          <FormProvider {...methods}>
            <Input name='displayName' label='이름' placeholder='반려동물의 이름을 입력해주세요.' />
            <Input name='email' label='Email' placeholder='이메일을 입력해주세요.' keyboardType='email-address' />
            <Input name='password' label='비밀번호' placeholder='비밀번호를 입력해주세요.' secureTextEntry />
            <Input
              name='passwordCheck'
              label='비밀번호 확인'
              placeholder='비밀번호를 다시 입력해주세요.'
              secureTextEntry
            />
          </FormProvider>
        </S.Container>
        <S.TouchableWrapper style={{ padding: 20 }}>
          <S.SumbmitTouchable containerStyle={{ width: '100%' }} onPress={methods.handleSubmit(onSubmit, onError)}>
            <S.SubmitText>동의하고 회원가입</S.SubmitText>
          </S.SumbmitTouchable>
        </S.TouchableWrapper>
      </View>
    </Layout>
  )
}

export default SignUp
