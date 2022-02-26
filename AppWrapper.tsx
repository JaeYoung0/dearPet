import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function AppWrapper({ children }: { children: React.ReactElement }) {
  return (
    <React.Suspense fallback={null}>
      <RecoilRoot>
        <SafeAreaProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </SafeAreaProvider>
      </RecoilRoot>
    </React.Suspense>
  )
}

export default AppWrapper
