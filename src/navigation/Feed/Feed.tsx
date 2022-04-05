import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PostCard from '@/screens/PostCard'
import HealingGuide from '@/screens/HealingGuide'
import FeedBase from '@/screens/FeedBase'

const FeedStack = createStackNavigator()

function Feed() {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
      <FeedStack.Screen name='FeedBase' component={FeedBase} options={{ headerShown: false }} />
      <FeedStack.Screen name='HealingGuide' component={HealingGuide} options={{ headerShown: false }} />
      {/* FIXME: PostCard post data 외부에서 주입하기 */}
      <FeedStack.Screen name='PostCard' component={PostCard} options={{ headerShown: false }} />
    </FeedStack.Navigator>
  )
}

export default Feed
