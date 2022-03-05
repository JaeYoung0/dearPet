import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BasicProps } from './type'

function Hamburger({}: BasicProps) {
  return (
    <Svg width='16' height='12' viewBox='0 0 16 12' fill='none'>
      <Path
        fill='#fff'
        fill-rule='evenodd'
        d='M15.5 5.75a.75.75 0 0 0-.75-.75h-14a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75ZM15.5.75a.75.75 0 0 0-.75-.75h-14a.75.75 0 1 0 0 1.5h14a.75.75 0 0 0 .75-.75ZM15.5 10.75a.75.75 0 0 0-.75-.75h-14a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z'
        clip-rule='evenodd'
      />
    </Svg>
  )
}

export default Hamburger
