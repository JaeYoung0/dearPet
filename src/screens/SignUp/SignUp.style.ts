import { TouchableOpacity } from 'react-native-gesture-handler'
import Input from '@/components/Form/Input'

import styled, { css } from '@emotion/native'
import CustomText from '@/components/CustomText'

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

export const SubmitText = styled(CustomText)({
  fontSize: 15,
  color: '#fff',
})

// 이게 왜 안됐지?
// export const SignupInput = styled(Input)({
//   marginBottom: 25,
// })

export const Spacing = styled.View({
  marginBottom: 25,
})
