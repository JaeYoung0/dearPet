import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BasicProps } from './type'

export default function Envelope({ focused, stretch }: BasicProps) {
  const focusColor = focused ? '#fff' : '#666666'
  const width = stretch ? '100%' : '29'
  const height = stretch ? '100%' : '23'

  return (
    <Svg width={width} height={height} fill='none' viewBox='0 0 29 23'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M.298 5.943c-.433 3.966-.414 8.54.188 12.491.333 2.186 2.141 3.862 4.373 4.053l2.332.2c4.864.417 9.754.417 14.618 0l2.332-.2c2.232-.191 4.04-1.867 4.373-4.053.602-3.95.621-8.524.188-12.49-.056-.46-.118-.92-.188-1.378C28.18 2.38 26.373.704 24.14.513l-2.332-.2a85.526 85.526 0 0 0-14.618 0l-2.332.2C2.627.704.819 2.38.486 4.566c-.07.458-.132.917-.188 1.377ZM7.392 2.59a83.178 83.178 0 0 1 14.216 0l2.332.2c1.165.1 2.109.975 2.283 2.116l.053.355-8.588 4.708a6.64 6.64 0 0 1-6.376 0L2.724 5.261l.053-.355A2.516 2.516 0 0 1 5.06 2.79l2.332-.2Zm19.167 5.13c.3 3.456.188 6.938-.336 10.374a2.516 2.516 0 0 1-2.283 2.116l-2.332.2c-4.73.406-9.486.406-14.216 0l-2.332-.2a2.516 2.516 0 0 1-2.283-2.116 43.761 43.761 0 0 1-.336-10.373l7.746 4.246a8.985 8.985 0 0 0 8.626 0l7.746-4.246Z'
        fill={focusColor}
      />
      <Path d='m2 19.5 8.5-8.5M18 11l8.5 8.5' stroke={focusColor} strokeWidth='2' />
    </Svg>
  )
}
