import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MyWebView from '@/components/MyWebView'
import { Text } from 'react-native'
import Search from '@/screens/Search'
import MyPet from '@/screens/MyPet'
import Favorite from '@/screens/Favorite'
import MyInfo from '@/screens/MyInfo'
import styled from '@emotion/native'

// screen에 BottomTabNavigator가 들어가네 ??
const Main = () => {
  const MainBottomTab = createBottomTabNavigator()

  const TabText = styled.Text({
    color: 'gray',
    fontSize: 16,
  })

  return (
    <MainBottomTab.Navigator
      backBehavior='none'
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '900' },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: 'black',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'blue',
        tabBarInactiveBackgroundColor: 'black',
      }}
    >
      <MainBottomTab.Screen
        name='Home'
        component={MyWebView}
        options={{
          tabBarIcon: ({ focused }) => <TabText>Home</TabText>,
        }}
      />

      <MainBottomTab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => <TabText>Search</TabText>,
        }}
      />

      <MainBottomTab.Screen
        name='MyPet'
        component={MyPet}
        options={{
          tabBarIcon: ({ focused }) => <TabText>MyPet</TabText>,
        }}
      />

      <MainBottomTab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => <TabText>Favorite</TabText>,
        }}
      />

      <MainBottomTab.Screen
        name='MyInfo'
        component={MyInfo}
        options={{
          tabBarIcon: ({ focused }) => <TabText>MyInfo</TabText>,
        }}
      />
    </MainBottomTab.Navigator>
  )
}

export default Main
