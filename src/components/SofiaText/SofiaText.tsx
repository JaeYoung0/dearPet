import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Text } from 'react-native'

export type FontWeight = 300 | 400 | 500 | 600 | 700

function sofiaFont(weight: FontWeight) {
  switch (weight) {
    case 300:
      return 'SofiaProLight'
    case 400:
      return 'SofiaProRegular'
    case 500:
      return 'SofiaProMedium'
    case 600:
      return 'SofiaProSemiBold'
    case 700:
      return 'SofiaProBold'
  }
}

interface Props {
  weight?: FontWeight
  style?: StyleProp<TextStyle>
}

function SofiaText({ children, style, weight = 400 }: React.PropsWithChildren<Props>) {
  return <Text style={[style, { fontFamily: sofiaFont(weight) }]}>{children}</Text>
}

export default SofiaText
