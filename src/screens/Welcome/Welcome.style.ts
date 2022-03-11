import { StyleSheet } from 'react-native'
import styled from '@emotion/native'
import SofiaText from '@/components/SofiaText'

export const Title = styled(SofiaText)({
  color: '#0B0543',
  fontSize: 25,
  lineHeight: 25,
  position: 'absolute',
  left: 30,
  top: 30,
  zIndex: 1,
})

export const Text = styled(SofiaText)({
  color: '#3C3292',
  fontSize: 16,
  lineHeight: 16,
  position: 'absolute',
  left: 30,
  top: 100,
  zIndex: 1,
})

export const BackgroundImg = styled.Image({
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
})

export const ButtonText = styled(SofiaText)({
  color: '#fff',
  fontSize: 16,
})

export const Touchable = styled.TouchableOpacity({
  backgroundColor: '#7E71F3',
  alignItems: 'center',
  justifyContent: 'center',
  width: 262,
  height: 40,
  borderRadius: 60,
  position: 'absolute',
  bottom: 24,
  shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)',
})

// FIXME: 세팅하자

export const styles = StyleSheet.create({
  dot: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
  },

  activeDot: {
    backgroundColor: '#fff',
  },

  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
