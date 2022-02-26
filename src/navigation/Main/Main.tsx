import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MyWebView from '@/components/MyWebView'
import { Text } from 'react-native'
import Search from '@/screens/Search'
import MyPet from '@/screens/MyPet'
import Favorite from '@/screens/Favorite'
import MyInfo from '@/screens/MyInfo'

// screen에 BottomTabNavigator가 들어가네 ??
const Universe = () => {
  const UniverseTab = createBottomTabNavigator()

  return (
    <UniverseTab.Navigator
      backBehavior='none'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#13141a',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '900' },
        tabBarShowLabel: false,
      }}
    >
      <UniverseTab.Screen
        name='Home'
        component={MyWebView}
        options={{
          tabBarIcon: ({ focused }) => <Text>Home</Text>,
        }}
      />

      <UniverseTab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => <Text>Search</Text>,
        }}
      />

      <UniverseTab.Screen
        name='MyPet'
        component={MyPet}
        options={{
          tabBarIcon: ({ focused }) => <Text>MyPet</Text>,
        }}
      />

      <UniverseTab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => <Text>Favorite</Text>,
        }}
      />

      <UniverseTab.Screen
        name='MyInfo'
        component={MyInfo}
        options={{
          tabBarIcon: ({ focused }) => <Text>MyInfo</Text>,
        }}
      />
    </UniverseTab.Navigator>
  )
}

export default Universe
