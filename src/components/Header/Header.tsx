import useCustomNavi from '@/hooks/useCustomNavi'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyIcons from '../MyIcons'
import CustomText from '@/components/CustomText'

type Props = {
  title?: string
  back?: boolean
  Icons?: JSX.Element[]
}

/**
 * 헤더에 들어가는 아이콘의 터치영역은 44 * 44 dp로 한다.
 */
function Header({ title, Icons, back }: Props) {
  const navigation = useCustomNavi()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {back && (
          <Pressable
            style={{
              width: 44,
              height: 44,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <MyIcons name='Arrow' />
          </Pressable>
        )}

        {title && <CustomText style={{ fontSize: 18, lineHeight: 20, color: '#fff' }}>{title}</CustomText>}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {Icons?.map((icon) => (
          <View style={{ marginLeft: 5 }}>{icon}</View>
        ))}
      </View>
    </View>
  )
}

export default Header
