import styled, { css } from '@emotion/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Animated } from 'react-native'
// FIXME: common style로 통일하기
export const ScreenContainer = styled(SafeAreaView)({
  flex: 1,
  backgroundColor: '#222222',
  padding: 25,
})

/**
 * TODO. 모달 구현해보기
 * https://reactnative.dev/docs/0.65/animations#interpolation
 * https://codedaily.io/tutorials/Create-a-Custom-Animated-Bottom-Action-Sheet-without-Measuring-in-React-Native
 * https://coding-w00se.tistory.com/33
 */
export const Backdrop = styled(Animated.View)({
  position: 'absolute',

  // top, left, bottom, right 전부 써줘야 가려진다. => StyleSheet.absoluteFill랑 동일
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,

  backgroundColor: 'rgba(0,0,0,.5)',

  justifyContent: 'center',
  alignItems: 'center',
})
