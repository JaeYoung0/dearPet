import React from 'react'
import { View, Text } from 'react-native'
import * as S from './Comments.style'

export default function Comments() {
  return (
    <View>
      <S.NoticeText>우측 상단의 플러스 버튼을 눌러{'\n'}위로의 말을 남겨주세요.</S.NoticeText>
    </View>
  )
}
