import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BasicProps } from './type'

function Person({ focused }: BasicProps) {
  const focusColor = focused ? '#fff' : '#666666'
  return (
    <Svg width='30' height='28' viewBox='0 0 30 28' fill='none'>
      <Path
        stroke={focusColor}
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M14.8 13.2a6.1 6.1 0 1 0 0-12.2 6.1 6.1 0 0 0 0 12.2Z'
      />
      <Path
        stroke={focusColor}
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M28.6 27A13.8 13.8 0 1 0 1 27h27.6Z'
      />
    </Svg>
  )
}

export default Person
