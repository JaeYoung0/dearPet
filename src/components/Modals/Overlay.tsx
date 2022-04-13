// import useAnimation from '@/hooks/useAnimation'
import { useModals } from '@/modules/modals/atoms'
import React from 'react'
import { Animated, Pressable, Alert } from 'react-native'

export default function Overlay() {
  // const { animation } = useAnimation()

  const { closeAll } = useModals()
  return (
    <Pressable
      style={{ flex: 1, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
      onPress={() => {
        closeAll()
      }}
    >
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
    </Pressable>
  )
}
