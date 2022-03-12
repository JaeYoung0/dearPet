import styled, { css } from '@emotion/native'
import { useState } from 'react'
import Video from 'react-native-video'

export const BackVideo = styled(Video)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
})

export const Backdrop = styled.View({
  flex: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  backgroundColor: '#000000',
  opacity: 0.7,
  alignItems: 'center',
  justifyContent: 'center',
})

export const Divider = styled.View({
  marginTop: 50,
  marginBottom: 50,
  borderBottomWidth: 1,
  borderColor: '#dcdcdc',
})

export const Logo = styled.Image({
  width: 35,
  height: 35,
})

export const LoginTouchable = styled.TouchableOpacity({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 40,
  borderRadius: 5,
})

export const LogoText = styled.Text({
  color: '#000000',
})
