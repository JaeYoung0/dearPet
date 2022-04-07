import styled, { css } from '@emotion/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'
import { Animated } from 'react-native'
import Input from '@/components/Form/Input'

export const AnimatedView = styled(Animated.View)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,

  backfaceVisibility: 'hidden',
})

export const LetterBg = styled(FastImage)({
  flex: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  borderRadius: 5,
})

export const LetterBody = styled.View({
  flex: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})

export const MetaWrapper = styled.View({
  padding: 12,
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const MetaText = styled.Text({
  fontFamily: 'RIDIBatang',
  fontSize: 15,
  color: '#999999',
})

export const BackSideTitle = styled.Text({
  fontFamily: 'RIDIBatang',
  fontSize: 24,
  color: '#000000',
})

export const FormWrapper = styled.View({
  padding: 25,
  paddingTop: 0,
})

export const TitleInput = styled(Input)({
  backgroundColor: 'transparent',
  fontSize: 18,
  textAlign: 'center',
  marginBottom: 10,
  fontFamily: 'RIDIBatang',
})

// FIXME: show scrollbar
export const ContentInput = styled(Input)({
  flex: 1,
  backgroundColor: 'transparent',
  fontSize: 13,
  fontFamily: 'RIDIBatang',
  lineHeight: 20,
})

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
