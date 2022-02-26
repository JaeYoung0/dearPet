import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'

const GuestStack = createStackNavigator()

// FIXME?: Main과 Guest를 Navigator 수준에서 나눌 필요가 없는 것 같다.
function Guest() {
  return (
    <GuestStack.Navigator screenOptions={{ headerShown: false }}>
      <GuestStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <GuestStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
    </GuestStack.Navigator>
  )
}

export default Guest
