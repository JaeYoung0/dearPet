import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Favorite from '@/screens/Favorite'
import MyInfo from '@/screens/MyInfo'
import Universe from '@/screens/Universe'
import MyIcons from '@/components/MyIcons'
import MyPet from '@/navigation/MyPet'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { postsStatus } from '@/modules/posts/atoms'
import { userStatus } from '@/modules/user/atoms'
import { allPosts } from '@/server/posts/service'

const Main = () => {
  const MainBottomTab = createBottomTabNavigator()

  return (
    <MainBottomTab.Navigator
      backBehavior='none'
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '900' },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#222222',
        tabBarInactiveBackgroundColor: '#222222',
        tabBarInactiveTintColor: '#595555',
        tabBarActiveTintColor: '#fff',
      }}
    >
      <MainBottomTab.Screen
        name='Home'
        component={Universe}
        options={{
          tabBarIcon: ({ focused }) => <MyIcons name='Universe' focused={focused} />,
        }}
      />

      <MainBottomTab.Screen
        name='MyPet'
        component={MyPet}
        options={{
          tabBarIcon: ({ focused }) => <MyIcons name='Planet' focused={focused} />,
        }}
      />

      <MainBottomTab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => <MyIcons name='Compass' focused={focused} />,
        }}
      />

      <MainBottomTab.Screen
        name='MyInfo'
        component={MyInfo}
        options={{
          tabBarIcon: ({ focused }) => <MyIcons name='Person' focused={focused} />,
        }}
      />
    </MainBottomTab.Navigator>
  )
}

export default Main
