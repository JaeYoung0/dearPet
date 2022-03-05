import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SpaceBox from '@/screens/SpaceBox'
// import MyPet from '@/navigation/MyPet'

const UniverseStack = createStackNavigator()

function Universe() {
  return (
    <UniverseStack.Navigator screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
      <UniverseStack.Screen name='SpaceBox' component={SpaceBox} />
      {/* <UniverseStack.Screen name='MyPet' component={MyPet} /> */}
    </UniverseStack.Navigator>
  )
}

export default Universe
