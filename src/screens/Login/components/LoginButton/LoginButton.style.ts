import CustomText from '@/components/CustomText'
import styled, { css } from '@emotion/native'

export const LoginTouchable = styled.TouchableOpacity({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 40,
  borderRadius: 5,
})

export const LogoText = styled(CustomText)({
  color: '#000000',
})

export const Logo = styled.Image({
  width: 35,
  height: 35,
})
