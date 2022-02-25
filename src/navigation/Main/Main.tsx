import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Universe from '@/screens/Universe'

const MainStack = createStackNavigator()

function Main() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name='Universe' component={Universe} options={{ headerShown: false }} />
    </MainStack.Navigator>
  )
}

export default Main
