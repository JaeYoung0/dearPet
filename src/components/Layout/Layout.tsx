import React from 'react'
import * as S from './Layout.style'

type Props = {
  children: JSX.Element
}

function Layout({ children }: Props) {
  return <S.ScreenContainer>{children}</S.ScreenContainer>
}

export default Layout
