import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Text } from 'react-native'

export type FontWeight = 300 | 400 | 500 | 600 | 700

/**
 *
 * @param weight : 300 ~ 700
 */
function customFont(weight: FontWeight) {
  switch (weight) {
    case 300:
      return 'SUIT-Light'
    case 400:
      return 'SUIT-Regular'
    case 500:
      return 'SUIT-Medium'
    case 600:
      return 'SUIT-SemiBold'
    case 700:
      return 'SUIT-Bold'
  }
}

interface Props {
  weight?: FontWeight
  style?: StyleProp<TextStyle>
}

function CustomText({ children, style, weight = 400 }: React.PropsWithChildren<Props>) {
  return <Text style={[style, { fontFamily: customFont(weight) }]}>{children}</Text>
}

export default CustomText
