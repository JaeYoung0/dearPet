import React from 'react'
import { Text, StyleSheet, View, Alert, FlatList, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth'
import { Button } from 'react-native'
// vs react-native-gesture-handler
import { useRecoilState } from 'recoil'
import { useMeState, userStatus } from '@/modules/user/atoms'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Avatar from '@/components/Avatar'
import SofiaText from '@/components/SofiaText'
import { css } from '@emotion/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'

type MenuItem = {
  id: string
  title: string
  onPress?: () => void
  icon: any
}

function AvatarBox() {
  const { me } = useMeState()
  return (
    <View
      style={css`
        padding: 20px;
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

function MyInfo() {
  const [me, setMe] = useRecoilState(userStatus)

  // FlatList의 keyExtractor는 string으로 타입이 정해져있기 때문에 id는 string으로 쓴다.
  // 그런데 keyExtractor가 딱히 필요없는 것 같기도하다.
  const DATA: MenuItem[] = [
    {
      id: '1',
      title: '공지사항',
      icon: <EntypoIcon name='sound' size={20} />,
    },
    {
      id: '2',
      title: '개인/보안',
      icon: <EntypoIcon name='lock' size={20} />,
    },
    {
      id: '3',
      title: '알림',
      icon: <MaterialIcon name='access-alarm' size={20} />,
    },
    {
      id: '4',
      title: '앱 사용법 안내',
      icon: <MaterialIcon name='mobile-friendly' size={20} />,
    },
    {
      id: '5',
      title: '기부하기',
      icon: <MaterialCommunityIcon name='hand-heart-outline' size={20} />,
    },
    {
      id: '6',
      title: '관리자에게',
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

  const renderItem = ({ item }: { item: MenuItem }) => (
    <Pressable
      onPress={item.onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, { padding: 20 }, { flexDirection: 'row' }]}
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
