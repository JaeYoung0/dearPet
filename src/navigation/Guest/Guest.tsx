import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'
import Universe from '@/screens/Universe'
import { useRecoilValue } from 'recoil'
import { showSpaceAtom } from '@/modules/auth/atoms'

const GuestStack = createStackNavigator()

function Guest() {
  return (
    <GuestStack.Navigator screenOptions={{ headerShown: false }}>
      <GuestStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <GuestStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      {/* FIXME: Main Navigator로 옮기기 */}
      <GuestStack.Screen name='Universe' component={Universe} options={{ headerShown: false }} />
    </GuestStack.Navigator>
  )
}

export default Guest
