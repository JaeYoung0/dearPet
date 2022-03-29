import React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import { BasicProps } from './type'

export default function Flower({ focused, stretch }: BasicProps) {
  const focusColor = focused ? '#fff' : '#666666'
  const width = stretch ? '100%' : '38'
  const height = stretch ? '100%' : '37'

  return (
    <Svg width={width} height={height} fill='none' viewBox='0 0 38 37'>
      <G stroke={focusColor} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'>
        <Path d='M5.688 27.819a37.133 37.133 0 0 0 14.263-10.37M16.15 21.916s3.472-.601 4.572 1.7a5.262 5.262 0 0 0 2.912 2.702 6.146 6.146 0 0 1-2.442.609 6.233 6.233 0 0 1-2.493-.418 6.305 6.305 0 0 1-3.554-3.48' />
        <Path d='M11.327 24.782s1.29-3.26-.687-4.842a4.79 4.79 0 0 1-2.074-3.385 6.126 6.126 0 0 0-1.189 2.249 6.205 6.205 0 0 0-.178 2.549 6.32 6.32 0 0 0 2.622 4.293M22.946 12.24l1.645-1.48c1.377-1.237 5.391-4.004 5.913-3.424.522.581-2.886 4.484-4.11 5.584L24.749 14.4M20.506 8.834l.403-.782c1.784-2.863 4.093-3.68 3.509-4.484-.585-.804-1.91.107-3.85 1.641' />
        <Path d='M21.814 9.056a15.824 15.824 0 0 1 4.383-2.819c1.742-.446 1.683-1.513.149-1.604a5.98 5.98 0 0 0-3.913 1.418' />
        <Path d='M19.354 15.4a12.445 12.445 0 0 1 1.88-4.91c1.416-1.272.33-2.326-1.183-1.316-1.273.82-1.762 1.958-2.102 3.44M26.792 9.132s2.486-2.235 2.16-3.061c-.328-.826-2.036-.34-4.175.742' />
        <Path d='M20.598 16.94a13.402 13.402 0 0 1-3.442-6.215 5.796 5.796 0 0 1 .195-4.152 5.699 5.699 0 0 1 2.924-2.92c2.81-1.337 2.26.207 1.43.744a6.003 6.003 0 0 0-2.302 2.507 6.08 6.08 0 0 0-.578 3.37M28.021 17.196l.821-.318c3.037-1.47 4.093-3.68 4.831-3.012.738.666-.309 1.887-2.04 3.653' />
        <Path d='M27.938 15.871a15.825 15.825 0 0 0 3.269-4.058c.63-1.685 1.683-1.512 1.61.023a5.98 5.98 0 0 1-1.825 3.74' />
        <Path d='M21.407 17.682a12.593 12.593 0 0 0 5.046-1.386c1.416-1.273 2.349-.081 1.184 1.316a5.538 5.538 0 0 1-1.624 1.47c-.634.378-.655.375-1.388.479M28.392 10.912s2.487-2.235 3.273-1.822c.786.413.122 2.06-1.182 4.072M19.627 15.782s1.165-1.397 2.16-2.29c1.645-1.48 4.208-3.013 4.695-2.471.487.542-1.31 2.927-2.956 4.406-.918.825-2.35 1.693-2.542 1.865M22.17 13.146s2.894-3.091 2.121-3.797c-.772-.705-2.156.679-3.972 2.66' />
        <Path d='M23.84 15.004s3.381-2.549 4.035-1.667c.654.882-.939 2.034-3.102 3.628' />
        <Path d='M19.972 16.242a13.402 13.402 0 0 0 5.778 4.044c1.312.593 2.79.68 4.15.247a5.698 5.698 0 0 0 3.214-2.596c1.627-2.653.034-2.27-.588-1.501a5.749 5.749 0 0 1-2.677 2.018c-1.073.393-1.79.59-2.91.32' />
      </G>
    </Svg>
  )
}
