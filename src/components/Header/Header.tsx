import useCustomNavi from '@/hooks/useCustomNavi'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyIcons from '../MyIcons'

type Props = {
  title: string
  onSubmit: () => void
}
function Header({ title, onSubmit }: Props) {
  const navigation = useCustomNavi()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable
          style={{ marginRight: 20 }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <MyIcons name='Arrow' />
        </Pressable>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </View>

      <Pressable onPress={onSubmit}>
        <MyIcons name='Check' color='#fff' />
      </Pressable>
    </View>
  )
}

export default Header
