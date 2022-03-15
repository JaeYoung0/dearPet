import styled, { css } from '@emotion/native'
import FastImage from 'react-native-fast-image'
import CustomText from '../CustomText'

export const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
  marginBottom: 20,
})

export const LeftColumn = styled.View({
  // flex: 1,
})

export const Image = styled(FastImage)({
  width: 150,
  height: 150,
  borderRadius: 5,
})

export const RightColumn = styled.View({
  flex: 1,
  padding: 10,
  paddingLeft: 15,
})

export const Label = styled(CustomText)({
  color: '#a19aea',
  fontSize: 10,
  marginBottom: 5,
})

export const Title = styled(CustomText)({
  fontSize: 16,
  marginBottom: 5,
})

export const BodyText = styled.Text({
  fontSize: 12,
  color: '#818181',
  flex: 1,
})

export const Date = styled(CustomText)({
  color: '#4E4E4E',
  fontSize: 10,
})
