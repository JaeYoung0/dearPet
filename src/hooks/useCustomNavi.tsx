import React from 'react'
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/core'
import { ScreenParamList } from '@/screens/type'

function useCustomNavi() {
  const navigation = useNavigation<NavigationProp<ScreenParamList>>()
  return navigation
}

export default useCustomNavi
