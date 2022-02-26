import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import Main from '@/navigation/Main'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'
import { useRecoilValue } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const EntryStack = createStackNavigator()

function Entry() {
  const user = useRecoilValue(userStatus)
  Alert.alert(`${JSON.stringify(user)}`)
  console.log(user)

  const showWelcome = !AsyncStorage.getItem('@saw/welcome')
  useEffect(() => {
    Alert.alert(`showWelcome: ${showWelcome}`)
  }, [showWelcome])
  return (
    <EntryStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Protected routes */}
      {!user && (
        <>
          {showWelcome && <EntryStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />}
          <EntryStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        </>
      )}

      {user && <EntryStack.Screen name='Universe' component={Main} options={{ headerShown: false }} />}
    </EntryStack.Navigator>
  )
}

export default Entry
