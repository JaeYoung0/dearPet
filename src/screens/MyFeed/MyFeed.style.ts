import CustomText from '@/components/CustomText'
import { horizontalScale, verticalScale } from '@/utils/adjustSize'
import styled, { css } from '@emotion/native'
import FastImage from 'react-native-fast-image'

export const BgImg = styled(FastImage)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
})

export const DisplayName = styled(CustomText)({
  textAlign: 'center',
  marginBottom: verticalScale(10),
  fontSize: horizontalScale(18),
  color: '#fff',
})

export const IntroductionText = styled(CustomText)({
  fontSize: horizontalScale(12),
  lineHeight: 18,
  textAlign: 'center',
  color: '#fff',
})
