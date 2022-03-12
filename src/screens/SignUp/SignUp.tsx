import Layout from '@/components/Layout'
import React from 'react'
import { View } from 'react-native'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, UseFormHandleSubmit } from 'react-hook-form'
import Header from '@/components/Header'
import * as S from './SignUp.style'
import Input from '@/components/Form/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'

function SignUpHeader() {
  return <Header back title='회원가입' />
}

type FormValues = {
  email: string
  password: string
  passwordCheck: string
  displayName: string
}

function SignUp() {
  const { ...methods } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log({ data })

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    console.log(errors)
  }

  return (
    <Layout>
      <View>
        <SignUpHeader />
        {/* pass all methods into the context */}
        <S.Container style={{ padding: 20 }}>
          <FormProvider {...methods}>
            <Input name='email' label='Email' placeholder='이메일을 입력해주세요.' keyboardType='email-address' />
            <Input name='password' label='비밀번호' secureTextEntry rules={{ required: 'Password is required!' }} />
            <Input name='passwordCheck' label='비밀번호 확인' secureTextEntry />
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
