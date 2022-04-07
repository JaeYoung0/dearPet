import React from 'react'
import { View, Text } from 'react-native'
import { FeedTabList } from '../../MyFeed'
import * as S from './Comments.style'

export default function Comments() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <S.NoticeText>
        {`아이를 기억하는 지인들과
우연히 아이의 별에 들른 귀인이
아이에게 인사를 건네는 공간입니다.

우측 상단의 플러스 버튼을 눌러 
위로의 말을 남겨주세요.
`}
      </S.NoticeText>
    </View>
  )
}
