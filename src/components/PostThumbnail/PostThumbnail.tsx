import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  title: string
  content: string
}
function PostThumbnail({ title, content }: Props) {
  return (
    <View style={{ backgroundColor: 'transparent', marginBottom: 20 }}>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  )
}

export default PostThumbnail
