import React from 'react'
import { View, Text } from 'react-native'
import { FeedTabList } from '../../MyFeed'
import * as S from './Comments.style'

export default function Comments() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <S.NoticeText>우측 상단의 플러스 버튼을 눌러{'\n'}위로의 말을 남겨주세요.</S.NoticeText>
    </View>
  )
}
