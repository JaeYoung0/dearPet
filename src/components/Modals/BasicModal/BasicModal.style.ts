import SofiaText from '@/components/SofiaText'
import CustomText from '@/components/CustomText'
import { horizontalScale, verticalScale } from '@/utils/adjustSize'
import styled from '@emotion/native'
import { View } from 'react-native'
import { Pressable } from 'react-native'

export const Container = styled(View)({
  flex: 1,
  position: 'absolute',

  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100,
})

export const Modal = styled.View({
  backgroundColor: '#222222',
  width: horizontalScale(300),

  paddingTop: 20,

  borderRadius: 10,
  justifyContent: 'space-between',
})

export const Title = styled(SofiaText)({
  textAlign: 'center',
  marginBottom: 40,
  fontSize: 18,
})

export const ModalContentText = styled(SofiaText)({
  fontSize: 14,
  marginBottom: 20,
  textAlign: 'center',
})

export const Actions = styled.View({
  flexDirection: 'row',
})

{
  /* FIXME: Pressable로 감싸지 않고 Touchable만 하면 RootModal에서 렌더링할 때 이벤트 핸들러가 전달되지 않는다?! */
}
export const CancelTouchable = styled(Pressable)({
  justifyContent: 'center',
  alignItems: 'center',

  height: verticalScale(55),
  width: '50%',

  borderBottomLeftRadius: 10,
  backgroundColor: '#444444',
})

export const ConfirmTouchable = styled(Pressable)({
  justifyContent: 'center',
  alignItems: 'center',

  width: '50%',
  height: verticalScale(55),

  borderBottomRightRadius: 10,
  backgroundColor: '#7A62DA',
})

export const ActionText = styled(CustomText)({
  fontSize: 14,
})
