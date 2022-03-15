import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import * as S from './Layout.style'

type Props = {
  children: JSX.Element
  style?: StyleProp<ViewStyle>
}

function Layout({ children, style }: Props) {
  return <S.ScreenContainer style={style}>{children}</S.ScreenContainer>
}

export default Layout
