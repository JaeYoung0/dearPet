import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BasicProps } from './type'

type Props = {} & BasicProps

function SquarePlus({ color = '#fff', stretch }: Props) {
  const width = stretch ? '100%' : '21'
  const height = stretch ? '100%' : '21'
  return (
    <Svg width={width} height={height} viewBox='0 0 21 21' fill='none'>
      <Path
        fill={color}
        d='M4.315 10.5c0-.512.416-.928.93-.928H9.57v-4.32a.928.928 0 0 1 1.858 0v4.32h4.327a.928.928 0 1 1 0 1.856h-4.327v4.319a.928.928 0 0 1-1.858 0v-4.32H5.244a.928.928 0 0 1-.929-.927Z'
      />
      <Path
        fill={color}
        fillRule='evenodd'
        d='M4.699.32A52.734 52.734 0 0 1 16.3.32c2.263.253 4.09 2.032 4.356 4.304a50.513 50.513 0 0 1 0 11.752c-.266 2.272-2.093 4.051-4.356 4.304a52.731 52.731 0 0 1-11.602 0c-2.263-.253-4.09-2.032-4.356-4.304a50.504 50.504 0 0 1 0-11.752C.609 2.352 2.436.573 4.699.32Zm11.396 1.844a50.873 50.873 0 0 0-11.19 0c-1.418.158-2.552 1.275-2.716 2.675-.441 3.761-.441 7.56 0 11.322.164 1.4 1.298 2.517 2.716 2.675a50.87 50.87 0 0 0 11.19 0c1.418-.158 2.552-1.275 2.716-2.675.441-3.761.441-7.56 0-11.322-.164-1.4-1.298-2.517-2.716-2.675Z'
        clipRule='evenodd'
      />
    </Svg>
  )
}

export default SquarePlus
