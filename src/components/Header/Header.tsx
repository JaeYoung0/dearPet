import useCustomNavi from '@/hooks/useCustomNavi'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyIcons from '../MyIcons'
import SofiaText from '@/components/SofiaText'

type Props = {
  title?: string
  back?: boolean
  Icons?: JSX.Element[]
}

function Header({ title, Icons, back }: Props) {
  const navigation = useCustomNavi()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        {back && (
          <Pressable
            style={{ marginRight: 20 }}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <MyIcons name='Arrow' />
          </Pressable>
        )}

        {title && <SofiaText style={{ fontSize: 18, lineHeight: 20 }}>{title}</SofiaText>}
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
