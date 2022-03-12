import SofiaText from '@/components/SofiaText'
import styled, { css } from '@emotion/native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export const Container = styled.View({
  marginBottom: 30,
})

export const LoginTouchable = styled(TouchableOpacity)({
  backgroundColor: '#7E71F3',
  borderRadius: 5,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
})

export const LoginText = styled(SofiaText)({})

export const BottomText = styled(SofiaText)({
  letterSpacing: -1,
  padding: 5,
})
