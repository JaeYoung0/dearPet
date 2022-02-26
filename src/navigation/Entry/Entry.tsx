import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Main from '@/navigation/Main'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'
import { useRecoilValue } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import { Alert } from 'react-native'

const EntryStack = createStackNavigator()

function Entry() {
  const user = useRecoilValue(userStatus)
  Alert.alert(`${JSON.stringify(user)}`)
  console.log(user)

  return (
    <EntryStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Protected routes */}
      {!user && (
        <>
          <EntryStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
          <EntryStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        </>
      )}

      {user && <EntryStack.Screen name='Universe' component={Main} options={{ headerShown: false }} />}
    </EntryStack.Navigator>
  )
}

export default Entry
