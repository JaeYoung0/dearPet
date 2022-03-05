import React from 'react'
import { userStatus } from '@/modules/user/atoms'
import { useRecoilValue } from 'recoil'
import useCustomNavi from '@/hooks/useCustomNavi'
import { createStackNavigator } from '@react-navigation/stack'
import MyFeed from '@/screens/MyFeed'
import WriteLetter from '@/screens/WriteLetter'

const MyPetStack = createStackNavigator()

function MyPet() {
  const me = useRecoilValue(userStatus)

  return (
    <MyPetStack.Navigator screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
      <MyPetStack.Screen name='MyFeed' component={MyFeed} options={{ headerShown: false }} />
      <MyPetStack.Screen name='WriteLetter' component={WriteLetter} options={{ headerShown: false }} />
    </MyPetStack.Navigator>
  )
}

export default MyPet
