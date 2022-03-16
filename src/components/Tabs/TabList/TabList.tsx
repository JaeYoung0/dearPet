import { useTabContext } from '../TabContext'
import React, { ReactElement, useEffect } from 'react'
import { TabProps } from '../Tab'
import { View, Animated, useWindowDimensions } from 'react-native'
import useAnimation from '@/hooks/useAnimation'

interface Props {
  children: ReactElement<TabProps>[]
  onChange?: (event: React.SyntheticEvent, newValue: any) => void
}

function TabList({ children: childrenProp, onChange }: Props): ReactElement {
  const { animation, goValueOf } = useAnimation()
  const { width: windowWidth, height } = useWindowDimensions()
  const { tabIndex } = useTabContext()

  const children = React.Children.map(childrenProp, (child, childIndex) => {
    if (!React.isValidElement(child)) return null

    return React.cloneElement<TabProps>(child, {
      value: child.props.value ?? childIndex,
      index: childIndex,
      onChange,
    })
  })

  const tabWidth = windowWidth / children.length

  useEffect(() => {
    goValueOf({ toValue: tabIndex / children.length })
  }, [tabIndex])

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Animated.View
        style={{
          borderBottomColor: '#fff',
          borderWidth: 1.5,
          position: 'absolute',
          left: 0,
          width: tabWidth,
          height: '100%',
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, windowWidth],
              }),
            },
          ],
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
        }}
      />
      {children}
    </View>
  )
}

export default TabList
