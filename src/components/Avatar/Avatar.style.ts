import { COLORS } from '@/constants/palette'
import styled, { css } from '@emotion/native'
import FastImage from 'react-native-fast-image'

export const Frame = styled(FastImage)({
  width: 100,
  height: 100,

  justifyContent: 'center',
  alignItems: 'center',
})

export const Img = styled(FastImage)`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  border: 2px solid ${COLORS.BROWN01};
`

export const InnerCircle = styled.View({
  position: 'absolute',

  justifyContent: 'center',
  alignItems: 'center',

  width: 110,
  height: 110,
  borderRadius: 110,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: COLORS.BROWN01,
  opacity: 1,
})

export const OuterCircle = styled.View({
  position: 'relative',

  justifyContent: 'center',
  alignItems: 'center',

  width: 125,
  height: 125,
  borderRadius: 125,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: COLORS.BROWN01,

  opacity: 0.5,

  // filter: blur(2px); 를 사용할 수 없다...! ㅠ.ㅠ
})
