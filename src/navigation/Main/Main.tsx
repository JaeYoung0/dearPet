import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Universe from '@/screens/Universe'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'
import { useRecoilValue } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
const MainStack = createStackNavigator()

function Main() {
  const user = useRecoilValue(userStatus)

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Protected routes */}
      {!user && (
        <>
          <MainStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
          <MainStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        </>
      )}

      {user && <MainStack.Screen name='Universe' component={Universe} options={{ headerShown: false }} />}
    </MainStack.Navigator>
  )
}

export default Main
