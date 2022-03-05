import React from 'react'
import { Svg, Path } from 'react-native-svg'

function Arrow() {
  return (
    <Svg width='21' height='16' viewBox='0 0 21 16' fill='none'>
      <Path
        fill='#fff'
        d='M8.53 2.156a1.302 1.302 0 0 0 0-1.786 1.177 1.177 0 0 0-1.714 0L.355 7.107a1.306 1.306 0 0 0-.263 1.377c.06.149.147.288.263.41l6.461 6.736c.474.493 1.24.493 1.714 0a1.301 1.301 0 0 0 0-1.786l-4.394-4.58h15.652C20.459 9.263 21 8.697 21 8c0-.698-.542-1.263-1.212-1.263H4.136l4.394-4.58Z'
      />
    </Svg>
  )
}

export default Arrow
