import React, { useRef } from 'react'
import { Animated } from 'react-native'

export default function useAnimation() {
  const animation = useRef(new Animated.Value(0)).current

  const goValueOf = ({ toValue = 1, duration = 300, useNativeDriver = true }) => {
    Animated.timing(animation, {
      toValue,
      duration,
      useNativeDriver,
    }).start()
  }

  return { animation, goValueOf }
}
