import React from 'react'
import Svg, { Path } from 'react-native-svg'

function Comet() {
  return (
    <Svg width='39' height='39' fill='none'>
      <Path
        d='M19.17 13.734c-4.158-.403-9.497.233-15.437 3.698M20.79 19.086c-4.035 1.75-8.705 4.855-11.49 10.297M19.087 16.68c-4.627 1.061-10.461 3.549-16.762 8.969M30.221 12.497l5.082-.592-2.667 4.42 2.078 4.68-4.97-1.147-3.8 3.484-.402-5.127-4.429-2.527 4.721-2.021 1.064-5.047 3.323 3.877Z'
        stroke='#7E71F3'
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default Comet
