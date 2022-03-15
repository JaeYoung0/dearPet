import { COLORS } from '@/constants/palette'
import styled, { css } from '@emotion/native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '@/components/CustomText'

export const Container = styled.View({
  marginBottom: 30,
})

export const LoginTouchable = styled(TouchableOpacity)({
  backgroundColor: COLORS.PURPLE01,
  borderRadius: 5,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
})

export const LoginText = styled(CustomText)({
  fontSize: 14,
})

export const BottomText = styled(CustomText)({
  letterSpacing: -1,
  padding: 5,
})
