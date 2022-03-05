import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { BasicProps } from './type'

function Check({ color = '#897CFF' }: BasicProps) {
  return (
    <Svg width='23' height='15' viewBox='0 0 23 15' fill='none'>
      <Path
        fill={color}
        fill-rule='evenodd'
        d='M22.596.388a1.286 1.286 0 0 1 0 1.871L9.716 14.612a1.422 1.422 0 0 1-1.952 0L.404 7.554a1.286 1.286 0 0 1 0-1.872 1.422 1.422 0 0 1 1.952 0l6.384 6.123L20.644.388a1.422 1.422 0 0 1 1.952 0Z'
        clip-rule='evenodd'
      />
    </Svg>
  )
}

export default Check
