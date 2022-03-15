import FastImage from 'react-native-fast-image'
import styled from '@emotion/native'
import Input from '@/components/Form/Input'
import { Animated } from 'react-native'

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
})
