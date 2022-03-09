import React from 'react'
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/core'
import { ScreenParams } from '@/screens/type'

function useCustomNavi() {
  const navigation = useNavigation<NavigationProp<ScreenParams>>()
  return navigation
}

export default useCustomNavi
