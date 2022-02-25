import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'
import { useRecoilValue } from 'recoil'
import { showSpaceAtom } from '@/modules/auth/atoms'
import MyWebView from '@/components/MyWebView'

const GuestStack = createStackNavigator()

function Guest() {
  const showSpace = useRecoilValue(showSpaceAtom)

  return (
    <GuestStack.Navigator screenOptions={{ headerShown: false }}>
      <GuestStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <GuestStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
    </GuestStack.Navigator>
  )
}

export default Guest
