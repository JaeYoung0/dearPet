import { Label } from '@/components/PostThumbnail/PostThumbnail.style'
import React, { useState } from 'react'
import { View, Text, TextInputProps } from 'react-native'
import * as S from './Input.style'

import { useController, useFormContext, ControllerProps, UseControllerProps } from 'react-hook-form'

type Props = {
  label?: string
} & UseControllerProps &
  TextInputProps

export default function Input({ label, name, rules, defaultValue, placeholderTextColor = '#B9B9B9', ...props }: Props) {
  const formContext = useFormContext()
  const { field } = useController({ name, rules, defaultValue })

  if (!formContext || !name) {
    const msg = !formContext ? 'FormProvider를 확인해주세요.' : 'Name이 정의되지 않았습니다.'
    console.error(msg)
    return null
  }

  const { formState } = formContext

  const errorMsg = formState.errors[name]?.message

  return (
    <S.Wrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        {...props}
        // placeholderTextColor={placeholderTextColor}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
      />

      {errorMsg && <S.ErrorText>{errorMsg}</S.ErrorText>}
    </S.Wrapper>
  )
}
