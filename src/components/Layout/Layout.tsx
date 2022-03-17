import React, { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import * as S from './Layout.style'

type Props = {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

function Layout({ children, style }: Props) {
  return <S.ScreenContainer style={style}>{children}</S.ScreenContainer>
}

export default Layout
