import styled, { css } from '@emotion/native'
import { useState } from 'react'
import Video from 'react-native-video'

export const BackVideo = styled(Video)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})

export const Backdrop = styled.View({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,

  flex: 1,

  backgroundColor: '#000000',
  opacity: 0.5,
  alignItems: 'center',
  justifyContent: 'center',
})

export const Divider = styled.View({
  marginTop: 50,
  marginBottom: 50,
  borderBottomWidth: 1,
  borderColor: '#dcdcdc',
})
