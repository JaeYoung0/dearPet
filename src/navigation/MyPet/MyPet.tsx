import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyFeed from '@/screens/MyFeed'
import PostCard from '@/screens/PostCard'

const MyPetStack = createStackNavigator()

function MyPet() {
  return (
    <MyPetStack.Navigator screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
      <MyPetStack.Screen name='MyFeed' component={MyFeed} options={{ headerShown: false }} />
      <MyPetStack.Screen name='PostCard' component={PostCard} options={{ headerShown: false }} />
    </MyPetStack.Navigator>
  )
}

export default MyPet
