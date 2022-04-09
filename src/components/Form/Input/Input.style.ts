import SofiaText from '@/components/SofiaText'
import styled, { css } from '@emotion/native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export const Wrapper = styled.View``

export const Label = styled(SofiaText)({
  fontSize: 15,
  color: '#fff',
  marginBottom: 10,
})

export const Input = styled(TextInput)({
  backgroundColor: '#fff',
  borderRadius: 5,
  height: 40,
  fontSize: 12,
  padding: 10,
  color: '#222222',
  marginBottom: 10,
})

export const ErrorText = styled(SofiaText)({
  fontSize: 12,
  color: '#7E71F3',
})
