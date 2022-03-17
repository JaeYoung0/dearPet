import useAnimation from '@/hooks/useAnimation'
import React from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function Overlay() {
  // const { animation } = useAnimation()

  return (
    <Animated.View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(0,0,0,.5)',
      }}
    />
  )
}
