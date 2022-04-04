import { useMeState } from '@/modules/user/atoms'
import React from 'react'

import { View } from 'react-native'
import { css } from '@emotion/native'
import Avatar from '@/components/Avatar'
import SofiaText from '@/components/SofiaText'

function AvatarBox() {
  const { me } = useMeState()

  return (
    <View
      style={css`
        flex-direction: row;
        align-items: center;
      `}
    >
      <View
        style={css`
          margin-right: 15;
        `}
      >
        <Avatar />
      </View>
      <View>
        <SofiaText weight={500} style={{ fontSize: 22, color: '#fff' }}>
          {me?.displayName}
        </SofiaText>
        <SofiaText style={{ fontSize: 16 }}>별이된 지 263일 째</SofiaText>
      </View>
    </View>
  )
}

export default AvatarBox
