import React from 'react'
import { useRoute } from '@react-navigation/native'
import { RouteProps, ScreenNames } from '@/screens/type'

function useCustomRoute<T extends ScreenNames>() {
  const route = useRoute<RouteProps[T]>()
  return route
}

export default useCustomRoute
