import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BasicProps } from './type'

function Universe({ focused }: BasicProps) {
  const focusColor = focused ? '#fff' : '#666666'

  return (
    <Svg width='40' height='28' fill='none' viewBox='0 0 48 28'>
      <Path
        stroke={focusColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.764 14.389c-3.981 2.474-6.241 4.87-5.678 6.433.983 2.702 10.082 1.84 20.361-1.92C31.727 15.14 39.25 9.895 38.272 7.196c-.563-1.557-3.826-1.93-8.454-1.237'
      />
      <Path
        stroke={focusColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.764 14.389c-3.981 2.474-6.241 4.87-5.678 6.433.983 2.702 10.082 1.84 20.361-1.92C31.727 15.14 39.25 9.895 38.272 7.196c-.563-1.557-3.826-1.93-8.454-1.237'
      />
      <Path
        stroke={focusColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M13.928 6.19a9.725 9.725 0 0 0-3.013 3.723 9.789 9.789 0 0 0-.877 4.719M9.54 22.062a12.919 12.919 0 0 0 6.611 4.444c2.613.746 5.393.645 7.946-.29a12.934 12.934 0 0 0 6.272-4.916 13.061 13.061 0 0 0 2.225-7.68'
      />
      <Path
        stroke={focusColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M31.482 8.742a12.956 12.956 0 0 0-6.791-6.72 12.844 12.844 0 0 0-9.523-.208A12.946 12.946 0 0 0 8.092 8.23a13.071 13.071 0 0 0-.782 9.551M7.304 17.789c3.524-.453 7.928-1.562 12.565-3.26 4.638-1.697 8.706-3.69 11.694-5.62'
      />
    </Svg>
  )
}

export default Universe
