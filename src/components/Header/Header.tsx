import useCustomNavi from '@/hooks/useCustomNavi'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyIcons from '../MyIcons'

type Props = {
  title?: string
  back?: boolean
  Icons?: JSX.Element[]
}
function Header({ title, Icons, back }: Props) {
  const navigation = useCustomNavi()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {back && (
          <Pressable
            style={{ marginRight: 20, width: 15, height: 15 }}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <MyIcons name='Arrow' />
          </Pressable>
        )}

        {title && <Text style={{ fontSize: 18 }}>{title}</Text>}
      </View>

      <View style={{ flexDirection: 'row' }}>
        {Icons?.map((icon) => (
          <View style={{ marginLeft: 20 }}>{icon}</View>
        ))}
      </View>
    </View>
  )
}

export default Header
