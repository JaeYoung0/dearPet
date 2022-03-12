import { TouchableOpacity } from 'react-native-gesture-handler'

import styled, { css } from '@emotion/native'
import SofiaText from '@/components/SofiaText'

export const Container = styled.View({
  marginBottom: 30,
})

export const TouchableWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
})

export const SumbmitTouchable = styled(TouchableOpacity)({
  height: 45,
  backgroundColor: '#7E71F3',
  borderRadius: 5,

  justifyContent: 'center',
  alignItems: 'center',
})

export const SubmitText = styled(SofiaText)({
  fontSize: 15,
  color: '#fff',
})
