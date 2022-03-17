import { COLORS } from '@/constants/palette'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '@/components/CustomText'
import { horizontalScale, verticalScale } from '@/utils/adjustSize'
import styled, { css } from '@emotion/native'

export const Modal = styled.View({
  backgroundColor: '#222222',
  width: horizontalScale(300),

  padding: 20,

  borderRadius: 10,
  justifyContent: 'space-between',
})

export const ModalContentText = styled(CustomText)({
  fontSize: 16,
  textAlign: 'center',

  marginBottom: 20,
})

export const Actions = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const CancelTouchable = styled(TouchableOpacity)({
  justifyContent: 'center',
  alignItems: 'center',

  width: horizontalScale(120),
  height: verticalScale(45),
  borderRadius: 5,

  backgroundColor: '#444444',
})

export const ConfirmTouchable = styled(TouchableOpacity)({
  justifyContent: 'center',
  alignItems: 'center',

  width: horizontalScale(120),
  height: verticalScale(45),
  borderRadius: 5,

  backgroundColor: '#7A62DA',
})

export const ActionText = styled(CustomText)({
  fontSize: 14,
})
