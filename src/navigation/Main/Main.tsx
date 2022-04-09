import React, { useCallback } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Universe from '@/screens/Universe'
import MyIcons from '@/components/MyIcons'
import MyPet from '@/navigation/MyPet'
import Setting from '@/navigation/Setting'
import Feed from '@/navigation/Feed'
import { useFocusEffect } from '@react-navigation/native'
import { useMeState } from '@/modules/user/atoms'
import useCustomNavi from '@/hooks/useCustomNavi'

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
        name='Universe'
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
        name='Feed'
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => <MyIcons name='Compass' focused={focused} />,
        }}
      />

      <MainBottomTab.Screen
        name='Setting'
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => <MyIcons name='Person' focused={focused} />,
        }}
      />
    </MainBottomTab.Navigator>
  )
}

export default Main
