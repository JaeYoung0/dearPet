import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Notice from '@/screens/Notice'
import MyInfo from '@/screens/MyInfo'
import Privacy from '@/screens/Privacy'
import Alarm from '@/screens/Alarm'
import Instruction from '@/screens/Instruction'
import Donation from '@/screens/Donation'
import Proposal from '@/screens/Proposal'

const SettingStack = createStackNavigator()

function MyInfoNavigation() {
  return (
    <SettingStack.Navigator screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
      <SettingStack.Screen name='MyInfo' component={MyInfo} options={{ headerShown: false }} />
      <SettingStack.Screen name='Notice' component={Notice} options={{ headerShown: false }} />
      <SettingStack.Screen name='Privacy' component={Privacy} options={{ headerShown: false }} />
      <SettingStack.Screen name='Alarm' component={Alarm} options={{ headerShown: false }} />
      <SettingStack.Screen name='Instruction' component={Instruction} options={{ headerShown: false }} />
      <SettingStack.Screen name='Donation' component={Donation} options={{ headerShown: false }} />
      <SettingStack.Screen name='Proposal' component={Proposal} options={{ headerShown: false }} />
    </SettingStack.Navigator>
  )
}

export default MyInfoNavigation
