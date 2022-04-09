import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { View, Pressable } from 'react-native'
import * as S from './AdditionalInfo.style'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import dayjs from 'dayjs'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as userService from '@/server/users/service'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, UseFormHandleSubmit } from 'react-hook-form'
import Avatar from '@/components/Avatar'
import { useMeState } from '@/modules/user/atoms'
import useCustomNavi from '@/hooks/useCustomNavi'

type FormValues = {
  starDate: string
  message: string
}

const additionalInfoSchema = yup.object().shape({
  starDate: yup.string().required('시작일을 선택해주세요.'),
  message: yup.string().required('메세지를 입력해주세요.'),
})

function AdditionalInfo() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const { me, setMe } = useMeState()

  const { ...methods } = useForm<FormValues>({
    resolver: yupResolver(additionalInfoSchema),
  })

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: Date | string) => {
    methods.setValue('starDate', dayjs(String(date)).format('YYYY.MM.DD'))
    hideDatePicker()
  }

  if (!me) return null

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { message, starDate } = data
    await userService.updateUserAdditionalInfo({
      licenseId: me.licenseId,
      message,
      starDate,
    })

    setMe({ ...me, message, starDate })

    console.log('@@data', data)
  }

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    console.log('@@errors', errors)
  }

  return (
    <Layout>
      <View style={{ padding: 15 }}>
        <Header
          title='추가 정보 입력'
          Icons={[
            // FIXME: Pressable 일일이 쓰기 귀찮
            <Pressable
              style={{
                width: 44,
                height: 44,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                methods.handleSubmit(onSubmit, onError)()
              }}
            >
              <OcticonsIcon size={25} name='check' color='#fff' style={{ marginTop: -5 }} />
            </Pressable>,
          ]}
        />
      </View>

      <FormProvider {...methods}>
        <S.ContentBox style={{ padding: 30 }}>
          <S.Title>아이의 별에 입력될 정보에요</S.Title>
          <S.Spacing style={{ marginBottom: 0 }} />

          {!me?.photoURL && (
            <>
              <S.AvatarWrapper>
                <Avatar />
              </S.AvatarWrapper>
              <S.ChangeText>프로필 사진 변경</S.ChangeText>
            </>
          )}

          <S.Spacing style={{ marginBottom: 50 }} />

          <S.StartDateInput
            name='starDate'
            label='별이 된 날'
            placeholder='별이 된 날을 선택해주세요.'
            onPressIn={showDatePicker}
          />

          <S.Spacing style={{ marginBottom: 20 }} />

          <S.MessageInput
            name='message'
            label='아이에게 한마디'
            placeholder='별이 된 아이에게 하고 싶은 말을 써주세요.'
            textAlignVertical='top'
            multiline
          />
        </S.ContentBox>
      </FormProvider>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Layout>
  )
}

export default AdditionalInfo
