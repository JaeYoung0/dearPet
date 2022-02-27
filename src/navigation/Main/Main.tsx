import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MyWebView from '@/components/MyWebView'
import Search from '@/screens/Search'
import MyPet from '@/screens/MyPet'
import Favorite from '@/screens/Favorite'
import MyInfo from '@/screens/MyInfo'
import styled, { css } from '@emotion/native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// const myIcon =;

// screen에 BottomTabNavigator가 들어가네 ??
const Main = () => {
  const MainBottomTab = createBottomTabNavigator()

  const TabText = styled.Text<{ focused: boolean }>`
    color: 'gray';

    ${({ focused }) =>
      focused &&
      css`
        color: 'blue';
      `}
    font-size: 16px;
  `

  return (
    <MainBottomTab.Navigator
      backBehavior='none'
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '900' },
        // tabBarShowLabel: false,
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        tabBarInactiveTintColor: '#706868',
        tabBarActiveTintColor: '#fff',
      }}
    >
      <MainBottomTab.Screen
        name='Home'
        component={MyWebView}
        options={{
          tabBarIcon: ({ focused }) => <MaterialIcons name='home' size={30} />,
        }}
      />

      <MainBottomTab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => <MaterialIcons name='search' size={30} />,
        }}
      />

      <MainBottomTab.Screen
        name='MyPet'
        component={MyPet}
        options={{
          tabBarIcon: ({ focused }) => <MaterialIcons name='pets' size={30} />,
        }}
      />

      <MainBottomTab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='heart-outline' size={30} />,
        }}
      />

      <MainBottomTab.Screen
        name='MyInfo'
        component={MyInfo}
        options={{
          tabBarIcon: ({ focused }) => <MaterialIcons name='person' size={30} />,
        }}
      />
    </MainBottomTab.Navigator>
  )
}

export default Main
