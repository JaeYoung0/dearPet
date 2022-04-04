import React from 'react'
import { Text, View, Alert, FlatList, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth'
import { Button } from 'react-native'
// vs react-native-gesture-handler
import { useRecoilState } from 'recoil'
import { useMeState, userStatus } from '@/modules/user/atoms'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Layout from '@/components/Layout'
import SofiaText from '@/components/SofiaText'
import AvatarBox from '@/components/AvatarBox'
import { css } from '@emotion/native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import useCustomNavi from '@/hooks/useCustomNavi'
import { ScreenNames } from '@/screens/type'

type MenuItem = {
  id: string
  title: string
  screen?: ScreenNames
  onPress?: () => void
  icon: any
}

function MyInfo() {
  const [me, setMe] = useRecoilState(userStatus)

  const navigation = useCustomNavi()

  // FlatList의 keyExtractor는 string으로 타입이 정해져있기 때문에 id는 string으로 쓴다.
  // 그런데 keyExtractor가 딱히 필요없는 것 같기도하다.
  const DATA: MenuItem[] = [
    {
      id: '1',
      title: '공지사항',
      screen: 'Notice',
      icon: <EntypoIcon name='sound' size={20} />,
    },
    {
      id: '2',
      title: '개인/보안',
      screen: 'Privacy',
      icon: <EntypoIcon name='lock' size={20} />,
    },
    {
      id: '3',
      title: '알람',
      screen: 'Alarm',
      icon: <MaterialIcon name='access-alarm' size={20} />,
    },
    {
      id: '4',
      title: '앱 사용법',
      screen: 'Instruction',
      icon: <MaterialIcon name='mobile-friendly' size={20} />,
    },
    {
      id: '5',
      title: '기부하기',
      screen: 'Donation',
      icon: <MaterialCommunityIcon name='hand-heart-outline' size={20} />,
    },
    {
      id: '6',
      title: '관리자에게',
      screen: 'Proposal',
      icon: <MaterialCommunityIcon name='email' size={20} />,
    },
    {
      id: '7',
      title: '로그아웃',
      icon: <MaterialIcon name='logout' size={20} />,
      onPress: async () => {
        try {
          await auth().signOut()
          setMe(null)
        } catch (err) {
          console.error(err)
        }
      },
    },

    {
      id: '8',
      title: '@saw/welcome',
      icon: '',
      onPress: () => {
        void AsyncStorage.getItem('@saw/welcome').then((res) => Alert.alert(res ?? 'null이라네'))
      },
    },

    {
      id: '9',
      title: 'clear async storage',
      icon: '',
      onPress: () => {
        void AsyncStorage.clear()
        Alert.alert('스토리지를 비웠어요')
      },
    },
  ]

  const handlePress = (item: MenuItem) => {
    if (item.screen) {
      navigation.navigate(item.screen, {})
    } else {
      item.onPress?.()
    }
  }

  const renderItem = ({ item }: { item: MenuItem }) => (
    <Pressable
      onPress={() => handlePress(item)}
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        { padding: 20 },
        { flexDirection: 'row' },
        { borderBottomColor: ' rgba(225, 225, 225, 0.18)' },
        { borderBottomWidth: 0.5 },
      ]}
    >
      <Text
        style={css`
          margin-right: 15;
        `}
      >
        {item.icon}
      </Text>
      <SofiaText
        style={css`
          font-size: 16;
        `}
      >
        {item.title}
      </SofiaText>
    </Pressable>
  )

  return (
    <Layout
      style={css`
        padding: 0;
        background-color: #000000;
        padding: 10px;
      `}
    >
      <AvatarBox />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={{ marginTop: 20 }} />
    </Layout>
  )
}

export default MyInfo
