import SofiaText from '@/components/SofiaText'
import { COLORS } from '@/constants/palette'
import styled, { css } from '@emotion/native'
import FastImage from 'react-native-fast-image'

export const BasicWrapper = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

export const BackgroundImg = styled(FastImage)({
  flex: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})

export const ContentWrapper = styled.View({
  alignItems: 'center',
})

export const Petwings = styled(FastImage)({
  width: 200,
  height: 200,
})

export const Text = styled(SofiaText)({
  color: COLORS.PURPLE01,
  fontSize: 30,
})
