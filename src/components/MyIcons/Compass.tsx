import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BasicProps } from './type'

function Compass({ focused }: BasicProps) {
  const focusColor = focused ? '#fff' : '#666666'

  return (
    <Svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
      <Path
        stroke={focusColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14 27c7.18 0 13-5.82 13-13S21.18 1 14 1 1 6.82 1 14s5.82 13 13 13Z'
      />
      <Path
        stroke={focusColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m6.947 21.051 5.078-9.025 9.026-5.079-5.078 9.026-9.026 5.078Z'
      />
      <Path fill={focusColor} d='M14 14.897a.896.896 0 1 0 0-1.792.896.896 0 0 0 0 1.792Z' />
    </Svg>
  )
}

export default Compass
