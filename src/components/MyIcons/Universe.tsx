import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { BasicProps } from './type'
function Universe({ focused }: BasicProps) {
  const focusColor = focused ? '#fff' : '#666666'

  return (
    <Svg width='48' height='32' viewBox='0 0 48 32' fill='none'>
      <Path
        stroke={focusColor}
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M29.196 13.37c2.586-.584 4.647-.386 5.052.636.464 1.185-1.792 3.181-5.046 4.463-2.829 1.115-5.45 1.167-5.855.154'
      />
      <Path
        stroke={focusColor}
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M27.521 11.632c5.654-1.807 10.522-1.696 11.351.414.815 2.067-3.126 5.546-8.803 7.79-4.938 1.944-9.515 2.064-10.216.266-.464-1.124.972-2.808 3.404-4.305'
      />
      <Path
        stroke={focusColor}
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M7.377 18.577c3.669-3.316 9.31-6.713 15.992-9.34 11.383-4.486 21.943-4.76 23.578-.616 1.418 3.607-5.461 9.693-15.37 13.595-8.62 3.395-16.608 3.605-17.843.467-.98-2.49 3.263-6.54 9.705-9.474'
      />
      <Path
        stroke={focusColor}
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M34.216 26.397c-15.047 5.925-28.992 6.29-31.15.811-.56-1.418-.145-3.126 1.057-4.962M37.12 2.366a.683.683 0 1 0 0-1.366.683.683 0 0 0 0 1.366ZM26.273 17.439a2.968 2.968 0 1 0 0-5.937 2.968 2.968 0 0 0 0 5.937ZM39.072 25.462a1.369 1.369 0 1 0 0-2.737 1.369 1.369 0 0 0 0 2.737Z'
      />
      <Path
        stroke={focusColor}
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='m4.745 17.829 2.414-1.655-.155 2.922 2.32 1.783-2.825.759-.98 2.758-1.594-2.455L1 21.863l1.842-2.274-.83-2.808 2.733 1.048Z'
      />
    </Svg>
  )
}

export default Universe
