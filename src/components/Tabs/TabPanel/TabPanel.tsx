import { useTabContext } from '../TabContext'
import React, { ReactElement } from 'react'
import { View } from 'react-native'

interface Props {
  children: React.ReactNode
  value: React.ReactText
}

function TabPanel({ children, value }: Props): ReactElement {
  const { tabValue } = useTabContext()
  return <View style={{ display: tabValue !== value ? 'none' : 'flex', flex: 1 }}>{children}</View>
}

export default TabPanel
