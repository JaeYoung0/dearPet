import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback, useEffect } from 'react'
import Main from '@/navigation/Main'
import Welcome from '@/screens/Welcome'
import Login from '@/screens/Login'
import SignUp from '@/screens/SignUp'
import AdditionalInfo from '@/screens/AdditionalInfo'
import { useRecoilValue } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import LoadingIndicator from '@/components/LoadingIndicator'
import useSawWelcome from './useSawWelcome'

const EntryStack = createStackNavigator()

function Entry() {
  const me = useRecoilValue(userStatus)

  const shouldUpdateProfile = !me?.photoURL || !me?.message || !me?.starDate

  const { sawWelcome } = useSawWelcome()
  console.log('@@me', me)

  if (sawWelcome === null) return <LoadingIndicator />

  return (
    <EntryStack.Navigator screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
      {/* Protected routes */}
      {!me && (
        <>
          {!sawWelcome && <EntryStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />}
          <EntryStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <EntryStack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        </>
      )}
      {me && !shouldUpdateProfile && (
        <EntryStack.Screen name='Main' component={Main} options={{ headerShown: false }} />
      )}
      {me && shouldUpdateProfile && (
        <EntryStack.Screen name='AdditionalInfo' component={AdditionalInfo} options={{ headerShown: false }} />
      )}
    </EntryStack.Navigator>
  )
}

export default Entry
