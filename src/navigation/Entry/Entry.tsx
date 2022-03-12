import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Main from '@/navigation/Main'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'
import { useRecoilValue } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import LoadingIndicator from '@/components/LoadingIndicator'
import useSawWelcome from './useSawWelcome'

const EntryStack = createStackNavigator()

function Entry() {
  const me = useRecoilValue(userStatus)

  const { sawWelcome } = useSawWelcome()
  if (sawWelcome === null) return <LoadingIndicator />

  return (
    <EntryStack.Navigator screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
      {/* Protected routes */}
      {!me && (
        <>
          {!sawWelcome && <EntryStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />}
          <EntryStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        </>
      )}
      {me && <EntryStack.Screen name='Main' component={Main} options={{ headerShown: false }} />}
    </EntryStack.Navigator>
  )
}

export default Entry
