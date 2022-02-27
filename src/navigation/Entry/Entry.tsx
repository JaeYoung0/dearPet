import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Main from '@/navigation/Main'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'
import { useRecoilValue } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import { getStorage } from '@/modules/storage/helper'
import useCustomNavi from '@/hooks/useCustomNavi'

const EntryStack = createStackNavigator()

function Entry() {
  const me = useRecoilValue(userStatus)
  const navigation = useCustomNavi()

  getStorage('@saw/welcome').then((data) => {
    if (!data) {
      navigation.navigate('Welcome', {})
    }
  })

  return (
    <EntryStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Protected routes */}

      {!me && (
        <>
          <EntryStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <EntryStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        </>
      )}

      {me && <EntryStack.Screen name='Universe' component={Main} options={{ headerShown: false }} />}
    </EntryStack.Navigator>
  )
}

export default Entry
