import styled, { css } from '@emotion/native'
import FastImage from 'react-native-fast-image'

export const Container = styled.View`
  flex-direction: row;

  width: 100%;
  height: 150px;
  margin-bottom: 20px;

  background-color: transparent;
`

export const LeftColumn = styled.View``

export const Image = styled(FastImage)({
  width: 150,
  height: 150,
})

export const RightColumn = styled.View`
  padding: 20px;
  flex: 1;
`

export const Label = styled.Text`
  color: #a19aea;
  font-size: 10px;
  margin-bottom: 5px;
`

export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`

export const BodyText = styled.Text({
  fontSize: 12,
  color: '#818181',
  flex: 1,
})

export const Date = styled.Text({
  color: '#4E4E4E',
  fontSize: 10,
})
