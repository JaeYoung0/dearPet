import React, { ReactElement } from 'react'
import { Pressable } from 'react-native'
import { useTabContext } from '../TabContext'

export interface TabProps {
  children: React.ReactNode

  // by cloneElement
  value?: React.ReactText
  index?: number
  onChange?: (event: React.SyntheticEvent, newValue: any) => void
}

function Tab({ value, children, onChange, index }: TabProps): ReactElement {
  const { setTabValue, tabValue, setTabIndex } = useTabContext()

  const handleClick = (e: React.SyntheticEvent) => {
    // FIXME
    const isNullish = (target: any) => Boolean(target ?? true) // null,undefined만 true ... 근데 이걸로 걸러도 타입체크에선 안걸러짐

    if ((index !== 0 && !index) || !value) return

    setTabValue(value)
    setTabIndex(index)
    onChange?.(e, value)
  }

  return (
    <Pressable style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 45 }} onPress={handleClick}>
      {children}
    </Pressable>
  )
}

export default Tab
