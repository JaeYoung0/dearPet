import styled, { css } from '@emotion/native'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import SofiaText from '@/components/SofiaText'

export const Wrapper = styled(View)({
  width: 161,
  height: 233,
  backgroundColor: '#fff',
  borderRadius: 8,
  margin: 10,
})

export const Image = styled(FastImage)({
  width: '100%',
  height: 140,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
})

export const ContentBox = styled(View)({
  flex: 1,
  justifyContent: 'space-between',
  padding: 8,
})

export const BasicContents = styled(View)({})

export const Title = styled(SofiaText)({
  fontSize: 12,
  color: '#000000',
})

export const BodyText = styled.Text({
  fontSize: 10,
  color: '#000000',
})

export const MetaContents = styled(View)({
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const DisplayName = styled(SofiaText)({
  fontSize: 10,
  color: '#000000',
})

export const DateText = styled(SofiaText)({
  color: '#666666',
  fontSize: 8,
  marginLeft: 'auto',
})
